import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as friebase from 'firebase/app';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,

} from '@angular/fire/firestore';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  private loggedIn = new BehaviorSubject<boolean>(this.getLoggedInsession());
  private loggedInSession: 'loggedInSession';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
  ) {
    // get  auth data, then get firestore users document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  getLoggedInsession() {
    const userLoggedIn = localStorage.getItem(this.loggedInSession);
    if (userLoggedIn === 'true') {
      return true;
    } else {
      return false;
    }
  }
  loginWithSocial(loginMethod) {
    let provider: friebase.auth.AuthProvider;

    if (loginMethod === 'google') {
      provider = new friebase.auth.GoogleAuthProvider();
    } else if (loginMethod === 'facebook') {
      provider = new friebase.auth.FacebookAuthProvider();
    }
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    this.afAuth.auth.signInWithPopup(provider).then(credential => {
      localStorage.setItem(this.loggedInSession, 'true');
      this.loggedIn.next(this.getLoggedInsession());
      this.updateUserData(credential.user);
      this.ngZone.run(() => {
        this.router.navigate(['/']);
        this.loggedIn.subscribe(data => console.log('Inside login' + data));
      });
    });
  }

  private updateUserData(user: User) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    userRef.ref.get().then(documentSnapshot => {
      if (!documentSnapshot.exists) {
        const data: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        };
        userRef.set(data, { merge: true });
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      localStorage.setItem(this.loggedInSession, 'false');
      this.loggedIn.next(this.getLoggedInsession());
      this.router.navigate(['/login']);
    });
  }
}

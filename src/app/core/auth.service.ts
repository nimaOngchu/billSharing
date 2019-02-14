import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as friebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
 }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
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

  loginWithSocial(loginMethod) {
    let provider: friebase.auth.AuthProvider;

      if (loginMethod === 'google') {
        provider = new friebase.auth.GoogleAuthProvider;
      } else if (loginMethod === 'facebook') {
        provider = new friebase.auth.FacebookAuthProvider;
      }
      return this.oAuthLogin(provider);

  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }
}

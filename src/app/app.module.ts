import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
import { enableProdMode } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';

const firebaseConfig = {
  apiKey: "AIzaSyDadcOeh2JHaAn8fb7UxIKDMXCcdNAgnzk",
  authDomain: "ng5-tutorial-f8bc2.firebaseapp.com",
  databaseURL: "https://ng5-tutorial-f8bc2.firebaseio.com",
  projectId: "ng5-tutorial-f8bc2",
  storageBucket: "ng5-tutorial-f8bc2.appspot.com",
  messagingSenderId: "951972847486"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }

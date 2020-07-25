import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SalutationPipe } from './salutation.pipe';
import { CalculationsComponent } from './calculations/calculations.component';
import { MenuComponent } from './menu/menu.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
let firebaseConfig = {
  apiKey: "AIzaSyDGdI9iNGxplV4ZqGNjE24PxMed0vmiK04",
  authDomain: "scribe-d4f54.firebaseapp.com",
  databaseURL: "https://scribe-d4f54.firebaseio.com",
  projectId: "scribe-d4f54",
  storageBucket: "scribe-d4f54.appspot.com",
  messagingSenderId: "23940338546",
  appId: "1:23940338546:web:e790cbd8ffb5c7e31643eb",
  measurementId: "G-ZHX520E0N1"
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    SalutationPipe,
    CalculationsComponent,
    MenuComponent,
    FeedsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

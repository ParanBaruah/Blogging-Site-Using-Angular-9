import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  user: any ={};
  posts: any[] = [];

  constructor() {
    //firebase.firestore().settings({
      //timestampsInSnapshots: true
    //});
    this.user = firebase.auth().currentUser;
    this.getPosts();
   }

  ngOnInit(): void {
  }

  getPosts(){
    //get the list of posts from cloud firestore
    firebase.firestore().collection("posts").orderBy("created", "desc").get().then((querySnapshot)=>{
      console.log(querySnapshot.docs);
      this.posts = querySnapshot.docs;
    }).catch((error)=>{
      console.log(error);
    })

  }
  onPostCreated(){
    // Refresh the list of posts
    this.posts = [];
    this.getPosts();


  }
  onDelete(){
    // Refresh the list of posts
    this.posts = [];
    this.getPosts();


  }

}

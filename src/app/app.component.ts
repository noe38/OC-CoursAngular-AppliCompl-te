import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyD3aJurh9bCCxFwfvp_BKCwJts-OrEprpg",
      authDomain: "bookshelves-dcfa7.firebaseapp.com",
      databaseURL: "https://bookshelves-dcfa7.firebaseio.com",
      projectId: "bookshelves-dcfa7",
      storageBucket: "bookshelves-dcfa7.appspot.com",
      messagingSenderId: "18646196046",
      appId: "1:18646196046:web:a810e535f16fbef1a3481f",
      measurementId: "G-DPV6K2K1EQ"
    };
  }
}

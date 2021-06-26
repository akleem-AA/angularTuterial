import { Component } from '@angular/core';
import{UserDataService} from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LeanAngular';
  name='Akleem ';
  // lastName='khan';
  // fistFun(){
  //   return 'more lean then more earn';
  // }
  // secondFun(){
  //   return this.lastName;
  // }
  data=[];
  constructor(private user:UserDataService){
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }
  
}

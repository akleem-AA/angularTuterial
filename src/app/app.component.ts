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
  show='yes';
  color='red'
  data=['akleem','tushar','omkar','shivani']
  data1=[{
    name:'akleem',
    age:22,
    email:"akleem789@gami.com"
  },
{
  name:'omkar',
  age:34,
  email:"akleem789@gami.com"
},
{
name:'tushar',
age:25,
email:"akleem789@gami.com"
},
{
  name:'shivani',
  age:19,
  email:"akleem789@gami.com"
}]
  // lastName='khan';
  // fistFun(){
  //   return 'more lean then more earn';
  // }
  // secondFun(){
  //   return this.lastName;
  // }
  // data=[];
  // constructor(private user:UserDataService){
  //   this.user.getData().subscribe(data=>{
  //     console.warn(data)
  //     this.data=data
  //   })
  // }
  
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('username', {read:ElementRef})
  username:ElementRef<HTMLInputElement>

  @ViewChild('card') card:CardComponent
  // title = 'Angular todoapp';
  // today = new Date()
  // price =1000

  // ngAfterViewInit():void{
  //   console.log(this.username,this.card);
  //   this.username.nativeElement.focus()
  //   this.card.sayHello()
  // }

  // getName(name:string){
  //   console.log(name);
  // }
}

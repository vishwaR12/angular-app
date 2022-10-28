import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';
  toshow='0'
  currentvalue=''
  writetoinput(val:string)
  {
    if(this.currentvalue=='0')
    {
      this.currentvalue=val
    }
    if(this.currentvalue!='0')
    {
    this.currentvalue+=val
    }
    this.toshow=this.currentvalue
  }
  evaluate()
  {
    this.toshow=eval(this.currentvalue);
    this.currentvalue=this.toshow;
  }
  clearit()
  {
    this.currentvalue='';
    this.toshow='0';
  }
  sliceit()
  {
    this.currentvalue=this.currentvalue.slice(0,-1);
    this.toshow=this.currentvalue;
    if(this.toshow=='')
    {
      this.toshow='0';
    }
    
  }
  calculatex(solve:any){
     this.toshow=eval(solve);
  }
}

import { Component} from '@angular/core';
import { FetchAccDetailsService } from './fetch-acc-details.service'
import { AccountDetails } from './accountDetails'
import {Bootstrap} from 'bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fetch:FetchAccDetailsService){}

  accData:AccountDetails;
  error:String;

  ngOnInit(){
    this.display();
    
  }

  display(){
    this.fetch.getAccDetails().subscribe(
      accDetails=>this.accData=accDetails,
      error=>console.log(error)
      )
    }
}

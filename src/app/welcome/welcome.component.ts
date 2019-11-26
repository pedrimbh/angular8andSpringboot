import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {}
  name = '';
  mensageService: string;
  mensageServiceerror: string;
  ngOnInit() {
    this.name = this.route.snapshot.params.name;
    this.welcomeDataService
      .execulteWelcomeData(this.name)
      .subscribe(response => this.handlesucces(response), error => this.handleError(error));
  }
  getMensage() {
    console.log(this.welcomeDataService.execulteWelcomeData(this.name));
    this.welcomeDataService
      .execulteWelcomeData(this.name)
      .subscribe(response => this.handlesucces(response), error => this.handleError(error));
  }

  handleError(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.mensageServiceerror = error.error.message;
  }
  handlesucces(response) {
    this.mensageService = response.name;
    console.log(response);
    console.log(response.name);

    // console.log('test');
  }
}

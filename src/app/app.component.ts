import { Component } from '@angular/core';
import { APODService } from "src/app/services/apod.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'individual-project';

  constructor(private apodService :  APODService){

  }
  async getPicture(){
    let variable = await this.apodService.getAPOD();
    console.log(variable);
  }
}

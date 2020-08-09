import { Component, OnInit } from '@angular/core';
import { APODService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(private apodService :  APODService) { }

  ngOnInit(): void {
  }
  async getPicture(){
    let variable = await this.apodService.getAPOD();
    console.log(variable);
  }
}

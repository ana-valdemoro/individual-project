import { Component, OnInit } from '@angular/core';
import { APODService } from 'src/app/services/apod.service';

type astronomicData = {
  date: string;
  author ?: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  dayPicture: astronomicData = {
    date: "",
    explanation : "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title : "",
    url:""
  };
  constructor(private apodService :  APODService) { }

  ngOnInit(): void {
    this.getPicture();
  }
  async getPicture(){
    this.dayPicture = await this.apodService.getAPOD();
    console.log(this.dayPicture);
  }
}

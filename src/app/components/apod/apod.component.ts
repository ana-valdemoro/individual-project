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
  videoId ?: string;
}
@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  metaData: astronomicData = {
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
    this.metaData = await this.apodService.getAPOD();
    console.log(this.metaData);
    if (this.metaData.media_type == "video"){
      this.getVideoId();
    }
  }

  getVideoId(){
   let start = this.metaData.url.lastIndexOf("/");
   let end = this.metaData.url.lastIndexOf("?");
   this.metaData.videoId = this.metaData.url.substring(start+1, end);
   console.log(this.metaData.videoId);


  }
}

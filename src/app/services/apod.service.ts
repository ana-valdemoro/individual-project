import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class APODService {
  url: string  = "https://api.nasa.gov/planetary/apod?api_key=9a1RjEmOKTlpQlrZLVgdqiFh99JzEdM3298VzElA"; 
  constructor() { }

  getAPOD(): Promise<any>{
    return axios.get(this.url)
        .then(response => response.data)
        
        .catch(err => console.log(`Hay un error ${err}`))
  }
}

import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-api-get-data',
  templateUrl: './api-get-data.component.html',
  styleUrls: ['./api-get-data.component.scss']
})
export class ApiGetDataComponent {
  
  getImg :any;
  constructor(private loader:LoadingService) { }
  
  callApi(event:any) {
    this.loader.show();
    // setTimeout(()=>{
      this.loader.getData().subscribe({
        next: (data)=>{
          this.getImg = data;
          console.log(data);
        },
        error:(err)=>{console.log('API'+err)},
        complete:()=>{
          console.log('SuccessFully')
          this.loader.hide();
        }
      });
    // },5000);
    }
}

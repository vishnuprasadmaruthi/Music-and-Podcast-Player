import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-create-play-list',
  templateUrl: './create-play-list.component.html',
  styleUrls: ['./create-play-list.component.css']
})
export class CreatePlayListComponent implements OnInit {
  searchStr:string;
  searchres:string;
   constructor(private _spotifyService:ServiceService) { }
 
   ngOnInit() {
   }
 
   createplaylist(value: string){
     this.searchStr=value;
     this._spotifyService.getToken()
     .subscribe(res => {
       this._spotifyService.createplaylist(this.searchStr,res.access_token)
       this.searchres = res.items;
   })
 
 
   }
 
 }
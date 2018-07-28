import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Params } from "@angular/router";
import { Artist } from "../Artist";

import { Album } from "../Album";
import { Playlist } from '../Playlist'

@Component({
  selector: 'app-playlisttracks',
  templateUrl: './playlisttracks.component.html',
  styleUrls: ['./playlisttracks.component.css']
})
export class PlaylisttracksComponent implements OnInit {
  id: any;
  name: string;
  genre: any;
  artist: Artist[];
  albums: Album[];
  playlist: Playlist;
  searchRes: String[];
  searchRess: String[];
  trackid: String[];
  addRes:String[];
  searchStr:string;
  deleteRes: String;
  addStr:any;




  constructor(private _spotifyService: ServiceService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getToken()
          .subscribe(data => {

            this._spotifyService.getptracks(id, data.access_token)
              .subscribe(res => {

                this.searchRes = res.items;
                this.id = id;
              })

          })
      })

    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getToken()
          .subscribe(data => {
            this._spotifyService.getExactPlayList(id, data.access_token)
              .subscribe(res => {
                this.playlist = res;

              })

          })
      })

  }
//------------------------------
  removeTrack(track) {
    this.trackid = track;
    this._spotifyService.getToken()
      .subscribe(data => {

        this._spotifyService.deletetracks(this.id, track, data.access_token)
          .subscribe(res => {

            this.deleteRes = res.items;

          })

      })

  }

  delid(tracki) {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getToken()
          .subscribe(res => {
            this._spotifyService.deletetracks(id, tracki, res.access_token)
              .subscribe(res => {
                this.searchRess = res.tracks.items;
              })
          })
      })
  }


  searchMusics(){
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.searchMusic(this.addStr,'track',res.access_token)
      .subscribe(res =>{
        this.addRes = res.tracks.items;
    })
  })

}

addTrack(track){
  this._route.params
  .map(params => params['id'])
  .subscribe((id) => {
    this._spotifyService.getToken()
      .subscribe(res => {
        this._spotifyService.deletetracks(id, track, res.access_token)
          .subscribe(res => {
            this.searchRess = res.tracks.items;
          })
      })
  })
}

}

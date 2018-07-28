import { Injectable } from '@angular/core';
import { Http,Headers,Response} from '@angular/http';
import {RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
  private searchUrl:string;
  private client_id ='42e8a92e15ce42dc97c373446f5b05fb';
  private client_secret = '9980514d12da43349b6a05ac409cf6ec';
  private ArtistUrl: string;
  private AlbumsUrl: string;
  private AlbumUrl: string;
  private createUrl: string;
  private deleteUrl : string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  
  constructor(private _http:Http) { }

  userId="3esso3js6n38t8y8ht26kjal9";    //3esso3js6n38t8y8ht26kjal9    212uzew7ttksinacnuwhttupy

  getToken(){
    // let params : URLSearchParams = new URLSearchParams();
    // params.set('grant_type' , 'client_credentials');
    // let body = params.toString();
     var params = ('grant_type=client_credentials');

     var headers = new Headers();
     headers.append( 'Authorization', 'Basic ' + this.encoded);
    
     headers.append('Content-Type' , 'application/x-www-form-urlencoded');

     return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
     .map(res=> res.json());
  }

  getusername(token:string){

      console.log(token);
      this.searchUrl='https://api.spotify.com/v1/me';
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  }

  getplaylist(token:string){ 
     
    console.log(this.encoded);
    this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists?limit=10&offset=0'; 
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
    
  }

  getExactPlayList(id:any,token:string){ 
    
   console.log(this.encoded);
   this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+id; 
   let headers = new Headers();
   headers.append('Authorization' , 'Bearer ' + token);

   return this._http.get(this.searchUrl , {headers : headers})
   .map((res: Response) => res.json())
   
 }


searchMusic(str:String, type:any ,token:string){   //type='artist'/track/album
  
     
    console.log(this.encoded+"console logger"+type); 
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
}



getArtist(id:string ,token:string){
  
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+ id;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.ArtistUrl , {headers : headers})
    .map((res: Response) => res.json())

    
}


getptracks(id:string ,token:string){
      console.log(id+"-------------------");
      this.searchUrl = 'https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+id+'/tracks';
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
  
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  
      
  }


getAlbums(artistId:string ,token:string){
  
    this.AlbumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums/?query=&limit=50';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.AlbumsUrl , {headers : headers})
    .map((res: Response) => res.json())

    
}

getAlbum(id:string ,token:string){
  
    this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+id;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.AlbumUrl , {headers : headers})
     .map((res: Response) => res.json())
 
}

/*deletePLtrack(pid:any, token:string){
    this.deleteUrl = 'https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+pid+'/tracks';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.AlbumUrl , {headers : headers})
     .map((res: Response) => res.json())
}*/

deletetracks(pid:string,trackid:string,token:string){
    var params = ('grant_type=client_credentials');
    this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+pid+'/tracks';
   /* let body = JSON.stringify({
        "uris":["spotify:track:"+trackid]
        
    });*/
    console.log(trackid);
    let body = JSON.stringify({
        "uris":["spotify:track:"+trackid]
    });
    let requestOptions=new RequestOptions();
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);
    headers.append('Content-Type' , 'application/json');

    return this._http.delete(this.searchUrl,new RequestOptions({
        headers: headers,
        body:body }))
     .map((res: Response) => res.json())
}

addtracks(pid:string,trackid:string,token:string){
    var params = ('grant_type=client_credentials');
    this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+pid+'/tracks?position=0&uris=spotify:track:'+trackid;
   /* let body = JSON.stringify({
        "uris":["spotify:track:"+trackid]
        
    });*/
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);
    headers.append('Content-Type' , 'application/json');

    return this._http.post(this.searchUrl ,params, {headers : headers})
     .map((res: Response) => res.json())
}

createPlayList(token:string){
    this.createUrl = 'https://api.spotify.com/v1/users/'+this.userId+'/playlists';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.post(this.createUrl , {headers : headers})
     .map((res: Response) => res.json())
}

createplaylist(name:string,token:string){
    let body = JSON.stringify({
        'name': name,
        'public': false
    });
    console.log(this.encoded);  
    this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists';
    let headers = new Headers();
   var params = ('grant_type=client_credentials');
    headers.append('Authorization' , 'Bearer ' + token);
    headers.append('Content-Type' , 'application/x-www-form-urlencoded');
    
    return this._http.post(this.searchUrl ,	body, {headers : headers})
    .map((res: Response) => res.json())
   

}



}
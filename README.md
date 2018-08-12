# Spotify 
Spotify is a music application that gives you access to millions of songs. Search tracks, albums, artists and create your own playlists.

![home](https://user-images.githubusercontent.com/32049867/43998386-ab401172-9dc2-11e8-8f9b-213da2f052e6.JPG)

# Usage
This app is for non-commercial use only.

# Technologies used
- Angular 4
- NodeJS
- OAuth
- Bootstrap
- REST APIs

# Installations

1. Developers Spotify :
  i. Create an account with Spotify developers
 ii. Get Client key and Secret Key

2. Install Visual Studio Code

3. Clone the repository to your local system.

4. Open FinalProjectwbdesign folder in visual studio code

5. Use Client Key and Secret Key to get token.

6. Open Muzik folder in Visual Studio Code

7. Install node modules : npm install -g @angular/cli

8. Intall bootstrap : npm install bootstrap --save 

9. run the app: ng serve 

10. run client: node app.js

11. go to localhost:8888/

12. Explore your music 

# Getting a token 
 /*
 * This is the http post method used to obtain the token
 * Spotify authorizes the client id and client secret key and gives you a token to access the Spotify Web Api
 */
 getToken(){
     var params = ('grant_type=client_credentials');

     var headers = new Headers();
     headers.append( 'Authorization', 'Basic ' + this.encoded);
    
     headers.append('Content-Type' , 'application/x-www-form-urlencoded');

     return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
     .map(res=> res.json());
  }

# Search music by Artist, Track, Album
/*
* This function lets you search  Artist, Track, Album on click of Respective tabs
*/

searchMusic(str:String, type:any ,token:string){   //type='artist'/track/album
  
     
    console.log(this.encoded+"console logger"+type); 
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
}

# Tracks
![tracks](https://user-images.githubusercontent.com/32049867/43998403-0c6e102a-9dc3-11e8-9df0-ea8e0e6dbf62.JPG)

# Artists
![artist](https://user-images.githubusercontent.com/32049867/43998409-1e0b4ed8-9dc3-11e8-8b0c-878870dcd3b3.JPG)

# Albums
![albums](https://user-images.githubusercontent.com/32049867/43998413-3517ad60-9dc3-11e8-8110-2b4ea14506a5.JPG)


 # Get the playlist
 /*
 *  This function gets all the user's Play lists
 */
 
   getplaylist(token:string){ 
     
    console.log(this.encoded);
    this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists?limit=10&offset=0'; 
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
    
  }
  
# Playlist
  ![playlist](https://user-images.githubusercontent.com/32049867/43998414-3fa1bb7c-9dc3-11e8-836b-f0ca3e23be25.JPG)
  
# Get user's exact Playlist 
/*
* Used to get details of user's selected Playlist
*/

getExactPlayList(id:any,token:string){ 
    
   console.log(this.encoded);
   this.searchUrl='https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+id; 
   let headers = new Headers();
   headers.append('Authorization' , 'Bearer ' + token);

   return this._http.get(this.searchUrl , {headers : headers})
   .map((res: Response) => res.json())
 }
 
 # Playlist tracks
 ![playlist-tracks](https://user-images.githubusercontent.com/32049867/43998416-49d9d106-9dc3-11e8-99c4-bd4d982fd484.JPG)
 
 # Get the tracks of the selected play list

getptracks(id:string ,token:string){
      console.log(id+"-------------------");
      this.searchUrl = 'https://api.spotify.com/v1/users/'+this.userId+'/playlists/'+id+'/tracks';
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
  
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  
  }
  
  # Refer 
  # https://developer.spotify.com/web-api/ 
  # https://developer.spotify.com/web-api/endpoint-reference/
  
  # Code of conduct
  This project adheres to the Open Code of Conduct. By contributing, you are expected to honor this code.
  
  

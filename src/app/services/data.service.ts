import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { games } from '../models/games';
import { game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://free-to-play-games-database.p.rapidapi.com/api'

  method = 'GET'
  headers = {
    'X-RapidAPI-Key': 'f883b614b6mshd715abf7ea784e5p1cc3cdjsn99648339c19c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }


  constructor(private _http: HttpClient) { }

  getAllGames(): Observable<games[]> {
    return this._http.get<games[]>(this.url + '/games', {
      headers: this.headers
    });
  }

  getOneGame(id:string): Observable<game> {
    return this._http.get<game>(this.url + `/game` , {
      headers: this.headers,
      params: {id:id}
    });
  }

  getGamesPerCategory(category:string, platform: string): Observable<games[]> {
    return this._http.get<games[]>(this.url + `/games` , {
      headers: this.headers,
      params: {
        platform: platform,
        category: category
      }
    });
  }


}

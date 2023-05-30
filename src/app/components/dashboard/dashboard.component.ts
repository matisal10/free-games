import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { games } from 'src/app/models/games';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrayGames: games[] = []
  ini = 0;
  limit = 20
  currentPage = 0

  constructor( private _service: DataService,private route: Router,
    private rutaActiva: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames() {
    this._service
      .getAllGames()
      .subscribe({
        next: (data: games[]) => {
          this.arrayGames = data;
        },
        error: (err) => {
          throw new Error(err)
        },
      });
  }

  goDetails(id:number){
    this.route.navigate([`/details/${id}`])
  }

  handlePage(e:any){
    console.log(e.pageIndex)
    if(e.pageIndex > this.currentPage ){
      this.ini = this.ini + 20
      this.limit = this.limit + 20
      this.currentPage = e.pageIndex
    }
    else {
      this.ini = this.ini - 20
      this.limit = this.limit - 20
      this.currentPage = e.pageIndex
    }
  }

  platform(platform: string){
    if(platform === "PC (Windows)" || platform === "Web Browser"){
      return 'desktop_windows'
    }
    else return 'nada'
  }

}

import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { games } from 'src/app/models/games';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-games',
  templateUrl: './category-games.component.html',
  styleUrls: ['./category-games.component.css']
})
export class CategoryGamesComponent implements OnInit {

  arrayGames: games[] = []
  ini = 0;
  limit = 20
  currentPage = 0
  flagLoader: boolean = true

  constructor(private _service: DataService, private rutaActiva: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      const category = params['category'];
      const platform = params['platform'];
      if (category && platform) {
        this.getGames(category, platform)
      }
    });

  }

  getGames(category: string, platform: string) {
    this._service
      .getGamesPerCategory(category, platform)
      .subscribe({
        next: (data: games[]) => {
          this.arrayGames = data;
        },
        error: (err) => {
          throw (err)
        },
      });

  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    if ((document.body.clientHeight + window.scrollY + 210) >= document.body.scrollHeight) {
      setTimeout(() => {
        if (this.limit >= this.arrayGames.length) {
          this.flagLoader = false
        }
        else {
          this.limit = this.limit + 20
        }

      }, 1000);
    }
  }

  goDetails(id: number) {
    this.route.navigate([`/details/${id}`])
  }

  // handlePage(e: any) {
  //   console.log(e.pageIndex)
  //   if (e.pageIndex > this.currentPage) {
  //     this.ini = this.ini + 20
  //     this.limit = this.limit + 20
  //     this.currentPage = e.pageIndex
  //   }
  //   else {
  //     this.ini = this.ini - 20
  //     this.limit = this.limit - 20
  //     this.currentPage = e.pageIndex
  //   }
  // }

}

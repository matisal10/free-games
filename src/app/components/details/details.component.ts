import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { game } from 'src/app/models/game';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  game: any

  constructor(private _service: DataService, private route: Router,
    private rutaActiva: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getGame()
  }

  getGame() {
    const id = this.rutaActiva.snapshot.paramMap.get('id')
    console.log(id)
    if (id) {
      this._service
        .getOneGame(id)
        .subscribe({
          next: (data: game) => {
            this.game = data;
            console.log(this.game)
          },
          error: (err) => {
            console.log(err)
          },
        });
    }

  }

}

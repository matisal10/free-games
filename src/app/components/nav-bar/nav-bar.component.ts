import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  category: string[] = [
    'Shooter',
    'MMORPG',
    'MOBA',
    'Anime',
    'Battle Royale',
    'Strategy',
    'Fantasy',
    'Sci-Fi',
    'Card Games',
    'Racing',
    'Fighting',
    'Social',
    'Sports'
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  changeCategory(category: string){
    this.route.navigate([`/category/${category}`])
  }

}

import { Component } from '@angular/core';

import { NgOptimizedImage, NgStyle } from '@angular/common'

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

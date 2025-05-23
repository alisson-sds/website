import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgOptimizedImage, NgClass, NgStyle } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgOptimizedImage, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}

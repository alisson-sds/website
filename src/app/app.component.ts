import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgOptimizedImage, NgStyle, NgClass } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgOptimizedImage, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}

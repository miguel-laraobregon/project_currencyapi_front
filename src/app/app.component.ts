import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CurrencyComponent } from "./currencies/components/currency.component";
import { FormsModule } from '@angular/forms'; // Aquí importas FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CurrencyComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo angular-app';
  enabled: boolean = false;

  courses: string[] = ['curso 1', 'curso2', 'curso 3'];

  setEnabled(): void{
    this.enabled = !this.enabled;
    console.log("hicimos click")
  }
}

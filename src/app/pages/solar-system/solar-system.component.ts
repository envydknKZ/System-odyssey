import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Добавь это

@Component({
  selector: 'app-solar-system',  // Этот селектор будет использоваться в HTML
  standalone: true,
  templateUrl: './solar-system.component.html',  // Путь к вашему HTML шаблону
    imports: [CommonModule], // <--- Добавь это!
  styleUrls: ['./solar-system.component.css']  // Путь к CSS файлу
})
export class SolarSystemComponent {
  selectedPlanet: any = null;

  planets = [
    { name: 'mercury', label: 'Mercury', info: 'Rocky, metal-rich planet' },
    { name: 'venus', label: 'Venus', info: 'Thick CO₂ atmosphere' },
    { name: 'earth', label: 'Earth', info: 'Water, rock, and oxygen atmosphere' },
    { name: 'mars', label: 'Mars', info: 'Iron oxide surface' },
    { name: 'jupiter', label: 'Jupiter', info: 'Hydrogen and helium gas giant' },
    { name: 'saturn', label: 'Saturn', info: 'Gas giant with rings' },
    { name: 'uranus', label: 'Uranus', info: 'Icy atmosphere with methane' },
    { name: 'neptune', label: 'Neptune', info: 'Cold gas and icy composition' },
    { name: 'sun', label: 'Sun', info: 'The center of our solar system' }
  ];

  onPlanetClick(planetName: string): void {
    const planet = this.planets.find(p => p.name === planetName);
    if (planet) {
      this.selectedPlanet = planet;
    }
  }

  closeInfoWindow(): void {
    this.selectedPlanet = null;
  }
}

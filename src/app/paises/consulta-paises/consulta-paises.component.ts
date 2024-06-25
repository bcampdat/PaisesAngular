import { Component, OnInit } from '@angular/core';
import { Currencies, ICountries } from './countries.interface';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-consulta-paises',
  templateUrl: './consulta-paises.component.html',
  styleUrls: ['./consulta-paises.component.css'],
})
export class ConsultaPaisesComponent implements OnInit {
  continenteSeleccionado: string = '';

  monedaSeleccionada: string = '';

  countries: ICountries[] = [];

  monedas: string[] = [];

  mostrarError = false;

  constructor(private CountriesService: CountriesService) {}

  ngOnInit() {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.CountriesService.getAllCurrencies().subscribe({
      next: (data: ICountries[]) => {
        const uniqueCurrencies = new Set<string>();
        data.forEach(country => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach(currency => uniqueCurrencies.add(currency));
          }
        });
        this.monedas = Array.from(uniqueCurrencies).sort();
      },
      error: (err) => {
        console.log('no se ha podido obtener los datos', err);
      },
    });
  }
  getCountries() {
    this.CountriesService.getCountries(this.continenteSeleccionado).subscribe({
      // next =then
      next: (data: ICountries[]) => {
        console.log(data);
        this.countries = data;
        this.mostrarError = false;
      },
      error: (err) => {
        (this.mostrarError = true),
          console.log('no se ha podido obtener los datos', err);
      },
    });
  }
  getMoneda() {
    this.CountriesService.getMoneda(this.monedaSeleccionada).subscribe({
      // next =then
      next: (data: ICountries[]) => {
        console.log(data);
        this.countries = data;
        this.mostrarError = false;
      },
      error: (err) => {
        (this.mostrarError = true),
          console.log('no se ha podido obtener los datos', err);
      },
    });
  }

}

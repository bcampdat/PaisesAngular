import { Component, OnInit } from '@angular/core';
import { ICountries } from './countries.interface';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-consulta-paises',
  templateUrl: './consulta-paises.component.html',
  styleUrls: ['./consulta-paises.component.css'],
})


export class ConsultaPaisesComponent implements OnInit {
  continenteSeleccionado: string = '';

  monedaSeleccionada: string = '';

  simboloMonedaSeleccionada: string = '';

  countries: ICountries[] = [];

  monedas: { code: string, symbol: string }[] = [];

  mostrarError = false;

  

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.countriesService.getAllCurrencies().subscribe({
      next: (data: ICountries[]) => {
        const uniqueCurrencies = new Map<string, string>();
        data.forEach(country => {
          if (country.currencies) {
            Object.entries(country.currencies).forEach(([code, currency]) => {
              uniqueCurrencies.set(code, (currency as any).symbol);
            });
          }
        });
        this.monedas = Array.from(uniqueCurrencies.entries()).map(([code, symbol]) => ({ code, symbol }));
      },
      error: (err) => {
        console.log('no se ha podido obtener los datos', err);
      },
    });
  }

  getCountries() {
    this.countriesService.getCountries(this.continenteSeleccionado).subscribe({
      next: (data: ICountries[]) => {
        console.log(data);
        this.countries = data;
        this.mostrarError = false;
      },
      error: (err) => {
        this.mostrarError = true;
        console.log('no se ha podido obtener los datos', err);
      },
    });
  }

  getMoneda() {
    this.countriesService.getMoneda(this.monedaSeleccionada).subscribe({
      next: (data: ICountries[]) => {
        console.log(data);
        this.countries = data;
        this.mostrarError = false;
        this.actualizarSimboloMoneda();
      },
      error: (err) => {
        this.mostrarError = true;
        console.log('no se ha podido obtener los datos', err);
      },
    });
  }

  actualizarSimboloMoneda() {
    const moneda = this.monedas.find(m => m.code === this.monedaSeleccionada);
    this.simboloMonedaSeleccionada = moneda ? moneda.symbol : '';
  }
}

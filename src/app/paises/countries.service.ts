import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountries } from './consulta-paises/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getCountries(continente: string): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(`https://restcountries.com/v3.1/region/${continente}`);
  }
  
  getMoneda(moneda: string): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(`https://restcountries.com/v3.1/currency/${moneda}`);
  }

  getAllCurrencies(): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(`https://restcountries.com/v3.1/all`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWord {
  constructor(public name: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}
  execulteWelcomeData(name) {
    return this.http.get<HelloWord>(`http://localhost:8080/hello-word/${name}`);
    // console.log('data false test');
  }
  // variablepath
  // execulteWelcomeData(name) {
  //   return this.http.get<HelloWord>(`http://localhost:8080/hello-word/${name}`);
  //   // console.log('data false test');
  // }
}

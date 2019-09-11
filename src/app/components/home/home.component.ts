import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { delay, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textChange$ = new Subject<string>();
  constructor (private http: HttpClient) { }

  ngOnInit() {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods':
    // };

    // const requestOptions = {
    //   headers: new HttpHeaders().set('Allow', 'GET')
    // };


    // this.textChange$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   mergeMap(val => {
    //     console.log(val)
    //     // return this.http.get('https://www.google.com/complete/search?q=' + val + '&cp=8&client=psy-ab&xssi=t&gs_ri=gws-wiz&hl=en-IN');
    //     return this.http.get(`http://suggestqueries.google.com/complete/search?client=firefox&q=${val}`, requestOptions);
    //   })
    // ).subscribe(results => {
    //   console.log(results);
    // });
    // this.textChange$.
    //   pipe(
    //     debounceTime(250),
    //     distinctUntilChanged()).
    //   subscribe(value => {
    //     console.log(value)
    //   });
  }

  searchTextChange(text) {
    this.textChange$.next(text);
  }
}

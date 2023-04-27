import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectNames } from 'projects/shell/src/app/components/home/reducers/home-reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public names$ = this.store.pipe(select(selectNames));

  constructor(private store: Store<any>){
    
  }

  ngOnInit() {
  }
}

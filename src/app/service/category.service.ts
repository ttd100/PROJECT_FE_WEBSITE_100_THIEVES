// @ts-ignore
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORIES = environment.API_LOCAL + 'category';

  constructor(private http: HttpClient) { }
  // @ts-ignore
  createCategory(category: Category): Observable<Category>{
    console.log('create', this.API_CATEGORIES);
    return this.http.post<Category>(this.API_CATEGORIES, category);
  }
}


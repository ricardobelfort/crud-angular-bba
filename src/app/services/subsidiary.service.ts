import { IBusiness } from './../pages/subsidiaries/models/IBusiness';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubsidiaryService {
  private readonly API = `${environment._baseURL}`;

  constructor(private http: HttpClient) {}

  getAllSubsidiaries(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(`${this.API}itau_teste`).pipe(take(1));
  }

  getSubsidiaryById(id: number): Observable<IBusiness> {
    return this.http
      .get<IBusiness>(`${this.API}itau_teste/${id}`)
      .pipe(take(1));
  }

  createSubsidiary(subsidiary: IBusiness): Observable<IBusiness> {
    return this.http.post<IBusiness>(`${this.API}`, subsidiary).pipe(take(1));
  }

  updateSubsidiary(subsidiary: IBusiness) {
    return this.http
      .put(`${this.API}itau_teste/${subsidiary.id}`, subsidiary)
      .pipe(take(1));
  }

  deleteSubsidiary(id: number) {
    return this.http.delete(`${this.API}itau_teste/${id}`).pipe(take(1));
  }
}

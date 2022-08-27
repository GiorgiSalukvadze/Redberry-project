import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}
  teamURL = 'https://pcfy.redberryinternship.ge/api/teams';
  positionsURL = 'https://pcfy.redberryinternship.ge/api/positions';

  getTeamMethod() {
    return this.http.get(this.teamURL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPositionMethod() {
    return this.http.get(this.positionsURL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

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
  brandURL = 'https://pcfy.redberryinternship.ge/api/brands';
  cpuURL = 'https://pcfy.redberryinternship.ge/api/cpus';
  userInfo: any;
  hasUserInfo: boolean = false;
  myToken = 'ab2b6c155bd4f90a5f0a030e028a63f2';
  getLaptopURL =
    'https://pcfy.redberryinternship.ge/api/laptops?token=ab2b6c155bd4f90a5f0a030e028a63f2';

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
  getBrandMethod() {
    return this.http.get(this.brandURL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getCpuMethod() {
    return this.http.get(this.cpuURL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  setUser(arg: any) {
    this.userInfo = arg;
  }
  getUser() {
    return this.userInfo;
  }
  getLaptopMethod() {
    return this.http.get(this.getLaptopURL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getMoreInfo(id: number) {
    return this.http
      .get(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=ab2b6c155bd4f90a5f0a030e028a63f2`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}

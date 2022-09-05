import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timeout } from 'rxjs';
import { time } from '@rxweb/reactive-form-validators';

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
  myToken = '0fd36a092437e7ada6906d8fd3774577';
  getLaptopURL =
    'https://pcfy.redberryinternship.ge/api/laptops?token=0fd36a092437e7ada6906d8fd3774577';

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
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=0fd36a092437e7ada6906d8fd3774577`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  LaptopCreate(fd: any, header: any) {
    return this.http
      .post('https://pcfy.redberryinternship.ge/api/laptop/create', fd, {
        headers: header,
      })
      .pipe(
        timeout(5000),
        map((res: any) => {
          return res;
        })
      );
  }
}

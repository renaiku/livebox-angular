import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { GetDevicesResponse } from '../models/responses/get-devices.response.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.post<GetDevicesResponse>('/sysbus/Devices:get', null);
  }

  get(macAdress: string) {
    return this.http.post<GetDevicesResponse>(`/sysbus/Devices/Device/${macAdress}:get`, null);
  }

  hasTag(macAdress: string, tag: string) {
    return this.http.post<GetDevicesResponse>(`/sysbus/Devices/Device/${macAdress}:hasTag`, null);
  }

}

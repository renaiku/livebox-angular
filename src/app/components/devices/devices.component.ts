import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import {GetDevicesResponse} from 'src/app/models/responses/get-devices.response.model';
import {Device} from 'src/app/models/device.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: any;
  userDevices: any;

  ethernetDevicesOnline: any;
  ethernetDevicesOffline: any;
  wifiDevicesOnline: any;
  wifiDevicesOffline: any;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getAll().subscribe( (data: GetDevicesResponse) => {
      this.devices = data.status;
      console.log('Devices:', this.devices);

      this.devices.forEach(device => {

        switch(device.DeviceType) {
          case 'HomePlug':
            device.Icon = 'power';
            break;
          case 'homelive':
            device.Icon = 'rss_feed';
            break;
          case 'smartphone':
            device.Icon = 'smartphone';
            break;
          case 'tablet':
          case 'tablette':
            device.Icon = 'tablet_android';
            break;
          case 'tv':
            device.Icon = 'tv';
            break;
          case 'Computer':
          case 'computer':
            device.Icon = 'desktop_windows';
            break;
          case 'laptop':
            device.Icon = 'laptop';
            break;
          case 'GameConsole':
            device.Icon = 'sports_esports';
            break;
          case 'WiFi Bridge':
            device.Icon = 'router';
            break;
          default:
            device.Icon = 'device_unknown';
        }

      });

      this.devices.sort((a, b) => {
        return a.Name.toLowerCase().localeCompare(b.Name.toLowerCase());
      });

      this.ethernetDevicesOnline = this.devices.filter(device => {
        if (device.hasOwnProperty('InterfaceName') && device.Active) {
          console.log(device);
          return device.InterfaceName.includes('eth');
        }
      });

      this.ethernetDevicesOffline = this.devices.filter(device => {
        if (device.hasOwnProperty('InterfaceName') && !device.Active) {
          console.log(device)
          return device.InterfaceName.includes('eth');
        }
      });

      this.wifiDevicesOnline = this.devices.filter(device => {
        if (device.hasOwnProperty('InterfaceName') && device.Active) {
          return device.InterfaceName.includes('wl');
        }
      });

      this.wifiDevicesOffline = this.devices.filter(device => {
        if (device.hasOwnProperty('InterfaceName') && !device.Active) {
          return device.InterfaceName.includes('wl');
        }
      });

    });
  }

  goToDevicePage() {
    console.log("clicked");

  }

}

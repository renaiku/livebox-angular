import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { GetDevicesResponse } from 'src/app/models/responses/get-devices.response.model';
import { Device } from 'src/app/models/device.model';
import { IconService } from 'src/app/services/icon.service';

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

  constructor(private deviceService: DeviceService, private iconService: IconService) { }

  ngOnInit(): void {
    this.deviceService.getAll().subscribe( (data: GetDevicesResponse) => {
      this.devices = data.status;
      console.log('Devices:', this.devices);

      this.devices.forEach(device => {
        device.Icon = this.iconService.get(device.DeviceType);
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

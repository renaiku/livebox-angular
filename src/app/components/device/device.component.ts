import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetDevicesResponse } from 'src/app/models/responses/get-devices.response.model';
import { DeviceService } from 'src/app/services/device.service';
import { IconService } from 'src/app/services/icon.service';

export interface Element {
  key: string;
  label: string;
  value: any;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  macAdress: string;
  device: any;

  displayedColumns: string[] = ['label', 'value'];
  dataSource: Element[] = [];

  constructor(private route: ActivatedRoute, private deviceService: DeviceService, private iconService: IconService) { }

  ngOnInit(): void {
    this.macAdress = this.route.snapshot.paramMap.get('mac');

    this.deviceService.get(this.macAdress).subscribe( (data: GetDevicesResponse) => {

      this.device = data.status;

      console.log('Device:', this.device);

      this.device.DHCPName = this.device.Names
        ? this.device.Names.find(element => element.Source === 'dhcp')?.Name
        : undefined;

      console.log('Device.DHCPName setted to:', this.device.DHCPName);

      this.device.Icon = this.iconService.get(this.device.DeviceType);

      if (this.device.DHCPName) {
        // MAC adress
        if (this.device.PhysAddress) {
          this.dataSource.push({
            key: 'PhysAddress',
            label: 'MAC Address',
            value: this.device.PhysAddress
          });
        }

        // IPAddress
        if (this.device.IPAddress) {
          this.dataSource.push({
            key: 'IPAddress',
            label: 'IP Address',
            value: this.device.IPAddress
          });
        }

        // Interface
        if (this.device.InterfaceName) {
          this.dataSource.push({
            key: 'InterfaceName',
            label: 'Interface',
            value: this.device.InterfaceName
          });
        }
      } else {

        for (let [key, value] of Object.entries(this.device)) {
          this.dataSource.push({
            key: key,
            label: key,
            value: value
          });
        }

      }


    });

  }

}

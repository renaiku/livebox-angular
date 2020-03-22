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
      this.device.DHCPName = this.device.Names.find(element => element.Source === 'dhcp').Name;
      this.device.Icon = this.iconService.get(this.device.DeviceType);

      // MAC adress
      this.dataSource.push({
        label: 'MAC Address',
        value: this.device.PhysAddress
      });

      // IPAddress
      this.dataSource.push({
        label: 'IP Address',
        value: this.device.IPAddress
      });

      // Interface
      this.dataSource.push({
        label: 'Interface',
        value: this.device.InterfaceName
      });

      console.log('Device:', this.device);
    });

  }

}

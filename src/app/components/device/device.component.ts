import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {GetDevicesResponse} from 'src/app/models/responses/get-devices.response.model';
import {DeviceService} from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  macAdress: string;
  device: any;

  constructor(private route: ActivatedRoute, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.macAdress = this.route.snapshot.paramMap.get('mac');

    this.deviceService.get(this.macAdress).subscribe( (data: GetDevicesResponse) => {
      this.device = data.status;
      this.device.DHCPName = this.device.Names.find(element => element.Source === 'dhcp').Name;
      console.log('Device:', this.device);
    });

  }

}

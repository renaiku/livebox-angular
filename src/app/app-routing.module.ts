import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import {SystemComponent} from './components/system/system.component';


const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
  },
  {
    path: 'devices',
    component: DevicesComponent,
  },
  {
    path: 'device/:mac',
    component: DeviceComponent,
  },
  {
    path: 'system',
    component: SystemComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

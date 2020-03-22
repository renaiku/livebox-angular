import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  get(deviceType: string) {

    let icon;

    switch(deviceType) {
      case 'HomePlug':
        icon = 'power';
        break;
      case 'homelive':
        icon = 'rss_feed';
        break;
      case 'smartphone':
        icon = 'smartphone';
        break;
      case 'tablet':
      case 'tablette':
        icon = 'tablet_android';
        break;
      case 'tv':
        icon = 'tv';
        break;
      case 'Computer':
      case 'computer':
        icon = 'desktop_windows';
        break;
      case 'laptop':
        icon = 'laptop';
        break;
      case 'GameConsole':
        icon = 'sports_esports';
        break;
      case 'WiFi Bridge':
        icon = 'router';
        break;
      default:
        icon = 'device_unknown';
    }

    return icon;
  }

}

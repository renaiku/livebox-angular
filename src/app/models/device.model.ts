export interface Device {
  Key: string;
  DiscoverySource: string;
  Name: string;
  DeviceType: string;
  Active: boolean;
  Tags: string;
  FirstSeen: string;
  LastConnection: string;
  LastChanged: string;
  Master: string;
  VendorClassID: string;
  UserClassID: string;
  ClientID: string;
  SerialNumber: string;
  ProductClass: string;
  OUI: string;
  IPAddress: string;
  IPAddressSource: string;
  PhysAddress: string;
  Ageing: boolean;
  Layer2Interface: string;
  InterfaceName: string;
  MACVendor: string;
  Index: string;
}

// "Actions": [
//   {
//     "Function": "setName",
//     "Name": "Edit Name",
//     "Arguments": [
//       {
//         "Name": "name",
//         "Type": "string",
//         "Mandatory": true
//       },
//       {
//         "Name": "source",
//         "Type": "string",
//         "Mandatory": false
//       }
//     ]
//   },
//   {
//     "Function": "setType",
//     "Name": "Edit Type",
//     "Arguments": [
//       {
//         "Name": "type",
//         "Type": "string",
//         "Mandatory": true
//       },
//       {
//         "Name": "source",
//         "Type": "string",
//         "Mandatory": false
//       }
//     ]
//   }
// ],
// "Names": [
//   {
//     "Name": "PC-1",
//     "Source": "default"
//   },
//   {
//     "Name": "Bender",
//     "Source": "dhcp"
//   },
//   {
//     "Name": "AirBENDER",
//     "Source": "webui"
//   },
//   {
//     "Name": "Bender",
//     "Source": "mdns"
//   }
// ],
// "DeviceTypes": [
//   {
//     "Type": "computer",
//     "Source": "webui"
//   },
//   {
//     "Type": "MediaRenderer",
//     "Source": "upnp-uuid:ca5ba26b-9af6-4669-a706-f6a0ba72f292"
//   }
// ],
// "IPv4Address": [
//   {
//     "Address": "192.168.1.20",
//     "Status": "not reachable",
//     "Scope": "global",
//     "AddressSource": "DHCP",
//     "Reserved": true
//   }
// ],
// "IPv6Address": [],
// "mDNSService": [
//   {
//     "Name": "3.20.2.34-BENDER.154fb96a-52ec-4b50-a13e-6ce30f2252ca",
//     "ServiceName": "_nvstream_dbd._tcp",
//     "Domain": "local",
//     "Port": "47989"
//   }
// ]
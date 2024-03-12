import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-logs.component.html',
  styleUrl: './activity-logs.component.css'
})
export class ActivityLogsComponent {
  loginData = [
    {
      loginDateTime: "2024-03-12 08:30:00",
      loginStatus: "Successful",
      ipAddress: "192.168.0.1",
      deviceInfo: "Chrome on Windows 10",
      website: "example.com"
    },
    {
      loginDateTime: "2024-03-11 18:45:00",
      loginStatus: "Failed",
      ipAddress: "192.168.0.2",
      deviceInfo: "Firefox on macOS",
      website: "example.com"
    },
    {
      loginDateTime: "2024-03-10 12:15:00",
      loginStatus: "Successful",
      ipAddress: "192.168.0.3",
      deviceInfo: "Safari on iOS",
      website: "example.com"
    },
    {
      loginDateTime: "2024-03-09 09:20:00",
      loginStatus: "Successful",
      ipAddress: "192.168.0.4",
      deviceInfo: "Edge on Windows 11",
      website: "example.com"
    },
    {
      loginDateTime: "2024-03-08 14:55:00",
      loginStatus: "Failed",
      ipAddress: "192.168.0.5",
      deviceInfo: "Firefox on Ubuntu",
      website: "example.com"
    }
  ];
  goBack(){
    window.history.back()
  }
}

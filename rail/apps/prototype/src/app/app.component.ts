import { Component } from '@angular/core';
import { MenuItem } from "@rail/corporate";

@Component({
  selector: 'rail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prototype';
  menuItems: MenuItem[] = [
    {title: 'Züge', link: ['/train']},
    {title: 'Dashboard', link: ['/dashboard']},
  ];
}

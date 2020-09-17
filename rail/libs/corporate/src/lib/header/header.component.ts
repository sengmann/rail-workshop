import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "@rail/corporate";

@Component({
  selector: 'rail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuItems: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

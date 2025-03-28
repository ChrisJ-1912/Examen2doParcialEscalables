/*
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() showAll = new EventEmitter<void>();
  @Output() showRecent = new EventEmitter<void>();
}
* */

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() showAll = new EventEmitter<void>();
  @Output() showRecent = new EventEmitter<void>();

  onShowAll() {
    this.showAll.emit();  // Emite el evento cuando se hace clic en "Mostrar Todo"
  }

  onShowRecent() {
    this.showRecent.emit();  // Emite el evento cuando se hace clic en "Mostrar Recientes"
  }
}

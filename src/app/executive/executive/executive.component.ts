import { Component, ViewEncapsulation } from '@angular/core';

import { EventService } from '@core/event.service';
import * as shakeAlert from './shake-alert.json';

/**
 * Executive summary page
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-executive',
  styleUrls: ['./executive.component.scss'],
  templateUrl: './executive.component.html'
})
export class ExecutiveComponent {
  constructor(public eventService: EventService) {
    console.log(shakeAlert);
  }

  /**
   * Checks for changes to data by index
   *
   * @param index
   *    index of array
   * @param item
   *    general text product
   */
  trackByIndex(index, item) {
    return index;
  }
}

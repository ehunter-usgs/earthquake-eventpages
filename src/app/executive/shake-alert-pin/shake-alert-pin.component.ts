import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormatterService } from '@core/formatter.service';

@Component({
  selector: 'executive-shake-alert-pin',
  templateUrl: './shake-alert-pin.component.html',
  styleUrls: ['./shake-alert-pin.component.scss']
})
export class ShakeAlertPinComponent {
  link = '../shake-alert';
  @Input()
  product: any;
  title = 'ShakeAlert';
  type = 'shake-alert';

  constructor(public formatterService: FormatterService) {
    console.log('shakeAlert', this.product);
  }
}

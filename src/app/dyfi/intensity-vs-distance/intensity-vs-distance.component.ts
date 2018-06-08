import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { DyfiService } from '../../core/dyfi.service';
import { EventService } from '../../core/event.service';

@Component({
  selector: 'dyfi-intensity-vs-distance',
  templateUrl: './intensity-vs-distance.component.html',
  styleUrls: ['./intensity-vs-distance.component.scss']
})
export class IntensityVsDistanceComponent implements OnInit {
  private subs = new Subscription();
  public dyfiSeries: any = null;
  public bubbleSeries: any = null;
  public lineSeries: any = null;
  public allResults: any = null;
  public customColors: any[] = [];

  public classOptions = {
    'scatterplot1': {
      type: 'scatter',
      color: '#94dfea',
    },
    'estimated1': {
      type: 'line',
      color: '#d65617'
    },
    'estimated2': {
      type: 'line',
      color: '#5fce3b'
    },
    'binned': {
      type: 'scatter',
      color: '#8d91ff',
      styles: {
        r: 5,
        borderColor: '#000000',
      }
    },
    'median': {
      type: 'scatter',
      color: '#fe4d55',
      styles: {
        r: 2,
        borderColor: '#000000',
      }
    },
  };

  // plot options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  animations = true;
  showXAxisLabel = true;
  xAxisLabel = 'Hypocentral Distance (km)';
  showYAxisLabel = true;
  yAxisLabel = 'Intensity (mmi)';

   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#8d91ff', '#94dfea', '#fe4d55', '#5fce3b']
  };

   // line, area
  autoScale = true;

  constructor (
    public dyfiService: DyfiService,
    public eventService: EventService
  ) {}

  ngOnInit() {
    this.subs.add(this.dyfiService.plotAtten$.subscribe((series) => {
      this.onDyfiSeries(series);
    }));
    this.subs.add(this.eventService.product$.subscribe((product) => {
      this.onProduct(product);
    }));
  }

  /**
   * New product, get new station list
   *
   * @param product shakemap product
   */
  onProduct(product) {
    this.dyfiService.getAtten(product);
  }

  onDyfiSeries(dyfiData) {
    if (dyfiData === null || !dyfiData) {
      this.dyfiSeries = null;

      return;
    }

    const bubbleSeries = [];
    const lineSeries = [];
    for (const series of dyfiData.series) {

      const styles = this.classOptions[series.class]['styles'] ?
          this.classOptions[series.class]['styles'] : null;

      // add styles to specific features
      if (styles !== null) {
        series.series = series.series.map((data) => {
          return {...data, ...styles};
        });
      }

      if (this.classOptions[series.class]['type'] === 'scatter') {
        bubbleSeries.push(series);
      } else if (this.classOptions[series.class]['type'] === 'line') {
        lineSeries.push(series);
      }

      if (this.classOptions[series.class]['color']) {
        this.customColors.push(
          {
            name: series.name,
            value: this.classOptions[series.class]['color']
          }
        );
      }
    }

    this.bubbleSeries = bubbleSeries;
    this.lineSeries = lineSeries;
    this.allResults = [...bubbleSeries, ...lineSeries];
  }
}

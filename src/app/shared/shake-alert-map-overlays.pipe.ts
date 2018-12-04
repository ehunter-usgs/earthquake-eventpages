import { Pipe, PipeTransform } from '@angular/core';

import * as L from 'leaflet';

@Pipe({
  name: 'shakeAlertMapOverlays'
})
export class ShakeAlertMapOverlaysPipe implements PipeTransform {
  /**
   * Get shake alert map leaflet overlay
   *
   * @param alert
   *      The alert features array
   */

  transform(alert: any): any {
    if (!alert) {
      return null;
    }
    const overlays = [];
    if (alert.features) {
      alert.features.forEach(feature => {
        if (feature.geometry.coordinates) {
          const layer = L.geoJSON(feature, {
            color: feature.properties.stroke
          });
          layer.enabled = 'true';
          overlays.push(layer);
        }
      });
    }
    return overlays;
  }
}

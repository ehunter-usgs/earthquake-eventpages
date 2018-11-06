import { Event } from './event';

/**
 * This function will iterate through the products object and return a new
 * object with the -scenario stripped out from the productname-scenario
 * property
 *
 * @param data
 *      The scenario event data
 */
function transformEvent(data: any) {
  let products = {};

  if (!data) {
    return null;
  }
  try {
    // set the products object for iteration
    const scenarioProducts = data.properties.products;
    Object.keys(scenarioProducts).forEach(key => {
      // look for -scenario in property name
      const index = key.indexOf('-scenario');
      if (index !== -1) {
        // strip out the -scenario from property name
        const type = key.substr(0, index);
        const productVersions = scenarioProducts[key];

        // update product.type on each version
        for (let i = 0, len = productVersions.length; i < len; i++) {
          productVersions[i].type = type;
        }

        // replace products object with non-scenario types
        products[type] = productVersions;
      } else {
        // not a "-scenario" type product, copy anyway
        products[key] = scenarioProducts[key];
      }
    });
  } catch (e) {
    // error fallback to original products
    products = data.properties.products;
  }

  // Update products with parsed non-scenario names
  data.properties.products = products;
  return data;
}

/**
 * Child class for scenario events, returns a new event object and calls on
 * the parent Event constructor
 */
export class ScenarioEvent extends Event {
  constructor(data: any) {
    super(transformEvent(data));
  }
}

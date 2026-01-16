import { deepClone } from '../utils/clone.js';

export default (catalog, productId) => {
    return catalog.hasOwnProperty(productId) ?
    deepClone(catalog[productId]) : null;
};
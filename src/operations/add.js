import { deepClone } from '../utils/clone.js';

export default (catalog, product) => {
    if (catalog.hasOwnProperty(product.id)) return catalog;
    return { ...catalog, [product.id]: deepClone(product) };
};
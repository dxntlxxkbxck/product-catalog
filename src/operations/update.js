import { deepClone } from '../utils/clone.js';

export default (catalog, productId, updates) => {
    if (!catalog.hasOwnProperty(productId)) return catalog;
    return {
        ...catalog,
        [productId]: { ...catalog[productId], ...deepClone(updates) }
    };
};
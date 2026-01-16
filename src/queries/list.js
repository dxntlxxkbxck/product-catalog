import { deepClone } from '../utils/clone.js';

export default (catalog) => {
    const products = [];
    for (const id in catalog) {
        products.push(deepClone(catalog[id]));
    }
    return products;
};

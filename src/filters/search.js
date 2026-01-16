import { deepClone } from '../utils/clone.js';

export default (catalog, query) => {
    const q = query.toLowerCase();
    const products = [];
    for (const id in catalog) {
        const product = catalog[id];
        const name = product.name ? product.name.toLowerCase() : '';
        if (name.includes(q)) {
            products.push(deepClone(product));
        }
    }
    return products;
};

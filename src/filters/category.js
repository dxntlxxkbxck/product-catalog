import { deepClone } from '../utils/clone.js';

export default (catalog, categoryName) => {
    const products = [];
    for (const id in catalog) {
        const product = catalog[id];
        if (product.category && product.category.main === categoryName) {
            products.push(deepClone(product));
        }
    }
    return products;
};

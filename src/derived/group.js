import { deepClone } from '../utils/clone.js';

export default (catalog) => {
    const groups = {};
    for (const id in catalog) {
        const product = catalog[id];
        const cat = product.category ? product.category.main : 'uncategorized';
        if (!groups[cat]) groups[cat] = [];
    groups[cat].push(deepClone(product));
    }
    return groups;
};

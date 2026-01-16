import { deepClone } from '../utils/clone.js';

export default (catalog, productId, updates) => {
    if (!catalog.hasOwnProperty(productId)) return catalog;
    
    const original = catalog[productId];
    const newCategory = updates.category 
        ? { ...original.category, ...deepClone(updates.category) }
        : original.category;
        
    const newProduct = {
        ...original,
        ...deepClone(updates),
        ...(updates.category && { category: newCategory })
    };
    
    return {
        ...catalog,
        [productId]: newProduct
    };
};

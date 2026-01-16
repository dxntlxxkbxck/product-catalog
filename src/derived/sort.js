import { listProducts } from '../queries/list.js';

export default (catalog, direction) => {
    const products = listProducts(catalog);
    const dir = direction === 'desc' ? -1 : 1;
    return products.sort((a, b) => dir * (a.price - b.price));
};

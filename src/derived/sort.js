import listProducts from '../queries/list.js';

const sortByPrice = (catalog, direction) => {
    const products = listProducts(catalog);
    const dir = direction === 'desc' ? -1 : 1;
    return products.sort((a, b) => dir * (a.price - b.price));
};

export default sortByPrice;
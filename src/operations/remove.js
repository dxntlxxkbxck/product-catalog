export default (catalog, productId) => {
    const newCatalog = { ...catalog };
    delete newCatalog[productId];
    return newCatalog;
};
// Баррель-файл: собирает и реэкспортирует функции из модулей каталога.
// Студентам удобнее импортировать всё из одного места: `import * as C from './catalog.js'`.
export * from './catalog/core.js';
export * from './catalog/queries.js';
export * from './operations/add.js';
export * from './operations/remove.js';
export * from './operations/update.js';
export * from './queries/has.js';
export * from './queries/get.js';
export * from './queries/list.js';
export * from './filters/category.js';
export * from './filters/search.js';
export * from './derived/sort.js';
export * from './derived/group.js';
export * from './derived/merge.js';
export * from './utils/clone.js';
export * from './utils/id.js';

// глобальная копия объекта
const deepClone = (Obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
};

// добавление товара с уникальным id
const addProduct = (catalog, product) => {
    if (catalog.hasOwnProperty(product.id)) return catalog;
    return { ...catalog, [product.id]: deepClone(product) };
};

// удаление по id
const removeProduct = (catalog, productId) => {
    const newCatalog = { ...catalog };
    delete newCatalog[productId];
    return newCatalog;
};

// обновление полей товара
const updateProduct = (catalog, productId, updates) => {
    if (!catalog.hasOwnProperty(productId)) return catalog;
    return {
        ...catalog,
        [productId]: [ ...catalog[productId], ...deepClone ]
    }
}
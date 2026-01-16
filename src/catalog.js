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
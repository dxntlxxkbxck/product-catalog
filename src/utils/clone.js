export const deepClone = (obj) => {
	try {
		return JSON.parse(JSON.stringify(obj));
	} catch (e) {
		// Fallback для сложных объектов
		if (obj === null || typeof obj !== 'object') {
			return obj;
		}
		if (Array.isArray(obj)) {
			return obj.map(deepClone);
		}
		const clone = {};
		Object.keys(obj).forEach(key => {
			clone[key] = deepClone(obj[key]);
		});
		return clone;
	}
};

const cloneCatalog = (catalog) => deepClone(catalog);
export default cloneCatalog;

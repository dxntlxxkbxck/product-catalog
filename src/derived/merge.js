import { deepClone } from '../utils/clone.js';
export default (c1, c2) => {
    const merged = { ...deepClone(c1) };
    for (const id in c2) {
        merged[id] = deepClone(c2[id]);
    }
    return merged;
};

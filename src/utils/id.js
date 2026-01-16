let globalCounter = 0;

const generateId = () => {
    globalCounter += 1;
    return `p${globalCounter.toString().padStart(4, '0')}`;
};

export default generateId;
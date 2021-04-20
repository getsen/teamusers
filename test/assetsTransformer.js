const path = require('path');
const { createTransformer } = require('ts-jest');

const tsJestTransformer = createTransformer();

module.exports = {
    process(src, filename, config) {
        const source = `export const ReactComponent = 'div';export default '${path.basename(filename)}';`;
        return tsJestTransformer.process(source, 'test.ts', config && config.globals);
    },
};

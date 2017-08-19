import defaultParserInterface from '../utils/defaultParserInterface';

const ID = 'go-template-parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: '1',
  homepage: 'http://bouk.co',
  locationProps: new Set(['pos']),
  _ignoredProperties: new Set(['type']),

  loadParser(callback) {
    require(['go-template-parser'], callback);
  },

  parse(goParser, code, options) {
    return goParser(code);
  },

  nodeToRange(node) {
    return [node.pos, node.pos + 1];
  },

  opensByDefault(node, key) {
    return false;
  },
};

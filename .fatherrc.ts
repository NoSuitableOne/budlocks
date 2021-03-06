const common = {
  entry: 'src/index.ts',
  runtimeHelpers: true,
};

const esm = {
  type: 'babel',
  importLibToEs: true
};

const cjs = {
  type: 'rollup'
};

export default {
  ...common,
  esm: {...esm},
  cjs: {...cjs}
};

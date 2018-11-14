import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  "rxjs/operators",
  "rxjs/ajax",
];

const plugins = [
  resolve({
    jsnext: true,
  }),
  babel(),
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  terser({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }),
];

export default [
  // CommonJS
  {
    input: "src/index.js",
    output: { file: pkg.main, format: "cjs", indent: false },
    external,
    plugins,
  },

  // ES
  {
    input: "src/index.js",
    output: { file: pkg.module, format: "es", indent: false },
    external,
    plugins,
  },
];

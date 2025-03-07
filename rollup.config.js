import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// NEW
import postcss from "rollup-plugin-postcss";

//NEW
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

import strip from 'rollup-plugin-strip';

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      // NEW
      postcss(), 

      // NEW
      terser(),
    ],
  },
  {
    // input: "dist/esm/types/index.d.ts",
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts(),
      strip({
        directives: ['use client'], // ลบ directive 'use client'
      })
    ],

    // NEW
    external: [/\.css$/],
  },
  
];
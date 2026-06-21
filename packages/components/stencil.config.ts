import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'momentum-ds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    reactOutputTarget({
      componentCorePackage: '@andersonlucasp/components',
      proxiesFile: '../react/src/components.ts',
      loaderDir: undefined,
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@andersonlucasp/components',
      proxiesFile: '../vue/src/components.ts',
      loaderDir: undefined,
    }),
    angularOutputTarget({
      componentCorePackage: '@andersonlucasp/components',
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/directives/proxies.ts',
    }),
  ],
  taskQueue: 'async',
  sourceMap: true,
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/index.ts',
    ],
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
  },
};

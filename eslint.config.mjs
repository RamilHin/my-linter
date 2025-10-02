// Ramil's Linter Settings to replace Stephen :)

import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

// Usage:
//
// 0. Drag this eslint.config.mjs file to your project root
//
// 1. Install dependencies:
//    npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin
//
// 2. Add to your package.json scripts section:
//    "lint": "eslint assets/**/*.ts"
//    "gameLint": "eslint assets/Script/**/*.ts",
//
// 3. Run in terminal:
//    npm run lint
//
// VS Code users:
//
// 1. Add to your settings:
//    "eslint.useFlatConfig": true
//
// 2. Install the "ESLint" extension in VSCode for real-time linting.
//

export default [
  {
    files: ['assets/**/*.ts', 'src/**/*.ts', 'lib/**/*.ts'], //Everything basically
    // files: ['assets/Script/**/*.ts'], //Just custom scripts
    
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // optional, if using type-aware linting
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      '@stylistic': stylistic,
    },
  
    rules: {
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-var": "error",

      curly: ['error', 'all'],
      // the enforce for '===' and such
      'no-console': ['warn', { allow: ['warn', 'error'] }], // for production, allow only console.warn and console.error
      'prefer-template': ['error'],
      'template-curly-spacing': ['error', 'never'],

       // discourage use of 'any' type
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_' }], // warn for unused parameters, allow _-prefixed
        '@typescript-eslint/no-inferrable-types': 'off', // allow explicit types on declarations
      '@typescript-eslint/no-non-null-assertion': 'off', // allow the ! operator

      //Stylistic Spaces
      '@stylistic/indent': ['error', 4, { SwitchCase: 1 }], // Works better than @typescript-eslint/indent for decorators
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'semi': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'comma-style': ['error', 'last'],
      'func-call-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
      // 'eol-last': ['error', 'always'],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      'no-whitespace-before-property': 'error',
      'block-spacing': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      // Use key-spacing instead of deprecated space-after-colon/space-before-colon
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      // Enforce spacing before and after the colon in computed properties
      '@stylistic/computed-property-spacing': ['error', 'never'],
      // Enforce space inside single-line blocks (curly braces)
      'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
      'no-trailing-spaces': ['error'],
      'default-param-last': ['error'],
      'no-param-reassign': ['warn', { props: false }], // allow reassigning function parameters but not their properties
      'prefer-spread': 'error',
      // 'function-paren-newline': ['error', 'consistent'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'arrow-spacing': ['error', { before: true, after: true }],  

      // TypeScript: enforce spacing before and after the colon in type annotations (use @stylistic version)
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } }
      }],

      // Enforce spacing around the equals sign in variable declarations and assignments
      'space-infix-ops': 'error', // already present, ensures spaces around infix operators like '='
      'operator-assignment': ['error', 'always'], // require assignment operator shorthand where possible

      // Ramil's Personal preferences
      'max-depth': ['warn', 4],
      'max-params': ['warn', 3], //Consider object interface instead
      'max-len': ['error', 150],
      'max-lines-per-function': ['warn', 100],
      // 'max-lines': ['warn', 500],
      // 'max-statements': ['warn', 10],
      // 'complexity': ['warn', 5],

      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "constructor-super": "error",
      
      "quotes": ["warn", "single", { "avoidEscape": true }],

      // Require explicit return types for functions and class methods
      '@typescript-eslint/explicit-module-boundary-types': 'warn',

      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": "explicit"
        }
      ],

      // Require type annotations on variables and parameters
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: false,
          variableDeclaration: true,
          propertyDeclaration: true,
          parameter: true,
        },
      ],

      'no-restricted-syntax': [
        // Disallow Static (unless readonly)
        'warn',
        {
          selector: 'PropertyDefinition[static=true][readonly!=true]',
          message: 'Static class fields are disallowed unless they are readonly. Consider using alternative design pattern maybe?',
        },

        //Magic strings test - too noisy, maybe later - broken :(
        // {
        //   selector: "Literal[value][parent.type!='Property'][parent.type!='ImportDeclaration'][parent.type!='ExportNamedDeclaration'][parent.type!='ExportAllDeclaration'][parent.type!='TSLiteralType'][value.type='string']",
        //   message: "Avoid using magic strings. Define string constants instead.",
        // },

        // // Disallow private methods - Ramil's preference :)
        // {
        //   selector: 'MethodDefinition[accessibility="private"]',
        //   message: 'Private functions are disallowed for accessibility reasons in lib.',
        // },

        // // Disallow switch statements - Ramil's preference :)
        // 'warn',
        // {
        //   selector: 'SwitchStatement',
        //   message: 'Avoid using switch statements. There are design patterns for this',
        // },
      ],

      // Disallow bracket notation for property access when possible
      'dot-notation': 'warn',

      // Nameing conventions for class properties & accessors
      "@typescript-eslint/naming-convention": [
        "error",
        // Public static readonly fields: UPPER_CASE
        {
          "selector": "classProperty",
          "modifiers": ["public", "protected", "static", "readonly"],
          "format": ["UPPER_CASE"]
        },
        // Public static fields: UPPER_CASE
        {
          "selector": "classProperty",
          "modifiers": ["public", "static"],
          "format": ["UPPER_CASE"]
        },
        {
          "selector": "classProperty",
          "modifiers": ["protected", "static"],
          "format": ["UPPER_CASE"]
        },
        // Private static fields: UPPER_CASE, no leading underscore
        {
          "selector": "classProperty",
          "modifiers": ["private", "static"],
          "format": ["UPPER_CASE"],
          "leadingUnderscore": "forbid"
        },
        // Public instance fields: PascalCase
        {
          "selector": "classProperty",
          "modifiers": ["public"],
          "format": ["PascalCase"]
        },
        {
          "selector": "method",
          "modifiers": ["public"],
          "format": ["PascalCase"],
        },
        {
          "selector": "method",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": "method",
          "modifiers": ["protected"],
          "format": ["camelCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": "classProperty",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "require"
        },
        {
          "selector": "classProperty",
          "modifiers": ["protected"],
          "format": ["camelCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": "accessor",
          "modifiers": ["public"],
          "format": ["PascalCase"]
        },
        {
          "selector": "accessor",
          "modifiers": ["protected"],
          "format": ["camelCase"],
        },
        // Disable naming convention for object literal methods (e.g., { visible() {} })
        {
          "selector": "objectLiteralMethod",
          "format": null
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules',
      'temp',
      'library',
      'build',
      'dist',
      'coverage',
    ],
  },
];

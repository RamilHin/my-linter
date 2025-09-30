// Ramil's Linter Settings to replace Stephen :)

import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

// Usage:
/**
 * Setup Instructions:
 * 
 * 1. Install dependencies:
 *    npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin
 * 
 * 2. For VSCode users, add the following to your settings:
 *    "eslint.useFlatConfig": true
 * 
 * 3. In your tsconfig.json, ensure you have:
 *    "strict": true, // enables all strict type-checking options, including strictNullChecks
 *    "strictNullChecks": true // (optional, as "strict" includes this)
 * 
 * 4. Install the "ESLint" extension in VSCode for real-time linting.
 */

export default [
  {
    files: ['assets/**/*.ts', 'src/**/*.ts', 'lib/**/*.ts'],
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
      "prefer-const": "warn",
      curly: ['error', 'all'],
      eqeqeq: ["error", "always"], // the enforce for '===' and such
      "no-var": "error",
      'no-console': 'warn',
      'prefer-template': ['error'],

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off', // allow explicit types on declarations
      '@typescript-eslint/no-non-null-assertion': 'off', // allow the ! operator

      //Stylistic Spaces
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'func-call-spacing': ['error', 'never'],

      // Use key-spacing instead of deprecated space-after-colon/space-before-colon
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],

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
      '@typescript-eslint/explicit-module-boundary-types': 'error',

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
          message: 'Static class fields are disallowed unless they are readonly.',
        },

        // Disallow switch statements
        'warn',
        {
          selector: 'SwitchStatement',
          message: 'Avoid using switch statements. There are design patterns for this',
        },
      ],

      // Nameing conventions for class properties & accessors
      "@typescript-eslint/naming-convention": [
        "error",
        // Public methods/functions: PascalCase
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
          "selector": "classProperty",
          "modifiers": ["public"],
          "format": ["PascalCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": "accessor",
          "format": ["PascalCase"]
        }
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

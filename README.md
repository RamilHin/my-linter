## Usage:

 * Setup Instructions:
  
1. Copy `eslint.config.mjs` to the root of your project folder.

2. Install dependencies:
   ```sh
   npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin
   ```

3. Add a script to your `package.json`:
   ```json
   "scripts": {
     "lint": "eslint assets/**/*.ts"
   }
   ```

4. Run the linter in your terminal:
   ```sh
   npm run lint
   ```
  
#### VS Code users

  1. For VSCode users, add the following to your settings:
     "eslint.useFlatConfig": true
  
  2. Install the "ESLint" extension in VSCode for real-time linting.
 
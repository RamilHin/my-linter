## Usage:

 * Setup Instructions:
  
  1. Install dependencies:
     npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin
  
  2. For VSCode users, add the following to your settings:
     "eslint.useFlatConfig": true
  
  3. In your tsconfig.json, ensure you have:
     "strict": true, // enables all strict type-checking options, including strictNullChecks
     "strictNullChecks": true // (optional, as "strict" includes this)
  
  4. Install the "ESLint" extension in VSCode for real-time linting.
 
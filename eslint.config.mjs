// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    eslintConfigPrettier,
    {
        rules: {
            'no-console': ['error'], // or use 'warn' if you want warnings instead of errors
            'dot-notation': ['error'],
        },
    },
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            'build/**',
            'coverage/**',
            '*.log',
        ],
    },
);

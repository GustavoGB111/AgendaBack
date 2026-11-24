const tseslint = require("typescript-eslint");
const prettier = require("eslint-plugin-prettier");

module.exports = [
    { ignores: ["dist/", "node_modules/"] },
    ...tseslint.configs.recommended,

    {
        files: ["**/*.ts"],
        plugins: {
            prettier,
        },

        rules: {
            "prettier/prettier": "error",

            "no-console": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },

    // Opção 2: libera o require só no arquivo de configuração
    {
        files: ["eslint.config.js"],
        rules: {
            "@typescript-eslint/no-require-imports": "off",
        },
    },
];
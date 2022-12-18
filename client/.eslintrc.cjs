module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["plugin:react/recommended", "standard-with-typescript"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],

			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking"
			],

			parserOptions: {
				project: ["./tsconfig.json"]
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "tsconfig.json",
		tsconfigRootDir: __dirname
	},
	plugins: ["react"],
	rules: {
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"semi": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"no-throw-literal": "off",
		"no-trailing-spaces": ["error", { "skipBlankLines": true }],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "only-multiline",
            "exports": "never",
            "functions": "never"
        }],

		"react/react-in-jsx-scope": "off",

		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/space-before-function-paren": ["error", "never"],
		"@typescript-eslint/no-extraneous-class": ["error", {"allowStaticOnly": true }],
		"@typescript-eslint/comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "only-multiline",
            "exports": "never",
            "functions": "never"
        }],
		"@typescript-eslint/no-throw-literal": "off",
		"@typescript-eslint/promise-function-async": [
			"error",
			{
				"allowAny": true,
				"allowedPromiseNames": [],
				"checkArrowFunctions": false,
				"checkFunctionDeclarations": false,
				"checkFunctionExpressions": false,
				"checkMethodDeclarations": false
			}
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "semi",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "comma",
					"requireLast": false
				}
			}
		]
	},
	ignorePatterns: [".eslintrc.cjs", "tsconfig.json"]
};

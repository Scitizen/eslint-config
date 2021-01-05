export = {
	env: { es2020: true },
	rules: {
		'array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: true } ],
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'comma-spacing': [ 'error', { before: false, after: true } ],
		'comma-style': [ 'error', 'last' ],
		'complexity': 'off',
		'constructor-super': 'error',
		'eol-last': [ 'error', 'always' ],
		'eqeqeq': [ 'error', 'smart' ],
		'guard-for-in': 'error',
		'id-match': 'error',
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				CallExpression:{ arguments: 'first' },
				ArrayExpression: 'first',
				ObjectExpression: 'first',
				FunctionDeclaration: { parameters: 'first' },
				FunctionExpression: { parameters: 'first' },
				flatTernaryExpressions: true,
				offsetTernaryExpressions: false,
			},
		] as const,
		'linebreak-style': [ 'error', 'unix' ],
		'max-classes-per-file': [ 'error', 1 ],
		'max-len': [ 'error', { code: 200 } ],
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'error',
		'no-new-wrappers': 'error',
		'no-redeclare': 'error',
		'no-return-await': 'error',
		'no-shadow': [ 'error', { hoist: 'all' } ],
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': [ 'error', { allowAfterThis: true, allowAfterSuper: true, allowAfterThisConstructor: true } ],
		'no-unsafe-finally': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-curly-spacing': [ 'error', 'always', { objectsInObjects: false } ],
		'object-shorthand': 'error',
		'one-var': [ 'error', 'never' ],
		'operator-linebreak': [ 'error', 'after' ],
		'prefer-const': 'error',
		'prefer-template': 'error',
		'quote-props': [ 'error', 'consistent-as-needed' ],
		'quotes': [ 'error', 'single', { avoidEscape: true } ],
		'radix': 'error',
		'semi': [ 'error', 'always' ],
		'sort-imports': [ 'error', { ignoreDeclarationSort: true } ],
		'space-in-parens': [ 'error', 'always' ],
		'spaced-comment': [ 'error', 'always', { markers: [ '/' ] } ],
		'use-isnan': 'error',
		'valid-typeof': 'off',
	},
};

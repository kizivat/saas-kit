module.exports = {
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^\\$\\$(Props|Events|Slots|Generic)$',
			},
		],
	},
};

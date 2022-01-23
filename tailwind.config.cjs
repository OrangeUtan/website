module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		colors: {
			bg: 'var(--color-bg)',
			'on-bg': 'var(--color-on-bg)',
			header: 'var(--color-header)',
			'on-header': 'var(--color-on-header)',
			border: 'var(--color-border)'
		}
	}
};

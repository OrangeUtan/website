module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		colors: {
			bg: 'var(--color-bg)',
			'on-bg': 'var(--color-on-bg)',
			fg: 'var(--color-fg)',
			'on-fg': 'var(--color-on-fg)',
			header: 'var(--color-header)',
			'on-header': 'var(--color-on-header)',
			border: 'var(--color-border)',
			'border-fg': 'var(--color-border-fg)'
		}
	}
};

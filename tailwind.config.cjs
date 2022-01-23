module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		colors: {
			bg: 'var(--color-bg)',
			'on-bg': 'var(--color-on-bg)',
			header: 'var(--color-header)',
			'on-header': 'var(--color-on-header)',
			card: 'var(--color-card)',
			'on-card': 'var(--color-on-card)',
			'border-card': 'var(--color-border-card)',
			border: 'var(--color-border)'
		},
		transitionDuration: {
			theme: 'var(--duration-theme)'
		}
	}
};

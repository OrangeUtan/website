module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--color-bg)',
				'on-bg': 'var(--color-on-bg)',
				header: 'var(--color-header)',
				'on-header': 'var(--color-on-header)',
				card: 'var(--color-card)',
				'on-card': 'var(--color-on-card)',
				'card-title': 'var(--color-card-title)',
				border: 'var(--color-border)',
				'theme-toggle': 'var(--color-theme-toggle)',
				code: 'var(--color-code)'
			},
			transitionDuration: {
				theme: 'var(--duration-theme)'
			},
			borderRadius: {
				DEFAULT: '.25rem'
			}
		}
	}
};

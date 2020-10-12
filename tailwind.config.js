module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    colors: {
      white: 'var(--white)',
      'primary-orange': 'var(--primary-orange)',
      'primary-red': 'var(--primary-red)',
      'bright-blue': 'var(--bright-blue)',
      rose: 'var(--rose)',
      primary: 'var(--primary)',
      'darkest-gray': 'var(--darkest-gray)',
      'dark-gray': 'var(--dark-gray)',
      'light-gray': 'var(--light-gray)',
      'lightest-gray': 'var(--lightest-gray)',
      'success-light': 'var(--success-light)',
      'success': 'var(--success)',
      'success-dark': 'var(--success-dark)',
      'info-light': 'var(--info-light)',
      info: 'var(--info)',
      'info-dark': 'var(--info-dark)',
      'warning-light': 'var(--warning-light)',
      'warning': 'var(--warning)',
      'warning-dark': 'var(--warning-dark)',
      'danger-light': 'var(--danger-light)',
      'danger': 'var(--danger)',
      'danger-dark': 'var(--danger-dark)',
    },
    textColor: {
      highlight: 'var(--bright-blue)',
      default: 'var(--primary)',
      lowlight: 'var(--gray-light)',
      transparent: 'var(--transparent)',
      white: 'var(--white)',
      black: 'var(--black)',
    },
  },
  corePlugins: {
    backgroundOpacity: false, // Not needed because with custom colors cannot be applied
  },
  variants: {},
  plugins: [],
};

module.exports = {
  theme: {
    extend: {},
    customForms: theme => ({
    	default:{
    		select: {
	          	borderRadius: theme('borderRadius.lg'),
	          	backgroundColor: theme('colors.gray.700'),
	          	borderColor: 'transparent',
	          	iconColor: theme('colors.white'),
	        	lineHeight: theme('lineHeight.snug'),
	        	'&:focus': {
	        		borderColor: 'transparent',
	        		boxShadow: 'none',
	        		backgroundColor: theme('colors.gray.600'),
		       	},
	        },
	        'checkbox, radio': {
	          	borderColor: 'transparent',
	        	width: theme('spacing.6'),
	        	height: theme('spacing.6'),
	        	color: theme('colors.indigo.500'),
	        	'&:focus': {
	        		borderColor: 'transparent',
	        		boxShadow: 'none',
	        		backgroundColor: theme('colors.gray.700'),
		       	},
	        },
    	}
    })
  },
  variants: {},
  plugins: [
  	require('@tailwindcss/custom-forms')
  ]
}

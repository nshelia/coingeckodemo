const autoprefixer = require('autoprefixer')

const plugins = []
if (process.env.NODE_ENV === 'production') {
	plugins.push(
		autoprefixer({
			overrideBrowserslist: ['> 0%']
		})
	)
}

module.exports = {
	plugins
}
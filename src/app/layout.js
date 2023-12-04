'use client'

import '@/static/scss/reset.scss'
import '@/static/scss/normalize.scss'
import '@/static/scss/fonts.scss'
import '@/static/scss/animate.scss'
import '@/static/scss/mixins.scss'
import '@/static/scss/GUI.scss'
import '@/static/scss/common.scss'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#000000' />
			</head>
			<body style={{ opacity: 0, visibility: 'hidden' }}>{children}</body>
		</html>
	)
}

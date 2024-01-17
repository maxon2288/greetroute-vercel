"use client"

import "@/static/scss/reset.scss"
import "@/static/scss/normalize.scss"
import "@/static/scss/fonts.scss"
import "@/static/scss/animate.scss"
import "@/static/scss/mixins.scss"
import "@/static/scss/GUI.scss"
import "@/static/scss/common.scss"
import Script from "next/script"
import { Suspense } from "react"


export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />

		</head>
		<body style={{ opacity: 0, visibility: "hidden" }}>
		<Suspense fallback={""}>
			<Script type="text/javascript">
				{`
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(96155553, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
				})
				;
				`}
			</Script>
		</Suspense>
		{children}
		</body>
		</html>
	)
}

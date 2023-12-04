'use client'

import Header from '@/app/components/ui/header'
import Footer from '@/app/components/ui/footer'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
import { useEffect } from 'react'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
export default function DentaCare() {
	useEffect(() => {
		if (!window.location.hash) {
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
		}
		document.querySelector('body').style.visibility = 'visible'
		document.querySelector('body').style.opacity = 1
		document.querySelector('body').classList.add('err404-body')
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<title>Ничего не найдено</title>
			<div className='err404-container'>
				<Header />
				<div className='err404'>
					<div className='err404-title'>404</div>
					<div className='err404-desc'>
						К сожалению, такой страницы не существует. <br /> Ее удалили или еще не создали.
					</div>
					<Link href='/'>На главную</Link>
				</div>
				<Footer />
			</div>
		</>
	)
}

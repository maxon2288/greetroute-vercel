'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Accordion from '@/app/components/ui/accordion/accordion'
import { useEffect } from 'react'
import Reason from '@/app/components/screens/reason/reason'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
export default function DentaCare() {
	useEffect(() => {
		if (!window.location.hash) {
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
		}
		document.querySelector('body').style.visibility = 'visible'
		document.querySelector('body').style.opacity = 1

		document.querySelector('body').classList.remove('err404-body')
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<link rel='canonical' href='https://greetroute.kz/faq' />
			<meta name='description' content='Часто задаваемые вопросы наших клиентов. Оставьте заявку и мы вас проконсультируем!' />
			<title>Часто задаваемые вопросы | GreetRoute</title>
			<Header />
			<div className='serv-container'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
					<div className='blur-2'></div>
				</div>
				<div className='page-top'>
					<h1>Вопрос-ответ</h1>
				</div>
				<div className='wrapper'>
					<Accordion />
				</div>
			</div>

			<div className='reason'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
				</div>
				<div className='wrapper'>
					<Reason />
				</div>
			</div>
			<BottomOfPage />
		</>
	)
}

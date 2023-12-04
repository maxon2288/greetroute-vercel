'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
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
			<link rel='canonical' href='https://greetroute.kz/services/uiux-design' />
			<meta name='description' content='UI/UX Дизайн для вашего сайта. Оставьте заявку и мы вас проконсультируем!' />
			<title>UI/UX Дизайн | GreetRoute</title>
			<Header />
			<div className='serv-container'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
					<div className='blur-2'></div>
				</div>
				<div className='page-top'>
					<h1 className='wow fadeInUp'>UI/UX Дизайн</h1>
					<p className='wow fadeInUp' data-wow-delay='0.2s'>
						Продуманное проектирование и разработка дизайна <br /> вашего сайта в Figma.
					</p>
				</div>
				<div className='wrapper'>
					<div className='serv-items-content'>
						<div className='serv-items'>
							<div className='serv-item wow fadeInUp' data-wow-delay='0.2s'>
								<h3>Интернет-магазин</h3>
								<span>от 170 000 ₸</span>
								<p>UX-проектирование. Разработка пользовательского интерфейса и личного кабинета </p>
								<Link href='/#form'>
									Заказать
									<img src='/img/svg/serv-icon.svg' alt='' />
								</Link>
							</div>
							<div className='serv-item popular wow fadeInUp' data-wow-delay='0.4s'>
								<h3>Сайт компании</h3>
								<span>от 90 000 ₸</span>
								<p>Разработка UI-элементов в Figma. Набор страниц таких как услуги, о нас, контакты, блог</p>
								<Link href='/#form'>
									Заказать
									<img src='/img/svg/serv-icon.svg' alt='' />
								</Link>
							</div>
							<div className='serv-item wow fadeInUp' data-wow-delay='0.6s'>
								<h3>Платформа</h3>
								<span>от 350 000 ₸</span>
								<p>UX-проектирование структуры страниц и элементов, дизайн в Figma, кастомизация структуры под логику работы сайта </p>
								<Link href='/#form'>
									Заказать
									<img src='/img/svg/serv-icon.svg' alt='' />
								</Link>
							</div>
						</div>
					</div>
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

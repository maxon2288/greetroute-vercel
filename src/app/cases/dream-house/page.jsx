'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
export default function DreamHouse() {
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
			<link rel='canonical' href='https://greetroute.kz/cases/dream-house' />
			<meta name='description' content='Кейс компании GreetRoute. Оставьте заявку и мы вас проконсультируем!' />
			<title>Кейс Dream House | GreetRoute</title>
			<Header />

			<div className='case dream'>
				<div className='case-top'>
					<div className='wrapper'>
						<Link href='/' className='back'>
							<img src='/img/svg/back.svg' alt='' />
							На главную
						</Link>
						<h1 className='wow fadeIn'>Dream House</h1>
						<p className='wow fadeIn' data-wow-delay='0.2s'>
							Разработка сайта для ремонтного <br /> агентства Dream House
						</p>
					</div>
				</div>
				<div className='case-site'>
					<div className='wrapper'>
						<h2 className='wow fadeInUp'>Разработка сайта </h2>
						<p className=' wow fadeInUp' data-wow-delay='0.2s'>
							Создали сайт, который отражает профессиональность компании и привлекает внимание клиентов.
						</p>
					</div>
				</div>
				<div className='case-images'>
					<div className='case-devices'>
						<Image width='1458' height='1012' className='wow fadeInUp' src='/img/content/dream-1.png' alt='' />
						<Image width='1200' height='675' className='wow fadeInUp' src='/img/content/dream-2.jpg' alt='' />
						<Image width='1200' height='675' className='wow fadeInUp' src='/img/content/dream-3.jpg' alt='' />
						<Image width='1200' height='675' className='wow fadeInUp' src='/img/content/dream-4.jpg' alt='' />
					</div>
				</div>
				<div className='case-step'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='wrapper'>
						<div className='case-step-top'>
							<h2 className='wow fadeInUp'>Этапы разработки</h2>
						</div>
						<div className='case-step-items'>
							<div className='case-step-item wow fadeInUp'>
								<div className='case-step-number'>01</div>
								<div className='case-step-title'>Проектирование и написание текста</div>
								<div className='case-step-desc'>При прототипировании сайта "Dream House" разработали логическую структуру, а тексты описывают услуги и портфолио, отражая профессионализм компании.</div>
							</div>
							<div className='case-step-item wow fadeInUp'>
								<div className='case-step-number'>02</div>
								<div className='case-step-title'>Дизайн-система</div>
								<div className='case-step-desc'>Разработали концепцию, выбрали цветовую палитру, шрифты и стили. Создали макет (wireframe) для каждой страницы, определяющий расположение элементов. Создали визуальные элементы, такие как иконки и фоны.</div>
							</div>
							<div className='case-step-item wow fadeInUp'>
								<div className='case-step-number'>03</div>
								<div className='case-step-title'>Программирование</div>
								<div className='case-step-desc'>
									Всё началось с создания HTML-кода, который определяет структуру и контент страницы. Затем, после верстки, разработали структуру базы данных, которая будет хранить информацию, необходимую для сайта. Также важной частью процесса была разработка системы управления
									контентом на сайте.
								</div>
							</div>
							<div className='case-step-item wow fadeInUp'>
								<div className='case-step-number'>04</div>
								<div className='case-step-title'>Тестирование</div>
								<div className='case-step-desc'>После завершения верстки и программирования проводились тесты для обнаружения и исправления ошибок и недоразумений. Проводилось тестирование как фронтенда, так и бэкенда, включая проверку взаимодействия между ними.</div>
							</div>
							<div className='case-step-item wow fadeInUp'>
								<div className='case-step-number'>05</div>
								<div className='case-step-title'>Оптимизация</div>
								<div className='case-step-desc'>Осуществили оптимизацию сайта с целью улучшения производительности, увеличения скорости загрузки страниц и оптимизации изображений. Также обеспечили безопасность сайта путем внедрения мер по защите от атак и уязвимостей.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomOfPage />
		</>
	)
}

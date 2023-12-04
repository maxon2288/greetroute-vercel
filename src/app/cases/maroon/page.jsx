'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
export default function Maroon() {
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
			<link rel='canonical' href='https://greetroute.kz/cases/maroon' />
			<meta name='description' content='Кейс компании GreetRoute. Оставьте заявку и мы вас проконсультируем!' />
			<title>Кейс MAROON | GreetRoute</title>
			<Header />

			<div className='case maroon'>
				<div className='case-top'>
					<div className='wrapper'>
						<Link href='/' className='back'>
							<img src='/img/svg/back.svg' alt='' />
							На главную
						</Link>
						<h1 className='wow fadeIn'>MAROON</h1>
						<p className='wow fadeIn' data-wow-delay='0.2s'>
							Разработка продающего сайта и подключение контекстной рекламы для бренда косметики MAROON
						</p>
					</div>
				</div>
				<div className='case-site'>
					<div className='wrapper'>
						<h2 className='wow fadeInUp'>Разработка сайта </h2>
						<p className=' wow fadeInUp' data-wow-delay='0.2s'>
							Мы создали сайт, который удерживает потенциальных клиентов, раскрывает информацию о продукции и убеждает в качестве и ценности косметики
						</p>
					</div>
				</div>
				<div className='case-images'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='case-devices'>
						<Image width='1252' height='718' className='wow fadeInUp' src='/img/content/maroon-3.jpg' alt='' />
					</div>
					<div className='case-float wow fadeInUp'>
						<div>
							<Image width='683' height='1840' src='/img/content/maroon-1.jpg' alt='' />
						</div>
						<div>
							<Image width='683' height='880' src='/img/content/maroon-2.jpg' alt='' />
						</div>
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
							<div className='case-step-item wow fadeInUp' data-wow-delay='0.2s'>
								<div className='case-step-number'>01</div>
								<div className='case-step-title'>Проектирование и написание текста</div>
								<div className='case-step-desc'>При прототипировании сайта "MAROON" разработали логическую структуру, и тексты, описывающие услуги и портфолио, которые отражают профессионализм компании.</div>
							</div>
							<div className='case-step-item wow fadeInUp' data-wow-delay='0.4s'>
								<div className='case-step-number'>02</div>
								<div className='case-step-title'>Дизайн-система</div>
								<div className='case-step-desc'>Разработали концепцию, выбрали цветовую палитру, шрифты и стили. Создали макет (wireframe) для каждой страницы, определяющий расположение элементов. Создали визуальные элементы, такие как иконки и фоны.</div>
							</div>
							<div className='case-step-item wow fadeInUp' data-wow-delay='0.6s'>
								<div className='case-step-number'>03</div>
								<div className='case-step-title'>Программирование</div>
								<div className='case-step-desc'>
									Всё началось с создания HTML-кода, который определяет структуру и контент страницы. Затем, после верстки, разработали структуру базы данных, которая будет хранить информацию, необходимую для сайта. Также важной частью процесса была разработка системы управления
									контентом на сайте.
								</div>
							</div>
							<div className='case-step-item wow fadeInUp' data-wow-delay='0.8s'>
								<div className='case-step-number'>04</div>
								<div className='case-step-title'>Тестирование</div>
								<div className='case-step-desc'>После завершения верстки и программирования проводились тесты для обнаружения и исправления ошибок и недоразумений. Проводилось тестирование как фронтенда, так и бэкенда, включая проверку взаимодействия между ними.</div>
							</div>
							<div className='case-step-item wow fadeInUp' data-wow-delay='1s'>
								<div className='case-step-number'>05</div>
								<div className='case-step-title'>Оптимизация</div>
								<div className='case-step-desc'>Осуществили оптимизацию сайта с целью улучшения производительности, увеличения скорости загрузки страниц и оптимизации изображений. Также обеспечили безопасность сайта путем внедрения мер по защите от атак и уязвимостей.</div>
							</div>
						</div>
					</div>
				</div>
				<div className='case-context'>
					<div className='wrapper'>
						<div>
							<div className='case-context-top'>
								<h2>Контекстная реклама</h2>
							</div>
							<div className='case-context-items'>
								<div className='case-context-item  wow fadeInUp' data-wow-delay='0.2s'>
									<div>
										<img src='/img/svg/context-1.svg' alt='' />
									</div>
									<h3>
										Собрали семантику для <br /> поисковой кампании
									</h3>
									<p>Определили через поисковые запросы, как потенциальные клиенты выбирают косметику, и создали для них подходящую рекламу</p>
								</div>
								<div className='case-context-item  wow fadeInUp' data-wow-delay='0.4s'>
									<div>
										<img src='/img/svg/context-2.svg' alt='' />
									</div>
									<h3>Анализ целей и аудитории</h3>
									<p>Определили цели, которые мы хотим достичь с помощью контекстной рекламы. Идентифицировали ЦА, определили ее характеристики и потребности.</p>
								</div>
								<div className='case-context-item  wow fadeInUp' data-wow-delay='0.3s'>
									<div>
										<img src='/img/svg/context-3.svg' alt='' />
									</div>
									<h3>Исследование ключевых слов</h3>
									<p>Провели исследование ключевых слов, связанных с нишей. Использовали инструменты, такие как Google Keyword Planner.</p>
								</div>
								<div className='case-context-item  wow fadeInUp' data-wow-delay='0.5s'>
									<div>
										<img src='/img/svg/context-4.svg' alt='' />
									</div>
									<h3>
										Запуск рекламы в Яндекс.Директ <br /> и Google Ads
									</h3>
									<p>Создали новую кампанию в Google Ads и Яндекс.Директ, определив параметры, такие как бюджет, расписание, регионы и цели кампании.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<BottomOfPage />
			</div>
		</>
	)
}

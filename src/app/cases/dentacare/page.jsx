'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'

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
			<link rel='canonical' href='https://greetroute.kz/cases/dentacare' />
			<meta name='description' content='Кейс компании GreetRoute. Оставьте заявку и мы вас проконсультируем!' />
			<title>Кейс DentaCare | GreetRoute</title>
			<Header />

			<div className='case dentacare'>
				<div className='case-top'>
					<div className='wrapper'>
						<Link href='/' className='back'>
							<img src='/img/svg/back.svg' alt='' />
							На главную
						</Link>
						<h1 className='wow fadeIn'>DentaСare</h1>
						<p className='wow fadeIn' data-wow-delay='0.2s'>
							Разработка логотипа, сайта и запуск контекстной рекламы для стоматологии DentaСare
						</p>
					</div>
				</div>
				<div className='case-numbers'>
					<div className='wrapper'>
						<div className='wow fadeInUp'>
							<h2>3000</h2>
							<p>Посетителей сайта</p>
						</div>
						<div className='wow fadeInUp' data-wow-delay='0.2s'>
							<h2>30 ₽</h2>
							<p>Цена посещения</p>
						</div>
						<div className='wow fadeInUp' data-wow-delay='0.4s'>
							<h2>147</h2>
							<p>Обращений клиентов</p>
						</div>
						<div className='wow fadeInUp' data-wow-delay='0.6s'>
							<h2>+24% </h2>
							<p>Увеличение базы клиентов, привлеченных с сайта </p>
						</div>
					</div>
				</div>
				<div className='case-logo'>
					<div className='wrapper'>
						<div>
							<div className='case-logo-left wow fadeInUp'>
								<h2>Логотип</h2>
								<p>Нами был разработан узнаваемый символ для стоматологии "DentaCare". Дизайнер создал все элементы в Adobe Illustrator, чтобы обеспечить векторное представление логотипа.</p>
							</div>
							<div className='case-logo-right wow fadeInUp' data-wow-delay='0.2s'>
								<img src='/img/svg/dentacare.svg' alt='' />
							</div>
						</div>
					</div>
				</div>
				<div className='case-site'>
					<div className='wrapper'>
						<h2 className='wow fadeInUp'>Разработка сайта </h2>
						<p className=' wow fadeInUp' data-wow-delay='0.2s'>
							Создали сайт, который отражает профессиональность клиники и привлекает внимание клиентов.
						</p>
					</div>
				</div>
				<div className='case-images'>
					<div className='case-devices'>
						<Image width='1252' height='725' className='wow fadeInUp' src='/img/content/dentacare-1.jpg' alt='' />
						<Image width='293' height='604' className='wow fadeInUp' data-wow-delay='0.2s' src='/img/content/dentacare.png' alt='' />
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
								<div className='case-step-desc'>
									Продумали и согласовали с клиентом архитектуру страниц будущего сайта "DentaCare". Затем мы приступили к написанию текстов. Мы выбрали официальный, но при этом дружелюбный тон для общения клиники с клиентами разных поколений, поскольку целевая аудитория в данной
									нише самая разнообразная.
								</div>
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
				<div className='case-stack'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='wrapper'>
						<div className='case-stack-top'>
							<h2 className='wow fadeInUp'>Стек технологий</h2>
						</div>
						<div className='case-stack-items'>
							<div className='case-stack-item wow fadeInUp' data-wow-delay='0.2s'>
								<img src='/img/svg/stack-1.svg' alt='' />
								<h3>Next.js</h3>
							</div>
							<div className='case-stack-item wow fadeInUp' data-wow-delay='0.4s'>
								<img src='/img/svg/stack-2.svg' alt='' />
								<h3>TypeScript</h3>
							</div>
							<div className='case-stack-item wow fadeInUp' data-wow-delay='0.6s'>
								<img src='/img/svg/stack-3.svg' alt='' />
								<h3>NestJS</h3>
							</div>
							<div className='case-stack-item wow fadeInUp' data-wow-delay='0.8s'>
								<img src='/img/svg/stack-4.svg' alt='' />
								<h3>Docker</h3>
							</div>
						</div>
					</div>
				</div>

				<div className='case-context'>
					<div className='wrapper'>
						<div>
							<div className='case-context-top'>
								<h2 className='wow fadeInUp'>Контекстная реклама</h2>
							</div>
							<div className='case-context-items'>
								<div className='case-context-item wow fadeInUp' data-wow-delay='0.2s'>
									<div>
										<img src='/img/svg/context-1.svg' alt='' />
									</div>
									<h3>
										Собрали семантику для <br /> поисковой кампании
									</h3>
									<p>Определили через поисковые запросы, как потенциальные клиенты выбирают стоматологические услуги, и создали для них подходящую рекламу</p>
								</div>
								<div className='case-context-item wow fadeInUp' data-wow-delay='0.4s'>
									<div>
										<img src='/img/svg/context-2.svg' alt='' />
									</div>
									<h3>Анализ целей и аудитории</h3>
									<p>Определили цели, которые мы хотим достичь с помощью контекстной рекламы. Идентифицировали ЦА, определили ее характеристики и потребности.</p>
								</div>
								<div className='case-context-item wow fadeInUp' data-wow-delay='0.3s'>
									<div>
										<img src='/img/svg/context-3.svg' alt='' />
									</div>
									<h3>Исследование ключевых слов</h3>
									<p>Провели исследование ключевых слов, связанных с нишей. Использовали инструменты, такие как Google Keyword Planner.</p>
								</div>
								<div className='case-context-item wow fadeInUp' data-wow-delay='0.5s'>
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
			</div>
			<BottomOfPage />
		</>
	)
}

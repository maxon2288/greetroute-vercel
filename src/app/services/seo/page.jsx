'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import { useEffect } from 'react'
import Link from 'next/link'
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
			<link rel='canonical' href='https://greetroute.kz/services/seo' />
			<meta name='description' content='SEO-продвижение в Казахстане. Оставьте заявку и мы вас проконсультируем!' />
			<title>SEO-продвижение | GreetRoute</title>
			<Header />

			<div className='serv-container'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
					<div className='blur-2'></div>
				</div>
				<div className='page-top'>
					<h1 className='wow fadeInUp'>SEO-продвижение</h1>
					<p className='wow fadeInUp' data-wow-delay='0.2s'>
						Мы оптимизируем веб-сайт, улучшаем его дизайн и информационное наполнение с целью привлечения выгодных клиентов из поисковых систем.
					</p>
				</div>

				<div className='wrapper serv-items-container serv-items-50'>
					<div className='serv-items-content'>
						<div className='serv-items serv-items-50'>
							<div className='serv-item popular wow fadeInUp' data-wow-delay='0.2s'>
								<h3>Корпоративный</h3>
								<span>от 180 000 ₸</span>
								<p>
									Продвижение корпоративных сайтов (сайтов-визиток) и сайтов, предоставляющих услуги, имеет свои особенности в контексте SEO в Яндексе и Google. Для увеличения эффективности и воздействия на позиционирование необходимо уделить внимание самим услугам, их
									преимуществам, расширению брендового охвата и расширению семантики в ответ на информационные запросы.
								</p>
								<Link href='/#form'>
									Заказать
									<img src='/img/svg/serv-icon.svg' alt='' />
								</Link>
							</div>
							<div className='serv-item wow fadeInUp' data-wow-delay='0.4s'>
								<h3>Магазин</h3>
								<span>от 700 000 ₸</span>
								<p>
									Продвижение онлайн-магазина способствует увеличению потока посетителей из поисковых систем и повышению эффективности превращения посещений в заказы. Мы осуществляем глубокий анализ показателей работы, уделяем внимание поведенческим факторам и структуре сайта. При
									расширении семантического ядра акцентируем внимание на ключевых направлениях продаж, учитывая сезонные колебания и специфику ассортимента.
								</p>
								<Link href='/#form'>
									Заказать
									<img src='/img/svg/serv-icon.svg' alt='' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='case-context'>
				<div className='wrapper'>
					<div>
						<div className='case-context-top'>
							<h2 className='wow fadeInUp'>Этапы работ</h2>
						</div>
						<div className='case-context-items'>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.2s'>
								<div>
									<img src='/img/svg/context-1.svg' alt='' />
								</div>
								<h3>Технический аудит</h3>
								<p>Выявляем недочеты на сайте, которые могут помешать правильному сканированию и индексации поисковиками: обнаружение дублей страниц, определение важных разделов, закрытых для поисковых роботов, выявление битых ссылок и оптимизация времени загрузки сайта.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.4s'>
								<div>
									<img src='/img/svg/context-2.svg' alt='' />
								</div>
								<h3>Анализ конкурентов</h3>
								<p>Выбираем конкурентов на основе целевых запросов и проводим аудит сайта каждого из них. Этот подход помогает устранить неэффективные методы продвижения, а также заимствовать эффективные стратегии для оптимизации собственного веб-сайта.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.3s'>
								<div>
									<img src='/img/svg/context-3.svg' alt='' />
								</div>
								<h3>Контент и дизайн</h3>
								<p>
									Готовим техническое задание для копирайтеров по созданию текстов. В сотрудничестве с дизайнерами разрабатываем более удобный интерфейс сайта, интегрируем формы обратной связи и другие функциональные элементы на страницы, способствуя более эффективному выполнению
									целевых действий.
								</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.5s'>
								<div>
									<img src='/img/svg/context-4.svg' alt='' />
								</div>
								<h3>Кластеризация</h3>
								<p>
									Группировка ключевых слов в тематические кластеры помогает упорядочить контент на сайте вокруг определенных тем или семантических групп запросов. Это помогает поисковым системам понять, что сайт покрывает определенную тему глубже и шире, что может положительно
									сказаться на его ранжировании.
								</p>
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

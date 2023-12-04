"use client"

import Image from "next/image"
import Header from "@/app/components/ui/header"
import Link from "next/link"
import BottomOfPage from "@/app/components/screens/bottomOfPage/bottomOfPage"
import { useEffect } from "react"
import Reason from "@/app/components/screens/reason/reason"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wow.js") : null

export default function Home() {
	useEffect(() => {
		if (!window.location.hash) {
			window.scrollTo({ top: 0, left: 0, behavior: "instant" })
		}
		document.querySelector("body").style.visibility = "visible"
		document.querySelector("body").style.opacity = 1

		document.querySelector("body").classList.remove("err404-body")
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<link rel='canonical' href='https://greetroute.kz/' />
			<meta name='description' content='GreetRoute - агентство по разработке и продвижению сайтов в Казахстане. Оставьте заявку и мы вас проконсультируем!' />
			<title>Помогаем бизнесу найти клиентов | GreetRoute</title>
			<Header />
			<div className='first'>
				<div className='wrapper'>
					<div>
						<div className='first-bg wow fadeIn'>
							<Image width='2448' height='1769' src='/img/content/first-bg.png' priority alt='' />
						</div>
						<div className='first-content'>
							<div className='first-title wow fadeInUp'>
								{/*Улучшаем маркетинг вашего бизнеса*/}
								<h1>
									<span>Помогаем</span> <span>бизнесу </span>
									<span> найти</span> <span>клиентов</span>
								</h1>
								<h1>
									<span>Помогаем</span> <span>бизнесу </span>
									<span> найти</span> <span>клиентов</span>
								</h1>
							</div>
							<p className='wow fadeInUp' data-wow-delay='0.2s'>
								GreetRoute1111 333321- <b>одно из лучших</b> агентств по разработке и продвижению сайтов <b>в Казахстане</b>.
							</p>
							<div className='wow fadeInUp' data-wow-delay='0.4s'>
								<Link href='#form'>
									<Image width='27' height='28' src='/img/svg/get-start.svg' alt='' />
									Начать сотрудничать
								</Link>
								<Link href='#services'>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='services' id='services'>
				<div className='wrapper'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='number'>
						<div className='number-top wow fadeInDown'>1</div>
						<div className='number-title wow fadeIn' data-wow-delay='0.7s'>
							Услуги
						</div>
					</div>
					<div className='services-top'>
						<h2 className='wow fadeInUp'>Что мы предлагаем?</h2>
						<p className='wow fadeInUp' data-wow-delay='0.2s'>
							Качественные решения, которые <span>окупают</span> затраты своей эффективностью
						</p>
					</div>
					<div className='services-items'>
						<Link href='/services/branding' className='services-item wow fadeInUp' data-wow-delay='0.2s'>
							<h3>
								<img src='/img/svg/header-serv-2.svg' alt='' />
								Брендинг
							</h3>
							<p>Разработка логотипа, фирменного стиля и подбор цветовой гаммы для идентичности вашего бренда на рынке.</p>
							<div>
								Подробнее
								<img src='/img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/services/uiux-design' className='services-item wow fadeInUp' data-wow-delay='0.4s'>
							<h3>
								<img src='/img/svg/header-serv-3.svg' alt='' />
								UI/UX Дизайн
							</h3>
							<p>Проектирование, разработка концепции, цветовая палитра, шрифты и стили. Макет каждой страницы.</p>
							<div>
								Подробнее
								<img src='/img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/services/web' className='services-item wow fadeInUp' data-wow-delay='0.6s'>
							<h3>
								<img src='/img/svg/header-serv-1.svg' alt='' />
								Разработка сайта
							</h3>
							<p>Проектирование, дизайн-система, верстка, настройка базы данных и подключение к CMS системе</p>
							<div>
								Подробнее
								<img src='/img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/services/seo' className='services-item services-item-50 wow fadeInUp' data-wow-delay='0.8s'>
							<h3>
								<img src='/img/svg/header-serv-4.svg' alt='' />
								SEO-продвижение
							</h3>
							<p>Оптимизация сайта для поднятия позиций сайта в результатах выдачи поисковых систем по определённым запросам пользователей в Google и Яндекс</p>
							<div>
								Подробнее
								<img src='/img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/services/context' className='services-item services-item-50 wow fadeInUp' data-wow-delay='1s'>
							<h3>
								<img src='/img/svg/header-serv-5.svg' alt='' />
								Контекстная реклама
							</h3>
							<p>Включает выбор ключевых слов и тематики, создание рекламных объявлений, установку бюджета и настройку показов в рекламных сетях или поисковых системах.</p>
							<div>
								Подробнее
								<img src='/img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='cases' id={"cases"}>
				<div className='wrapper'>
					<div>
						<div className='background-blurs'>
							<div className='blur-2'></div>
						</div>
						<div className='number'>
							<div className='number-top wow fadeInDown'>2</div>
							<div className='number-title wow fadeIn' data-wow-delay='0.7s'>
								Кейсы
							</div>
						</div>
						<div className='cases-top'>
							<h2 className='wow fadeInUp'>Наши работы</h2>
						</div>
						<div className='cases-items'>
							<div className='cases-row'>
								<Link href='/cases/dentacare' className='cases-item wow fadeInUp' data-wow-delay='0.2s'>
									<Image width='684' height='628' src='/img/content/case-1.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>DentaСare</h3>
										<p>Стоматологическая клиника</p>
									</div>
								</Link>
								<Link href='/cases/maroon' className='cases-item wow fadeInUp' data-wow-delay='0.4s'>
									<Image width='684' height='628' src='/img/content/case-2.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>MAROON</h3>
										<p>Бренд косметики</p>
									</div>
								</Link>
							</div>
							<div className='cases-row'>
								<Link href='/cases/dream-house' className='cases-item wow fadeInUp' data-wow-delay='0.2s'>
									<Image width='684' height='628' src='/img/content/case-3.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>Dream House</h3>
										<p>Агентство ремонта под ключ</p>
									</div>
								</Link>
								<Link href='/cases/multikassa' className='cases-item wow fadeInUp' data-wow-delay='0.4s'>
									<Image width='684' height='628' src='/img/content/case-4.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>Multikassa</h3>
										<p>Обменный пункт в Дубае</p>
									</div>
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

			{/*<div className='contacts'>*/}
			{/*	<div className='wrapper'>*/}
			{/*		<div>*/}
			{/*			<div className='contacts-left'>*/}
			{/*				<h2>Найдем вам клиентов</h2>*/}
			{/*				<p>*/}
			{/*					GreetRoute - <b>одно из лучших</b> агентств по разработке и продвижению сайтов <b>в Казахстане</b>.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*			<div className='contacts-right'>*/}
			{/*				<a href='#'>*/}
			{/*					<img src='/img/svg/get-start.svg' alt='' />*/}
			{/*					Начать сотрудничать*/}
			{/*				</a>*/}
			{/*				<a href='#'>*/}
			{/*					<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
			{/*						<path*/}
			{/*							d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'*/}
			{/*							stroke='currentColor'*/}
			{/*							strokeWidth='1.5'*/}
			{/*							strokeLinecap='round'*/}
			{/*						/>*/}
			{/*					</svg>*/}
			{/*					<span>Услуги</span>*/}
			{/*				</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}

			<BottomOfPage />
		</>
	)
}

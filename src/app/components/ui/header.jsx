'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
	const [menuActive, setMenuState] = useState(false)
	// useEffect(() => {
	// 	let links = document.querySelectorAll('a')
	// 	links.forEach((item) => {
	// 		item.addEventListener('click', () => {
	// 			document.querySelector('.header').classList.remove('hidden')
	// 			console.log(32132132)
	// 		})
	// 	})
	// 	setTimeout(() => {
	// 		let prevScrollpos = window.scrollY
	//
	// 		window.onscroll = function () {
	// 			if (window.scrollY > 200) {
	// 				let currentScrollPos = window.scrollY
	// 				if (prevScrollpos > currentScrollPos) {
	// 					document.querySelector('.header').classList.remove('hidden')
	// 				} else {
	// 					document.querySelector('.header').classList.add('hidden')
	// 				}
	// 				prevScrollpos = currentScrollPos
	// 			}
	// 		}
	// 	}, 500)
	// }, [])
	return (
		<>
			<div className='header'>
				<div className='wrapper'>
					<div>
						<Link href='/' className='header-logo'>
							<Image width='227' height='32' src='/img/svg/header-logo.svg' alt='' />
						</Link>
						<div className='header-menu'>
							<ul>
								<li>
									<span>Услуги и цены</span>
									<Image width='9' height='6' src='/img/svg/menu-arrow.svg' alt='' />
									<ul>
										<li>
											<Link href='/services/web'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-1.svg' alt='' />
													<h3>Разработка сайта</h3>
												</div>
												<p>Этап воронки продаж. Разработка инструмента сбора заявок для вашего продукта</p>
											</Link>
											<Link href='/services/branding'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-2.svg' alt='' />
													<h3>Брендинг</h3>
												</div>
												<p>Логотип, брендбук, айдентика и фирменный стиль для узнаваемости</p>
											</Link>
											<Link href='/services/uiux-design'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-3.svg' alt='' />
													<h3>UI/UX Дизайн</h3>
												</div>
												<p>Продуманное проектирование и разработка дизайна вашего сайта в Figma </p>
											</Link>
											<Link href='/services/seo'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-4.svg' alt='' />
													<h3>SEO-продвижение</h3>
												</div>
												<p>Оптимизация вашего сайта в поисковых системах Яндекс и Google</p>
											</Link>
											<Link href='/services/context'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-5.svg' alt='' />
													<h3>Контекстная реклама</h3>
												</div>
												<p>Увеличиваем конверсии, создаем систему рекламной кампании</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href='/#cases'>Кейсы</Link>
								</li>
								<li>
									<Link href='/faq'>Вопрос-ответ</Link>
								</li>
							</ul>
						</div>
						<Link href='/#form' className='header-call'>
							Связаться
						</Link>
						<div className='header-open' onClick={() => setMenuState(!menuActive)}>
							<img src='/img/svg/header-menu-open.svg' alt='' />
						</div>
					</div>
				</div>
			</div>
			<div className={`header-menu-mobile ${menuActive ? 'active' : ''}`}>
				<div className='header-mobile'>
					<Link href='/' className='header-logo'>
						<Image width='227' height='32' src='/img/svg/header-logo.svg' alt='' />
					</Link>
					<div className='header-close' onClick={() => setMenuState(!menuActive)}>
						<img src='/img/svg/header-menu-close.svg' alt='' />
					</div>
				</div>
				<Link href='/#form' onClick={() => setMenuState(!menuActive)}>
					Связаться
				</Link>
				<div className='soc'>
					<Link href='https://wa.me/+77776740559' className=' wow fadeInUp' target='_blank' data-wow-delay='0.3s'>
						<Image width='32' height='32' src='/img/svg/soc-1.svg' alt='' />
						<span>Наш WhatsApp</span>
					</Link>
					<Link href='https://t.me/greetroute' className='wow fadeInUp' target='_blank' data-wow-delay='0.4s'>
						<Image width='32' height='32' src='/img/svg/soc-2.svg' alt='' />
						<span>Наш Telegram</span>
					</Link>
					<Link href='https://instagram.com/greetroute' className='wow fadeInUp' target='_blank' data-wow-delay='0.5s'>
						<Image width='32' height='32' src='/img/svg/soc-3.svg' alt='' />
						<span>Наш Instagram</span>
					</Link>
					<Link href='mailto:greetroute@gmail.com' className='wow fadeInUp' target='_blank' data-wow-delay='0.6s'>
						<Image width='32' height='32' src='/img/svg/soc-4.svg' alt='' />
						<span>greetroute@gmail.com</span>
					</Link>
				</div>
				<h2>Услуги</h2>
				<ul>
					<li>
						<Link href='/services/web'>
							<h3>Разработка сайта</h3>
						</Link>
					</li>
					<li>
						<Link href='/services/branding'>
							<h3>Брендинг</h3>
						</Link>
					</li>
					<li>
						<Link href='/services/uiux-design'>
							<h3>UI/UX Дизайн</h3>
						</Link>
					</li>
					<li>
						<Link href='/services/seo'>
							<h3>SEO-продвижение</h3>
						</Link>
					</li>
					<li>
						<Link href='/services/context'>
							<h3>Контекстная реклама</h3>
						</Link>
					</li>
				</ul>
				<h2>
					<Link href='/#cases' onClick={() => setMenuState(!menuActive)}>
						Кейсы
					</Link>
				</h2>
				<h2>
					<Link href='/faq' onClick={() => setMenuState(!menuActive)}>
						Вопрос-ответ
					</Link>
				</h2>
			</div>
		</>
	)
}

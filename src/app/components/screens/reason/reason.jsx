"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Reason() {
	const [loc, setLoc] = useState("")
	useEffect(() => {
		setLoc(window.location.pathname)
	}, [])
	return (
		<>
			<div>
				{loc === "/" ? (
					<div className="number">
						<div className="number-top wow fadeInDown">2</div>
						<div className="number-title wow fadeIn" data-wow-delay="0.7s">
							Преимущества
						</div>
					</div>) : ""}

				<div className="reason-top">
					<h2 className="wow fadeInUp">Сайты для успешной лидогенерации, <br /> <span>на понятном, продающем языке</span>
					</h2>
					<p>
						Основные <span>факты о нас</span> и нашем подходе к проектам
					</p>
				</div>
				<div className="reason-items">
					<div className="reason-item wow fadeInUp" data-wow-delay="0.3s">
						<h3>Проводим анализ бизнеса и ниши <Image width="32" height="32" src="/img/content/why-1.png"
																  alt="" /></h3>
						<p>В самом начале мы анализируем нишу аудиторию и конкурентов, чтобы подобрать самые актуальные
							решения под ваши потребности</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.5s">
						<h3>Пишем заголовки, которые помогают продавать <Image width="32" height="32"
																			   src="/img/content/why-2.png" alt="" />
						</h3>
						<p>Наша задача — вовлечь, заинтересовать и убедить быстро через заголовки.</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.7s">
						<h3>Свежий, цепляющий дизайн <Image width="32" height="32" src="/img/content/why-3.png"
															alt="" /></h3>
						<p>От Картье и Apple до контрастного и яркого масс-маркет визуала с запасом актуальности на 5+
							лет с учетом общемирового тренда в веб-дизайне
						</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.7s">
						<h3>Анализируем метрики <Image width="32" height="32" src="/img/content/why-4.png" alt="" />
						</h3>
						<p>Карту скролла, карту кликов, вебвизор, диалоги с лидами, качество рекламных компаний.
						</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.7s">
						<h3>Докручиваем показатели <Image width="32" height="32" src="/img/content/why-5.png" alt="" />
						</h3>
						<p>Усиливаем важные блоки, тестируем формулировки, дополняем информацию под запросы ЦА.


						</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.7s">
						<h3>Используем нейромаркетинг <Image width="32" height="32" src="/img/content/why-6.png"
															 alt="" />
						</h3>
						<p>Каждый блок будет замечен в том порядке, в котором нам выгодно, не вызовет когнитивной
							перегрузки и Отложится в рабочей памяти
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

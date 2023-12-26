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
						<div className="number-top wow fadeInDown">3</div>
						<div className="number-title wow fadeIn" data-wow-delay="0.7s">
							Преимущества
						</div>
					</div>) : ""}

				<div className="reason-top">
					<h2 className="wow fadeInUp">Почему мы?</h2>
					<p className=" wow fadeInUp" data-wow-delay="0.2s">
						Основные преимущества перед другими агентствами
					</p>
				</div>
				<div className="reason-items">
					<div className="reason-item wow fadeInUp" data-wow-delay="0.3s">
						<div>
							<Image width="30" height="30" src="/img/svg/reason-1.svg" alt="" />
						</div>
						<h3>Анализ</h3>
						<p>В самом начале мы анализируем нишу аудиторию и конкурентов, чтобы подобрать самые актуальные
							решения под ваши потребности</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.5s">
						<div>
							<Image width="30" height="30" src="/img/svg/reason-2.svg" alt="" />
						</div>
						<h3>Тексты</h3>
						<p>Мы пишем тексты без шаблонов на понятном и продающем языке, который раскрывает ценность
							вашего продукта</p>
					</div>
					<div className="reason-item wow fadeInUp" data-wow-delay="0.7s">
						<div>
							<Image width="30" height="30" src="/img/svg/reason-3.svg" alt="" />
						</div>
						<h3>Дизайн</h3>
						<p>Мы делаем современный, свежий, приятный дизайн в любой стилистике, соблюдая все последние
							тренды в мире веба</p>
					</div>
				</div>
			</div>
		</>
	)
}

"use client"

import Link from "next/link"
import Footer from "@/app/components/ui/footer"
import Image from "next/image"
import { useState } from "react"

// const initValues = { name: "", email: "", message: "" }
// const initState = { values: initValues }

export default function BottomOfPage() {
	// const [state, setState] = useState(initState)
	const [showOk, setShowOk] = useState(false) // count - переменная состояния, setCount - функция для изменения этого состояния
	const [inputValue1, setInputValue1] = useState("")
	const [inputValue2, setInputValue2] = useState("")

	const isButtonDisabled = inputValue1.length <= 3 || inputValue2.length <= 8

	const handleInputChange1 = (e) => {
		setInputValue1(e.target.value)
	}

	const handleInputChange2 = (e) => {
		setInputValue2(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Ваша логика обработки формы
	}
	// const { values } = state
	//
	// const handleChange = ({ target }) =>
	// 	setState((prev) => ({
	// 		...prev,
	// 		values: {
	// 			...prev.values,
	// 			[target.name]: target.value
	// 		}
	// 	}))
	//
	// const sendContactForm = async (data) => {
	// 	document.querySelector(".form button").disabled = true
	// 	fetch("/api/mail", {
	// 		method: "POST",
	// 		body: JSON.stringify(data),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Accept: "application/json"
	// 		}
	// 	}).then((data) => {
	// 		if (data.ok) {
	// 			console.log(231332)
	// 			setShowOk(true)
	// 		}
	// 	})
	// }
	//
	// const onSend = async (e) => {
	// 	e.preventDefault()
	// 	await sendContactForm(values)
	// 	await setShowOk(true)
	// }

	async function handleOnSubmit(e) {
		e.preventDefault()
		const formData = {}
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return
			formData[field.name] = field.value
		})
		fetch("api/mail", {
			method: "POST",
			body: JSON.stringify(formData)
		}).then((data) => {
			if (data.ok) {
				console.log(231332)
				setShowOk(true)
			}
		})
		console.log(formData)
	}

	return (
		<>
			<div className="form" id="form">
				<div className="wrapper">
					<div>
						<div className="form-top">
							<h2 className="wow fadeInUp">Остались вопросы?</h2>
							<p className="wow fadeInUp" data-wow-delay="0.2s">
								Заполните форму и наш специалист свяжется с вами <span>в ближайшее время</span>
							</p>
						</div>
						<div className="form-content">
							<div className="form-left">
								{/*<form onSubmit={onSend} className={`${showOk ? "hide" : ""}`}>*/}
								{/*	<div className='form-item required  wow fadeInUp' data-wow-delay='0.3s'>*/}
								{/*		<div className='form-title'>Как к вам обращаться?</div>*/}
								{/*		<input value={values.name} onChange={handleChange} minLength={4} type='text' name='name' required />*/}
								{/*	</div>*/}
								{/*	<div className='form-item required wow fadeInUp' data-wow-delay='0.4s'>*/}
								{/*		<div className='form-title'>Ссылка на соц сеть, телефон мессенджера либо E-mail</div>*/}
								{/*		<input value={values.email} onChange={handleChange} minLength={5} type='text' name='email' required />*/}
								{/*	</div>*/}
								{/*	<div className='form-item wow fadeInUp' data-wow-delay='0.5s'>*/}
								{/*		<div className='form-title'>Сообщение для нас</div>*/}
								{/*		<input value={values.message} onChange={handleChange} type='text' name='message' />*/}
								{/*	</div>*/}
								{/*	<div className='form-item wow fadeInUp' data-wow-delay='0.6s'>*/}
								{/*		<button>Отправить</button>*/}
								{/*	</div>*/}
								{/*	<p className='wow fadeInUp' data-wow-delay='0.7s'>*/}
								{/*		Отправляя эту форму, я подтверждаю, что принимаю <Link href='/privacy-policy'>политику конфиденциальности GreetRoute</Link> и согласен на <a href='/consent'>обработку персональных данных</a>.*/}
								{/*	</p>*/}
								{/*</form>*/}
								<form method="post" onSubmit={handleOnSubmit} className={`${showOk ? "hide" : ""}`}>
									<div className="form-item required  wow fadeInUp" data-wow-delay="0.3s">
										<div className="form-title">Как к вам обращаться?</div>
										<input minLength={4} type="text" name="name" value={inputValue1}
											   onChange={handleInputChange1} required />
									</div>
									<div className="form-item required wow fadeInUp" data-wow-delay="0.4s">
										<div className="form-title">Ссылка на соц сеть, телефон мессенджера либо
											E-mail
										</div>
										<input minLength={5} type="text" value={inputValue2}
											   onChange={handleInputChange2} name="contact" required />
									</div>
									<div className="form-item wow fadeInUp" data-wow-delay="0.5s">
										<div className="form-title">Сообщение для нас</div>
										<input type="text" name="message" />
									</div>
									<div className="form-item wow fadeInUp" data-wow-delay="0.6s">
										{
											isButtonDisabled ?
												<div className="form-fake-button">
													Получить
													консультацию
												</div>
												:
												<button disabled={isButtonDisabled}>Получить
													консультацию
												</button>
										}
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.7s">
										Отправляя сообщение в мессенджеры и отправляя эту форму, я подтверждаю, что
										принимаю <Link href="/privacy-policy">политику
										конфиденциальности GreetRoute</Link> и согласен на <Link href="/consent">обработку
										персональных данных</Link>.
									</p>
								</form>
								<div className={`form-ok ${showOk ? "active" : ""}`}>
									<div>
										<img src="/img/content/ok.svg" alt="" />
									</div>
									<h3>Ваша форма отправлена!</h3>
									<p>Спасибо за то, что оставили заявку! Наш специалист скоро с вами свяжется по
										указанному вами способу связи.</p>
								</div>
							</div>
							<div className="form-right">
								<div className="soc">
									<a href="https://wa.me/+77776740559" className=" wow fadeInUp" target="_blank"
									   data-wow-delay="0.3s">
										<Image width="32" height="32" src="/img/svg/soc-1.svg" alt="" />
										<span>Наш WhatsApp</span>
									</a>
									<a href="https://t.me/greetroute" className="wow fadeInUp" target="_blank"
									   data-wow-delay="0.4s">
										<Image width="32" height="32" src="/img/svg/soc-2.svg" alt="" />
										<span>Наш Telegram</span>
									</a>
									<a href="https://instagram.com/greetroute" className="wow fadeInUp" target="_blank"
									   data-wow-delay="0.5s">
										<Image width="32" height="32" src="/img/svg/soc-3.svg" alt="" />
										<span>Наш Instagram</span>
									</a>
									<a href="mailto:greetroute@gmail.com" className="wow fadeInUp" target="_blank"
									   data-wow-delay="0.6s">
										<Image width="32" height="32" src="/img/svg/soc-4.svg" alt="" />
										<span>greetroute@gmail.com</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

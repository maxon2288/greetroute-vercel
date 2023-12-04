'use client'

import Image from 'next/image'

export default function Reason() {
	return (
		<>
			<div>
				<div className='number'>
					<div className='number-top wow fadeInDown'>3</div>
					<div className='number-title wow fadeIn' data-wow-delay='0.7s'>
						Преимущества
					</div>
				</div>
				<div className='reason-top'>
					<h2 className='wow fadeInUp'>Почему мы?</h2>
					<p className=' wow fadeInUp' data-wow-delay='0.2s'>
						Основные преимущества перед другими агентствами
					</p>
				</div>
				<div className='reason-items'>
					<div className='reason-item wow fadeInUp' data-wow-delay='0.3s'>
						<div>
							<Image width='30' height='30' src='/img/svg/reason-1.svg' alt='' />
						</div>
						<h3>Стоимость</h3>
						<p>Клиенты довольны результатами благодаря отличному сочетанию цены и качества</p>
					</div>
					<div className='reason-item wow fadeInUp' data-wow-delay='0.5s'>
						<div>
							<Image width='30' height='30' src='/img/svg/reason-2.svg' alt='' />
						</div>
						<h3>Окупаемость</h3>
						<p>Наши услуги обеспечивают окупаемость благодаря привлечению клиентов</p>
					</div>
					<div className='reason-item wow fadeInUp' data-wow-delay='0.7s'>
						<div>
							<Image width='30' height='30' src='/img/svg/reason-3.svg' alt='' />
						</div>
						<h3>Качество</h3>
						<p>Мы относимся к делу системно и серьезно, уделяя особое внимание качеству</p>
					</div>
				</div>
			</div>
		</>
	)
}

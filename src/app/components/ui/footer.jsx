'use client'

import Link from 'next/link'

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<>
			<div className='footer'>
				<div className='wrapper'>
					<div>
						<Link href='/src/pages'>
							<img src='/img/svg/footer-logo.svg' alt='' />
						</Link>
						© GreetRoute {year}. Все права защищены
					</div>
					<ul>
						<li>
							<Link href='/privacy-policy'>Политика конфиденциальности</Link>
						</li>
						<li>
							<Link href='/public-offer'>Публичная оферта</Link>
						</li>
						<li>
							<Link href='/consent'>Обработка данных</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

'use client'

import React from 'react'

import Panel from './panel'

class Accordion extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.activateTab = this.activateTab.bind(this)
	}

	activateTab(index) {
		this.setState((prev) => ({
			activeTab: prev.activeTab === index ? -1 : index
		}))
	}

	render() {
		const panels = [
			{
				label: 'Какие специализации у вас есть в разработке и продвижении сайтов?',
				content: 'Мы специализируемся в создании адаптивных (респонсивных) сайтов, оптимизации под поисковые системы (SEO), контент-маркетинге и управлении рекламными кампаниями.'
			},
			{
				label: 'Как вы демонстрируете результаты продвижения сайта?',
				content: 'Мы предоставляем регулярные отчеты о позициях сайта в поисковых системах, трафике, конверсиях и других метриках, а также обсуждаем их с клиентами.'
			},
			{
				label: 'Поддерживаете ли вы сайт после его запуска?',
				content: 'Мы предоставляем регулярные отчеты о позициях сайта в поисковых системах, трафике, конверсиях и других метриках, а также обсуждаем их с клиентами.'
			},
			{
				label: 'Как моему бизнесу поможет сайт?',
				content: 'Сайт является каналом привлечения клиентов для вашего бизнеса.'
			},
			{
				label: 'Могу ли я сам управлять содержимым своего сайта?',
				content: 'Да. Мы создадим для вас удобную систему управления контентом, чтобы вы могли обновлять информацию на сайте самостоятельно. И покажем как это делается.'
			},
			{
				label: 'Как происходит процесс выбора хостинга для моего сайта?',
				content: 'Мы поможем вам выбрать подходящий хостинг-провайдер, учитывая требования вашего сайта и бюджет.'
			},
			{
				label: 'Как обеспечить быструю загрузку моего сайта?',
				content: 'Мы оптимизируем код, используем кэширование, сжатие изображений и другие техники и инструменты, чтобы обеспечить быструю загрузку страниц на сайте.'
			}
		]
		const { activeTab } = this.state
		return (
			<div className='faq-items' role='tablist'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
					<div className='blur-2'></div>
				</div>
				{panels.map((panel, index) => (
					<Panel key={index} activeTab={activeTab} index={index} {...panel} activateTab={this.activateTab.bind(null, index)} />
				))}
			</div>
		)
	}
}

export default Accordion

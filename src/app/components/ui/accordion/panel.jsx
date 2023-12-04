'use client'

import * as ReactDOM from 'react-dom'
import React from 'react'

class Panel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			height: 0
		}
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this)
			const height = el.querySelector('.panel__inner').scrollHeight
			this.setState({
				height
			})
		}, 333)
	}

	render() {
		const { label, content, activeTab, index, activateTab } = this.props
		const { height } = this.state
		const isActive = activeTab === index
		const innerStyle = {
			height: `${isActive ? height : 0}px`
		}

		return (
			<div className='faq-item wow fadeInUp' data-wow-delay={`0.${this.props.index}s`}>
				<div className='panel' role='tabpanel' aria-expanded={isActive}>
					<button className='faq-head' role='tab' onClick={activateTab}>
						<span>{label}</span>
						<img src='/img/svg/faq-icon.svg' alt='' />
					</button>
					<div className='panel__inner' style={innerStyle} aria-hidden={!isActive}>
						<div className='panel__content'>
							<div className='qna-body faq-body'>
								<div className='qna-body-content faq-body-container'>
									<p>{content}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Panel

import React, { Component } from 'react'

export default class ProductForm extends Component{
	constructor() {
		super()
		this.state = {
			product:{
				name: '',
				price: 0
			}
		}
	}
	render(){
		const { name, price } = this.state.product 
		return(
			<div>
			</div>
		)
	}
}
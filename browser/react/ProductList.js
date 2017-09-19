import React, { Component } from 'react'

export default class ProductList extends Component{
	constructor(){
		super()
		this.state = {
			productList: []
		}
	}
	render(){
		const { productlist } = this.state
		return(
			<div>
			</div>
		)
	}
}
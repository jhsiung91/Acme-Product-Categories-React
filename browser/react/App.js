import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Summary from './Summary'
import axios from 'axios'

export default class App extends Component {
	constructor(){
		super()
		this.state = {
			products: [],
			categories: []
		}
	}
	componentDidMount(){
		return Promise.all([
			axios.get('/api/products'),
			axios.get('/api/categories')
		])
		.then(([products, categories]) =>{
			this.setState({
				products: products.data,
				categories: categories.data
			})
		})
	}
	render(){
		const { products, categories } = this.state
		return(
			<div>
			</div>
		)
	}
}
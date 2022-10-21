import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Header from './components/Header'
import './App.scss'
import ProductDetails from './components/ProductDetails'
import ProductSummary from './components/ProductSummary'

export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

function App() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [selectedProduct, setSelectedProduct] = useState(0)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=5')
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])

	console.log('products', products)
	console.log(selectedProduct)
	return (
		<div className='App'>
			<Header />
			<main className='products-container'>
				<div className='product-container'>
					<motion.div
						className='product-summaries-container'
						initial={{ x: '50%' }}
						animate={{
							x: selectedProduct ? 0 : '50%',
						}}
						transition={{ duration: 1 }}>
						{products.map(product => (
							<ProductSummary
								key={
									product.id
								}
								product={
									product
								}
								isSelected={
									selectedProduct ===
									product.id
								}
								setSelectedProduct={
									setSelectedProduct
								}
							/>
						))}
					</motion.div>
					<motion.div
						className={`product-details-container`}
						initial={
							selectedProduct
								? {
										opacity: 1,
										x: 0,
								  }
								: {
										opacity: 0,
										x: 150,
								  }
						}
						animate={
							selectedProduct
								? {
										opacity: 1,
										x: 0,
								  }
								: {
										opacity: 0,
										x: '100%',
								  }
						}
						transition={{
							ease: 'easeInOut',
							duration: 0.75,
							delay: selectedProduct
								? 0.25
								: 0,
						}}>
						{products.map(product => (
							<ProductDetails
								key={
									product.id
								}
								product={
									product
								}
								isSelected={
									selectedProduct ===
									product.id
								}
							/>
						))}
					</motion.div>
				</div>
			</main>
		</div>
	)
}

export default App

import { Dispatch, SetStateAction } from 'react'
import { TiChevronLeft } from 'react-icons/ti'

import { IProduct } from '../App'
import { motion } from 'framer-motion'
import './ProductSummary.scss'

export interface IProductSummary {
	product: IProduct
	isSelected: boolean
	setSelectedProduct: Dispatch<SetStateAction<number>>
}

const ProductSummary = ({ product, isSelected, setSelectedProduct }: IProductSummary) => {
	return (
		<motion.div className='product-summary-container' whileHover={{ scale: 1.05 }} onClick={() => setSelectedProduct(isSelected ? 0 : product.id)}>
			<motion.img className='product-image' src={product.image} alt={product.title} />
			<motion.h2 className='product-title'>{product.title}</motion.h2>
			<motion.button
				className={`expand-product-button ${isSelected ? 'selected' : ''}`}
				type='button'
				animate={{ rotate: isSelected ? 180 : 0 }}
				transition={{ ease: 'easeInOut', duration: 0.5 }}>
				<TiChevronLeft className='chevron-icon' />
			</motion.button>
		</motion.div>
	)
}

export default ProductSummary

import { Dispatch, SetStateAction } from 'react'
import { TiChevronLeft } from 'react-icons/ti'
import { motion } from 'framer-motion'

import { IProduct } from '../App'
import ProductDetails from './ProductDetails'
import './ProductSummary.scss'

export interface IProductSummary {
	product: IProduct
	isSelected: boolean
	setSelectedProduct: Dispatch<SetStateAction<number>>
}

const ProductSummary = ({ product, isSelected, setSelectedProduct }: IProductSummary) => {
	return (
		<>
			<motion.div
				className='product-summary-container'
				whileHover={{ scale: 1.05 }}
				onClick={() => setSelectedProduct(isSelected ? 0 : product.id)}>
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
			<motion.div
				className='product-details-container-mobile'
				animate={
					isSelected
						? {
								opacity: 1,
						  }
						: {
								opacity: 0,
						  }
				}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: isSelected ? 0.25 : 0,
				}}>
				<ProductDetails product={product} isSelected={isSelected} />
			</motion.div>
		</>
	)
}

export default ProductSummary

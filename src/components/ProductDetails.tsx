import { motion, AnimatePresence } from 'framer-motion'
import StarRatings from 'react-star-ratings'

import { IProduct } from '../App'
import './ProductDetails.scss'

export interface IProductDetails {
	product: IProduct
	isSelected: boolean
}

const ProductDetails = ({ product, isSelected }: IProductDetails) => {
	return (
		<motion.div className={`product-detail-container ${!isSelected ? 'visually-hidden' : ''}`}>
			<div>
				<h3 className='product-price'>${product.price.toFixed(2)}</h3>
				<p className='product-description'>{product.description}</p>
				<div className='product-rating-container'>
					<StarRatings
						rating={product.rating.rate}
						starRatedColor='rgb(255,236,63)'
						starDimension='30px'
						starSpacing='3px'
					/>
					<p className='star-count'>({product.rating.count})</p>
				</div>
			</div>
			<div className='add-to-cart-button-container'>
				<button className='add-to-cart-button' type='button' onClick={() => {}}>
					Add to Cart
				</button>
			</div>
		</motion.div>
	)
}

export default ProductDetails

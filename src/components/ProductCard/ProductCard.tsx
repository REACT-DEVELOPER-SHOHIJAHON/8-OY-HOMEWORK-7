import React from 'react';
import styles from './ProductCard.module.css'; 
import { Product } from '../../types/Product';
import { FaHeart, FaStar } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleLike } from '../../features/wishlist/wishlistSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id)
  );

  const handleLike = () => {
    dispatch(toggleLike(product));
  };

  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.rating}>
          <FaStar /> <span>{product.rating}</span>
        </div>
        <p className={styles.brand}>{product.brand}</p>
      </div>
      <button 
        onClick={handleLike} 
        className={styles.likeButton} 
        aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;

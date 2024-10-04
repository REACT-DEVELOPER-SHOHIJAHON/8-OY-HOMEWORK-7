// src/pages/LikePage.tsx
import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './LikePage.module.css';

const LikePage: React.FC = () => {
  const likedProducts = useAppSelector((state) => state.wishlist.items);

  if (likedProducts.length === 0) {
    return <div className={styles.message}>You have no liked products.</div>;
  }

  return (
    <div className={styles.container}>
      {likedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LikePage;

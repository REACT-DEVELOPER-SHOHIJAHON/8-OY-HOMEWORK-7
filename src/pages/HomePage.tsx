import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const { items: products, status, error } = useAppSelector((state) => state.products);

  if (status === 'loading') {
    return (
      <div className={styles.message}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (status === 'failed') {
    return <div className={styles.message}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;

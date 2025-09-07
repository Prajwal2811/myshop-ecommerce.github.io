import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
// import ProductCard from '../components/ProductCard';
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import CategorySection from "../components/CategorySection";
import CategoryWiseProducts from "../components/CategoryWiseProducts";
import Footer from "../components/Footer";

const Home = () => {
  const { items, loading } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    const categories = [...new Set(items.map((p) => p.category))]; // unique categories
    const categoryProducts = selectedCategory
      ? items.filter((p) => p.category === selectedCategory)
      : [];

  return (
    <div>
      <Banner />

      <div className="container mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <FeaturedProducts products={items} />

            <CategorySection
              categories={categories}
              onSelect={setSelectedCategory}
            />

            {selectedCategory && (
              <CategoryWiseProducts
                category={selectedCategory}
                products={categoryProducts}
              />
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Home;

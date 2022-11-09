import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeView from './views/HomeView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import CompareView from './views/CompareView';
import FavoritesView from './views/FavoritesView';
import ShoppingCartView from './views/ShoppingCartView';
import ProductDetailsViewSpecific from './views/ProductDetailsViewSpecific'
import { ProductContext, FeaturedProductsContext, ThreeProductsContext, FourProductsContext } from './contexts/Context';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

import './sass/style.scss';

function App() {

  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [threeProducts, setThreeProducts] = useState([])
  const [fourProducts, setFourProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json());
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json());
    }
    fetchFeaturedProducts()

    const fetchThreeProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setThreeProducts(await result.json());
    }
    fetchThreeProducts()

    const fetchFourProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFourProducts(await result.json());
    }
    fetchFourProducts()

  }, [setProducts, setFeatured, setThreeProducts, setFourProducts])

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductContext.Provider value={products}>
          <FeaturedProductsContext.Provider value={featured} >
            <ThreeProductsContext.Provider value={threeProducts} >
              <FourProductsContext.Provider value={fourProducts} >
                <Routes>
                  <Route path="/" element={<HomeView />} />
                  <Route path="/products" element={<ProductDetailsView />} />
                  <Route path="/products/:articleNumber" element={<ProductDetailsViewSpecific />} />
                  <Route path="/contacts" element={<ContactsView />} />
                  <Route path="/compare" element={<CompareView />} />
                  <Route path="/favorites" element={<FavoritesView />} />
                  <Route path="/cart" element={<ShoppingCartView />} />
                  <Route path="*" element={<NotFoundView />} />
                </Routes>
              </FourProductsContext.Provider>
            </ThreeProductsContext.Provider>
          </FeaturedProductsContext.Provider>
        </ProductContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;

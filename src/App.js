import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import HomeView from './views/HomeView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import CompareView from './views/CompareView';
import FavoritesView from './views/FavoritesView';
import ShoppingCartView from './views/ShoppingCartView';
import ProductDetailsViewSpecific from './views/ProductDetailsViewSpecific'
import { ProductContext } from './contexts/Context';

import './sass/style.scss';

function App() {

  const [products, setProducts] = useState({ allProducts: [], featuredProducts: [], threeProducts: [], fourProducts: [] })

  useEffect(() => {

    console.log("useffect ran");

    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({ ...products, allProducts: await result.json() });
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({ ...products, featuredProducts: await result.json() });
    }
    fetchFeaturedProducts()

    // const fetchThreeProducts = async () => {
    //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
    //   setProducts({ ...products, threeProducts: await result.json() });
    // }
    // fetchThreeProducts()

    // const fetchFourProducts = async () => {
    //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
    //   setProducts({ ...products, fourProducts: await result.json() });
    // }
    // fetchFourProducts()

  }, [setProducts])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
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
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;

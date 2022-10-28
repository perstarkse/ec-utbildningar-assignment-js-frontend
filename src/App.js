import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import CompareView from './views/CompareView';
import FavoritesView from './views/FavoritesView';
import ShoppingCartView from './views/ShoppingCartView';
import ProductDetailsViewSpecific from './views/ProductDetailsViewSpecific'

import './sass/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductDetailsView />} />
        <Route path="/products/:name" element={<ProductDetailsViewSpecific />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/favorites" element={<FavoritesView />} />
        <Route path="/cart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Layout from './Pages/Layout';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import './App.css'


function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path="/shop/:category" element={<Shop />} />
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path="/ProductDetails/:id/:name" element={<ProductDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>


  )



}

export default App

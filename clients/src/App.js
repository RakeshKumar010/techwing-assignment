import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product'
import Home from './components/Home'
const App = () => {
  return (
      <>
          <BrowserRouter>
              <Nav/>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/product/:id' element={<Product/>} />
                    
          </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
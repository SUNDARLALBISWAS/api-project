import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Allcategory from '../components/Product/Allcategory/Allcategory'
import Header from '../layout/Header'
import Categorywise from '../components/Product/Allcategory/Categorywise/Categorywise'
import Details from '../components/Product/Allcategory/Categorywise/Details/Details'
import Home from '../components/Home/Home'
const Routingpage = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='product' element={<Allcategory />} />
                    <Route path='product/category/:catName' element={<Categorywise />} />
                    <Route path='product/category/:catName/specificprod/:id' element={<Details />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Routingpage
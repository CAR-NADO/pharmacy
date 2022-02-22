import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SubHeader from '../../components/howItsWorksComponents/SubHeader'
import Product from '../../components/ProductList'

const Shop = () => {
  return (
    <div className='shop-parent-div'>
    <div>
    <Header />
    <SubHeader />
    <Product />
    <Footer />
    </div>
  </div>
  )
}

export default Shop;
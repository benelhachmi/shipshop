import React from 'react'

import '././Home.css'
//component
import FiletrProduct from './FilterProduct/FilterProduct'
import ProductList from './ProductList/ProductList'

function Home() {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row" >
                    <FiletrProduct/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home

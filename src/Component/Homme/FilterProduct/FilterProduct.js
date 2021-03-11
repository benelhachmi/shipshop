import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '././FilterProduct.css'
function FilterProduct() {
    const [products, setProducts] = useState([]);
  const type =   axios.get('http://localhost:3000/types');


    useEffect(() => {
        type
        .then(response => {
               setProducts(response.data);
        })
        .catch(console.error)
    })

    
    return (
       
        <div className="card mb-3">
        <div className="card-header">
            <h3>Brands</h3>
        </div>
        <ul className="list-group flex-row flex-wrap">
            {products.map(brand => (
                <li className="list-group-item flex-50">
                    <label className="custom-checkbox text-capitalize"> {brand}
                        <input type="checkbox"
                               name={brand}
                               className="custom-checkbox__input" />
                        <span className="custom-checkbox__span"></span>
                    </label>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default  FilterProduct;

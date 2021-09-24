import React from 'react'
import { Link } from 'react-router-dom'

export default function Index(props) {
    
    const loaded = () => {
        return (
            <div className='index'>
                <Link to='/createform'>
                    Add New Item
                </Link>
                <div className="productlist">
                    {props.products.map((product) => (
                        <div key={product.id} className="product">
                            <Link to={`/products/${product._id}`} style={{textDecoration:'none'}}><h1>{product.name}</h1></Link>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.manufacturer}</h3>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.products ? loaded() : loading()
}

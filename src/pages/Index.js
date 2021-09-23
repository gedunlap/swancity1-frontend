import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index(props) {
    
    const loaded = () => {
        return props.products.map((product) => (
            <div key={product.id} className="product">
                <Link to={`/products/${product._id}`}><h1>{product.name}</h1></Link>
                <img src={product.image} alt={product.name} />
                <h3>{product.manufacturer}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.products ? loaded() : loading()
}

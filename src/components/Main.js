import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Show from '../pages/Show'
import CreateForm from '../pages/CreateForm'

export default function Main(props) {
    const [products, setProducts] = useState(null)

    const URL = 'http://swancity-backend-1.herokuapp.com/'

    const getProducts = async () => {
        const response = await fetch(URL + 'product/')
        const data = await response.json()
        setProducts(data)
    }

    const createProducts = async (product) => {
        await fetch(URL + 'createform/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        })
        getProducts()
    }

    useEffect(() => getProducts(), [])

    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/product">
                    <Products products={products} createProducts={createProducts} />
                </Route>
                <Route 
                    path="/products/:id"
                    render={(rp) => (
                        <Show {...rp} />
                    )}
                />
                <Route path='/createform'>
                    <CreateForm products={products} createProducts={createProducts} />
                </Route>
            </Switch>
        </main>
    )
}

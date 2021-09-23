import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Index from '../pages/Index'
import Show from '../pages/Show'

export default function Main(props) {
    const [products, setProducts] = useState(null)

    const URL = 'https://swancity-backend-1.herokuapp.com/product/'

    const getProducts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProducts(data)
    }

    const createProducts = async (product) => {
        await fetch(URL, {
            method: 'post',
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
                    <Index products={products} createProducts={createProducts} />
                </Route>
                <Route 
                    path="/product/:id"
                    render={(rp) => (
                        <Show {...rp} />
                    )}
                />
            </Switch>
        </main>
    )
}

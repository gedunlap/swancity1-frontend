import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Index from '../pages/Index'
import Show from '../pages/Show'

export default function Main(props) {
    const [product, setProduct] = useState(null)

    const URL = 'https://swancity-backend-1.herokuapp.com/product/'

    const getProduct = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProduct(data)
    }

    const createProduct = async (product) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        })
        getProduct()
    }

    useEffect(() => getProduct(), [])

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
                    <Index product={product} createProduct={createProduct} />
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

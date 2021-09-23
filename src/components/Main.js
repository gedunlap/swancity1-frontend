import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Index from '../pages/Index'
import Show from '../pages/Show'

export default function Main(props) {
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
                    <Index />
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

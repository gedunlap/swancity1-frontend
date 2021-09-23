import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateForm(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        manufacturer: "",
        image: "",
        desc: "",
        price: "",
        category: "",
    })

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createProducts(newForm)
        setNewForm({
            name: "",
            manufacturer: "",
            image: "",
            desc: "",
            price: "",
            category: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={newForm.name}
                name="name"
                placeholder="Item Name"
                required
                onChange={handleChange}
            />
            <input 
                type="text"
                value={newForm.manufacturer}
                name="manufacturer"
                placeholder="Manufacturer"
                required
                onChange={handleChange}
            />
            <input 
                type="text"
                value={newForm.desc}
                name="desc"
                placeholder="Description"
                required
                onChange={handleChange}
            />
            <select name="category" id="category" required>
                <option value="null">Pick One</option>
                <option value="table">Tables</option>
                <option value="chair">Chairs</option>
                <option value="couch">Couches</option>
                <option value="cabinet">Cabinets</option>
            </select>
            <input 
                type="number"
                value={newForm.price}
                name="price"
                placeholder="Price"
                required
                onChange={handleChange}
            />
            <input 
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Image Link"
                required
                onChange={handleChange}
            />
            <input type="submit" value="SUBMIT" />
        </form>
    )
}

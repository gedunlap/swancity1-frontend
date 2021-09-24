import React from 'react'
import { useState } from 'react'

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
        <div className="createpage">
            <form onSubmit={handleSubmit} className="createform">
                <h2>Product Form</h2>
                <input
                    className="formitem"
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Item Name"
                    required
                    onChange={handleChange}
                />
                <input 
                    className="formitem"
                    type="text"
                    value={newForm.manufacturer}
                    name="manufacturer"
                    placeholder="Manufacturer"
                    required
                    onChange={handleChange}
                />
                <input 
                    className="formitem"
                    type="text"
                    value={newForm.desc}
                    name="desc"
                    placeholder="Description"
                    required
                    onChange={handleChange}
                />
                <select name="category" id="category" className="formitem" required>
                    <option value="null">Type</option>
                    <option value="table">Tables</option>
                    <option value="chair">Chairs</option>
                    <option value="couch">Couches</option>
                    <option value="cabinet">Cabinets</option>
                </select>
                <input 
                    className="formitem"
                    type="string"
                    value={newForm.price}
                    name="price"
                    placeholder="$0.00"
                    required
                    onChange={handleChange}
                />
                <input 
                    className="formitem"
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="Image Link"
                    required
                    onChange={handleChange}
                />
                <input type="submit" value="SUBMIT" className="formitem" id="button" />
            </form>
        </div>
    )
}

import React, { useState } from 'react'
import "./style.css"

function CardManager() {
    const products = [
        {id: 1, name: "Book", price: "2000₸"  },
        {id: 2, name: "Laptop", price: "150000₸" },
        {id: 3, name: "Headphones", price: "8000₸" },
        {id: 4, name: "Keyboard", price: "12000₸" }
    ]
    const [addeds, setAddeds] = useState([]) 

    const handleAdd = (e) => {
        e.preventDefault()
        setAddeds([...addeds, products.name, products.price])
    }
    const handleRemove = () =>{
        setAddeds
    }

  return (<>
        <h1>Card Manager</h1>
        <div className='headerContain'>
            <div className='product'>
                Products 🛍️
                    <ul>
                        {products.map((item) => (
                            <li key={item.id}>
                               {item.name} - {item.price} 
                               <button onClick={() => handleAdd} >Add to Card</button>
                            </li>
                        ) )}
                    </ul>
            </div>
            <div className="Cart">
                Cart 🛒
                <ul>
                    {addeds.map((york,index) => (
                        <li key={index}>
                            {york.name} - {york.price}
                            <button onClick={()=> handleRemove}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button>Clear Card</button>
        </div>
  
  </>
  )
}

export default CardManager
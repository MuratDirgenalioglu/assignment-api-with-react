import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './Products.css'

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get('https://northwind.vercel.app/api/products');
            setData(response.data)
        }
        fetchData()
    }, [])
    return (
        <table className='w3-table-all w3-hoverable w3-card-4'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>STOCK</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY PER UNIT</th>
                </tr>
            </thead>
            <tbody>{
                data.map(item =>
                    item.unitsInStock > 0 ? 
                    (<tr className = { item.unitPrice > 20 ? 'red' : '' } key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitsInStock}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.quantityPerUnit}</td>
                    </tr>) 
                    : ''
                )
            }</tbody>
        </table>
    )
}

export default Products
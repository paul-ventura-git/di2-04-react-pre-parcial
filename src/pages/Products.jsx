import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import productsListArray from '../services/products';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    productsListArray()
      .then(items => {
        if(mounted) {
          setProducts(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="container">
      <h1 className="mt-5">Products</h1>
      <hr />
      <button className="btn btn-primary">Agregar Producto</button>
      <table className="table table-hover table-bordered mt-5">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Descuento</th>
            <th scope="col">Rating</th>
            <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.discountPercentage}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td className="d-flex gap-2">
                  <Link to="/view-product"><FaEye /></Link>
                  <Link to="/edit-product"><FaEdit /></Link>
                  <Link to="/delete-product"><FaTrash /></Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

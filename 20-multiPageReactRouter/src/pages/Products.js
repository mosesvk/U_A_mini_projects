import {NavLink} from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <NavLink to='/product-detail/anything'>Product 1</NavLink>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </section>
  )
}

export default Products

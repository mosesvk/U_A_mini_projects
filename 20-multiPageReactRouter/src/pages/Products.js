import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <Link to='/products/p1'>Product 1</Link>
        <Link to='/products/p2'>Product 2</Link>
        <li to='/products/p3'>Product 3</li>
      </ul>
    </section>
  )
}

export default Products

import { useParams, Link } from "react-router-dom"

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId)
    
  return (
    <section>
      <Link to='/products'>Back</Link>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  )
}

export default ProductDetail

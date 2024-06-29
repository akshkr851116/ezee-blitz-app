import React from 'react'
import { useNavigate} from 'react-router-dom'
import ButtonProduct from './ButtonProduct'
import Price from '../extra/Price';
function Product(props) {
  const {product}=props
	const imgPath = "/images/" + product.id + ".jpg";
  const nav=useNavigate()
  const handleClick=()=>{
    nav(`/single/${product.id}`)
  }


  return (
    <div className="col">
      <div className="card h-100" id='product'>
        <img src={imgPath} alt=" " title={product.name} onClick={handleClick} className='card-img-top pointer' />
        <div className="card-body p-4">
        <div className="text-center">
          <h6 className='fw-bolder'>{product.name}</h6>
          <span><Price value={product.price}/></span>
        </div>

      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
        <ButtonProduct product={product}/>
      </div>

      </div>

    </div>
  )
}

export default Product

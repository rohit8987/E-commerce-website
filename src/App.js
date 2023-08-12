import React ,{useState}from 'react'
import Nav from './components/nav'
import Rout from './components/Rout'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Productdetail from './Productdetail'

const App = () => {
  const [cart , setCart] =useState ([])
  const [close, setClose] =useState(false)
  const [detail, setDetail] = useState([])
  const [product , setProduct] =useState(Productdetail)
  const searchbtn =(product) =>{
    const change = Productdetail.filter((x)=>
    {
      return x.Cat === product
    })
    setProduct(change)
  }

  const view =(product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }


  
  const addtocart =(product)=>
  {
    const exsit = cart.find((x) =>
  {
    return x.id === product.id
  })
    if(exsit)
    {
      alert("This product is already added to cart")
    }
    else
    {
      setCart([...cart, {...product , qty:1}])
      alert ("Product is added to cart")
    }
  }
  console.log(cart )
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn} />
    <Rout product ={product} setProduct={setProduct} detail={detail} view ={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App

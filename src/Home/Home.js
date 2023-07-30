import { useEffect, useState } from 'react';
import Productcart from '../companant/Cart/ProductCart';
import Footer from '../companant/shared/Footer';
import Navbar from '../companant/shared/Navbar';
import Navbara from '../companant/unshared/Navbara';
// import Footer from '../companant/shared/Footer';
import './Home.css';
function Home(){
    const[product,setProduct]=useState([]);
    const[count,setCount]=useState();

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((jsonResponse)=>{
            // console.log(jsonResponse);
            setProduct(jsonResponse)
        });
    },[])
function NotifyHome(count){
    console.log("notify Home");
    setCount(count);
}

return(
    <div className='container'>
        <Navbar count={count} />
        <Navbara />
        <div className='row'>
        {product.map((p,i) =>(
            <div key={i} className='col-md-3'>
        <Productcart item={p} key={i}
        Notify={NotifyHome}/>
        </div>
        ))}
        </div>

      <Footer/>  
    </div>
)
}
export default Home
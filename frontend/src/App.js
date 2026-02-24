import React,{useEffect,useState} from "react";
import axios from "axios";

function App(){
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/products")
    .then(res=>setProducts(res.data));
  },[]);

  return(
    <div>
      <h1>Ecommerce Store</h1>
      {products.map(p=>(
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default App;

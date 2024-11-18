import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"

import "./itemListContainer.css"


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

    const getProducts = () => {

        const productsRef = collection(db, "products")
        
        getDocs(productsRef)
        .then((dataDb)=>{
          const productsDb = dataDb.docs.map( (productDb) => { 
            return { id: productDb.id, ...productDb.data() }
                })

                setProducts(productsDb)
              })
            }
            
      const getProductsByCategory = ( ) => {

        const productsRef = collection(db, "products")
        const queryCategories = query(productsRef, where("category", "==", idCategory) )   
        getDocs(queryCategories)
        .then((dataDb) => { 
          const productsDb = dataDb.docs.map((productDb) => { 
            return { id: productDb.id, ...productDb.data() }
           })

           setProducts(productsDb)

         })   

    } 

    useEffect(()=>{
      if (idCategory) {
        getProductsByCategory()
      }else{
        getProducts()
      }
    },[idCategory])


  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
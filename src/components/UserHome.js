import React, {useState , useEffect} from 'react'
import CardForHomeComp from "./CardForHomeComp"

function UserHome() {

    const [desserts , setDesserts] = useState([])

    useEffect(() => {
        fetch("/desserts")
        .then(resp => resp.json())
        .then(data => setDesserts(data))
    }, [])

    // let cookies = desserts.filter(dessert => dessert.dessert_type === "cookie")
    // let qatayefs = desserts.filter(dessert => dessert.dessert_type === "qatayef")
    // let platters = desserts.filter(dessert => dessert.dessert_type === "platters")
    // let kunafas = desserts.filter(dessert => dessert.dessert_type === "kunafa")
    // let cakes = desserts.filter(dessert => dessert.dessert_type === "cakes")
    

  return (
    <CardForHomeComp 
      // cookies = {cookies}
      // qatayefs = {qatayefs}
      // platters = {platters}
      // kunafas = {kunafas}
      // cakes = {cakes}
      desserts = {desserts}
    />
  )
}

export default UserHome
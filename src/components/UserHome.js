import React, {useState , useEffect} from 'react'
import CardForHomeComp from "./CardForHomeComp"

function UserHome() {

    const [desserts , setDesserts] = useState([])

    useEffect(() => {
        fetch("/desserts")
        .then(resp => resp.json())
        .then(data => setDesserts(data))
    }, [])

  return (
    <CardForHomeComp desserts = {desserts}/>
  )
}

export default UserHome
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/API';

export default function Profile(props) {
  const params = useParams();
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    fetchUser()
  },[])
  const fetchUser = ()=>{
    API.getUserByName(params.username).then(data=>{
      setUser(data)
      setIsLoading(false)
     }).catch(err=>{
      console.log(err);
     })
  }
return (
  <>
  {isLoading?<h1>loading</h1>:(
      <div className="Profile">
          <h1>{user.username}'s profile!</h1>
          </div>
    )}
    </>
  )
}

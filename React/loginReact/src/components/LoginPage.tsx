import axios from 'axios';
import { useEffect, useState } from "react"

const loadUsers = async () => {

    try {
      const respuesta = await axios.post('https://dummyjson.com/auth/login');
      return respuesta;
  
    } catch (error) {
      console.log(error);
      return []
    }
  }
  
  export const LoginPage = () => {
  
    useEffect(() => {
      loadUsers().then( users => console.log (users));
    },[]);
  
    return (
      <>
        <h3>Usuarios:</h3>
        
      </>
    )
  }
  

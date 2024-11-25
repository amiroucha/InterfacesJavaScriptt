import axios from 'axios';
import { useEffect } from "react"
import { ReqResUserList } from '../interfaces'

const loadUsers = async () => {
    try {
      const { data } = await axios.post <ReqResUserList> ('https://dummyjson.com/auth/login');
      return data.data;
  
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
  

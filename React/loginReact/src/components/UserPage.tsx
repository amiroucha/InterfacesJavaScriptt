import axios from 'axios';
import { useEffect } from "react"
import { ReqResUserList } from '../interfaces'

const loadUsers = async () => {
    try {
      const { data } = await axios.get <ReqResUserList> ('https://reqres.in/api/users?page=1');
      return data.data;
  
  
    } catch (error) {
      console.log(error);
      return []
    }
  }
  
  
  export const UserPage = () => {
  
    useEffect(() => {
      loadUsers().then( users => console.log (users));
    },[]);
  
    return (
      <>
        <h3>Usuarios:</h3>
        
      </>
    )
  }
  

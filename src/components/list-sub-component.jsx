import React from 'react'; 
import {  useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const TODO_SUB = gql`
  subscription  {
    todo{
        node{
            description
            id  
            isDone
        }
    }
  }
`;








const ListSubComponent = () => {
    
    const { loading, error, data } = useSubscription(TODO_SUB);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
        console.log(data);

  return (

      <h1> test</h1>
  )

}

export default ListSubComponent; 
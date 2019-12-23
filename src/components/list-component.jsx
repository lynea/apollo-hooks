import React, {useEffect} from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TODOS = gql`
  query GET_TODOS {
    todoes(orderBy: createdAt_DESC) {
      id
      description
      isDone
    }
  }
`;

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

const TodoList = () => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_TODOS);

  
  useEffect(() => {
    subscribeToMore({ document: TODO_SUB, 
        updateQuery:(prev, {subscriptionData}) => {
            if (!subscriptionData.data)return prev;
            
        // return {
        //     todoes : [
        //         subscriptionData.data, 
        //         ...prev.data
        //     ],  
        // }
        console.log(prev.todoes)
        console.log(subscriptionData)
    }
        });
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const fetchedTodos = data.todoes;

    
  
  return (
    <>
      <h1>your todos</h1>
      <ul>
        {fetchedTodos.map(({ id, description }) => (
          <div key={id}>
            <li>{description}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

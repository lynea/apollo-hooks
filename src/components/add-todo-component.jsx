import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_TODO = gql`
  mutation AddTodo($description: String!) {
    createTodo(
        data: {description: $description}
        ) {
      id
      description
    }
  }
`;

const AddTodo = () => {
  let input;
  const [addTodo, {loading}] = useMutation(ADD_TODO);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { description: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo; 
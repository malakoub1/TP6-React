import { useReducer } from 'react';

// État initial du compteur
const initialState = { count: 0 };

// Reducer : il reçoit l'état actuel et l'action à appliquer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };

    case 'decrement':
      return { count: state.count - 1 };

    default:
      throw new Error('Action non reconnue');
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Valeur du compteur : {state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>
        Ajouter +1
      </button>

      <button onClick={() => dispatch({ type: 'decrement' })}>
        Enlever -1
      </button>
    </div>
  );
}

export default Compteur;
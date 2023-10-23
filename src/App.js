import { createContext, useState } from 'react';
import './App.css';
import AddNewItem from './components/AddNewItem';


const INITIAL_LIST_STATE = [];
export const ListContext = createContext(null);

function App() {
  const [list, setList] = useState(INITIAL_LIST_STATE)


  return (
    <ListContext.Provider
      value={{ list, setList }}>
        <AddNewItem />
    </ListContext.Provider>
  );
}

export default App;


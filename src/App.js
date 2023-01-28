import './App.css';
import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App=() =>{

  const [searchField,setSearchField]=useState('');
  const [monster,setmonster]=useState([])
  const [filteredMonster,setFilteredMonster]=useState(monster);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users)=>setmonster(users))
    },[]);

    useEffect(()=>{
      const newFilteredmonster=monster.filter((monster) =>
      {return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonster(newFilteredmonster);
    },[monster,searchField]);


  const onSearchChange=(event)=>{
    const searchFieldString= event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (   
    <div className="App">
      <h1 className='app-title'>SEARCH ROBOT EMPLOYEE</h1>
    <SearchBox onChangeHandler={onSearchChange}/>  
    <CardList monsters={filteredMonster}/>
    </div>
  );
};



export default App;

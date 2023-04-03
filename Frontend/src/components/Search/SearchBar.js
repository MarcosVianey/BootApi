import { useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import classes from './SearchBar.module.css';
import axios from "axios";

const SearchBar = (props) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [productsList, setProductsList] = useState([]);
  const iconStyle = {fontSize: "50px"};

  const api = axios.create({
    timeout: 1000 * 10, //timeout de 15 segundos
    baseURL: "https://localhost:7193",
  });

  const handleClick = (event)=>{
    event.preventDefault();
    if(searchTerm != null && searchTerm != ""){
      api
        .get("/Search?termo="+searchTerm)
        .then((response) => setProductsList(response.data))
        .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });

      console.log(productsList);
    }
  };

  const handleChange = (event)=>{
    setSearchTerm(event.target.value);
  };

  return (
    <form className={classes.button}>
      <input 
        value={searchTerm}
        onChange={handleChange}
        className={classes.search} 
        placeholder="Pesquisar" 
        type="text" 
        name="pesquisar"
      />
      <button className={classes.badge} onClick={handleClick}><BiSearch style={{iconStyle}}/></button>
    </form>
  );
};

export default SearchBar;

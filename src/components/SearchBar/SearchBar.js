import React, {useState} from 'react'
import classes from './SearchBar.module.css'
import axios from 'axios'
import Results from './../Results/Results'

const SearchBar = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (event) =>{
        setSearchUsername(event.target.value)
    }               

    const handleClick = async () => {
        console.log(searchUsername);
        try{
            const result = await axios(`https://api.github.com/users/${searchUsername}/repos`);
            setRepos(result);
        }catch(error){
            console.log(error);
        }

    }
   
    return(
        <>
        <div className={classes.SearchBar}>
            <input type="text" placeholder="Enter Username" value={searchUsername} onChange={handleChange}/>
            <button onClick={handleClick}>search</button>
        </div>
      <Results repos={repos} />
      </>
    );
}


export default SearchBar;
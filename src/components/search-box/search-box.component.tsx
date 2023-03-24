
import'./search-box.style.css';
const SearchBox=({onChangeHandler})=>
(
        <input 
        className='search-box' 
            type='search' 
            placeholder='search monster' 
            onChange={onChangeHandler}
            />
        );

export default SearchBox;
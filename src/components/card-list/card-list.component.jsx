

import './card-list.style.css'
const CardList =(props) =>{
   
        const {monsters}=props;
        return <div className="card-list">
            {monsters.map(monster =>(
                <div className="card-container" key={monster.id}>
                <img alt={monster.name} src={`https://robohash.org/${monster.id}?set=set&size=180x180`} />
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
                </div>
              
               
            ))}
        </div>  
}

export default CardList;
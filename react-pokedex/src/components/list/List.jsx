import { useEffect, useState } from 'react';

import Item from './item/Item'
import pokeapi from '../../services/pokeapi'

import './List.scss'



const List = () => {

    const [pokeCount, refreshPokeCount] = useState(0);
    const [pokeList, addMorePokes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const newPokeList = [];
          for (let i = 1; i <= 30; i++) {
            try {
              const response = await pokeapi.get(`/pokemon/${i}`);
              newPokeList.push(response.data);
            } catch (err) {
              console.error("Não foi possível buscar mais Pokes:" + err);
            }
          }
      
          refreshPokeCount(pokeCount + 30);
          addMorePokes([...pokeList, ...newPokeList]);
        };
      
        fetchData();
      }, []);

    return (
        <section className="list-container">
            <div className='list-container__scroll-area'>
                {
                    pokeList.map((pkm) => (
                        <Item 
                            key={pkm.id} 
                            id={pkm.id} 
                            name={pkm.name} 
                            types={[pkm.types[0].type.name, pkm.types[1]?.type.name]} 
                            imgHref={pkm.sprites.other['official-artwork'].front_default}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default List

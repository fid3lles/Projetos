import './Item.scss'

const Item = () => {
  return (
    <div className='item-card'>
      <div className='item-card__status'>
        <h1 className='item-card__status__title'>Bulbasaur</h1>
        <h2 className='item-card__status__id'>#001</h2>
      </div>
      <div className='item-card__info'>
        <ul className='item-card__info__types'> 
          <li>Grass</li>
          <li>Poison</li>
        </ul>
        <div className='item-card__info__splashart-container'>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" /> 
        </div>
      </div>
    </div>
  )
}

export default Item

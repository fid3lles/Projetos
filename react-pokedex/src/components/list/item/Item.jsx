import { elementColors, formatPkmId } from '../../../assets/scripts/util.mjs'

import './Item.scss'

const Item = ({ id, name, types, imgHref }) => {

  const customBgColor = {
    backgroundColor: elementColors[types[0].toUpperCase()]
  };


  return (
    <div className='item-card' style={customBgColor}>
      <div className='item-card__status'>
        <h1 className='item-card__status__title'>{name}</h1>
        <h2 className='item-card__status__id'>{formatPkmId(id)}</h2>
      </div>
      <div className='item-card__info'>
        <ul className='item-card__info__types'> 
          <li>{types[0]}</li>
          <li>{types[1]}</li>
        </ul>
        <div className='item-card__info__splashart-container'>
          <img src={imgHref} alt={name} /> 
        </div>
      </div>
    </div>
  )
}

export default Item

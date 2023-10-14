import './App.scss'
import List from './components/list/List'
import Detail from './components/detail/Detail'

function App() {

  return (
    <div className='pokedex-container'>
      <List></List>
      <Detail></Detail>
    </div>
  )
}

export default App

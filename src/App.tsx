import './App.css';
import Counter from 'components/Counter';
import List from 'components/List';
import ContactContainer from 'components/containers/ContactContainer'


function App () {
  return (
    <div className="App">
      <ContactContainer />
      <div>-------------------------------</div>
      <Counter />
      <div>-------------------------------</div>
      <List />      
    </div>
  )
}

export default App

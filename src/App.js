import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Left from './Components/Left';
import Middle from './Components/Middle';
import Right from './Components/Right';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className='container'>
          <Left />
          <Middle/>
          <Right/>
        </div>
      </main>
    </div>
  );
}

export default App;

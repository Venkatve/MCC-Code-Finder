import './App.css';
import FirstSeg from './components/FirstSeg';
import Form from './components/Form';

function App() {

  return (
    <div className='container-fluid'>
      <h2>Merchant Category Code Finder</h2>
      <span className='divider'></span>
      <FirstSeg/>
      <Form/>
    </div>
  );
}

export default App;

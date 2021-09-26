//import logo from '../assets/image/logo.svg';
import { Routes, store } from '../config';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (//component App dibungkus Provider yg memiliki props store agar store dapat digunakan sebagai state global
    <Provider store = {store}>
      <Routes/>
    </Provider>
  );
}

export default App;

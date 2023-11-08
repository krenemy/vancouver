import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter,Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <Header/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

export default App;

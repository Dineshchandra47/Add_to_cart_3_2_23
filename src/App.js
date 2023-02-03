import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
// import { Toaster } from 'react-hot-toast';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   <ToastContainer />
   {/* <Toaster/> */}
  </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardDetails />} />
      </Routes>
    </>
  )
}

export default App;

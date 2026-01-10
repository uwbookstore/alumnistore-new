import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Merchlist } from './pages';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merchlist' element={<Merchlist />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;

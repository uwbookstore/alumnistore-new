import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Merchlist, Merchdetail } from './pages';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merchlist' element={<Merchlist />} />
        <Route path='/merchdetail' element={<Merchdetail />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;

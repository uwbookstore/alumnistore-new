import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Merchlist, Merchdetail } from './pages';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/alumnistore-new' element={<Home />} />
        <Route path='/alumnistore-new/merchlist' element={<Merchlist />} />
        <Route path='/alumnistore-new/merchdetail' element={<Merchdetail />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;

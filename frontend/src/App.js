import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <!-- header --> */}
        <header className="row">
          <div>
            <a className="brand" href="/">Ecommerce</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/singin">Sign In</a>
          </div>
        </header>
        {/* <!-- main --> */}
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact></Route>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
          </Routes>
        </main>
        {/* Footer */}
        <footer className="row centertunghv">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

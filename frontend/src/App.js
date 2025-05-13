import data from './data';
import Product from './components/Product';

function App() {
  return (
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
        <div className="row centertunghv">
          {/* <!-- Card --> */}
          {
            data.products.map((product) => (
              <Product key={product._id} pros={{ product }} />
            ))
          }
        </div>
      </main>
      {/* Footer */}
      <footer className="row centertunghv">All right reserved</footer>
    </div>
  );
}

export default App;

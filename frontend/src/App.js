import data from './data';

function App() {
  return (
    <div className="grid-container">
      {/* <!-- header --> */}
      <header className="row">
        <div>
          <a className="brand" href="index.html">Ecommerce</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="singin.html">Sign In</a>
        </div>
      </header>
      {/* <!-- main --> */}
      <main>
        <div className="row centertunghv">
          {/* <!-- Card --> */}
          {
            data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`product/${product._id}`}>
                  {/* image size: 680px by 830px */}
                  <img className="medium" src={product.image} alt={product.name} />
                </a>
                <div className="card-body">
                  <a href={`product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  {/* <!-- rating --> */}
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  {/* <!-- price --> */}
                  <div className="price">${product.price}</div>
                </div>
              </div>
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

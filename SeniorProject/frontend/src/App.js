import React from 'react';
import data from './data';
import Product from './components/Product'

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Senior Project</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>

            <main>
                <div className="row center">
                  {
                    data.products.map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))
                  }
                </div>
            </main>

            <footer className="row center">
                Copyright © 2021 Edward Tatta. All rights reserved.
            </footer>
        </div>
  );
}

export default App;

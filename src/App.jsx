import ProductCard from "./components/ProductCard.jsx";
import Products from "./components/products.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <p className="eyebrow">Everyday essentials</p>
        <h1>Product listing</h1>
        <p className="page-description">
          Browse our collection of useful finds, picked for you.
        </p>
      </header>
      <main>
        <ProductCard products={Products} />
      </main>
    </div>
  );
}

export default App;

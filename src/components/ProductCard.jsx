function ProductCard({ products }) {
  return (
    <section className="product-grid" aria-label="Products">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-details">
            <p className="product-category">{product.category}</p>
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0,
              }).format(product.price)}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProductCard;

import { home, products } from "../content/index.js";

// The Applications section of the Home page: one card per product,
// showing its official image, type, name (linked), maker, and a sentence.
function ProductGallery() {
  return (
    <section className="section band-paper">
      <div className="container">
        <span className="eyebrow">Applications</span>
        <h2 className="section-heading">{home.today.heading}</h2>
        <p className="intro">{home.today.intro}</p>

        <ul className="product-grid">
          {products.map(function (product) {
            return (
              <li className="product" key={product.id}>
                {/* The frame color shows behind images that are not 2:1 */}
                <div className="product-frame" style={{ background: product.frame }}>
                  <img className="product-image" src={product.image} alt={product.name} />
                </div>
                <div className="product-body">
                  <span className="tag tag-sage">{product.type}</span>
                  <h3>
                    <a href={product.url} target="_blank" rel="noreferrer">
                      {product.name}
                    </a>
                  </h3>
                  <span className="product-maker">{product.maker}</span>
                  <p>{product.text}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="closing-note">{home.today.closing}</p>
      </div>
    </section>
  );
}

export default ProductGallery;

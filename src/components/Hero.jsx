// The opening block of every page: a headline where the last words are
// italic, a short paragraph, optional buttons, and one photograph.
function Hero({ hero, children }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          {hero.lead} <em>{hero.emphasis}</em>
        </h1>
        <p className="lede">{hero.lede}</p>

        {children && <div className="hero-actions">{children}</div>}

        <img className="hero-image" src={hero.image} alt={hero.imageAlt} />
      </div>
    </section>
  );
}

export default Hero;

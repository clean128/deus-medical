import { NoIndex } from '../components/NoIndex'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { HERO_BOX_IMAGE, SHIPPING, SECURITY_MESSAGE } from '../config'
import { products } from '../data/products'
import './CatalogPage.css'

export function CatalogPage() {
  return (
    <main className="catalog-page">
      <NoIndex />
      {/* Hero - Imagen principal Deus Medical */}
      <section className="catalog-hero">
        <div className="catalog-hero-image">
          <img
            src={HERO_BOX_IMAGE}
            alt="Deus Medical - Caja de producto profesional"
            loading="eager"
          />
        </div>
      </section>

      {/* Garantías y Sello de Seguridad - Lo primero que ve el usuario */}
      <section className="catalog-guarantees">
        <div className="guarantees-grid">
          <div className="guarantee-card">
            <div className="guarantee-icon">🚚</div>
            <h3>Entrega rápida</h3>
            <p>Entrega en {SHIPPING.deliveryDays}</p>
          </div>
          <div className="guarantee-card">
            <div className="guarantee-icon">💰</div>
            <h3>Envío fijo</h3>
            <p>Coste de envío: {SHIPPING.fixedCost} €</p>
          </div>
          <div className="guarantee-card guarantee-security">
            <div className="guarantee-icon">🛡️</div>
            <h3>Sello de seguridad</h3>
            <p>{SECURITY_MESSAGE}</p>
          </div>
        </div>
      </section>

      {/* Catálogo de productos */}
      <section className="catalog-products">
        <h2 className="catalog-section-title">Catálogo de productos</h2>
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">
                  {product.price.toFixed(2)} €
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección de confianza - Pedidos reales */}
      <section className="catalog-trust">
        <h2 className="catalog-section-title">Pedidos reales de nuestros clientes</h2>
        <p className="trust-subtitle">
          Fotos reales de pedidos personalizados antes del envío
        </p>
        <div className="trust-gallery">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="trust-gallery-item">
              <div className="trust-placeholder">
                <span>Foto del pedido {i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

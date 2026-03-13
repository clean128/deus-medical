import { useEffect, useRef, useState } from 'react'
import { NoIndex } from '../components/NoIndex'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { HERO_BOX_IMAGE, SHIPPING, SECURITY_MESSAGE } from '../config'
import { products } from '../data/products'
import './CatalogPage.css'

export function CatalogPage() {
  const catalogRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="catalog-page">
      <NoIndex />

      {/* Hero - Full viewport, immersive */}
      <section className="catalog-hero">
        <div className="catalog-hero-bg">
          <img
            src={HERO_BOX_IMAGE}
            alt="Deus Medical"
            loading="eager"
          />
          <div className="catalog-hero-overlay" />
        </div>
        <div className={`catalog-hero-content ${visible ? 'visible' : ''}`}>
          <span className="catalog-hero-badge">Deus Medical</span>
          <h1 className="catalog-hero-title">
            Tu mejor versión<br />empieza aquí
          </h1>
          <p className="catalog-hero-subtitle">
            Productos de calidad. Entrega rápida. Máxima seguridad.
          </p>
          <a href="#catalogo-productos" className="catalog-hero-cta" onClick={(e) => { e.preventDefault(); scrollToCatalog() }}>
            Ir a la tienda
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Garantías - Compact, modern pills */}
      <section className="catalog-guarantees">
        <div className="guarantees-inner">
          <div className="guarantee-item">
            <div className="guarantee-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div>
              <strong>Entrega rápida</strong>
              <span>{SHIPPING.deliveryDays}</span>
            </div>
          </div>
          <div className="guarantee-divider" />
          <div className="guarantee-item">
            <div className="guarantee-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <strong>Envío fijo</strong>
              <span>{SHIPPING.fixedCost} €</span>
            </div>
          </div>
          <div className="guarantee-divider" />
          <div className="guarantee-item guarantee-security">
            <div className="guarantee-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <strong>Sello de seguridad</strong>
              <span>{SECURITY_MESSAGE}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo-productos" ref={catalogRef} className="catalog-products">
        <div className="catalog-products-inner">
          <div className="catalog-section-header">
            <span className="section-label">Productos</span>
            <h2 className="catalog-section-title">Catálogo</h2>
          </div>
          <div className="products-grid">
            {products.map((product, i) => (
              <article key={product.id} className="product-card" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price.toFixed(2)} €</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="catalog-trust">
        <div className="catalog-trust-inner">
          <div className="catalog-section-header">
            <span className="section-label">Prueba social</span>
            <h2 className="catalog-section-title">Pedidos reales</h2>
            <p className="trust-subtitle">Fotos de pedidos personalizados antes del envío</p>
          </div>
          <div className="trust-gallery">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="trust-gallery-item">
                <div className="trust-placeholder">
                  <span>Pedido {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

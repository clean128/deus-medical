import { useEffect, useRef, useState } from 'react'
import { NoIndex } from '../components/NoIndex'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { HERO_BOX_IMAGE, SHIPPING } from '../config'
import { products } from '../data/products'
import './CatalogPage.css'

const trustOrderImages = [
  {
    sharp: '/orders/IMG-20260317-WA0009.jpg',
    blur: '/orders_blur/IMG-20260318-WA0009.jpg',
  },
  {
    sharp: '/orders/IMG-20260317-WA0010.jpg',
    blur: '/orders_blur/IMG-20260318-WA0010.jpg',
  },
  {
    sharp: '/orders/IMG-20260317-WA0011.jpg',
    blur: '/orders_blur/IMG-20260318-WA0011.jpg',
  },
  {
    sharp: '/orders/IMG-20260317-WA0012.jpg',
    blur: '/orders_blur/IMG-20260318-WA0012.jpg',
  },
  {
    sharp: '/orders/IMG-20260317-WA0013.jpg',
    blur: '/orders_blur/IMG-20260318-WA0013.jpg',
  },
  {
    sharp: '/orders/IMG-20260317-WA0014.jpg',
    blur: '/orders_blur/IMG-20260318-WA0014.jpg',
  },
]

export function CatalogPage() {
  const catalogRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <main className="catalog-page">
      <NoIndex />

      {/* Hero section - matching client's design */}
      <section className="hero">
        <div className="hero-bg" />

        {/* Logo top-left */}
        <div className="hero-logo">
          <img src="/deus-logo.png" alt="Deus Medical" />
        </div>

        <div className={`hero-layout ${visible ? 'visible' : ''}`}>
          {/* LEFT HALF: text + product image (on top, higher z-index) */}
          <div className="hero-half-left">
            <h1 className="hero-title">
              <span className="hero-title-white">Tu mejor versión</span>
              <span className="hero-title-italic">empieza aquí</span>
            </h1>
            <p className="hero-subtitle">
              Productos de calidad, Entrega rápida,<br />
              Máxima seguridad.
            </p>
            {/* <button className="hero-cta" onClick={scrollToCatalog}>
              IR A TIENDA
            </button> */}
            <div className="hero-product">
              <img src={HERO_BOX_IMAGE} alt="DECAMED 250 - Deus Medical" />
            </div>
          </div>

          {/* RIGHT HALF: shipping card (behind, lower z-index) */}
          <div className="hero-half-right">
            <div className="hero-shipping-card">
              <h3 className="hero-shipping-title">
                ENVÍO <span className="green">{SHIPPING.fixedCost}</span> EUROS
              </h3>
              <ul className="hero-shipping-list">
                <li>
                  <span className="check">&#10004;</span>
                  <span>Tiempo de envío entre 24 y 72 horas.</span>
                </li>
                <li>
                  <span className="check">&#10004;</span>
                  <span>Envíos extremadamente seguros.</span>
                </li>
                <li>
                  <span className="check">&#10004;</span>
                  <span>Enviamos <strong>foto con tu nombre y el producto</strong> antes de enviarlo. Máxima seguridad.</span>
                </li>
              </ul>
            </div>
            <p className="hero-whatsapp-label">Compras solo por WhatsApp</p>
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
            <span className="section-label">Envíos Diarios</span>
            <h2 className="catalog-section-title">Pedidos reales</h2>
            <p className="trust-subtitle">Fotos de pedidos personalizados antes del envío</p>
          </div>
          <div className="trust-gallery">
            {trustOrderImages.map((image, index) => (
              <article key={image.sharp} className="trust-gallery-item">
                <div className="trust-photo-frame">
                  <div
                    className="trust-photo-backdrop"
                    style={{ backgroundImage: `url(${image.blur})` }}
                    aria-hidden="true"
                  />
                  <img
                    className="trust-photo-image"
                    src={image.sharp}
                    alt={`Pedido real ${index + 1} de Deus Medical`}
                    loading="lazy"
                  />
                  <div className="trust-photo-overlay" aria-hidden="true" />
                  <div className="trust-photo-watermark" aria-hidden="true">
                    <img src="/deus-logo.png" alt="" />
                  </div>
                  <span className="trust-photo-badge">Pedido real {index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

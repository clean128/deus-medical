import { Link } from 'react-router-dom'
import './BridgePage.css'

export function BridgePage() {
  return (
    <main className="bridge-page">
      <div className="bridge-background">
        <div className="bridge-glow" />
        <div className="bridge-pattern" />
      </div>

      <div className="bridge-content">
        <h1 className="bridge-headline">
          <span className="bridge-headline-prefix">ACTIVA TU</span>
          <span className="bridge-headline-main">MODO INSTINTO.</span>
        </h1>

        <p className="bridge-tagline">
          ENERGÍA. DISCIPLINA. PRECISIÓN CIENTÍFICA.
        </p>
        <p className="bridge-subtagline">
          Tu mejor versión empieza en la investigación.
        </p>

        <div className="bridge-hero-image">
          <img
            src="/bridge-hero.png"
            alt="Deus Medical - Energía y precisión"
            loading="eager"
          />
        </div>

        <div className="bridge-footer">
          <span className="bridge-brand">DEUS MEDICAL</span>
          <Link to="/catalogo" className="bridge-cta">
            MÁS INFO
          </Link>
        </div>
      </div>
    </main>
  )
}

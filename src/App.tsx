import { useMemo, useState } from 'react'
import './App.css'
import { hubZones, portfolioData, type RouteId } from './data/content'
import { useReducedMotion } from './hooks/useReducedMotion'

function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteId>('hub')
  const prefersReducedMotion = useReducedMotion()

  const pageTitle = useMemo(() => {
    if (currentRoute === 'hub') return 'Hub - Cave à Vin'
    const route = hubZones.find((zone) => zone.id === currentRoute)
    return route ? `${route.title} - Cave à Vin` : 'Cave à Vin'
  }, [currentRoute])

  const renderPage = () => {
    switch (currentRoute) {
      case 'cellier':
        return (
          <section className="page-shell">
            <p className="eyebrow">Le Cellier</p>
            <h1>Les millésimes</h1>
            <p className="lead">Des projets rangés comme des bouteilles sur une étagère.</p>
            <ul className="content-list">
              {portfolioData.projects.map((project) => (
                <li key={project.id}>
                  <strong>{project.title}</strong>
                  <span>
                    {project.year} · {project.type}
                  </span>
                  <small>{project.summary}</small>
                </li>
              ))}
            </ul>
          </section>
        )
      case 'portrait':
        return (
          <section className="page-shell">
            <p className="eyebrow">Le Portrait</p>
            <h1>{portfolioData.profile.name}</h1>
            <p className="lead">{portfolioData.profile.role}</p>
            <p className="body-copy">{portfolioData.profile.intro}</p>
          </section>
        )
      case 'lutrin':
        return (
          <section className="page-shell">
            <p className="eyebrow">Le Lutrin</p>
            <h1>Carte des cépages</h1>
            <div className="skill-grid">
              {portfolioData.skills.map((group) => (
                <div key={group.category} className="skill-card">
                  <h2>{group.category}</h2>
                  <ul className="content-list compact">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )
      case 'expedition':
        return (
          <section className="page-shell">
            <p className="eyebrow">L'Expédition</p>
            <h1>Contact</h1>
            <p className="lead">Une caisse ouverte pour échanger.</p>
            <ul className="content-list compact">
              <li>{portfolioData.contact.email}</li>
              <li>{portfolioData.contact.github}</li>
              <li>{portfolioData.contact.linkedin}</li>
            </ul>
          </section>
        )
      case 'hub':
      default:
        return (
          <section className="hub-shell">
            <div className="hub-scene" aria-label="Vue d'ensemble de la cave">
              {hubZones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  className="hub-zone"
                  onClick={() => setCurrentRoute(zone.id)}
                  aria-label={zone.title}
                >
                  <span className="hub-zone__label">{zone.label}</span>
                  <span className="hub-zone__title">{zone.title}</span>
                  <span className="hub-zone__description">{zone.description}</span>
                </button>
              ))}
            </div>
          </section>
        )
    }
  }

  return (
    <>
      <title>{pageTitle}</title>
      <div className="app-shell">
        <header className="topbar">
          <button
            type="button"
            className="back-link"
            onClick={() => setCurrentRoute('hub')}
            aria-label="Retour au hub"
          >
            {currentRoute === 'hub' ? 'Cave à Vin' : 'Retour au Hub'}
          </button>
          <div className="status-pill">
            {prefersReducedMotion ? 'Mode réduit' : 'Animations actives'}
          </div>
        </header>

        <main>{renderPage()}</main>
      </div>
    </>
  )
}

export default App

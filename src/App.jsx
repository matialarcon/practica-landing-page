function App() {
  return (
    <>
      <section className="title-section">
        <Title />
      </section>
      <section className="trust-section">
        <Trust />
      </section>
      <section className="benefits-section">
        <Benefits />
      </section>
    </>
  )
}

function Title() {
  return(
    <>
      <div className="heading">TUESTE SUR · CAFÉ DE ESPECIALIDAD</div>
      <h1 className="title">Grano fresco, tostado <em className="title-fragment">esta semana</em>, en tu puerta el viernes.</h1>
      <p className="description">Compramos directo a productores de Salta y Jujuy y tostamos en lotes chicos para que tu café nunca pierda aroma en un depósito.</p>
      <div className="button-form-container">
        <button className="button-form">QUIERO PROBARLO</button>
      </div>
    </>
  )
}

function Trust() {
  return(
    <>
      <div className="trust-item"><em className="trust-item-number">+180</em>SUSCRIPTORES ACTIVOS</div>

      <div className="trust-item"><em className="trust-item-number">4</em>PRODUCTORES ALIADOS</div>

      <div className="trust-item"><em className="trust-item-number">72h</em>DEL TUESTE A TU PUERTA</div>
    </>
  )
}

function Benefits() {
  return(
    <>
      <div>
        <h2 className="benefits-title">Trazabilidad real</h2>
        <p className="benefits-description">Cada bolsa lleva la finca, la variedad y la fecha de tueste. Sabés exactamente qué estás tomando.</p>
      </div>
      <div>
        <h2 className="benefits-title">Molienda a pedido</h2>
        <p className="benefits-description">Elegís el punto de molienda según tu método: prensa francesa, filtro, espresso o grano entero.</p>
      </div>
      <div>
        <h2 className="benefits-title">Sin suscripción forzada</h2>
        <p className="benefits-description">Pedís cuando querés. Si te gustó, volvés. No hay cargos automáticos ni permanencia.</p>
      </div>
    </>
  )
}

export default App

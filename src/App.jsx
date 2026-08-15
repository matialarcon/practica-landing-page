import { useEffect, useRef, useState } from "react"

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
      <section className="contact-section">
        <Contact />
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
      <div className="benefits-item">
        <h2 className="benefits-title">Trazabilidad real</h2>
        <p className="benefits-description">Cada bolsa lleva la finca, la variedad y la fecha de tueste. Sabés exactamente qué estás tomando.</p>
      </div>
      <div className="benefits-item">
        <h2 className="benefits-title">Molienda a pedido</h2>
        <p className="benefits-description">Elegís el punto de molienda según tu método: prensa francesa, filtro, espresso o grano entero.</p>
      </div>
      <div className="benefits-item">
        <h2 className="benefits-title">Sin suscripción forzada</h2>
        <p className="benefits-description">Pedís cuando querés. Si te gustó, volvés. No hay cargos automáticos ni permanencia.</p>
      </div>
    </>
  )
}

function Contact() {
  const [submit, setSubmit] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [preparationMethod, setPreparationMethod] = useState("")
  const timer = useRef(null)

  useEffect(() => {
    return() => clearTimeout(timer.current)
  }, [])

  const handlerSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('https://formspree.io/f/xljrlkjo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, preparationMethod})
      })

      if (!res.ok) throw new Error('Error al enviar')

      setSubmit(true)
      setName("")
      setEmail("")
      setPreparationMethod("")
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setSubmit(false)
      }, 4000);

    } catch(error) {
      console.error('Error al enviar el formulario', error)
    }
  }

  return(
    <>
      <div className="contact-item">
        <h3 className="contact-title">Dejanos tus datos y te escribimos</h3>
        <p className="contact-description">Contanos qué método de preparación usás y te recomendamos el primer lote. Respondemos en menos de 24 horas.</p>
      </div>
      <div className="contact-item">
        <form className="form" onSubmit={handlerSubmit}>
          <div className="form-item">
            <label htmlFor="name" className="form-label">NOMBRE</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} title="Rellena este campo." className="form-input" required/>
          </div>
          <div className="form-item">
            <label htmlFor="email" className="form-label">EMAIL</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} title="Rellena este campo." className="form-input" required/>
          </div>
          <div className="form-item">
            <label htmlFor="preparation-method" className="form-label">CONTANOS TU MÉTODO DE PREPARACIÓN</label>
            <textarea id="preparation-method" placeholder="Ej: uso prensa francesa, tomo 2 tazas por día..." value={preparationMethod} onChange={(e) => setPreparationMethod(e.target.value)} className="form-input form-textarea"></textarea>
          </div>
          <div>
            <button className="form-button-submit">ENVIAR</button>
          </div>
        </form>
        {submit && (
          <div className="correct-submit-container">
            <div className="correct-submit">✓ Recibimos tu mensaje. Te escribimos pronto.</div>
          </div>
        )}
      </div>
    </>
  )
}

export default App

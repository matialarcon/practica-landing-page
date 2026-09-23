import { useState, useEffect, useRef } from "react"

export function Contact() {
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)
    const [messageError, setMessageError] = useState('')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [preparationMethod, setPreparationMethod] = useState("")
    const timer = useRef(null)
    const refMessage = useRef(null)

    useEffect(() => {
        return() => clearTimeout(timer.current)
    }, [])

    useEffect(() => {
        refMessage.current?.scrollIntoView({ behavior: 'smooth'})
    }, [submit, error])

    const handlerSubmit = async (event) => {
        event.preventDefault()

        //Aquí se envian los datos
        try {
            const res = await fetch('https://formspree.io/f/xljrlkjo', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                },
                body: JSON.stringify({ name, email, preparationMethod})
        })

        //En caso de que el envio sea correcto se limpian todos los inputs y se cambia el valor del estado setSubmit a true para renderizar un mensaje de envio correcto. Además se activa un temporizador para que al pasar 4 segundos desaparezca dicho mensaje.
        if (res.ok) {
            setName("")
            setEmail("")
            setPreparationMethod("")
            setSubmit(true)
            setError(false)
            clearTimeout(timer.current)
            timer.current = setTimeout(() => {
                setSubmit(false)
            }, 4000)
        }
        //En caso de que el envio sea incorrecto se cambia el valor del estado setError a true para renderizar un mensaje de envio fallido. Además se activa un temporizador para que al pasar 4 segundos desaparezca dicho mensaje.
        else {
            setError(true)
            setSubmit(false)
            setMessageError('Error al enviar los datos')
            clearTimeout(timer.current)
            timer.current = setTimeout(() => {
                setError(false)
            }, 4000)
        }

        } catch {
            setError(true)
            setSubmit(false)
            setMessageError('No pudimos conectar. Revisá tu conexión e intentá de nuevo.')
            clearTimeout(timer.current)
            timer.current = setTimeout(() => {
                setError(false)
            }, 4000)
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
                <div className="correct-submit-container" ref={refMessage}>
                    <div className="correct-submit">✅ Recibimos tu mensaje. Te escribimos pronto.</div>
                </div>
                )}
                {error && (
                <div className="failed-submit-container" ref={refMessage}>
                    <div className="failed-submit">❌ {messageError}</div>
                </div>
                )}
            </div>
        </>
    )
}
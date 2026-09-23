import { useRef } from "react"
import { Title } from "./components/Title"
import { Trust } from "./components/Trust"
import { Benefits } from "./components/Benefits"
import { Contact } from "./components/Contact"

function App() {
  const refContact = useRef(null)

  //Este método sirve para scrollear hasta la sección de contacto.
  const handlerRefContact = () => {
    refContact.current?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <main>
      <section className="title-section">
        <Title handlerRefContact={handlerRefContact} />
      </section>
      <section className="trust-section">
        <Trust />
      </section>
      <section className="benefits-section">
        <Benefits />
      </section>
      <section className="contact-section" ref={refContact}>
        <Contact />
      </section>
    </main>
  )
}

export default App

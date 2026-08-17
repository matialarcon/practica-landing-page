export function Title({ handlerRefContact }) {
    return(
        <>
            <div className="heading">TUESTE SUR · CAFÉ DE ESPECIALIDAD</div>
            <h1 className="title">Grano fresco, tostado <em className="title-fragment">esta semana</em>, en tu puerta el viernes.</h1>
            <p className="description">Compramos directo a productores de Salta y Jujuy y tostamos en lotes chicos para que tu café nunca pierda aroma en un depósito.</p>
            <div className="button-form-container">
                <button className="button-form" onClick={handlerRefContact}>QUIERO PROBARLO</button>
            </div>
        </>
    )
}
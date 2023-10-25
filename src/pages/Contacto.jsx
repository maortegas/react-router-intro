
const Contacto = () => {
  return (
    <div className="centrar">
        <h1>Cuentanos, ¿ en que te podemos ayudar?</h1>
        <div className="formulario">
            <form className="form" >
                <div className="campo">
                    <label htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="campo">
                    <label htmlFor="message">Descripción</label>
                    <textarea name="message" id="message"  />
                </div>
                <div className="formButton"><button className='button' type="submit">Enviar</button></div>
            </form>
   
        </div>
    </div>
  )
}

export default Contacto
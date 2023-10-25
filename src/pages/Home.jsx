import cake from '../assets/img/bg-cake.png'

const Home = () => {
  return (
    <div className="centrar">
        <h1>Bienvenido a Happy Cake</h1>
        <br />
        <h4>El lugar de los pasteles Felices</h4>
        <br />
        <img src={cake} alt="" />
    </div>
  )
}

export default Home
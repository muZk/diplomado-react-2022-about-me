import './App.css';
import img from './images/profile-image.png';
import work from './images/work.png';
import serie from './images/serie.png';
import heroe from './images/hisoka.png';

function ProfileHeader() {
  return (
    <>
      <img src={img} alt="Imagen de perfil" />
      <h1>Soy Nico</h1>
      <p>Aquí encontrarás algunas cosas sobre mí</p>
    </>
  )
}

function FavoriteItem({ image, intruction, description }) {
  return (
    <div>
      <img src={image} alt="" />
      <p className="bold">{intruction}</p>
      <p>{description}</p>
    </div>
  )
}

function FavoriteItems() {
  return (
    <div className="favorite-items">
      <FavoriteItem image={work} intruction="Me dedico a..." description="Crear aplicaciones web" />
      <FavoriteItem image={serie} intruction="Mi serie favorita es..." description="Lost" />
      <FavoriteItem image={heroe} intruction="Mi héroe favorito es..." description="Hisoka" />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <FavoriteItems />
    </div>
  );
}

export default App;

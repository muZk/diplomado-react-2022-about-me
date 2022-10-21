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

function FavoriteItems() {
  return (
    <div className="favorite-items">
      <Work />
      <FavoriteSerie />
      <FavoriteHero />
    </div>
  )
}

function Work() {
  return (
    <div>
      <img src={work} alt="Meme del perrito" />
      <p className="bold">Me dedico a...</p>
      <p>Crear aplicaciones web</p>
    </div>
  )
}

function FavoriteHero() {
  return (
    <div>
      <img src={heroe} alt="Hisoka" />
      <p className="bold">Mi héroe favorito es...</p>
      <p>Hisoka</p>
    </div>
  )
}

function FavoriteSerie() {
  return (
    <div>
      <img src={serie} alt="Lost" />
      <p style={{ fontWeight: 'bold' }}>Mi serie favorita es...</p>
      <p>Lost</p>
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

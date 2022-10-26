import './App.css';
import work from './images/work.png';
import serie from './images/serie.png';
import heroe from './images/hisoka.png';
import ProfileHeader from './components/ProfileHeader';
import FavoriteItem from './components/FavoriteItem';
import FavoriteItems from './components/FavoriteItems';

export default function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <FavoriteItems>
        <FavoriteItem image={work} intruction="Me dedico a..." description="Crear aplicaciones web" />
        <FavoriteItem image={serie} intruction="Mi serie favorita es..." description="Lost" />
        <FavoriteItem image={heroe} intruction="Mi héroe favorito es..." description="Hisoka" />
      </FavoriteItems>
    </div>
  );
}

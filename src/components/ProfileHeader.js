import img from '../images/profile-image.png';

export default function ProfileHeader() {
  return (
    <>
      <img src={img} alt="Imagen de perfil" />
      <h1>Soy Nico</h1>
      <p>Aquí encontrarás algunas cosas sobre mí</p>
    </>
  )
}

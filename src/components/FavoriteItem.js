export default function FavoriteItem({ image, intruction, description }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{intruction}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}

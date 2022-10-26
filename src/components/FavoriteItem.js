export default function FavoriteItem({ image, intruction, description }) {
  return (
    <div>
      <img src={image} alt="" />
      <p className="bold">{intruction}</p>
      <p>{description}</p>
    </div>
  )
}

import "./index.css"


export const CardIcones = ({img, title, text}) => {
  return (
    <div className="cardIcones">
      <img src={img} alt="icone" className="icon" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
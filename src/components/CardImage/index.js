import "./index.css";

export const CardImage = ({ img, title, description }) => {
  return (
    <div className="card-image">
      <div className="card-image-text-container">
        <h3>{title}</h3>
        <p> {description} </p>
      </div>
      <img src={img} />
    </div>
  );
};

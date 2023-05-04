export const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={img} />
      <h3> {title} </h3>
      <p> {description} </p>
    </div>
  );
};

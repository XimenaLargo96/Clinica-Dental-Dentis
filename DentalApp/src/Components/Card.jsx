/* eslint-disable react/prop-types */

export default function Card({img , title , description}) {
  return (
    <div className="card-container">
      <img className="card-image" src={img} />
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <button>Gestionar</button>
    </div>
  );
}

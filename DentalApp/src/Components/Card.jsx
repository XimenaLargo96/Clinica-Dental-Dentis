/* eslint-disable react/prop-types */

export default function Card({img , title , description}) {
  return (
    <div className="card-container">
      <img src={img} width="200px" />
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <button>Ir</button>
    </div>
  );
}

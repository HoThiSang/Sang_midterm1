export default function Place(props) {
  const { id, title,  image:{src, alt} } = props ;
  return (
    <li key={id} className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}

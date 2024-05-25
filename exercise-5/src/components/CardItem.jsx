const CardItem = (props) => {
    const {id , name, title, description, image:{src, alt} } = props;
    return (
        <div className="card">
          <h4>{name}</h4>
          <small>{title}</small>
          <p>
            {description}
          </p>
          <img src={src} alt={alt} />
        </div>

    )
}

export default CardItem
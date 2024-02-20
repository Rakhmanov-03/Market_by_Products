import "./index.css";

function Card(props) {
  const { phone } = props;
  return (
    <div className="card-wrapper">
      <img src={phone.thumbnail} alt="" />
      <h3>{phone.title}</h3>
      <h3>{phone.price + "$"}</h3>
      <div className="info">
        <h3>{phone.brand}</h3>
        <div className="rating-style">
          <h3>{phone.rating}</h3>
          <span>⭐</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

// {
//    <div className="cars-wrapper">
//       {phones.products.map((phone, index) => {
//         return <Card key={index} phone={phone}></Card>;
//       })}
//     </div>
// }

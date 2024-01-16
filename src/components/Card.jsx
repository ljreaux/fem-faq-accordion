import Header from "./Header";
import Body from "./Body";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

import star from "../assets/images/icon-star.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={star} alt="star emblem" />
      <p>FAQs</p>
    </div>
  );
}

import "./style.css";

export default function avatar({ avatar, color }) {
  return (
    <div
      className="avatar-img"
      style={{
        backgroundImage: `url(${avatar})`,
        border: `4px solid ${color}`
      }}
    />
  );
}

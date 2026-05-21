export default function ServiceCard({ icon, iconAlt, title, children }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt={iconAlt} width="40" />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{children}</p>
      </div>
    </li>
  );
}

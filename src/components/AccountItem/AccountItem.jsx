import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AccountItem({ image, name, username }) {
  return (
    <div className="account__item__wrapper">
      <img className="account__item_avatar" src={image} alt={name} />
      <div className="account__item_info">
        <h4 className="account__item_info-name">
          <span>{name}</span> <FontAwesomeIcon className="account__item_info-tick" icon={faCircleCheck} />
        </h4>
        <span className="account__item_info-username">{username}</span>
      </div>
    </div>
  );
}

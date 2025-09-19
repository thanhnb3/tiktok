import logo from "../../assets/image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__inner">
        {/* logo */}
        <div className="header__inner__logo">
          <img src={logo} alt="Tiktok" />
        </div>
        {/* search */}
        <div className="header__inner__search">
          <input
            className="header__inner__search-input"
            type="text"
            placeholder="search accounts and videos"
            spellCheck="false"
          />
          <button className="header__inner__search-clear">
            {/* icon clear */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* Loading */}
          <FontAwesomeIcon
            className="header__inner__search-loading"
            icon={faSpinner}
          />
          {/* button search */}
          <button className="header__inner__search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {/* actions */}
        <div className="header__inner__actions"></div>
      </div>
    </header>
  );
}

export default Header;

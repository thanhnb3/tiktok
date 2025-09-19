import { useState } from "react";
import logo from "../../assets/image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
// components
import Popper from "../../components/Popper/Popper.jsx";
import AccountItem from "../../components/AccountItem/AccountItem.jsx";
// images
import avatar1 from "../../assets/image/avatar/avatar_1.jpg";
import avatar2 from "../../assets/image/avatar/avatar_2.png";
import avatar3 from "../../assets/image/avatar/avatar_3.jpg";
import avatar4 from "../../assets/image/avatar/avatar_4.jpg";
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <header className="header__wrapper">
      <div className="header__inner">
        {/* logo */}
        <div className="header__inner__logo">
          <img src={logo} alt="Tiktok" />
        </div>
        {/* search */}
        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <Popper>
                <h4 className="text-[14px] py-1 px-3 leading-[20px] font-semibold text-gray-500">
                  Account
                </h4>
                <AccountItem
                  image={avatar1}
                  name="Nguyễn Bá Thành"
                  username="thanh.nb2311"
                />
                <AccountItem
                  image={avatar2}
                  name="Nguyễn Bá Thành"
                  username="thanh.nb2311"
                />
                <AccountItem
                  image={avatar3}
                  name="Nguyễn Bá Thành"
                  username="thanh.nb2311"
                />
                <AccountItem
                  image={avatar4}
                  name="Nguyễn Bá Thành"
                  username="thanh.nb2311"
                />
              </Popper>
            </div>
          )}
        >
          <div className="header__inner__search">
            <input
              value={searchResult}
              onChange={handleChange}
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
        </Tippy>
        {/* actions */}
        <div className="header__inner__actions"></div>
      </div>
    </header>
  );
}

export default Header;

// images

import Tippy from "@tippyjs/react/headless";
// components
import Popper from "../Popper/Popper.jsx";
import AccountItem from "../AccountItem/AccountItem.jsx";
export default function MenuRight({ children }) {
  return (
    <Tippy
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className="w-[224px]" tabIndex="-1" {...attrs}>
          <Popper>
            <h2>Menu Items</h2>
          </Popper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

import MenuItem from "./MenuItem.jsx";

import Tippy from "@tippyjs/react/headless";
// components
import Popper from "../Popper/Popper.jsx";
export default function MenuRight({ children, items = [] }) {
  //   Hàm render MenuItem
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive={true}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="w-[224px] py-2.5" tabIndex="-1" {...attrs}>
          <Popper>{renderItems()}</Popper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

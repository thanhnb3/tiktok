import { Link } from "react-router-dom";

export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  size = "medium",
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button"; // Mặc định là thẻ button HTML thông thường
  const props = { onClick, ...passProps }; // Gom các props vào object props

  // Nếu có prop 'to' -> sử dụng Link của React Router
  if (to) {
    props.to = to; // Thêm prop 'to' vào object props
    Comp = Link; // Đổi component thành Link
  }
  // Nếu có prop 'href' -> sử dụng thẻ a HTML
  else if (href) {
    props.href = href; // Thêm prop 'href' vào object props
    Comp = "a"; // Đổi component thành thẻ a
  }
  // Bước 1: Định nghĩa object chứa các classes cho từng size
  const classes = {
    small: "px-2 py-1 text-sm min-w-[88px]",
    medium: "px-4 py-1.5 text-base min-w-[100px]",
    large: "px-6 py-2 text-lg min-w-[120px]",
  };

  // Bước 2: Lấy ra class tương ứng với size được truyền vào
  const sizeClasses = classes[size];

  return (
    <Comp
      className={`font-semibold rounded-xl cursor-pointer ${sizeClasses} ${
        primary ? "bg-red-500 text-white" : ""
      } ${
        outline
          ? "border border-solid border-red-500 text-red-500 hover:bg-button-hover"
          : ""
      } ${text ? "hover:underline" : ""} ${
        rounded
          ? "rounded-3xl shadow-2xl border border-solid border-border-rounded"
          : ""
      }`}
      {...props}
    >
      <span>{children}</span>
    </Comp>
  );
}

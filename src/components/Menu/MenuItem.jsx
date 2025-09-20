export default function MenuItem({ data }) {
  return (
    <button className="w-full py-2.5 px-4 hover:bg-gray-100 flex items-center text-[16px] font-normal leading-[22px] cursor-pointer">
      <span className="mr-2.5 w-5 text-center">{data.icon}</span>
      <span className="text-gray-900 font-semibold">{data.title}</span>
    </button>
  );
}

export default function button({ to, href, children, onClick }) {
  let Comp = "button";
  return (
    <Comp>
      <span>{children}</span>
    </Comp>
  );
}

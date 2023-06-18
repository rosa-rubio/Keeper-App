import "../index.css";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {year}</p>;
    </footer>
  );
}

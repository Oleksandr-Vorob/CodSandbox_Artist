import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header>
      <h1>Leonardo da Vinci</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Biography
            </Link>
          </li>
          <li>
            <Link className="link" to="famous_painting/">
              The most famous painting
            </Link>
          </li>
          <li>
            <Link className="link" to="collection/">
              Collection of paintings
            </Link>
          </li>
          <li>
            <Link className="link" to="add_painting/">
              Add painting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

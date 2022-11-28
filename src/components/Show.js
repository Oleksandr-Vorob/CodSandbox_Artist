export default function show(props) {
  return props.pict.map((item, i) => (
    <div key={i} className="newCollection">
      <img src={item.url} alt="img" />
      <span>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>Genre: {item.genre}</p>
        <p>Author: {item.author}</p>
        <p>Year of writing: {item.year}</p>
      </span>
    </div>
  ));
}

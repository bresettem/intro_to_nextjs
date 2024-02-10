function Header(props) {
  return <h1>{props.title}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);

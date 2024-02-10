function Header({ title }) {
  console.log(title); // React
  return <h1>{title}</h1>;
}

function HeaderTemplateLiteral({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return "Default title";
  }
}

function HeaderReturnedValue({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
function HeaderTernary({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  return (
    <div>
      <Header title="React" />
      <HeaderTemplateLiteral title="Template Literal" />
      <HeaderReturnedValue title="Returned Value" />
      <HeaderTernary title="Ternary Operator" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);

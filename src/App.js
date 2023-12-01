import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="John Doe" />
      <Greeting name="Jane Doe" />
      <Greeting name="Jessica" />
    </div>
  );
}

function Greeting({ name }) {
  if (name === "Jessica") {
    return <h1>Hello Coach {name}!</h1>;
  } else {
    return <h1>Hello {name}!</h1>;
  }
}

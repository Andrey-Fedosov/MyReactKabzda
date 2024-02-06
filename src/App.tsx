import "./App.css";
import { Rating } from "./components/Rating";
import { Accordion } from "./components/Accordion";

export function App() {
  return (
    <div className="App">
      <PageTitle title="This is App Component" />
      <Rating value={4} />
      <Accordion />
      <Rating value={0} />
      <PageTitle title="Users" />
      <Accordion />
      <Rating value={2} />
    </div>
  );
}

export function PageTitle(props: { title: string }) {
  console.log("Title has rendering");
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}

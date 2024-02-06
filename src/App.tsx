import "./App.css";
import { Rating } from "./components/Rating";
import { Accordion } from "./components/Accordion";
import { OnOffToggler } from "./OnOff";

export function App() {
  return (
    <div className="App">
      <PageTitle title="This is App Component" />
      <OnOffToggler isOn />
      <Accordion title="Tits" isCollapsed />
      <Rating value={5} />

      <PageTitle title="Users" />
      <OnOffToggler isOn={false} />
      <Accordion title="Pussies" isCollapsed={false} />
      <Rating value={3} />
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

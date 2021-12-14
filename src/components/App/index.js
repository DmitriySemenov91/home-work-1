import { Profile } from "../tutorial-9/profileClassComponent";
import { ProfileFunc } from "../tutorial-9/profileFuncComponent";

function App() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <Profile name="Дима" registredAt={today} />
      <br />
      <ProfileFunc name="Дима" registredAt={today} />
    </div>
  );
}

export default App;

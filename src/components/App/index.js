import { Profile } from "../tutorial-9/profileClassComponent";
import { ProfileFunc } from "../tutorial-9/profileFuncComponent";

function App() {
  const today = new Date().toLocaleDateString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <Profile name="Дима Семенов" registredAt={today} />
      <br />
      <ProfileFunc name="Дима Семенов" registredAt={today} />
    </div>
  );
}

export default App;

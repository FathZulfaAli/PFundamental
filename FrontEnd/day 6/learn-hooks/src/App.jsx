/** @format */

import "./App.css";
import AutoFocusInput from "./AutoFocusInput";
import CounterActionable from "./CounterActionable";
import DeepComponent from "./DeepComponent";
import DisplayOddEventNumber from "./DisplayOddEvenNumber";
import Todo from "./Todo";
import Counter from "./counter";
import TitleChanger from "./titlechanger";

function App() {
  return (
    <>
      <Counter></Counter>
      <TitleChanger></TitleChanger>
      <AutoFocusInput></AutoFocusInput>
      <DisplayOddEventNumber />
      <DeepComponent />
      <CounterActionable />
      <Todo />
    </>
  );
}

export default App;

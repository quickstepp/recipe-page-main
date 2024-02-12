import { Image } from "./components/image/Image";
import { Introduction } from "./components/introdution/Introduction";
import { PreparationTime } from "./components/preparationTime/PreparationTime";
import { Ingredients } from "./components/ingredients/Ingredients";
import { Instructions } from "./components/instructions/Instructions";
import { Nutrition } from "./components/nutrition/Nutrition";

function App() {
  return (
    <div className="m-auto flex flex-col flex-wrap gap-y-6 bg-white p-6 sm:max-h-[750px] sm:rounded-3xl">
      <Image />
      <Introduction />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
}

export default App;

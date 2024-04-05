import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="rectangle">
        <div>
          <img src="image-omelette.jpeg" alt="" />
        </div>
        <div className="name mb-3">
            Simple Omelette Recipe
        </div>
        <div className="description mb-3">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </div>
        <div className="rectangle2 mb-3">
          <section className=" mb-2 prep">Preparation time</section>
          <div>
            <li className=" mb-1"><span>Total: </span>Approximately 10 minutes</li>
            <li className=" mb-1"><span>Preparation: </span>5 minutes</li>
            <li><span>Cooking: </span>5 minutes</li> 
          </div>
        </div>
        <div className=" mb-3 ingr">
          Ingredients
        </div>
        <div>
          <li className=" mb-1">2-3 large eggs</li>
          <li className=" mb-1">Salt to taste</li>
          <li className=" mb-1">Pepper to taste</li>
          <li className=" mb-1">1 tablespoon of butter or oil</li>
          <li className=" mb-3">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </div>
        <hr />
        
        <div className=" mt-3 mb-3 instr">
          Instructions
        </div>
        <div className="num-list">
          <li className=" mb-1.5"><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className=" mb-1.5"><span>Heat the pan:</span>  Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li className=" mb-1.5"><span>Cook the omelette:</span>  Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li className=" mb-1.5"><span>Add fillings(optional):</span>  When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li className=" mb-1.5"><span>Fold and serve:</span>  As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li className=" mb-3"><span>Enjoy:</span>  Serve hot, with additional salt and pepper if needed.</li>
        </div>
        <hr />
        
        <div className=" mt-3 mb-3 nutr">
         Nutrition 
        </div>
        <div className="regT mb-3">
          Nutrition The table below shows nutritional values per serving without the additional fillings.
        </div>
        <div className="flex mb-2">
          <div className=" flex-1 regT">Calories</div>
          <div className=" flex-1 numb"> 277kcal</div>
        </div>
        <hr />
        <div className="flex mb-2 mt-2">
          <div className=" flex-1 regT">Carbs</div>
          <div className=" flex-1 numb"> 0g</div>
        </div>
        <hr />
        <div className="flex mb-2 mt-2">
          <div className=" flex-1 regT">Protein</div>
          <div className=" flex-1 numb"> 20g</div>
        </div>
        <hr />
        <div className="flex mb-2 mt-2">
          <div className=" flex-1 regT">Fat</div>
          <div className=" flex-1 numb"> 22g</div>
        </div>
        <hr />
        
      </div>
    </main>
  );
}

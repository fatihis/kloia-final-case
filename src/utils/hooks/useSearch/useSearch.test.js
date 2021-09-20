import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearch } from "./useSearch";
import data from "../../../utils/db/coffees.json";

const flatWhiteData = [
  {
    title: "Flat White",
    description:
      "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
    ingredients: ["Espresso", "Steamed Milk"],
    category: "hot",
    id: 14,
  },
];

const hotBeverages = [
  {
    title: "Black",
    description:
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    ingredients: ["Coffee"],
    category: "hot",
    id: 1,
  },
  {
    title: "Latte",
    description:
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    ingredients: ["Espresso", "Steamed Milk"],
    category: "hot",
    id: 2,
  },
  {
    title: "Cappuccino",
    description:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    ingredients: ["Espresso", "Steamed Milk", "Foam"],
    category: "hot",
    id: 3,
  },
  {
    title: "Americano",
    description:
      "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
    ingredients: ["Espresso", "Hot Water"],
    category: "hot",
    id: 4,
  },
  {
    title: "Espresso",
    description:
      "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
    ingredients: ["1oz Espresso"],
    category: "hot",
    id: 5,
  },
  {
    title: "Doppio",
    description:
      "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
    ingredients: ["2oz Espresso"],
    category: "hot",
    id: 6,
  },
  {
    title: "Cortado",
    description:
      "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
    ingredients: ["1oz Espresso", "1oz Steamed Milk"],
    category: "hot",
    id: 7,
  },
  {
    title: "Red Eye",
    description:
      "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
    ingredients: ["Coffee", "Espresso"],
    category: "hot",
    id: 8,
  },
  {
    title: "Galão",
    description:
      "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
    ingredients: ["Espresso", "Foamed milk"],
    category: "hot",
    id: 9,
  },
  {
    title: "Lungo",
    description:
      "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
    ingredients: ["Long pulled espresso"],
    category: "hot",
    id: 10,
  },
  {
    title: "Macchiato",
    description:
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
    ingredients: ["Espresso", "Foam"],
    category: "hot",
    id: 11,
  },
  {
    title: "Mocha",
    description:
      "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate"],
    category: "hot",
    id: 12,
  },
  {
    title: "Ristretto",
    description:
      "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
    ingredients: ["Short pulled espresso"],
    category: "hot",
    id: 13,
  },
  {
    title: "Flat White",
    description:
      "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
    ingredients: ["Espresso", "Steamed Milk"],
    category: "hot",
    id: 14,
  },
  {
    title: "Affogato",
    description:
      "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
    ingredients: ["Espresso", "Ice cream"],
    category: "hot",
    id: 15,
  },
  {
    title: "Café au Lait",
    description:
      "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
    ingredients: ["Coffee", "Steamed Milk"],
    category: "hot",
    id: 16,
  },
  {
    title: "Irish",
    description:
      "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
    ingredients: ["Coffee", "Whiskey", "Sugar", "Cream"],
    category: "hot",
    id: 17,
  },
  {
    title: "Guayoyo",
    description:
      "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
    ingredients: ["Coffee", "Traditional", "Hot Water"],
    category: "hot",
    id: 18,
  },
  {
    title: "Cortadito",
    description:
      "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
    ingredients: ["Coffee", "Traditional", "Sugar", "Milk"],
    category: "hot",
    id: 19,
  },
  {
    title: "Aguapanela Coffee",
    description:
      "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
    ingredients: ["Coffee", "Sweet", "Panela", "Traditional"],
    category: "hot",
    id: 20,
  },
];
test("passing both search text and filter should return all data", () => {
  const { result } = renderHook(() => useSearch(data, "", ""));

  expect(result.current.data).toStrictEqual(data);
});

test("passing only search text should return related data", () => {
  const { result } = renderHook(() => useSearch(data, "flat w", ""));

  expect(result.current.data).toStrictEqual(flatWhiteData);
});

test("passing only filter should return related data", () => {
  const { result } = renderHook(() => useSearch(data, "", "hot"));
  expect(result.current.data).toStrictEqual(hotBeverages);
});

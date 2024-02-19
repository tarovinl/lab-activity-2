import Poster from "./Poster.js";

const posterData = [
  {
    name: "MONSTERA",
    price: "35.00",
    photoName: "./monstera.png",
  },
  {
    name: "BEANIE",
    price: "35.00",
    photoName: "./beanie.png",
  },
  {
    name: "WILL",
    price: "35.00",
    photoName: "./responding.png",
  },
  {
    name: "NEWYORK",
    price: "35.00",
    photoName: "./newyork.png",
  },
  {
    name: "DEADLINE",
    price: "35.00",
    photoName: "./deadline.png",
  },
];
export default function NewPrints() {
  return (
    <div className="newprints">
      <div className=" posters border-b-2 border-black bg-orange-100">
        <ul className=" divide-y divide-black gap-0  columns-5   border-black">
          <li className="">
            {posterData.map((poster) => (
              <Poster posterObj={poster} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

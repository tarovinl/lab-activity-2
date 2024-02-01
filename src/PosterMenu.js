import Poster from "./Poster.js"

const posterData = [
    {
        name: "BUSY",
        price:"35.00",
        photoName:"./busy.png"
    },
    {
        name: "CHANGING",
        price:"35.00",
        photoName:"./changing.png"
    },
    {
        name: "IMPORTANT",
        price:"35.00",
        photoName:"./important.png"
    }
];
export default function PosterMenu(){
    return(
        <div className="postermenu">
        <div className="  posters border-b-2 border-black bg-orange-100">
        <ul className=" gap-0 columns-3   border-black">
            <li className="">
            {posterData.map((poster => <Poster posterObj={poster}/>))}
            </li>
        </ul>
        </div>
        </div>
        
    );
}

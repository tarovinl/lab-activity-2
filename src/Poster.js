
function Poster(props){
    return(
        <div className="divide-x-2 divide-black">
            <div className="  ">
        <img src={props.posterObj.photoName} alt={props.posterObj.name}></img>
        </div>
        <div className="text-2xl p-4 pl-6  justify-between flex " >
         <p >{props.posterObj.name}</p>
         <span>from ${props.posterObj.price}</span>
         </div>
        </div>
    );
}


export default Poster
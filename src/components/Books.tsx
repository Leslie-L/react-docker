type Props={
    id:String,
    title:String,
    img:String
}
function Books({id,title,img}:Props) {
    return(
        <div key={id} className="relative flex flex-col justify-center">
            <button className="w-9 h-9 rounded-full bg-slate-200 absolute left-2 top-2 grid place-content-center">➕</button>
            <img className="w-36 h-52 rounded-md" alt={title} src={`${img}`} />
            <button className="my-2 p-2 font-semibold bg-green-300 text-black rounded-md hover:bg-green-700 hover:text-white">Ver mas</button>
        </div>
    )
}
export default Books;
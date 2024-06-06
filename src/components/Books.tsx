type Props={
    id:String,
    title:String,
    img:String
}
function Books({id,title,img}:Props) {
    return(
        <div key={id}>
            <img className="w-36 h-52 rounded-md" alt={title} src={`${img}`} />
        </div>
    )
}
export default Books;
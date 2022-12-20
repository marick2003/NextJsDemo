import Link from "next/link";
const backBtn =(props)=>{
    console.log(props);
    return (
    <div>
        <Link href={`${props.url}`}>Back</Link>
    </div>
    )
}
export default backBtn;
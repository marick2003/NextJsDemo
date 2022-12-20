import Link from "next/link";
import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";
import BackBtn from '../../components/BackBtn';

// This gets called on every request
export async function getStaticProps () {
    // Fetch data from external API
    const res = await fetch(`https://my-json-server.typicode.com/marick2003/typicode/posts`)
    const post = await res.json()
  
    // Pass data to the page via props
    return { props: { post } }
  }
  

  export default  function PostList({ post }){
    const router = useRouter();
    const handlerBack=(path)=>{
        router.push(path)
    }
    return (
        <div> 
            <div >
                <BackBtn url='/' />
            </div>
            <ul>{
            post.map(element => (
                <li>
                    <Link href={`/posts/${element.id}`}>
                        {element.title}
                    </Link>
                </li>
            ))
            } 
            </ul>
        </div>
    )
}


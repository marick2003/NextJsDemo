
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const post = await res.json()
  
    // Pass data to the page via props
    return { props: { post } }
  }
export default function FirstPost({post}) {
    return (
    <div>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
    </div>
    
    );
  }
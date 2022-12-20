import { useRouter } from 'next/router'
import styled from 'styled-components';
import useSWR from "swr";
import BackBtn from '../../components/BackBtn';
const Container = styled.div`
  text-align: left;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());
const Post = () => {
  const {query,isReady } = useRouter()
  const { pid } = query
  const { data, error,isLoading } = useSWR(`https://my-json-server.typicode.com/marick2003/typicode/posts/${pid}`, fetcher);
 
  console.log(data)
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>
    <BackBtn url='/posts/'/>
    hello {data.id}!
    </div>;
}

export default Post
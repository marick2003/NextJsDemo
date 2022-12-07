import { useRouter } from 'next/router'
import styled from 'styled-components';
const Container = styled.div`
  text-align: left;
`;
const Post = () => {
  const {query,isReady } = useRouter()
  const { pid } = query
    if(!isReady){
        return <p>loading...</p>
    }else{
        return <Container>Post: {pid}</Container>
    }
 
}

export default Post
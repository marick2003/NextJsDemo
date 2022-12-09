import { useRouter } from 'next/router'

function DatePage(){
    const {query,isReady } = useRouter()
    const { date } = query
    console.log(date);
    return;
}

export default DatePage;
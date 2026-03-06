import { useEffect, useState } from "react";

const DateTime = () => {
    const [date, setdate] = useState("");
    useEffect(()=>{
        const setdatetime = () => {
            const dateobj= new Date();
            const datestr = dateobj.toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).toLowerCase().replace(/,/g, '');
            setdate(datestr)
        }
        setdatetime();
        const interval=setInterval(setdatetime,1000)
        return ()=>clearInterval(interval);
    },[])
  return (
    <div>{date}</div>
  )
}

export default DateTime
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { timeState } from "../recoil/timer";

export default function Timer() {
  const [time, setTime] = useRecoilState(timeState);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000)

    return (() => {
      clearInterval(interval);
    })
  }, [setTime])

  return (
    <>
    {time}
    </>
  )
}
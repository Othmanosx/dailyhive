import { hotjar } from "react-hotjar"
import { useEffect } from "react"

function HotJar() {
  useEffect(() => {
    hotjar.initialize(3405522, 6)
  }, [])
  return <></>
}
export default HotJar

"use client"

import { useEffect } from "react"
import load from "./lib/particles"

const Particles = () => {
  useEffect(() => {
    load("particles-js", "particles/config.json", function () {
      console.log("callback - particles-js config loaded")
    })
  }, [])

  return (
    <>
      <div id="particles-js" className="fixed bottom-0 left-0 right-0 top-0 z-[-1] h-full" />
    </>
  )
}

export default Particles

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
			<div
				id="particles-js"
				className="h-full fixed top-0 right-0 bottom-0 left-0 z-[-1]"
			/>
		</>
	)
}

export default Particles

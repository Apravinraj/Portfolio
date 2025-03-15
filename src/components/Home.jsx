import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null)
  const coords = useRef({ x: 0, y: 0 })
  const circlesRef = useRef([])
  const colors = ["#1f005c", "#370769", "#4e1276", "#641d82", "#7a298f", "#90359b", "#a642a7", "#bd4fb3"]

  useEffect(() => {
    // ✅ Initialize Typed.js for auto-typing effect
    const typed = new Typed(typedRef.current, {
      strings: ["Programmer .", "UI/UX Designer .", "Web Developer ."],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    })

    // ✅ Initialize circles (set position and color)
    circlesRef.current.forEach((circle, index) => {
      circle.x = coords.current.x
      circle.y = coords.current.y
      circle.style.backgroundColor = colors[index % colors.length]
    })

    // ✅ Handle mouse movement
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX
      coords.current.y = e.clientY
    }

    // ✅ Listen for mouse movement (set passive to false for smooth updates)
    window.addEventListener('mousemove', handleMouseMove, { passive: false })

    // ✅ Animation loop for cursor effect
    const animateCircles = () => {
      let x = coords.current.x
      let y = coords.current.y

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          // Position circles relative to mouse
          circle.style.left = `${x - circle.offsetWidth / 2}px`
          circle.style.top = `${y - circle.offsetHeight / 2}px`

          // Scale circles
          const scale = (circlesRef.current.length - index) / circlesRef.current.length
          circle.style.transform = `scale(${scale})`

          // Save last known position
          circle.x = x
          circle.y = y

          // Make circles follow each other with easing
          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0]
          x += (nextCircle.x - x) * 0.3
          y += (nextCircle.y - y) * 0.3
        }
      })

      // Small delay to prevent race condition
      setTimeout(() => {
        requestAnimationFrame(animateCircles)
      }, 10)
    }

    animateCircles()

    // ✅ Cleanup on component unmount
    return () => {
      typed.destroy()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div id="home" className="home-sec">
      {/* ✅ Mouse-Following Circles */}
      {Array.from({ length: 18 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}

      {/* ✅ Content */}
      <div>
        <div className="text-wrapper">
          <h1>HI THERE</h1>
          <h1>
            I'm a <span className="text-hl" ref={typedRef}></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            corporis ut beatae voluptates temporibus velit sapiente odio commodi
            inventore nulla quam dicta reprehenderit debitis, cumque ipsa
            dolorum ratione esse earum!
          </p>
          <button className="btn-1">About Me</button>
        </div>

        <div className="img-wrapper">
          <img src="src/assets/about.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default Home
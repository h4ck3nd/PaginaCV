import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height
    let nodes = []

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = Math.min(window.innerHeight, 900)
      const count = Math.round((width * height) / 26000)
      nodes = Array.from({ length: Math.min(count, 90) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 140) {
            ctx.strokeStyle = `rgba(43,230,164,${0.14 * (1 - d / 140)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(95,208,255,0.55)'
        ctx.fill()
      }
      animationId = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-950/40 to-void-950" />
    </div>
  )
}

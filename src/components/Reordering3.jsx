"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import { LogoReact, LogoVercel, LogoGithub, LogoNextjs ,LogoNext , Logojs, LogoTail} from "../assets/logo"


export default function Reordering3() {
  const [order, setOrder] = useState(initialOrder)

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000)
    return () => clearTimeout(timeout)
  }, [order])

  return (
    <ul style={container}>
      {order.map((item) => (
        <motion.li key={item.id} layout transition={spring} style={{ ...itemStyle, backgroundColor: item.color }}>
          <item.Logo style={logoStyle} />
        </motion.li>
      ))}
    </ul>
  )
}

const initialOrder = [
  { id: "react", color: "var(--hue-1)", Logo: LogoReact },
 { id: "vercel", color: "var(--hue-2)", Logo: LogoTail },
  { id: "github", color: "var(--hue-3)", Logo: Logojs },
  { id: "nextjs", color: "var(--hue-4)", Logo: LogoNext },
]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

const itemStyle = {
  width: 100,
  height: 100,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
}

const logoStyle = {
  
  filter: "brightness(0) invert(1)", // Makes logos white
}

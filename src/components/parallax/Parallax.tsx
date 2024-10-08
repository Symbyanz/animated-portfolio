import { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }: any) => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d"
                        : "linear-gradient(180deg, #111132, #505064"
            }}
        >
            <motion.h1 style={{ y: yText }} className="parallax__title">{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
            <motion.div className="parallax__mountains"></motion.div>
            <motion.div
                style={{
                    y: yBg,
                    backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
                }}
                className="parallax__planets"
            >
            </motion.div>
            <motion.div style={{ x: yBg }} className="parallax__stars"></motion.div>
        </div>
    )
}

export default Parallax
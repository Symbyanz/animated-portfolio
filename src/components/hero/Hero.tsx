import { Variants, motion } from 'framer-motion'
import './hero.scss'

const textVariants: Variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeatType: 'mirror',
            repeat: Infinity
        }
    }
}

const sliderVariants: Variants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__wrapper">

                <motion.div className="hero__sliding-text" variants={sliderVariants} initial="initial" animate="animate">
                    Writer Content Creator Influencer
                </motion.div>
                <motion.div className="hero__text" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className="hero__subtitle">Harvey Tyler</motion.h2>
                    <motion.h1 variants={textVariants} className="hero__title">Web developer and UI designer</motion.h1>
                    <motion.div className="hero__buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.div className="hero__scroll" variants={textVariants} animate="scrollButton">
                        <img src="/scroll.png" alt="" />
                    </motion.div>
                </motion.div>
                <div className="hero__image">
                    <img src="/hero.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
import { motion, useInView } from 'framer-motion'
import './services.scss'
import { useRef } from 'react';

const variants = {
    initial: {
        x: -100,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="services__text" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="services__title services-title" variants={variants}>
                <div className="services-title__box">
                    <div className="services-title__image">
                        <img src="/people.webp" alt="" />
                    </div>
                    <h1 className="services-title__text">
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="services-title__box">
                    <h1 className="services-title__text">
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button className="services-title__button">What we do?</button>
                </div>
            </motion.div>
            <motion.div className="services__list" variants={variants}>
                <motion.div className="services__item services-item" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2 className="services-item__title">Branding</h2>
                    <p className="services-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti vel inventore sequi ducimus ratione libero modi sapiente animi error.</p>
                    <button className="services-item__button">Go</button>
                </motion.div>
                <motion.div className="services__item services-item" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2 className="services-item__title">Branding</h2>
                    <p className="services-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti vel inventore sequi ducimus ratione libero modi sapiente animi error.</p>
                    <button className="services-item__button">Go</button>
                </motion.div>
                <motion.div className="services__item services-item" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2 className="services-item__title">Branding</h2>
                    <p className="services-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti vel inventore sequi ducimus ratione libero modi sapiente animi error.</p>
                    <button className="services-item__button">Go</button>
                </motion.div>
                <motion.div className="services__item services-item" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2 className="services-item__title">Branding</h2>
                    <p className="services-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti vel inventore sequi ducimus ratione libero modi sapiente animi error.</p>
                    <button className="services-item__button">Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
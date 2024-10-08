import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "/clay-banks-QA7cVisCbs0-unsplash.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, unde pariatur. Voluptatibus repellat eius libero quas repudiandae labore delectus. Laboriosam praesentium voluptatem temporibus officiis quam, neque nemo iure architecto perspiciatis.",
        url: "#",
    },
    {
        id: 2,
        title: "Next.js Commerce",
        img: "/oskar-kadaksoo-ikVL6xdk8go-unsplash.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, unde pariatur. Voluptatibus repellat eius libero quas repudiandae labore delectus. Laboriosam praesentium voluptatem temporibus officiis quam, neque nemo iure architecto perspiciatis.",
        url: "#",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "/clay-banks-LeqHBBRHZUE-unsplash.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, unde pariatur. Voluptatibus repellat eius libero quas repudiandae labore delectus. Laboriosam praesentium voluptatem temporibus officiis quam, neque nemo iure architecto perspiciatis.",
        url: "#",
    },
    {
        id: 4,
        title: "Music App",
        img: "/clay-banks-C-FqIffctHI-unsplash.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, unde pariatur. Voluptatibus repellat eius libero quas repudiandae labore delectus. Laboriosam praesentium voluptatem temporibus officiis quam, neque nemo iure architecto perspiciatis.",
        url: "#",
    },
];

const Single = ({ item }: any) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: ref, 
        // offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section className="portfolio__item portfolio-item">
            <div className="portfolio-item__container">
                <div className="portfolio-item__wrapper">
                    <div className="portfolio-item__image" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="portfolio-item__content" style={{ y }}>
                        <h2 className="portfolio-item__title">{item.title}</h2>
                        <p className="portfolio-item__description">{item.desc}</p>
                        <a href={item.url} className="portfolio-item__link">See Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20, });
    return (
        <div className="portfolio" ref={ref}>
            <div className="portfolio__progress progress">
                <h1 className="progress__title">Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progress__bar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="navbar__wrapper">
                <motion.span initial={{ opacity: 0.5, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="navbar__logo">Vyacheslav</motion.span>
                <div className="navbar__social">
                    <a className="navbar__link" href="#"><img src="/facebook.png" alt="" /></a>
                    <a className="navbar__link" href="#"><img src="/instagram.png" alt="" /></a>
                    <a className="navbar__link" href="#"><img src="/youtube.png" alt="" /></a>
                    <a className="navbar__link" href="#"><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
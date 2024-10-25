'use client'
import { motion } from 'framer-motion'
interface sectionProps{
    ref: React.MutableRefObject<null>
    children: React.ReactNode
}
export const Section = ({children, ref}: sectionProps) => {
    return <motion.section
    ref={ref}
    className='section'
    initial = {{
        opacity: 0,
        y: 50
    }}
    whileInView={{
        opacity: 1,
        y:0
    }}>
        {children}
    </motion.section>
}


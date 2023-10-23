import { Typography } from "@mui/material"
import { motion } from "framer-motion"
import { fadeTransition } from "../transitions"

const Subtittle = ({children, id}) => {
    return (
        <motion.div variants={fadeTransition} whileInView='visible' initial='hidden' viewport={{ once: true }}>
            <Typography 
                id={id} 
                component="h2" 
                fontSize={{lg:'80px',
                           md:'80px',
                           sm:'80px',
                           xs:'40px'}} 
                sx={{fontWeight:900, 
                     color:'text.main',
                     margin:'80px 0',
                     }}>{children}</Typography>
        </motion.div>
    )
}

export default Subtittle
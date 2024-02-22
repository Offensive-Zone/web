
import { Box, Typography } from "@mui/material"
import SubtittleCard from "../subtittle/subtitleCards"
import { motion } from "framer-motion"
import { fadeTransition } from "../transitions"
const CardChoose = ({title,url ,description}) => {
    return (
      <motion.div variants={fadeTransition} initial='hidden' whileInView='visible' viewport={{once:true}}>
        <Box sx={{
          border: '1px solid rgba(255, 255, 255, 0.125)',  
          padding: '35px',  
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
          gap:2,
          maxWidth:'300px',
          height:'400px',
          flex:1
        }}>
              <Box sx={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '90%',
                width: '100%',
                border: '1px solid rgba(255,255,255, 0.255)'
              }}> </Box>
              <SubtittleCard>{title}</SubtittleCard>
              <Typography color={'text.main'} component='p'>{description}</Typography>
             </Box>
      </motion.div>
      
    )}
    
export default CardChoose
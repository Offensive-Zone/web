
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
          width:{xl:'300px',lg:'300px' ,md:'200px'},
          maxWidth:'300px',
          height:'400px',
          transition:'scale, 0.2s',
          '&:hover':{
            transform:'scale(1.03)'
          }
        }}>
              <Box sx={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '90%',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255, 0.255)'
              }}> </Box>
              <SubtittleCard>{title}</SubtittleCard>
              <Typography color={'text.main'} component='p'>{description}</Typography>
             </Box>
      </motion.div>
      
    )}
    
export default CardChoose

import { Box, Typography } from "@mui/material"
import SubtittleCard from "../subtittle/subtitleCards"
const CardChoose = ({title,url ,description}) => {
    return (
        <Box sx={{
          border: '1px solid rgba(255, 255, 255, 0.125)',  
          padding: '35px',  
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
          width:{xl:'300px',lg:'300px' ,md:'200px'},
          maxWidth:'300px',
          height:'400px',
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
      
    )}
    
export default CardChoose
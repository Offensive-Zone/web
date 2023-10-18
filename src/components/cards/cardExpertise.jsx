import { Box,Typography } from "@mui/material"

const CardExpertise = ({children}) => {
    return (
        <Box sx={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            gap:3,
            p:'10px',
            boxShadow:'10px 5px 13px black',
            border:'1px solid black', 
            width:{lg:'400px',md:'400px' ,xs:'300px'}, 
            height:{lg:'500px', xs:'570px'},
            transition:"transform 0.2s",
            '&:hover':{
                transform: 'translateY(-5px)',
                }}}>   
            {children}
        </Box>
    )
}

export default CardExpertise
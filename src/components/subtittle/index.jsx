import { Typography } from "@mui/material"

const Subtittle = ({children, id}) => {
    return (
        <Typography id={id} component="h2" fontSize={{lg:'80px',md:'80px',sm:'80px' ,xs:'40px'}} sx={{fontWeight:900, color:'text.main'}}>{children}</Typography>
    )
}

export default Subtittle
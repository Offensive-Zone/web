import { Typography } from "@mui/material"

const SubtittleCard = ({children, id}) => {
    return (
        <Typography id={id} component="h3" variant="h5" sx={{fontWeight:600,color:'text.main'}}>{children}</Typography>
    )
}

export default SubtittleCard
import { Box} from "@mui/material";
import Subtittle from "../subtittle";
import CardChoose from "../cards/cardChoose";
import { seccion2 } from "../../common/data.js"
import backGround1 from "../../assets/img/fondo.jpg"

const Section3 = () => {
    return (
        <Box sx={{ 
            margin:'120px 0px',
            backgroundColor:'primary.light', 
            width:'100%', 
            height:'auto', 
            display:'flex',
            justifyContent:'center',
            }}>
      <Box sx={{           
                height:'100%', 
                width:{xs:'100%',
                       md:'100%',
                       lg:'100%',
                       xl:'80%'},
                textAlign:'center', 
                display:'flex',              
                flexDirection:{xs:'column',
                               md:'column',
                               lg:'column',
                               xl:'row'} ,
                border:'2px solid grey',
                alignItems:{md:'center',xl:'inherit',xs:'center'},
              }} 
                >
        <Box sx={{
                width:{xl:'50%', lg:'100%'}, 
                backgroundImage:`url(${backGround1})`, 
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                backgroundAttachment: 'fixed'}}>
            <Subtittle id='expertise'>Why Choose Offensive Security Services?</Subtittle>
            <Box sx={{}}>

            </Box>
        </Box>
        <Box sx={{display:'flex', 
                  p:'20px 0',
                  gap:1,
                  flexDirection:{xs:'column',md:'row', xl:'row', lg:'row'},
                  justifyContent:{xl:'space-evenly',lg:'center',md:'center'},
                  flexWrap:'wrap',
                  width:'80%',
                  alignItems:{md:'center',xl:'inherit',xs:'center'},
                  }}>
            {
             seccion2.map((data, index) => {
              return (   <CardChoose key={index} title={data.title} url={data.url} description={data.description}/> )
             }) 
            }
        </Box>
      </Box>
  </Box>
    )
}

export default Section3
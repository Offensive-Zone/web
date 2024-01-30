import { Box} from "@mui/material";
import Subtittle from "../../components/subtittle";
import CardChoose from "../../components/cards/cardChoose.jsx";
import { seccion2 } from "../../common/data.js"

const Section3 = () => {
    return (
        <Box 
        id='whyus'
        sx={{ 
            padding:'120px 0px',
            backgroundColor:'black', 
            width:'100%', 
            height:'auto', 
            display:'flex',
            justifyContent:'center',
            overflowY:'hidden',
            // backgroundImage:'url("../../../public/assets/img/elementBottom.png")', 
            // backgroundSize:'contain',
            // backgroundRepeat:'no-repeat',
            backgroundPosition:'bottom',
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
                backgroundImage:`url('../../assets/img/bkg-triangles.jpg')`, 
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                borderRight:'2px solid grey',
                display:'flex',
                alignItems:'center',
                padding:'0px 1vw'
                }}>
            {/* <video style={{position:'absolute', height:'100%', width:'100%', objectFit:'cover'}} src={videoCode} autoPlay loop></video> */}
            <Subtittle>Why Choose Offensive Security Services?</Subtittle>
        </Box>
        <Box sx={{display:'flex', 
                  // p:'20px 0',
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
import { Box} from "@mui/material";
import Subtittle from "../../components/subtittle";
import CardChoose from "../../components/cards/cardChoose.jsx";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const {t} = useTranslation()
  
  const seccion2 = [
    { title: t('why-us.expertise.title'), url: '../assets/img/expertise.jpg', description: t('why-us.expertise.description') },
    { title: t('why-us.proactive.title'), url: '../assets/img/proactive.jpg', description: t('why-us.proactive.description') },
    { title: t('why-us.confidentiality.title'), url: '../assets/img/confidentiality.jpg', description: t('why-us.confidentiality.description') },
    { title: t('why-us.premium.title'), url: '../assets/img/premium.png', description: t('why-us.premium.description') }
  ];
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
                padding:{lg:'0', xl:'0px 1vw'}
                }}>
            <Subtittle>{t("why-us.title")}</Subtittle>
        </Box>
        <Box sx={{display:'flex', 
                  gap:3,
                  flexDirection:{xs:'column',md:'row', xl:'row', lg:'row'},
                  justifyContent:{xl:'space-evenly',lg:'center',md:'center'},
                  flexWrap:'wrap',
                  width:'80%',
                  alignItems:{md:'center',xl:'inherit',xs:'center'},
                  padding:'20px'
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
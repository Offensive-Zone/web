import { Box } from "@mui/material"
import theme from "../../theme/theme"
import Subtittle from "../../components/subtittle"



const team = [
    {img:'../assets/img/es.png',name:'mixael', rol:'web developer', experience:'1+'},
    {img:'../assets/img/es.png',name:'mixael', rol:'web developer', experience:'1+'},
    {img:'../assets/img/es.png',name:'mixael', rol:'web developer', experience:'1+'},
]

const Team = () =>{
    return (
      <section style={{

      }}>
        <Subtittle>our team</Subtittle>
        <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2vw',
                    margin: '7vh auto',
                    justifyContent: 'center',
        }}>

            {
                team.map((e)=>{
                    return (
                        <Box 
                        sx={{
                            padding: '0.5em 2em',
                            border: '2px solid var(--text-color-alt2)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            width: '465px',
                            columnGap: '1em',
                            display: 'flex',
                            alignItems: 'center',
                            maxHeight: '130px',
                            color:'white',
                            '&:hover': {
                            outline:`5px solid ${theme.palette.tertiary.main}`,
                            } 
                        }}
                        >
                            <img loading="lazy" src={e.img} alt='ADA' style={{
                                width: '100px',
                                height: '100px',
                            }}/>
                            <p style={{textAlign:'initial'}}>
                                <span><b>{e.name}</b></span><br />
                                Rol: {e.rol} <br />
                                <a href={`https://ASDASD`} target="_blank">Profile: profile</a> <br />
                                Experience:{e.experience}
                            </p>
                        </Box>
                    )
                })
            }
        </Box>

        
      </section>
    )
}

export default Team
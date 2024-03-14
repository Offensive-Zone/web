import { Box } from "@mui/material";
import theme from "../../theme/theme";
import Subtittle from "../../components/subtittle";

const team = [
    {img:'../assets/img/ed.jpg',name:'Edgardo Krause', rol:'CyberSecurity', experience:'7+', profile:"https://linkedin.com/in/edgardokrause/"},
    {img:'../assets/img/ma.jpg',name:'Mateo', rol:'Senior Privacy Counsel', experience:'14+', profile:'https://www.linkedin.com/in/mateo-david-g%C3%B3mez-32039a112/'},
    {img:'../assets/img/ce.jpg',name:'Cesar Arreaza', rol:'CyberSecurity', experience:'2+', profile:"https://www.linkedin.com/in/cesar-arreaza/"},
];

const Team = () =>{
    return (
        <section>
            <Subtittle>Our Team</Subtittle>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2vw',
                margin: '7vh auto',
                justifyContent: 'center',
            }}>
                {team.map((e) => (
                    <Box 
                        key={e.name}
                        sx={{
                            padding: '0.5em 2em',
                            border: '2px solid var(--text-color-alt2)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            width: '465px',
                            columnGap: '1em',
                            display: 'flex',
                            alignItems: 'center',
                            maxHeight: '130px',
                            color: 'white',

                            '&:hover': {
                                outline: `5px solid ${theme.palette.tertiary.main}`,
                            } 
                        }}
                    >
                        <img 
                            loading="lazy" 
                            src={e.img} 
                            alt={e.name} 
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%', // Hace que la imagen sea redonda
                            }}
                        />
                        <div style={{textAlign:'initial'}}>
                            <p><b>{e.name}</b></p>
                            <p>Rol: {e.rol}</p>
                            <p><a href={e.profile} target="_blank">Profile</a></p>
                            <p>Experience: {e.experience}</p>
                        </div>
                    </Box>
                ))}
            </Box>
        </section>
    );
};

export default Team;

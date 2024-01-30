import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import { Container } from '@mui/material';

const Slider = () => {
  const slides = [1,2,3,4,5,6]

      return (
        <Container sx={{padding:'200px 0'}}>
          <h1>Our Clients</h1>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}

          >
            {
              slides.map((e)=>{
                return (
                  <SwiperSlide style={{display:'flex'}}><img style={{width:'200px', height:'200px', margin:'auto'}} src={`../../assets/img/prueba/logo${e}.svg`} alt="asa" /></SwiperSlide>
                )
              })
            }
            ...
          </Swiper>

        </Container>
      );
    
}

export default Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import the modules
import 'swiper/css';  // Import Swiper's default styles
import 'swiper/css/navigation';  // Import Swiper's navigation styles
import 'swiper/css/pagination';  // Import Swiper's pagination styles

function Slider() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add the modules
        spaceBetween={50}  // Space between slides
        slidesPerView={1}  // Number of slides to show
        navigation         // Enable navigation arrows
        pagination={{ clickable: true }}  // Enable pagination dots
        autoplay={{ delay: 2000 }}  // Enable autoplay with a 2-second delay
        loop                // Enable looping
      >
        <SwiperSlide>
          <img src="images/slider1.jpg" className="w-full h-full object-cover" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider2.jpg" className="w-full h-full object-cover" alt="Slide 2" />
        </SwiperSlide>
        {/* You can add more slides here */}
      </Swiper>
    </div>
  );
}

export default Slider;

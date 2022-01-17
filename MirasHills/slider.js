import Swiper, {Navigation, Pagination, Scrollbar} from './swiper';
import './swiper/css';
import './swiper/css/navigation';
import './swiper/css/pagination';
import './swiper/css/scrollbar';

Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper('.image-slider', {
    direction: 'horizontal',
});
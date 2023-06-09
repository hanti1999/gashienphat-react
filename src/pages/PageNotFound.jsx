import { Link } from 'react-router-dom';
import NotFound from '../assets/img/404NotFound.jpg'
import Helmet from '../components/Helmet/Helmet';

function PageNotFound() {
    return (
        <div className='flex items-center flex-col'>
            <Helmet title={'Không tìm thấy trang!'} />
            <img className='w-[720px]' src={NotFound} alt="" />
            <a className='mb-4' target='_blank' href="http://www.freepik.com">Designed by stories / Freepik</a>
            <button className='bg-primary px-4 py-3 rounded-full mb-4'>
                <Link className='text-white text-20' to='/'>Trở về trang chủ</Link>
            </button>
        </div>
    )
}

export default PageNotFound;
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection'

function News() {
    return (
        <Helmet title={'Tin tức'} >
            <CommonSection title={'Tin tức'} />
            <div className="wid-1200">
                <div className='w-full text-center mt-8'>
                    <h2 className='text-20 font-bold'>Đang cập nhật...</h2>
                </div>
            </div>
        </Helmet>
    )
}

export default News;
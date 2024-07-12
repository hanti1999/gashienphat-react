import './App.css';
import Layout from './components/Layout/Layout';
import image from './assets/img/maintenance.jpg';

function App() {
  return (
    // <Layout />
    <div className='w-full h-screen flex flex-col justify-center items-center gap-2'>
      <img src={image} className='w-1/2 rounded-lg' />
      <a
        target='_blank'
        href='https://www.freepik.com/free-vector/phone-repair-service-flat-composition-with-engineers-disassembling-smartphone-blue-background-vector-illustration_39093423.htm#fromView=search&page=1&position=17&uuid=87fbe43c-2ea5-441c-9895-a3071f82230c'
      >
        Image by macrovector on Freepik
      </a>
      <h1 className='font-bold text-4xl'>Web site đang tạm đóng để nâng cấp</h1>
      <p>Vui lòng trở lại sau</p>
      <p>Xin cảm ơn!</p>
      <p>
        Mọi thông tin khác vui lòng liên hệ:{' '}
        <a
          className='text-blue-500 underline'
          href='https://zalo.me/0986359498'
          target='_blank'
        >
          Zalo (Hoàng Anh)
        </a>
      </p>
    </div>
  );
}

export default App;

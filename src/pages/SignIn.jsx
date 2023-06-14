import firebase, { auth } from '../firebase/config';
import Helmet from '../components/Helmet/Helmet';


function SignIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleProvider = () => {
        auth.signInWithPopup(googleProvider);
    }

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookProvider = () => {
        auth.signInWithPopup(facebookProvider);
    }

    // auth.onAuthStateChanged((user) => {
    //     console.log({user});
    // })

    return (
        <>
        <Helmet title={'Đăng nhập'} /> 
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-[20px] text-center text-18 font-bold tracking-tight text-333">
                    Đăng nhập tài khoản
                </h2>
                <p className="mt-[20px] text-center text-14 text-gray-500">
                    Chưa có tài khoản?{' '}
                    <a href="#" className="font-semibold leading-6 text-primary hover:text-indigo-500">
                    Đăng ký ngay!
                    </a>
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-14 font-medium text-333">
                        Địa chỉ Email hoặc số điện thoại
                    </label>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" required
                        className="block w-full rounded-md border-0 px-[0.8rem] py-[0.8rem] text-333 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-14"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-14 font-medium text-333">
                        Mật khẩu
                        </label>
                        <div className="text-12">
                            <a href="#" className="font-semibold text-primary hover:text-indigo-500">
                                Quên mật khẩu?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                        className="block w-full rounded-md border-0 px-[0.8rem] py-[0.8rem] text-333 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-14"
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-[0.8rem] text-14 font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Đăng nhập
                    </button>
                </div>
                </form>

                <p className='text-14 mt-10 font-medium'>Hoặc đăng nhập với</p>
                <div className='grid grid-cols-2 sm:gap-[20px] max-md:grid-cols-1'>
                    <button id='facebookSignInBtn' onClick={handleFacebookProvider} className='text-white text-14 w-full py-[0.8rem] bg-[#3B5998] rounded-md mt-[5px]'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <span className='ml-[10px] font-medium'>Facebook</span>
                    </button>
                    <button id='googleSignInBtn' onClick={handleGoogleProvider} className='text-white text-14 w-full py-[0.8rem] bg-[#EA4335] rounded-md mt-[5px]'>
                        <i className="fa-brands fa-google"></i>
                        <span className='ml-[10px] font-medium'>Google</span>
                    </button>
                </div>
            
            </div>
        </div>
    </>
    )
}

export default SignIn;
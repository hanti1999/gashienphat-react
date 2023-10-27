import Helmet from '../components/Helmet/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

import '../styles/signup.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      toast.success('Đăng nhập thành công!');
      navigate('/Checkout');
    } catch (error) {
      setLoading(false);
      toast.error('Lỗi! vui lòng thử lại sau');
    }
  };

  return (
    <Helmet title={'Đăng nhập'}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        {loading ? (
          <div className='text-center'>
            <h5 className='font-bold'>
              Loading... <i className='fa-solid fa-spinner fa-spin'></i>
            </h5>
          </div>
        ) : (
          <>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <h2 className='mt-8 text-center text-18 font-bold tracking-tight text-333'>
                Đăng nhập tài khoản
              </h2>
              <p className='mt-8 text-center text-14 text-gray-500'>
                Chưa có tài khoản?{' '}
                <Link
                  to={'/Signup'}
                  className='font-semibold leading-6 text-primary hover:opacity-80'
                >
                  Đăng ký ngay!
                </Link>
              </p>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-xl'>
              <form
                className='auth__form space-y-6'
                action='#'
                method='POST'
                onSubmit={signIn}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block text-14 font-medium text-333'
                  >
                    Địa chỉ Email *
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={email}
                      autoComplete='email'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className='auth__input'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-14 font-medium text-333'
                    >
                      Mật khẩu
                    </label>
                    <div className='text-12'>
                      <Link
                        to='/Signup'
                        className='font-semibold text-primary hover:opacity-80'
                      >
                        Quên mật khẩu?
                      </Link>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='auth__input'
                    />
                  </div>
                </div>

                <div>
                  <button type='submit' className='auth__submit'>
                    Đăng nhập
                  </button>
                </div>
              </form>

              {/* <p className='text-14 mt-10 font-medium'>Hoặc đăng nhập với:</p>
                                <div className='grid grid-cols-2 sm:gap-[20px] max-md:grid-cols-1'>
                                    <button id='facebookSignInBtn' className='text-white text-14 w-full py-[0.8rem] bg-[#3B5998] hover:opacity-90 rounded-md mt-[5px]'>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <span className='ml-[10px] font-medium'>Facebook</span>
                                    </button>
                                    <button id='googleSignInBtn' className='text-white text-14 w-full py-[0.8rem] bg-[#EA4335] hover:opacity-90 rounded-md mt-[5px]'>
                                        <i className="fa-brands fa-google"></i>
                                        <span className='ml-[10px] font-medium'>Google</span>
                                    </button>
                                </div> */}
            </div>
          </>
        )}
      </div>
    </Helmet>
  );
}

export default Login;

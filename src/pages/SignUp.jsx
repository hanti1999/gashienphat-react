import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import '../styles/signup.css';

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {   
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on((error) => {
                toast.error(error.message)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                    // update user profile
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL,
                    });
                    // store user data in firetore db
                    await setDoc(doc(db, 'users', user.uid),{
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })
                })
            });

            setLoading(false);
            toast.success('Tạo tài khoản thành công!');
            navigate('/Login')
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            setLoading(false)
            toast.error('Có lỗi xảy ra! vui lòng tải lại trang và thử lại');
        }
    }

    return (
        <Helmet title={'Đăng ký'} >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                {
                    loading ? (
                    <div className='text-center'>
                        <h5 className='font-bold'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h5>
                    </div>) : ( 
                    <>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-8 text-center text-18 font-bold tracking-tight text-333">
                                Đăng ký tài khoản
                            </h2>
                            <p className="mt-8 text-center text-14 text-gray-500">
                                Đã có tài khoản?{' '}
                                <Link to={'/Login'} className="font-semibold leading-6 text-primary hover:opacity-80">
                                Đăng nhập ngay!
                                </Link>
                            </p>
                            <p className='block mt-4 p-2 bg-[#f8f9fa] rounded-lg text-333'>
                                Mẹo: để tạo nhanh tài khoản, bạn có thể nhập tên bất kỳ kèm đuôi @gmail.com <br/>
                                <span className='italic text-14'>
                                    ví dụ: yourName@gmail.com
                                </span>
                            </p>
                        </div>
        
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
                            <form className="auth__form space-y-6" onSubmit={signup}>
                                <div>
                                    <label htmlFor="text" className="block text-14 font-medium text-333">
                                        Tên đăng nhập *
                                    </label>
                                    <div className="mt-2">
                                        <input id="text" name="text" type="text" value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            className="auth__input" required
                                        />
                                    </div>
                                </div>
        
                                <div>
                                    <label htmlFor="email" className="block text-14 font-medium text-333">
                                        Địa chỉ Email *
                                    </label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" value={email} autoComplete="email" required
                                            onChange={e => setEmail(e.target.value)}
                                            className="auth__input"
                                        />
                                    </div>
                                </div>
        
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-14 font-medium text-333">
                                            Mật khẩu *
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input 
                                            id="password" name="password" type="password" autoComplete="current-password" required
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            className="auth__input"
                                        />
                                    </div>
                                </div>
        
                                <div>
                                    <input className='' type="file" onChange={e => setFile(e.target.files[0])} />
                                </div>
        
                                <div>
                                    <button type="submit" className="auth__submit">
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
        
                            {/* <p className='text-14 mt-10 font-medium'>Hoặc đăng ký với:</p>
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
                    )
                }
            </div>
        </Helmet>
    )
}

export default Signup;
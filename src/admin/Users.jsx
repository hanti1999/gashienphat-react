
import React from 'react';
import useGetData from '../custom-hooks/useGetData';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config'

import { toast } from 'react-toastify'

const Users = () => {

    const { data: userDatas, loading} = useGetData('users');

    const deleteUser = async(id) => {
        await deleteDoc(doc(db, 'users', id));
        toast.success('Đã xóa!');
    }

    return (  
        <section>
            <div className="wid-1200">
                <div className="grid grid-cols-12 mt-16">
                    <div className="col-span-12"><h4 className='font-medium text-24'>Danh sách người dùng</h4></div>

                    <div className="col-span-12 pt-6">
                        <table className='table w-full'>
                            <thead>
                                <tr>
                                    <th>Ảnh đại diện</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    loading ? (
                                        <tr className='text-center w-full mt-10'>
                                          <td className='font-bold text-18'>Loading... <i className="fa-solid fa-spinner fa-spin"></i></td>
                                        </tr>) : (
                                            userDatas.map(user => (
                                                <tr key={user.uid}>
                                                    <td><img className='w-16 rounded-lg' src={user.photoURL} alt="" /></td>
                                                    <td>{user.displayName}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                    <button 
                                                        className='buy__btn bg-red-500 text-white'
                                                        onClick={() => {
                                                            deleteUser(user.uid)
                                                        }}
                                                    >
                                                        Xóa
                                                    </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users
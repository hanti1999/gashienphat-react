
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterDesc, setEnterDesc] = useState([]);
  const [enterOldPrice, setEnterOldPrice] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterProductImg, setEnterProductImg] = useState('');
  const [enterWarranty, setEnterWarranty] = useState('');
  const [loading, setLoading] = useState(false);

  const addProduct = async(e) => {
    e.preventDefault()

    const product = {
      title: enterTitle,
      description: enterDesc,
      warranty: enterWarranty,
      oldPrice: enterOldPrice,
      price: enterPrice,
      category: enterCategory,
      imgUrl: enterProductImg
    }

    // Add product to firebase
    // try {
    //   const docRef = await collection(db, 'products');
    //   const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
    //   const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
    //   uploadTask.on(() => {
    //     toast.error('Không thêm được ảnh');
    //   },() => {
    //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //       await addDoc(docRef, {
    //         title: enterTitle,
    //         description: enterDesc,
    //         warranty: enterWarranty,
    //         oldPrice: enterOldPrice,
    //         price: enterPrice,
    //         category: enterCategory,
    //         imgUrl: downloadURL
    //       })
    //     })
    //     toast.success('Đã thêm sản phẩm thành công!');
    //   })
    // } catch (error) {
    //   toast.error('Có lỗi xảy ra, vui lòng thử lại!')
    // }
    console.log(product);
  }

  return (
    <section className='wid-1200'>
      <div className="grid grid-cols-12 mt-16">
        <div className="col-span-12">
          <h4 className='text-24 mb-8'>Thêm sản phẩm</h4>
          <form action="" onSubmit={addProduct}>
            <div className="form__group">
              <span>Tên sản phẩm</span>
              <input 
                type="text" 
                placeholder='..' 
                value={enterTitle} 
                onChange={e => setEnterTitle(e.target.value)} 
                required
              />
            </div>

            <div className="form__group">
              <span>Mô tả</span>
              <textarea 
                type="text" 
                placeholder='..' 
                value={enterDesc} 
                onChange={e => setEnterDesc([e.target.value])} 
                required
              />
            </div>

            <div className='flex items-center justify-between gap-4'>
              <div className="form__group w-1/4">
                <span>Giá trước KM</span>
                <input 
                  type="number" 
                  placeholder='Điền giá vào ô bên cạnh nếu không KM' 
                  value={enterOldPrice} 
                  onChange={e => setEnterOldPrice(e.target.value)}
                />
              </div>

              <div className="form__group w-1/4">
                <span>Giá</span>
                <input 
                  type="number" 
                  placeholder='..'
                  value={enterPrice}
                  onChange={e => setEnterPrice(e.target.value)} 
                  required
                />
              </div>

              <div className="form__group w-1/4">
                <span>Danh mục</span>
                <select 
                  className='w-full border rounded-lg py-3' 
                  value={enterCategory} 
                  onChange={e => setEnterCategory(e.target.value)}
                  >
                  <option>Chọn danh mục</option>
                  <option value="bep-gas">Bếp gas</option>
                  <option value="bep-dien">Bếp điện</option>
                  <option value="dien-gia-dung">Diện gia dụng</option>
                  <option value="may-loc-nuoc">Máy lọc nước</option>
                  <option value="phu-kien">Phụ kiện</option>
                </select>
              </div>

              <div className="form__group w-1/4">
                <span>Bảo hành</span>
                <select 
                  className='w-full border rounded-lg py-3' 
                  value={enterWarranty} 
                  onChange={e => setEnterWarranty(e.target.value)}
                  >
                  <option>Chọn thời hạn</option>
                  <option value="1">1 năm</option>
                  <option value="2">2 năm</option>
                  <option value="3">3 năm</option>
                  <option value="5">5 năm</option>
                </select>
              </div>
            </div>

            <div className="form__group">
              <span>Hình ảnh</span>
              <input 
                type="file" 
                required
                onChange={e => setEnterProductImg(e.target.files[0])}
              />
            </div>

            <button type='submit' className='buy__btn !bg-primary text-white'>Thêm</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddProducts
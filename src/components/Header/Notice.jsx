import { useState } from "react";

function Notice () {
    const [showNotice, setShowNotice] = useState(true);

    return (
        <div className={showNotice ? "max-md:hidden relative w-full bg-[#fafafa] overflow-hidden flex items-center justify-center" : 'hidden'}>
            <p className='notice-text text-20 font-bold text-center'>Thông báo: Website đang trong quá trình phát triển, quý khách có nhu cầu mua hàng vui lòng liên hệ Zalo: 0975 841 582</p>
            <button onClick={() => setShowNotice(false)} className='bg-[#9ca3af] w-8 h-8 absolute right-0 top-0 rounded hover:bg-[#d1d5db] transition-all'>X</button>
        </div>
    )
}

export default Notice;
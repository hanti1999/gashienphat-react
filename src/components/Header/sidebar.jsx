import { catItems } from "../../assets/category"; // Dùng tạm trước khi chuyển sang firebase

function SideBar() {
    return (
        <div className='category-list max-lg:h-0 max-lg:overflow-hidden'>
            <ul className='list-none bg-white'>
                {catItems.map((catItem, index) => (
                    <li key={index} className='category-item'>
                        <a className='category-item-link' href={catItem.typeHref}>{catItem.type}</a>
                        <i className="fa-solid fa-angle-right"></i>
                        <div className='category-child'>
                            {catItem.childCats.map((childCat, index) => (
                                <div key={index} className={childCat.title === '' ? 'hidden' : 'w-[180px]'}>
                                    <div className="py-[10px] px-[12px]">
                                        <span className='category-child--head'>{childCat.title}</span>
                                    </div>
                                    <ul className="list-none">
                                        {childCat.childItems.map((childItem, index) => (
                                            <li key={index} className="px-[12px]">
                                                <a className="text-16 py-[10px] block hover:text-primary hover:font-medium" href={childItem.href}>{childItem.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar;
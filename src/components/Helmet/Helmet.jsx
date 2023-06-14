function Helmet(props) {
    document.title = 'Gas Hiền Phát - ' + props.title
    return (
        <div className="w-full">{props.children}</div>
    )
}

export default Helmet;
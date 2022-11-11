export default ({text}) => {
    return <a href="#" className="py-8 relative group">
        <span className="group-hover:text-black-75 text-neutral-500">{text}</span>
        <span className="block absolute bottom-0 group-hover:bg-orange-primary w-full h-1"></span>
    </a>
    
}


function Container({children, className, inlineStyles}){
    return <div className={className} style={{minHeight: '100vh'}}>{children}</div>
}

export default Container;
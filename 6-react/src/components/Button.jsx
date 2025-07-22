function Button({text, color="blue-600", textColor="white", extraClasses=""}){
    return(
        <button className={`bg-${color} text-${textColor} ${extraClasses}`}>
            {text || "Click me"}
        </button>
    )
}

export default Button;
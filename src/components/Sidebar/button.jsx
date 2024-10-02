

export default function Button({active, children}){
    const BackgroudColor = active ? "bg-gray-200 dark:bg-gray-900" : ""
    return(
        <button
            className={`
                py-4 px-4 w-full text-left rounded-lg transition-colors
                ${BackgroudColor}
                hover:bg-gray-200 dark:hover:bg-gray-900 
            `}
        >
            {children}
        </button>
    )
}
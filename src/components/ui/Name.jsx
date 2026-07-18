const Name = ({first_name, last_name}) => {
    return(
        <h1 className="flex flex-col font-inter font-black text-6xl uppercase tracking-tight">
            <span>{first_name}</span>
            <span>{last_name}</span>
        </h1>
    )
}

export default Name;
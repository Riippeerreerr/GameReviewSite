import './category.css'

export default function Category({ imageSrc, title, description }){
    return(
        <div className="my-component">
            <img src={imageSrc} alt={title} className="my-image" />
            <div className="text-container">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}
type CardProps = {
    name: string,
    age: number,
    role: string,
    imageUrl?: string,
}

const Card = ({name, age, role, imageUrl}: CardProps) => {
    const altText = `${name} image`;
    return (
        <div className="d-flex flex-row justify-content-start">
            <img src={imageUrl} alt={altText} width="100px" className="m-2"/>
            <div className="d-flex flex-column align-items-start">
                <h1>{name}</h1>
                <h3>{age}</h3>
                <h3>{role}</h3>
            </div>
        </div>
    );
}
export default Card;
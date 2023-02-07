import './card.scss'
interface CardProps {
    number: string
    name: string
    onClick?: any
}

export const Card = ({ number, name, onClick }: CardProps) => {
    return (
        <article className='card-area-content'>
            <span>Number: {number}</span>
            <span>|</span>
            <span>Name: {name}</span>
            <button onClick={onClick}>View</button>
        </article>
    )
}
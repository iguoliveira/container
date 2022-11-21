import './card.scss'
interface CardProps {
    number: string
    name: string
}

export const Card = ({ number, name }: CardProps) => {
    return (
        <article className='card-area-content'>
            <span>Number: {number}</span>
            <span>|</span>
            <span>Name: {name}</span>
        </article>
    )
}
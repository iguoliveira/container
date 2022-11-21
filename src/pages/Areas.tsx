import './areas.scss'
import { Card } from '../components/Card'
import data from '../data.json'

export const Areas = () => {
    return (
        <section className='areas-content'>
            <article className='areas-name-container'>
                <span className='header'>AREAS</span>
                <div className='areas'>
                    {data.map((item, index) => {
                        return <Card number={item.number} name={item.name} />
                    })}
                </div>
            </article>
        </section>
    )
}
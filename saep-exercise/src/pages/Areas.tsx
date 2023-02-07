import './areas.scss'
import { Card } from '../components/Card'
import data from '../data.json'
import { useState } from 'react'

export const Areas = () => {
    document.title = 'Areas'
    const [isModal, setIsModal] = useState(false)

    function handleClick(number: number) {
        if (number > 1) {
            setIsModal(!isModal)
        } else {
            setIsModal(false)
        }
    }

    return (
        <section className='areas-content'>
            {isModal && <div className='cars-container'>
                {data.map((item, index) => {
                    return item.cars.length > 1 && item.cars.map((item, index) => {
                        return <div className='cars'>Car Model: {item.model}</div>
                    })
                })}
            </div>}
            <article className='areas-name-container'>
                <span className='header'>AREAS</span>
                <div className='areas'>
                    {data.map((item, index) => {
                        return <Card number={item.name} name={item.name} onClick={() => handleClick(item.cars.length)} />
                    })}
                </div>
            </article>
        </section>
    )
}
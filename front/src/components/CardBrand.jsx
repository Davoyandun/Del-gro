import React from 'react'
import style from '../styles/CardBrand.module.css'

export default function CardBrand({image}) {
    return (
        <div className={style.section}>
            <img src={image} alt="Imagen No encontrada" className={style.imageBrand} />
            
        </div>
    )
}

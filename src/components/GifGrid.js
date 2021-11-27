//import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading ? <p className="animate__animated animate__flash animate">Loading...</p> : null}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }
            </div>
            <hr />
        </>
    )
}

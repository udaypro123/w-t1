import React from 'react'

const Middle2 = (props) => {
    return (
        <>
            <div className='middledivpart2part1'>
                <div className='imgdivmiddlepart'>
                    <img src={ props.imgsrc } alt="" />
                </div>

                <h1>
                    { props.number }
                </h1>

                <p>
                    { props.tag }
                </p>

            </div>

        </>
    )
}

export default Middle2

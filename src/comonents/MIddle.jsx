import React from 'react'

const MIddle = (props) => {
  return (
    <>
      <div className="miidlediv">
            <div className='middiv1'>
                <img src={props.imgsrc} alt="" />
            </div>
            <div className='middiv2'>
                {props.name}
            </div>
            <div className='middiv3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quisquam quam eligendi officia quibusdam. Magnam tempore esse explicabo ipsam ex neque nulla dolor est iusto. Vel quibusdam animi quam odio?</p>
            </div>
            <div className='middiv4'>
                  <button>read more</button>
            </div> 
      </div>
    </>
  )
}

export default MIddle;

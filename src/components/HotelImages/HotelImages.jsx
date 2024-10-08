import './HotelImages.css'

// eslint-disable-next-line react/prop-types
export const HotelImages = ({ singleHotel }) => {
    // eslint-disable-next-line react/prop-types
    const { image, imageArr } = singleHotel;
    console.log(image);
    return (
        <div className='hotel-image-container d-flex gap-sm'>
            <div className="primary-image-container">
                <img src={image} alt='primary-image' className='primary-img' />
            </div>
            <div className='d-flex gap-sm wrap'>
                {
                    // eslint-disable-next-line react/prop-types
                    imageArr && imageArr.map(image =>
                        <img src={image} alt='hotel-img' key={image} className='hotel-img' />
                    )
                }
            </div>
        </div>
    )
}

import { useNavigate } from 'react-router-dom';
import './HotelCard.css'

// eslint-disable-next-line react/prop-types
const HotelCard = ({ hotel }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, image, address, state, rating, price } = hotel;
    const navigate = useNavigate();
    const handleHotelCardClick = () => {
        navigate(`/hotels/${_id}`)
    }
    return (
        <div className="relative hotelcard-container shadow cursor-pointer" >
            <div onClick={handleHotelCardClick}>
                <img className="img" src={image} alt='name' />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location">
                            {address},{state}
                        </span>
                        <span className="rating d-flex align-center">
                            <span className="material-icons-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>

                    <p className="hotel-name">{name}</p>
                    <p className="price-details ">
                        <span className="price">{price}</span>
                        <span>night</span>
                    </p>
                </div>
            </div>
            <button className="button btn-wishlist absolute d-flex align-center">
                <span className="material-icons favorite cursor">
                    favorite
                </span>
            </button>
        </div>
    )
}

export { HotelCard }
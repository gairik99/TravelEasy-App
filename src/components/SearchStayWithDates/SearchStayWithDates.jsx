import "./SearchStayWithDates.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { DateSelector } from "../DateSelector/DateSelector";
import { useDate, useCategory } from "../../context";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid'
export const SearchStayWithDates = () => {
    const [hotels, setHotels] = useState([]);
    const { guests, destination, dateDispatch, isSearchResultOpen } = useDate();
    const { hotelCategory } = useCategory();

    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://travellapp-b9k7.onrender.com/api/hotels?category=${hotelCategory}`);
                setHotels(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [hotelCategory]);

    const handleDestinationChange = (event) => {
        dateDispatch({
            type: "DESTINATION",
            payload: event.target.value,
        });
    };
    const handleGuestChange = (event) => {
        dateDispatch({
            type: "GUESTS",
            payload: event.target.value,
        });
    };

    const handleSearchResultClick = (address) => {
        dateDispatch({
            type: "DESTINATION",
            payload: address,
        });
    };
    const handleDestinationFocus = () => {
        dateDispatch({
            type: "SHOW_SEARCH_RESULT",
        });
    };

    const handleSearchButtonClick = () => {
        dateDispatch({
            type: "CLOSE_SEARCH_MODAL"
        });
        navigate(`/hotels/${destination}/${hotelCategory}`);
    };

    const destinationOptions = hotels.filter(
        ({ address, city, state, country }) =>
            address.toLowerCase().includes(destination.toLowerCase()) ||
            city.toLowerCase().includes(destination.toLowerCase()) ||
            state.toLowerCase().includes(destination.toLowerCase()) ||
            country.toLowerCase().includes(destination.toLowerCase())
    );

    // console.log("search dates", destination)

    return (
        <div className="destination-container">
            <div className="destionation-options d-flex align-center absolute">
                <div className="location-container">
                    <label className="label">Where</label>
                    <input className="input search-dest" placeholder="Search Destination" autoFocus onChange={handleDestinationChange} onFocus={handleDestinationFocus} value={destination} />
                </div>
                <div className="location-container">
                    <label className="label">Check in</label>
                    <DateSelector checkInType="in" />
                </div>
                <div className="location-container">
                    <label className="label">Check out</label>
                    <DateSelector checkInType="out" />
                </div>
                <div className="location-container">
                    <label className="label">No. of Guests</label>
                    <input className="input search-dest" placeholder="Add guests" onChange={handleGuestChange} value={guests} />
                </div>
                <div className="search-container d-flex align-center cursor" onClick={handleSearchButtonClick}>
                    <span className="material-icons-outlined search">search</span>
                    <span>Search</span>
                </div>

            </div>

            {isSearchResultOpen && (
                <div className="search-result-container absolute">
                    {destinationOptions &&
                        destinationOptions.map(({ address, city }) => (
                            <p className="p cursor-pointer" onClick={() => handleSearchResultClick(address)} key={uuid()}>
                                {address}, {city}
                            </p>
                        ))}
                </div>
            )}

        </div>
    );
};

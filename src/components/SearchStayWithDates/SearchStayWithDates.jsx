import "./SearchStayWithDates.css";
import { DateSelector } from "../DateSelector/DateSelector";
export const SearchStayWithDates = () => {
    return (
        <div className="destination-container">
            <div className="destionation-options d-flex align-center absolute">
                <div className="location-container">
                    <label className="label">Where</label>
                    <input className="input search-dest" placeholder="Search Destination" autoFocus />
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
                    <input className="input search-dest" placeholder="Add guests" />
                </div>
                <div className="search-container d-flex align-center cursor">
                    <span className="material-icons-outlined search">search</span>
                    <span>Search</span>
                </div>
                {/* <button className="button absolute close-search-dest">
                    <span className="highlight material-icons-outlined">
                        highlight_off
                    </span>
                </button> */}
            </div>
            {/* {isSearchResultOpen && (
                <div className="search-result-container absolute">
                    {destinationOptions &&
                        destinationOptions.map(({ address, city }) => (
                            <p
                                className="p cursor-pointer"
                                onClick={() => handleSearchResultClick(address)}
                            >
                                {address}, {city}
                            </p>
                        ))}
                </div>
            )} */}
        </div>
    );
};

import { useEffect, useState } from "react"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavBar, HotelCard, Category, SearchStayWithDates, Filter } from "../../../components"
import { useCategory, useDate, useFilter } from "../../../context";
import { getHotelsByPrice } from '../../../utils/price-range'
import { getHotelsByRoomsAndBeds } from "../../../utils/rooms-beds";
import { getHotelsByPropertyType } from "../../../utils/property";
import { getHotelsByRatings } from "../../../utils/rating";
import { getHotelsByCancelation } from "../../../utils/hotel-cancel";
import './Home.css';


const Home = () => {
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData, setTestData] = useState([]);
    const [hotels, setHotels] = useState([]);

    const { hotelCategory } = useCategory();
    const { isSearchModalOpen } = useDate();
    const { isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating, isCancelable } = useFilter();

    useEffect(() => {
        (async () => {
            try {
                const url = `https://travellapp-b9k7.onrender.com/api/hotels?category=${hotelCategory}`

                const { data } = await axios.get(url);
                // console.log(data);
                setTestData(data);
                setHotels(data ? data.slice(0, 16) : []);

            }
            catch (err) {
                console.log(err);
            }
        })()

    }, [hotelCategory])

    // console.log(hotels);
    const fetchMoreData = () => {
        if (hotels.length >= testData.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            if (hotels && hotels.length > 0) {
                setHotels(
                    hotels.concat(testData.slice(currentIndex, currentIndex + 16))
                );
                setCurrentIndex((prev) => prev + 16);
            } else {
                setHotels([]);
            }
        }, 1000);
    };

    const filteredHotelsByPrice = getHotelsByPrice(hotels, priceRange);
    const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(
        filteredHotelsByPrice,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds
    );
    const filteredHotelsByPropertyType = getHotelsByPropertyType(
        filteredHotelsByBedsAndRooms,
        propertyType
    );
    const filteredHotelsByRatings = getHotelsByRatings(
        filteredHotelsByPropertyType,
        traveloRating
    );
    const filteredHotelsByCancelation = getHotelsByCancelation(
        filteredHotelsByRatings,
        isCancelable
    );
    return (
        <div className="relative">
            <NavBar />
            <Category />
            {
                hotels && hotels.length > 0 ? (
                    <InfiniteScroll
                        dataLength={hotels.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            hotels.length > 0 && <h3 className="loading alert-text">Loading...</h3>
                        }
                        endMessage={<p className="alert-text">You have seen it all</p>}
                    >
                        <main className="main d-flex align-center wrap gap-larger">
                            {filteredHotelsByCancelation &&
                                filteredHotelsByCancelation.map((hotel) => (
                                    <HotelCard key={hotel._id} hotel={hotel} />
                                ))}
                        </main>
                    </InfiniteScroll>
                ) : (
                    <p className="text-empty">No hotels available for Now</p>
                )}
            {
                isSearchModalOpen && <SearchStayWithDates />
            }
            {
                isFilterModalOpen && <Filter />
            }
        </div>

    )
}

export default Home
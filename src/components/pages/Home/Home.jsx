import { useEffect, useState } from "react"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavBar, HotelCard, Category, SearchStayWithDates } from "../../../components"
import { useCategory, useDate } from "../../../context";
import './Home.css';


const Home = () => {
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData, setTestData] = useState([]);
    const [hotels, setHotels] = useState([]);

    const { hotelCategory } = useCategory();
    const { isSearchModalOpen } = useDate();

    useEffect(() => {
        (async () => {
            try {
                const url = hotelCategory ?
                    `https://travellapp-b9k7.onrender.com/api/hotels?category=${hotelCategory}` :
                    `https://travellapp-b9k7.onrender.com/api/hotels`;
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

    console.log(hotels);
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
                            {hotels &&
                                hotels.map((hotel) => (
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
        </div>

    )
}

export default Home
import { Fragment, useEffect, useState } from "react";
import { HotelCard, NavBar } from '../../../components'
import { useDate, useCategory } from "../../../context";
import axios from "axios";

export const SearchResults = () => {
    const { destination } = useDate();
    const { hotelCategory } = useCategory();
    const [hotels, setHotels] = useState([]);
    // const { alert } = useAlert();

    // console.log("Hotel Category:", hotelCategory);
    // console.log("Destination:", destination);
    useEffect(() => {
        (async () => {
            try {
                const url = `https://travellapp-b9k7.onrender.com/api/hotels?category=${hotelCategory}`

                const { data } = await axios.get(url);
                // console.log(data);

                setHotels(data);

            }
            catch (err) {
                console.log(err);
            }
        })()

    }, [hotelCategory])


    const filteredSearchResults = hotels.filter(
        ({ city, address, state }) =>
            address.toLowerCase() === destination.toLowerCase() ||
            city.toLowerCase() === destination.toLowerCase() ||
            state.toLowerCase() === destination.toLowerCase()
    );
    // console.log(filteredSearchResults);

    return (
        <Fragment>
            <NavBar />
            <section className="main d-flex align-center gap-larger wrap">
                {filteredSearchResults ? (
                    filteredSearchResults.map((hotel) => (
                        <HotelCard key={hotel._id} hotel={hotel} />
                    ))
                ) : (
                    <h3>Nothing Found</h3>
                )}
            </section>
            {/* {alert.open && <Alert />} */}
        </Fragment>
    );
};
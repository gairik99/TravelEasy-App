import { useParams } from 'react-router-dom'
import './singleHotel.css'
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar, HotelImages, HotelDetails, FinalPrice, SearchStayWithDates, ProfileDropDown, AuthModal, Alert } from '../../../components';
import { useAuth, useDate, useAlert } from '../../../context';

export const SingleHotel = () => {
    const { id } = useParams();
    const [singleHotel, setSingleHotel] = useState("");
    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
    const { isSearchModalOpen } = useDate();
    const { alert } = useAlert();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://travellapp-b9k7.onrender.com/api/hotels/${id}`);
                setSingleHotel(data);
            }
            catch (err) {
                console.log(err);
            }

        })()
    }, [id])

    // console.log(singleHotel);
    const { name, country, state } = singleHotel;
    return (
        <Fragment>
            <NavBar />
            <main className="single-hotel-page">
                <p className='hotels-name'>
                    {name}, {state} ,{country}
                </p>
                <HotelImages singleHotel={singleHotel} />
                <div className='d-flex'>
                    <HotelDetails singleHotel={singleHotel} />
                    <FinalPrice singleHotel={singleHotel} />
                </div>
                {isSearchModalOpen && <SearchStayWithDates />}
                {isDropDownModalOpen && <ProfileDropDown />}
                {isAuthModalOpen && <AuthModal />}
                {alert.open && <Alert />}
            </main>
        </Fragment>

    )
}

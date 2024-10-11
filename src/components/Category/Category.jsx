import axios from "axios";
import './Category.css';
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context";


export const Category = () => {
    const [categories, setCategories] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const { hotelCategory, setHotelCategory } = useCategory();

    const { filterDispatch } = useFilter();
    const handleFilterClick = () => {
        filterDispatch({
            type: "SHOW_FILTER_MODAL",
        });
    };

    const handleRightClick = () => {
        setStartIndex(prev => Math.min(prev + 10, categories.length - 10));
    };

    const handleLeftClick = () => {
        setStartIndex(prev => Math.max(prev - 10, 0));
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://travellapp-b9k7.onrender.com/api/category');
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {

        setHotelCategory(category);
    }
    // console.log(hotelCategory);

    const categoriesToDisplay = categories.slice(startIndex, startIndex + 10);

    return (
        <section className="categories d-flex align-center cursor-pointer ">
            {startIndex > 0 && (
                <button onClick={handleLeftClick} className=" btn-left fixed cursor-pointer btn-category">
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                </button>
            )}

            {categoriesToDisplay.map(({ _id, category }) => (
                <span key={_id} onClick={() => handleCategoryClick(category)} className={`${category == hotelCategory ? 'border-bottom' : ''}`}>{category}</span>
            ))}

            {startIndex + 10 < categories.length && (
                <button onClick={handleRightClick} className=" btn-right fixed cursor-pointer btn-category">
                    <span className="material-icons-outlined">
                        chevron_right
                    </span>
                </button>
            )}
            <div>
                <button
                    className="button btn-filter d-flex align-center gap-small cursor-pointer fixed" onClick={handleFilterClick}>
                    <span className="material-icons-outlined">filter_alt</span>
                    <span>Filter</span>
                </button>
            </div>
        </section>
    );
};

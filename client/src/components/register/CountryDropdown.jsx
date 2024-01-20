// CountryDropdown.js
import React, { useState} from 'react';
import { useAuth } from '../../store/auth';
import './Register.css'


const CountryDropdown = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const {countries} = useAuth();
   

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        // Filter countries based on the input value
        const filtered = countries.filter(country =>
            country.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredCountries(filtered);

        // Show the dropdown if there are suggestions
        setShowDropdown(filtered.length > 0);
    };

    const handleSelectCountry = (country) => {
        setInputValue(country);
        setShowDropdown(false);

        // Pass the selected country back to the parent component
        onChange(country);
    };

    return (
        <div>
            <input
                type="text"
                name="country"
                placeholder="Enter Country"
                autoComplete="off"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />

            {showDropdown && (
                <ul className='listed'>
                    {filteredCountries.map((country, index) => (
                        <li key={index} onClick={() => handleSelectCountry(country)}>
                            {country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CountryDropdown;

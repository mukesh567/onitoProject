import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all', {
                method: "GET"
            })

            const data = await response.json();

            if (response.ok) {

                setCountries(data.map((value) => value.name.common));
            }

        } catch (error) {
            console.log(`Countries : ${error}`);
        }
    }




    //Get services from the database
    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/users', {
                method: "GET"
            })

            const data = await response.json();

            if (response.ok) {
                setUsers(data)
            }

        } catch (error) {
            console.log(`Users : ${error}`);
        }
    }

    useEffect(() => {
        getUsers();
        getCountries();
    }, [])

    return <AuthContext.Provider value={{ users,countries }} >
        {children}
    </AuthContext.Provider>
}

//Ye hook es file ka sara data le rha hai then we can use everywhere
export const useAuth = () => {
    return useContext(AuthContext);
}
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import axios from "axios";

// This code exports an implementation of an authentication context provider for a React application, which provides
// authentication state and functionality to its children components. The context manages the authentication state,
// and allows the user to login, logout and fetch user data, while also checking for the existence of a stored token
// to keep the user logged in. The AuthContextProvider component wraps its children components and renders them once
// authentication has been verified, otherwise a "Loading..." message is displayed.

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {

    const [data, setData] = useState([])
    const [ auth, setAuth ] = useState( {
        isAuth: false,
        account: null,
        status: "pending"
    } );
    const navigate = useNavigate()

    useEffect( () => {
        const storedToken = localStorage.getItem( 'token' )

        if ( storedToken ) {
            const decodedToken = jwt_decode( storedToken )

            if ( Math.floor( Date.now() / 1000 ) < decodedToken.exp ) {
                console.log( "User still logged in 🔓" )
                void fetchUserData( storedToken, decodedToken.sub )
            } else  {
                console.log( "This toke is expired" )
                localStorage.removeItem( 'token' )
            }
        } else {
            setAuth( {
                ...auth,
                isAuth: false,
                account: null,
                status: "done"
            } )
        }
    }, [] )

    function login( jwt ) {
        console.log( "User logged in.. 🔓" )
        localStorage.setItem( 'token', jwt )
        const decodedToken = jwt_decode( jwt );
        void fetchUserData( jwt, decodedToken.sub, "/" )
    }

    async function fetchUserData( jwt, id, redirect ) {
        try {
            const response = await axios.get( `http://localhost:8080/accounts/${ id }`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ jwt }`,
                }
            } )
            setData(response.data)
            setAuth( {
                ...auth,
                isAuth: true,
                account: {

                    userName: response.data.userName,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    address: response.data.address,
                    zipCode: response.data.zipCode,
                    phoneNumber: response.data.phoneNumber,
                    email: response.data.email,
                    user: response.data.user
                },
                status: "done"
            } )
            if ( redirect ) {
                navigate( redirect )
            }
            console.log( response )
        } catch ( e ) {
            console.error( e )
            setAuth( {
                ...auth,
                status: "done"
            } )
        }
    }

    function logout() {
        console.log( "User logged out.. 🔒" )
        localStorage.removeItem( 'token' )
        setAuth( {
            ...auth,
            isAuth: false,
            account: null,
            status: "done"
        } )
        navigate( "/" )
    }

    const contextData = {
        isAuth: auth.isAuth,
        account: auth.account,
        status: auth.status,
        login: login,
        logout: logout,
        fetchUserData,

    }

    return (
        <AuthContext.Provider value={ contextData }>
            { auth.status === "done" ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
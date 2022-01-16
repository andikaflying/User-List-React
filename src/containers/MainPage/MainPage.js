import { useEffect, useState, useReducer, useMemo } from "react";
import React from 'react';
import Table from '../../components/Table/Table';
import Modal from "../../components/Table/Modal";
import { ENDPOINT_DISPLAY_USERS } from '../../utilities/GeneralUtils';
import { initialState, userReducer, DISPLAY_USERS_FAILURE, 
          DISPLAY_USERS_SUCCESS, ERROR_MESSAGE, SEARCH_USERS_SUCCESS } from '../../reducers/reducer';

function MainPage() {
    const [users, dispatch] = useReducer(userReducer, initialState);
    const [keyword, setKeyword] = useState(null);

    const handleText = (event) => {
      setKeyword(event.target.value);
    };

    const filteredUsers = useMemo(() => users.data.filter(function (singleData) {
        return singleData.name.toLowerCase().includes(keyword.toLowerCase());
    }), [keyword]);

    useEffect(() => {
        fetch(ENDPOINT_DISPLAY_USERS)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                    return response.json();
                }
            )
            .then(json => {
                console.log("JSON : " + JSON.stringify(json));
                dispatch({ type: DISPLAY_USERS_SUCCESS, payload: json });
                setKeyword('');
            })
            .catch(error => {
                dispatch({ type: DISPLAY_USERS_FAILURE, error : ERROR_MESSAGE})
            }); 
    }, []);

    return (
      <div className="container">
        <Modal />
        <input
            type="text"
            data-testid="searchBar"
            placeholder="Search..."
            onChange={handleText}
        />
        { (users != null) && 
          <Table
              heading="User List"
              headers={["Name", "Avatar", "Created At"]}
              data={filteredUsers}
          /> 
        }
      </div>
    );


  }

export default MainPage;
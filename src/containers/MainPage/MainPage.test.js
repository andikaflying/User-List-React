import { act, render, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import Table from '../../components/Table/Table';
import MainPage from "./MainPage";
import { initialState, userReducer, DISPLAY_USERS_SUCCESS } from '../../reducers/reducer';
import { useReducer } from "react";

describe("Table Component", () => {

    it('should render as many divs as there are items', () => {
        // const sampleData = [
        //     {
        //         "createdAt": "2021-12-21T10:09:21.247Z",
        //         "name": "Miss Mamie Hegmann",
        //         "avatar": "https://cdn.fakercloud.com/avatars/rawdiggie_128.jpg",
        //         "id": "1"
        //     },
        //     {
        //         "createdAt": "2021-12-21T16:59:08.716Z",
        //         "name": "Alberta Abernathy",
        //         "avatar": "https://cdn.fakercloud.com/avatars/nicoleglynn_128.jpg",
        //         "id": "2"
        //     }
        // ];

        // act(() => {
        //   const { result } = renderHook(() => useReducer(userReducer, initialState));
        //   const [state, dispatch] = result.current;
        //   dispatch({type: DISPLAY_USERS_SUCCESS, payload: sampleData});
        //   console.log(state);
        //   expect(state).toEqual(sampleData);
        // });
    });
});


import { act, render, fireEvent } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
    it("rendered header and check header value", () => {
        const headerWord = "Header ABC";
        const { getByTestId } = render(
            <Table
                heading={headerWord}
                headers={["Name", "Avatar", "Created At"]}
                data={null}
            />
        );

        const header = getByTestId("tableHeading");
        expect(header).toBeTruthy();
        expect(header.innerHTML).toBe(headerWord);
    });

    it("rendered table headers and check table header values", () => {
        const headers = ["Name", "Avatar", "Created At"];
        const { getByTestId } = render(
            <Table
                heading={"anak gaul"}
                headers={headers}
                data={null}
            />
        );

        const th1 = getByTestId("tableHeader1");
        const th2 = getByTestId("tableHeader2");
        const th3 = getByTestId("tableHeader3");
        expect(th1).toBeTruthy();
        expect(th2).toBeTruthy();
        expect(th3).toBeTruthy();
        expect(th1.innerHTML).toBe(headers[0]);
        expect(th2.innerHTML).toBe(headers[1]);
        expect(th3.innerHTML).toBe(headers[2]);
    });

    it("rendered table row and check data is displayed", () => {
        const sampleData = [
            {
                "createdAt": "2021-12-21T10:09:21.247Z",
                "name": "Miss Mamie Hegmann",
                "avatar": "https://cdn.fakercloud.com/avatars/rawdiggie_128.jpg",
                "id": "1"
            },
            {
                "createdAt": "2021-12-21T16:59:08.716Z",
                "name": "Alberta Abernathy",
                "avatar": "https://cdn.fakercloud.com/avatars/nicoleglynn_128.jpg",
                "id": "2"
            }
        ];

        const { queryByTestId } = render(
            <Table
                heading={"999"}
                headers={["Name", "Avatar", "Created At"]}
                data={sampleData}
            />
        );

        const div = queryByTestId("tableBody");
        expect(div).toBeTruthy();
    });
});
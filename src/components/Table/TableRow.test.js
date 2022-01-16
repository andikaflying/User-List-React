import { act, render, fireEvent } from "@testing-library/react";
import TableRow from "./TableRow";
import Table from "./Table";

describe("Table Row Component", () => {
    it("rendered table row and check every column display correct data", async () => {
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

        const { getAllByText, getByAltText } = await render(
            <TableRow
                users={sampleData}
            />
        );
        
        const column1 = getAllByText("Miss Mamie Hegmann");
        const column2 = getByAltText("image-avatar-1");
        const column3 = getAllByText("2021-12-21T10:09:21.247Z");
        expect(column1).toBeTruthy();
        expect(column2).toHaveAttribute('src', 'https://cdn.fakercloud.com/avatars/rawdiggie_128.jpg')
        expect(column3).toBeTruthy();
    });
});
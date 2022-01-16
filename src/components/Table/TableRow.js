import React, { useCallback } from 'react';

const TableRow = ({ users }) => {
    const showModal = useCallback(
        (name) => {
            console.log(name);
        },
        [], // Tells React to memoize regardless of arguments.
    );

    const userTable = users.map((user, index) => (
            <tr key={"row-" + (index + 1)}>
                <td>
                    <a onClick={() => { showModal(user.name) }} data-toggle="modal" data-target="#myModal">{user.name}</a>
                </td>
                <td>
                    <img src={user.avatar} alt={"image-avatar-" + (index + 1)}/>
                </td>
                <td> 
                    {user.createdAt}
                </td>
            </tr>
    ));

    return userTable;
};
  
export default TableRow;
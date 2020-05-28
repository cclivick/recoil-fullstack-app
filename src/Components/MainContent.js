import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_USERS } from '../index';
import UserSelect from './UserSelect';

const MainContent = ({ showUsers }) => {
    return showUsers === true ? (
        <UserSelect />
    ) : (
            null
        )
};

export default MainContent;
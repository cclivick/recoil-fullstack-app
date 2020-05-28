import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { GET_USERS } from '../index';

export default function UserSelect() {
    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error :(</p>

    console.log(data)

    return (
        <select>

        </select>
    )
};
import React from 'react';
import UserSelect from './UserSelect';
import GenresContainer from './GenresContainer';
import NewUserForm from './NewUserForm';
import { useRecoilState } from 'recoil';
import { userProfile } from '../App';

const MainContent = ({ showUsers, setShowUsers, newUser }) => {
    const profileInfo = useRecoilState(userProfile)
    if (showUsers) {
        return <UserSelect setShowUsers={setShowUsers} />
    } else if (profileInfo && profileInfo[0]) {
        const genres = profileInfo[0].favGenres
        return <GenresContainer genres={genres} />
    } else if (newUser) {
        return <NewUserForm />
    } else {
        return null
    }
};

export default MainContent;
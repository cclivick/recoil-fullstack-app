import React from 'react';
import UserSelect from './UserSelect';
import GenresContainer from './GenresContainer';
import NewUserForm from './NewUserForm';
import EditUserForm from './EditUserForm';
import { useRecoilState } from 'recoil';
import { userProfile } from '../App';

const MainContent = ({ 
    showUsers, 
    setShowUsers, 
    newUser, 
    editUser, 
    setEditUser
}) => {
    const profileInfo = useRecoilState(userProfile)
    if (showUsers) {
        return <UserSelect setShowUsers={setShowUsers} />
    } else if (profileInfo && profileInfo[0] && !editUser) {
        const userData = profileInfo[0]
        return <GenresContainer 
                userData={userData}
                setEditUser={setEditUser}
                />
    } else if (newUser) {
        return <NewUserForm />
    } else if (profileInfo && profileInfo[0] && editUser) {
        const userData = profileInfo[0]
        return <EditUserForm userData={userData} />
    } else {
        return null
    }
};

export default MainContent;
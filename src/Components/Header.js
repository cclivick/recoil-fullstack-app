import React from 'react';
import { useRecoilState } from 'recoil';
import { headerData } from '../App';

const Header = () => {
    const [userHeaderData, setUserHeaderData] = useRecoilState(headerData)
    console.log(headerData)
    return (
        <div>
            <h1>Header</h1>
            <ul>
                {userHeaderData.map(headerLink => {
                    return (
                        <li>{headerLink.genre}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header;
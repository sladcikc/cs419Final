/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { jsx, css } from '@emotion/core';

import UserInfo from './User';




function FriendsContainer(props){

    const u = props.friends;

    const list = u.map((friend) =>
        <UserInfo friend={friend}/>
        );
    return(
        <div css={css`
        text-align: center;
        display: block;
        z-index: 99;
    `} >
            <div className="FriendsBox"  
                css={css`
                    color: #c7d5e0;   `}>

                <ul css={css`
                    column-count: 7;
                    column-rule: dotted 1px #333;
                    @media (max-width: 1230px) {
                        column-count: 4;
                      } 
                    @media (max-width: 768px) {
                        column-count: 2;
                      }          
                    `
                }>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default function UserFriends(props){

    const [friends, setFriends] = useState();
    const pathArray = window.location.pathname.split('/');


    useEffect(() =>{
        Axios.get(`/api/getUserFriends/${pathArray[3]}`)
            .then(res => {
                console.log(res.data.friendslist.friends);
                setFriends(res.data.friendslist.friends)
            })}, []);

    if(friends){
        return(
            <div>              
                <FriendsContainer friends={friends} />
            </div>
        )
    }
    else{
        return(
            <div>
                Profile does not allow friends to be viewed.
            </div>
        )
    }
}
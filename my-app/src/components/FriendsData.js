import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsData = () => {

  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
        .then(response => {
          console.log(response);
          setFriendsData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }, [])

  return (
    <div>
      {friendsData.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default FriendsData;

import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="" />
                </div> 
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                  
                        <li>
                            <strong>Nickname: </strong>
                            {item.nickname}
                        </li>
                        <li>
                            <strong>Occupation: </strong>
                            {item.occupation[0]}
                        </li>
                        <li>
                            <strong>Status: </strong>
                            {item.status}
                        </li>
                        <li>
                            <strong>Series: </strong>
                            {item.category}
                        </li>
                        <li>
                            <strong>Actor Name: </strong>
                            {item.portrayed}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;

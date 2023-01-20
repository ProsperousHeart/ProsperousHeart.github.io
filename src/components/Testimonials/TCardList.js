import React from 'react';
import TCard from './TCard';

const TCardList = ({data}) => {
    return(
        <div>
            {
                data.map( (user, idx) => {
                    return (
                        <TCard
                            key={idx}
                            name={data[idx].name}
                            img={data[idx].img}
                            content={data[idx].content}
                            url={data[idx].url}
                            title={data[idx].title}
                        />
                    );
                })
            }
        </div>
    );
}

export default TCardList;

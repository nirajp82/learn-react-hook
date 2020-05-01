import React from 'react';
import useResources from './useResources';

const FResourceList = (props) => {
    const resources = useResources(props.resource);

    return (
        <div >
            <ul>
                {
                    resources.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default FResourceList;

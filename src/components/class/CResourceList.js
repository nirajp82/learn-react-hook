import React from 'react';
import Axios from 'axios';

class CResourceList extends React.Component {
    state = { resources: [] };

    componentDidUpdate = async (prevProps) => {
        if (prevProps.resource !== this.props.resource) {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.resources.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CResourceList;

import { useEffect, useState } from 'react';
import Axios from 'axios';

const useResources = (resource) => {
	const [resources, setResources] = useState([]);
	const fetchResources = async (resourceName) => {
		const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
		setResources(response.data);
	};

	useEffect(() => {
		fetchResources(resource);
	}, [resource]);
	return resources;
};

export default useResources;
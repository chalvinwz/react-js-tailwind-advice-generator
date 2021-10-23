import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetchQuote = () => {
	const [randomFetch, setRandomFetch] = useState(true);
	const [searchFetch, setSearchFetch] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const getQuotes = async () => {
		try {
			const { data } = await axios.get('https://api.adviceslip.com/advice');
			return data.slip;
		} catch (error) {
			console.log(error);
		} finally {
			setRandomFetch(false);
		}
	};

	const searchQuotesFetch = async (searchTerm) => {
		try {
			const { data } = await axios.get(
				`https://api.adviceslip.com/advice/search/${searchTerm}`
			);
			return data.slips;
		} catch (error) {
			console.log(error);
		} finally {
			setSearchFetch(false);
		}
	};

	const randomQuotes = useQuery('randomQuotes', getQuotes, {
		enabled: randomFetch,
	});

	const searchQuotes = useQuery(
		'searchQuotes',
		() => searchQuotesFetch(searchTerm),
		{
			enabled: searchFetch,
		}
	);

	return {
		randomQuotes,
		searchQuotes,
		setRandomFetch,
		setSearchFetch,
		setSearchTerm,
	};
};

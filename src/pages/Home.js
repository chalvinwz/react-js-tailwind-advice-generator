import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import Error from '../components/Error';
import RandomQuote from '../components/RandomQuote';
import SearchQuote from '../components/SearchQuote';

import { useFetchQuote } from '../hooks/useFetchQuote';

// TODO:
// !! footer

const Home = () => {
	const {
		randomQuotes,
		setRandomFetch,
		searchQuotes,
		setSearchFetch,
		setSearchTerm,
	} = useFetchQuote();

	if (randomQuotes.isLoading || searchQuotes.isLoading) return <Loading />;

	if (randomQuotes.error || searchQuotes.error) return <Error />;

	return (
		<main className='min-h-screen'>
			<SearchBar
				setSearchFetch={setSearchFetch}
				setSearchTerm={setSearchTerm}
				searchQuotes={searchQuotes.data}
			/>

			{searchQuotes.data ? (
				<SearchQuote searchData={searchQuotes.data} />
			) : (
				<RandomQuote
					randomData={randomQuotes.data}
					setRandomFetch={setRandomFetch}
				/>
			)}
		</main>
	);
};

export default Home;

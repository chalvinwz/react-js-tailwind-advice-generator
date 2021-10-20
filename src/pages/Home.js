import SearchBar from '../components/SearchBar';
import AdviceCard from '../components/AdviceCard';
import Loading from '../components/Loading';

import { useFetchQuote } from '../hooks/useFetchQuote';

const Home = () => {
	const {
		randomQuotes,
		setRandomFetch,
		searchQuotes,
		setSearchFetch,
		setSearchTerm,
	} = useFetchQuote();

	if (randomQuotes.isLoading) return <Loading />;
	if (searchQuotes.isLoading) return <Loading />;

	if (randomQuotes.error) return <div>Something gone wrong</div>;

	return (
		<main>
			<SearchBar
				setSearchFetch={setSearchFetch}
				setSearchTerm={setSearchTerm}
				searchQuotes={searchQuotes.data}
			/>
			{searchQuotes.data ? (
				searchQuotes.data.map((searchData) => (
					<AdviceCard searchData={searchData} key={searchData.id} />
				))
			) : (
				<AdviceCard
					randomData={randomQuotes.data}
					setRandomFetch={setRandomFetch}
				/>
			)}
		</main>
	);
};

export default Home;

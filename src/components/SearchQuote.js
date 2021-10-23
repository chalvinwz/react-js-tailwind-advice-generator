import AdviceCard from './AdviceCard';

const SearchQuote = ({ searchData }) => {
	return (
		<section className='container mx-auto px-4 grid md:grid-cols-2 gap-8 py-12 text-center'>
			{searchData.map((d) => (
				<AdviceCard searchData={d.advice} key={d.id} />
			))}
		</section>
	);
};

export default SearchQuote;

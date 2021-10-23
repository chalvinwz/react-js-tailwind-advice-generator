import AdviceCard from './AdviceCard';

const RandomQuote = ({ randomData, setRandomFetch }) => {
	return (
		<section className='container mx-auto px-4 text-center py-12 flex justify-center'>
			<AdviceCard randomData={randomData} setRandomFetch={setRandomFetch} />
		</section>
	);
};

export default RandomQuote;

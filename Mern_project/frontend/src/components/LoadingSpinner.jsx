import LoadingSpinner from './components/LoadingSpinner';

const MyComponent = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			// Simuloni ngarkimin e të dhënave
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setLoading(false);
		};
		
		fetchData();
	}, []);

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<div>
			<h1>Të dhënat janë ngarkuar!</h1>
			{/* Shfaqni të dhënat këtu */}
		</div>
	);
};

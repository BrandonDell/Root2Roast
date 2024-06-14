import React from 'react';
import PlantDataFetch from "../components/PlantDataFetch";

const TestPlants = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await PlantFetchData();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Plant Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default TestPlants;

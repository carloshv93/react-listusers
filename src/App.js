import { useEffect, useState } from "react";

const data = [
  {
    key: "1",
    name: "John",
  },
  {
    key: "2",
    name: "Valery",
  },
  {
    key: "3",
    name: "Max",
  },
  {
    key: "4",
    name: "Andrew",
  },
];
function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 4000);
  }, []);

  const renderData = () => {
    return data.map((value) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
  };

  const renderLoading = () => {
    return <span>Loading...</span>;
  };

  return <div>{isLoading ? renderLoading() : renderData()}</div>;
}

export default App;

import { lakes } from "../../../lakesData";

import PropTypes from "prop-types";

const LakesPage = ({ region }) => {
  if (!region) {
    return <h2>No region specified</h2>;
  }
  // Filter lakes based on the selected region
  const regionLakes = lakes.filter((lake) => lake.region === region);

  return (
    <div>
      <h2>Lakes in {region}</h2>
      <ul>
        {regionLakes.map((lake) => (
          <li key={lake.name}>
            <h3>{lake.name}</h3>
            <p>Beaches: {lake.beaches ? "Yes" : "No"}</p>
            <p>Fish Species: {lake.fishSpecies}</p>
            <img src={lake.image} alt={lake.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

LakesPage.propTypes = {
  region: PropTypes.string.isRequired,
};

export default LakesPage;

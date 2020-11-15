import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setterm] = useState("tes");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
      console.log(results[0]);
    };
    search();
  }, [term]);

  const renderedResults = results.map((results) => {
    return (
      <div key={results.pageid} className="item">
        <div className="right floated content">
          <a 
          href={`https://en.wikipedia.org?curid=${results.pageid}`}
          className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">{results.title}</div>
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}/>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setterm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

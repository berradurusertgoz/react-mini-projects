import { useEffect, useState } from "react";
import './scroll.css'

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      if (data?.products?.length > 0) {
        setData(data.products);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {

  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percentage = (scrollTop / height) * 100;

  setScrollPercentage(percentage);
}

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (errorMessage) {
    return <h1>Error: {errorMessage}</h1>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>

        <div className="scroll-progress-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
        </div>

        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem) => <p>{dataItem.title}</p>)
            : null}
        </div>
      </div>
  );
}

export default ScrollIndicator;

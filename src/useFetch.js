import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      //fetch(url.searchString, {signal : abortCont.signal})
      fetch(url.searchString)
      .then(res => {
        if(!res.ok) {
          throw Error('Couldn\'t fetch the data for that resource');
        }
        //console.log(url.searchString);
        //console.log(res);
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
        }
      })
    })

    //return () => abortCont.abort();
  }, [url]);

  return {data, isPending, error}
}

export default useFetch;
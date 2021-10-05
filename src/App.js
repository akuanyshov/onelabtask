import React from 'react'

function App() {

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      return res.json();
    })
    .then((json) => {
      setNews(json);
    });
  }, []);



  return (
    <div className="wrapper clear">
      {/* Header */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/news.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React News</h3>
            <p className="opacity-5">Свежие новости каждый день</p>
          </div>
        </div>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все новости</h1>
          <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input  placeholder="Поиск..." />
          </div>
        </div>

        {/* Card */}
        <div className="d-flex flex-wrap">
            {news.map((obj) => (
                <div className="card">
                  <p>{obj.title}</p>
                  <div className="d-flex justify-between">
                    <div className="d-flex flex-column align-center">
                      <span>{obj.body}</span>
                    </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

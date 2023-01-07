import './App.css';

function App() {
    function fetchUrl(url) {
        console.log(`fetching ${url}...`, this.firstName);
    }

    const user = {
        firstName: 'Bob'
    }

    function debounce(callback, delay) {
        let timer;

            return (url) => {
                if (timer) {
                    clearTimeout(timer);
                }

                timer = setTimeout(() => {
                    callback(url);
                }, delay)
            }
    }

    const fetching = debounce(fetchUrl.bind(user), 300);

    fetching(1);
    fetching(2);
    fetching(3);
    fetching(4);
    fetching(5);

  return (
    <div className="App">
      React hooks tutorial
    </div>
  );
}

export default App;

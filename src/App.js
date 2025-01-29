import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>MY TO-DO LIST</h2>
      </div>
      <div className="both">
        <div className="notes">
          <h2>Activities of the day</h2>
        </div>
        <div className="calendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FNairobi&showPrint=0&title=To-Do%20List&src=Y2hlbGFuZ2F0ZG9waGluZUBnbWFpbC5jb20&src=NzMwNTc1MWU0MTUxY2VhNWZmY2FiODI3YzJhYzhmOWU0YzNlZWQwZTlkYmIyZGMwOGVjMzc1NmM4Yjk1MzZmOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2Iua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23EF6C00&color=%2333B679&color=%230B8043"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;

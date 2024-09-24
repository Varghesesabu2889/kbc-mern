import './App.css';
import data from './Compoents/data';  // Corrected path
import lifeline1 from './assets/images/audience.png'; 
import lifeline2 from './assets/images/phone.png'; 
import lifeline3 from './assets/images/fivty.png'; // Ensure no spaces in the file name
import lifeline4 from './assets/images/change question.png';
import Quiz from './Compoents/Quiz';  // Corrected path
import Timer from './Compoents/Timer';  // Corrected path
import { useEffect, useState } from 'react';
import Play from './Compoents/Play';

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");
  const [userName, setUserName] = useState(null);

  const moneyList = [
    { id: 1, amount: "1,000" },
    { id: 2, amount: "2,000" },
    { id: 3, amount: "3,000" },
    { id: 4, amount: "4,000" },
    { id: 5, amount: "5,000" },
    { id: 6, amount: "10,000" },
    { id: 7, amount: "20,000" },
    { id: 8, amount: "40,000" },
    { id: 9, amount: "80,000" },
    { id: 10, amount: "1,60,000" },
    { id: 11, amount: "3,20,000" },
    { id: 12, amount: "6,40,000" },
    { id: 13, amount: "12,50,000" },
    { id: 14, amount: "50,00,000" },
    { id: 15, amount: "1 Crore" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyList.find((money) => money.id === questionNumber - 1).amount);
  }, [moneyList, questionNumber]);

  const handleRestart = () => {
    setQuestionNumber(1);  
    setStop(false);        
    setEarned("0");        
  };

  return (
    <div className="app_container">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              questionNumber - 1 === data.length && questionNumber>5 ? (
                <div className="winner">
                  <div className="">🏆 Congratulations!</div>
                  You earned : <span className='earned_money'>₹{earned}</span>
                  <button className='restartButton' onClick={handleRestart}>Restart the Game</button>
                </div>
              ) : (
                <>
                  <div className="earned">
                    You earned ₹{earned} <br />
                    <div>
                  <button className='restartButton' onClick={handleRestart}>Restart</button>
                  </div>
                  </div>
                
                </>
              )
            ) : (
              <>
                <div className="top">
                  <Timer setStop={setStop} questionNumber={questionNumber} />
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    earned={earned}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="price_list">
            <div className="lifelines">
              <div className="lifeline">
                <img src={lifeline1} alt="Audience Lifeline" />
              </div>
              <div className="lifeline">
                <img src={lifeline2} alt="Phone Lifeline" />
              </div>
              <div className="lifeline">
                <img src={lifeline3} alt="50-50 Lifeline" />
              </div>
              <div className="lifeline">
                <img src={lifeline4} alt="Change Question Lifeline" />
              </div>
            </div>

            <h2>Money List</h2>
            <ul className="moneyList">
              {moneyList.map(({ id, amount }) => (
                <li
                  key={id}
                  className={questionNumber === id ? 'moneyListItem active' : 'moneyListItem'}
                >
                  <span className="moneyListItemNumber">{id}</span>
                  <span className="moneyListItemAmount">{amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Play setUserName={setUserName} />
      )}
    </div>
  );
};

export default App;



import { useNavigate } from "react-router-dom";

const StartForm = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const userName = event.target.elements.userName.value.trim();
    if (userName) {
      navigate(`/QuizMain/${userName}`);
    } else {
      alert("Please enter your name!"); 
    }
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="userName"
        name="userName"
        placeholder="Enter your Name to Start Quiz!!"
      />
      <button type="submit">Start</button>
    </form>
  );
};

export default StartForm;

import { useParams } from "react-router-dom"
const QuizMain = () => {
const {name}=useParams();
  return (
    <div>
      <h1>hii {name}</h1>
      <p>Quiz App</p>
    </div>
  )
}

export default QuizMain

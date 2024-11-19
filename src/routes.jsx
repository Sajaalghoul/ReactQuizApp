import StartForm from "./components/StartForm/StartForm";
import QuizMain from "./components/QuizMain/QuizMain";

const routes=[
    {
        path:'/',
        element:<StartForm/>
    }, 
    {
        path:'QuizMain/:name', 
        element:<QuizMain/>
    }
]
export default routes;
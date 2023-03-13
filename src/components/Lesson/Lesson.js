import LessonStyle from '../Lesson/Lesson.module.css'

const Lesson = ({id, name , hour , image}) => {
  return (
    <div className={LessonStyle.card}>
      
     
      <div className={LessonStyle.image}>
      <img src={image} alt="#" />
      </div>

 <div className={LessonStyle.name}>
          <h3><span>Lesson Name:</span>{name}</h3>
      <p> <span>Lesson Hour</span>{hour}</p>
      </div>
    </div>
  )
}

export default Lesson

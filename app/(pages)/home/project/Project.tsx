import './Project.css'

export default function Project() {
  return (
    <div className="projectContainer">
       <div className="projectWrapper">
           <div className="projectTitleBox">
               <div className="projectTitle">
               <div className="projectCircle"></div>
              <h2>Project</h2>
               </div>
           </div>
           <p className="projectDetail">
              Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has 
              been the industry's standard dummy text ever since the 1500s,
              </p>

           <div className="projectCardWrapper">
               <div className="projectCard">1</div>
               <div className="projectCard">1</div>
               <div className="projectCard">1</div>
               <div className="projectCard">1</div>
           </div>
       </div>
    </div>
  )
}

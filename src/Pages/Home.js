import React from 'react'
import Header from '../Components/Header'
import education from '../education.png'
import work from '../deviceicon.png'
import office from '../office.jpg'
import desktop from '../desktop.jpg'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'



let project = [
    
    {
        id:"1",
        projectname: "Portfolio",
        project: "React Redux",
        image: "https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png",

    
    },
    {
        id:"2",
        projectname: "Autantication",
        project: "php",
        image: "https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png"
    
    },
    {   id:"3",
        projectname: "Travel Agent",
        project: "mongo",
        image: "https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png"
    
    }
    ]
    
    let mentoring = [{
        id:"1",
        projectname: "Html Mentoring",
        project: "React Redux",
        image: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-icons-download-14.png",
        link:"/HtmlMentoring"
    
    },
    {   id:"2",
        projectname: "Css Mentoring",
        project: "php",
        image: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-css-file-document-icon-png-image_4176517.jpg",
        link:"/CssMentoring"
    
    },
    {   id:"3",
        projectname: "Javascript Mentoring",
        project: "mongo",
        image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
        link:"/JsMentoring"
    },
    {   id:"4",
        projectname: "React Mentoring",
        project: "mongo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
        link:"/ReactMentoring"
    
    },
    {   id:"5",
        projectname: "Node.Js Mentoring",
        project: "mongo",
        image: "data:image/png;base64,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",
        link:"/NodeMentoring"
    },
    {   id:"6",
        projectname: "MongoDB Mentoring",
        project: "mongo",
        image: "https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png",
        link:"/MongoMentoring"
    }
    ]
    
    const persons={
    "entities":{
        "applicants":[{"lastName":"Agamemnon","isPrimaryApplicant":false,"id":"16671520038"},
    {"lastName":"Purdy","isPrimaryApplicant":true,"id":"16671520039"},
    {"lastName":"Brekky","isPrimaryApplicant":true,"id":"16671520040"},
    {"lastName":"Abouli","isPrimaryApplicant":true,"id":"16671520041"}]}}
    
    // Accept persons data, and an id
    function getApplicantById(persons, id) {
    
      // Return the found applicant from the function
      return persons.entities.applicants.find(a => a.id ===id);
    }
    
    // Pass in the data, and the id to the function
    const applicant = getApplicantById(persons, '16671520041');
    console.log(applicant);
    
    let product_data=[{ product_id:'1', product_image: "assets/img/rhoite.jpg"}, { product_id:'2', product_image: "assets/img/smtz.jpg"}, ];
    
    let select = 2
    
    let op = product_data.filter(e=> e.product_id === select)
    
    console.log(op)
    


    
    
    

  
    
export default function Projects() {

    const imageClick = id => {
        console.log(id)
      } 
    
   

    return (

        <div>
            <div className="container">
                <Header></Header>
                <main>
                    <div className="text-white textugur"> Hey, I am Ugur </div>
                    <div className=" container mainstyle">
                        <div>
                            <div className="imgdiv">  <Link className="text-white" to="/Mentor">
                                <img className="educationimg" src={education} alt="Logo" /> </Link> </div>
                            <div> <h1 className="text-white mentortext">Mentor</h1> </div>
                        </div>
                        <div>
                            <div className="imgdiv"><img className="workimg" src={work} alt="Logo" /> </div>
                            <h1 className="text-white">Web Developer</h1>
                        </div>
                    </div>
                </main>
            </div>


            <section className="py-5 w-100 bg-primary text-center">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <a href="k" className="btn btn-primary my-2">Main call to action</a>
                            <a href="k" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </div>
            </section>



            <div className="container">
            <div  class="mt-5 row row-cols-1 row-cols-md-3 mb-3 text-center"> 
            {project.map(item => 
                    <div key={item} class="col">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 key={item} class="my-0 fw-normal">{item.projectname}</h4>
                            </div>
                            <div class="card-body">
                            <img className="workimg" src={item.image} alt="office" />
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">{item.project}</li>
                            <li class="list-group-item">{item.projectname}</li>
                            <li class="list-group-item">{item.projectname}</li>
                            </ul>
                                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

               

                <div class="row featurette ">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">

                        <img className="workimg" src={office} alt="office" />
                    </div>
                </div>
          </div>      

            <section className="bg-primary text-center">
            <div class="rowinform">
               
                <div class="columninform">
                <img className="desktop" src={desktop} alt="desktop" />
                </div>
                <h2>Mentoring Projects</h2>
                <div class="columninform" >
                    <div class="row w-100 mt-2" >
                    {mentoring.map(item =>

                        <div  key={item} class="col-lg-4 w-25  mt-5">

<Link className="text-white"  to={item.link}>    <img key={item.id} onClick={() => imageClick(item.id)} className="mentoringimg" 
src={item.image} alt="office" /></Link>

                            <h5>{item.projectname}</h5>
                            <p><a class="btn btn-secondary" href="l">View projects »</a></p>
                        </div>
                    )}
                </div>
                </div>
            </div>  
          </section>
           <Footer></Footer>
            </div>
       

    )
}

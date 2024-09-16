// Get refrences to the form and display area //

const form = document.getElementById('resume form') as HTMLElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission //

form.addEventListener('submit' , (Event:Event)=> {
    Event.preventDefault();  //prevent page reload

    // collect input values

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    
    // Generate the resume content dynamically
    const resumHTML = `
    <h2><b>Resume</b><h2>
    <h3>Personal Information</h3>
    <P><b>Name:</b>${name}</p>
    <P><b>Email:</b>${email}</p>
    <P><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    `;

    //Display thr generated resume
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumHTML;
        }else {
            console.error('The resume display element is missing')
        }
    });


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
    <h2><b> Editable Resume</b><h2>
    <h3>Personal Information</h3>
    <P><b>Name:</b><span contenteditable="ture">${name}</span></p>
    <P><b>Email:</b><span contenteditable="ture">${email}</span></p>
    <P><b>Phone:</b><span contenteditable="ture">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="ture">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="ture">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="ture">${skills}</p>

    `;

    //Display the generated resume
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumHTML;
        }else {
            console.error('The resume display element is missing')
        }
    });


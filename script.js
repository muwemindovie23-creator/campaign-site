  let fMani = document.getElementsByClassName('test')[0]
  let fManiText = "Advocate for sensitization workshops of access to digital resources. <br> Work with administration to expand access to online platforms for learning and research. <span>more</span>";
  let fManiChange = "Advocate for sensitization workshops of access to digital resources. <br> Work with administration to expand access to online platforms for learning and research. <br> Establish a central resource hub where students can easily find notes, past papers and study materials from previous years."
  
  let sMani = document.getElementsByClassName('test')[1]
  let sManiText = "Create a structured peer-to-peer tutoring program to support students struggling in key subjects. <span>more</span>";
  let sManiChange = "Create a structured peer-to-peer tutoring program to support students struggling in key subjects.  <br> Advocate for the university to formally recognize student tutors as credible academic mentors, ensuring their contribution is valued and rewarded. <br> This recognition could take the form of official certificates, inclusion on academic transcripts, or priority consideration for academic opportunities such as research assistantships and internships."

  let tMani = document.getElementsByClassName('test')[2]
  let tManiText = "Establish clear and reliable communication channels where students can report academic challenges and receive timely responses. <span>more</span>";
  let tManiChange = "Establish clear and reliable communication channels where students can report academic challenges and receive timely responses. <br> Prioritize students who often face difficulties with the student portal, such as those transitioning to law programs, repeating courses, <br> or changing programs, ensuring their concerns are addressed fairly and quickly."
  
  let foMani = document.getElementsByClassName('test')[3]
  let foManiText = "Liaise directly with the IT department on behalf of students to address problems with the student portal, especially during registration and exam result periods. <span>more</span>";
  let foManiChange = "Liaise directly with the IT department on behalf of students to address problems with the student portal, especially during registration and exam result periods. <br> Advocate for long-term solutions to prevent recurring frustrations. <br> Specifically, I will push for a system that ensures the portal only opens for student access once all grades have been published. This will reduce congestion, improve fairness, and restore trust in the academic process."

  // let plan = document.getElementsByClassName('test')[4]
  // let planText = "Advocate for more industry seminars and career talks to connect students with professionals.<span>more</span>";
  // let planChange = "Advocate for more industry seminars and career talks to connect students with professionals. Forge partnerships to create internship and mentorship opportunities with companies and alumni. Implement practical workshops for skill development and building a professional online presence to enhance employability."

  const changeText = (test, text1, text2) => {
  test.innerHTML = text1
  test.addEventListener('click', () => {
    test.innerHTML === text1 ? test.innerHTML = text2 : 
    test.innerHTML = text1;    
})
}

changeText(fMani, fManiText, fManiChange)
changeText(sMani, sManiText, sManiChange)
changeText(tMani, tManiText, tManiChange)
changeText(foMani, foManiText, foManiChange)
// changeText(plan, planText, planChange)

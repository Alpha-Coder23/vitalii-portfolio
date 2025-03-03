import resume_pdf from "../assets/VITALII-VLASIUK-FlowCV-Resume.pdf";

export default function ResumeSection() {
  return (
    <div>
        <h1>Resume</h1>
        {/* <embed src={resume_pdf} type="application/pdf" width="50%" height="600px" /> */}
        <object className="pdf" 
            data={resume_pdf}
            width="800"
            height="500">
    </object>
    </div>
  )
}

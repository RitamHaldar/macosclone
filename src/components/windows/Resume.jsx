import MacWndow from './MacWndow'
import "./resume.scss";
const Resume = ({ windowname, setwindowState }) => {
    return (
        <MacWndow windowname={windowname} setwindowState={setwindowState}>
            <div className='resume-container'>
                <iframe src="../public/resume.pdf" frameborder="0"></iframe>
            </div>
        </MacWndow>

    )
}

export default Resume
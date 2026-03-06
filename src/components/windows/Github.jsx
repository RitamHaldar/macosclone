import { useState } from "react";
import gitdata from "../../githubdata/gitdata.json"
import MacWndow from "./MacWndow";
import "./github.scss"
const Github = ({ windowname, setwindowState }) => {
    const Gitcard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
        return <div className="card" key={data.id}>
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className="tags">
                {data.tags.map(elem => <p>{elem}</p>)}
            </div>
            <div className="urls">
                <a href={data.repoLink}>Repolink</a>
                <a href={data.demoLink}>Demolink</a>
            </div>
        </div>
    }
    return (
        <MacWndow windowname={windowname} setwindowState={setwindowState}>
            <div className="cards">
                {gitdata.map((elem, idx) => {
                    return <Gitcard data={elem} key={idx} />
                })}
            </div>
        </MacWndow>

    )
}

export default Github

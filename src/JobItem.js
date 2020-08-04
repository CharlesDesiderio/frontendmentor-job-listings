import React from 'react';
import './JobItem.css';

const JobItem = (props) => {
    return (

        <div className="jobItem" id={props.featured ? "featured" : null }>
            <div className="details">
                <div className="image">
                    <img src={props.logo} alt="logo" />
                </div>
                <div className="info">
                    <span className="companyName">{props.company}</span>
                    {props.new ? <span className="new">NEW</span> : ""}
                    {props.featured ? <span className="featured">FEATURED</span> : ""}
                    <h1>{props.position}</h1>
                    <span className="postDate">{props.postedAt}</span>
                    <span className="contract">{props.contract}</span>
                    <span className="location">{props.location}</span>
                </div>
            </div>
            <div className="tags">
                <ul>
                    <li onClick={() => props.addNewTag(props.role)}>{props.role}</li>
                    <li onClick={() => props.addNewTag(props.level)}>{props.level}</li>
                    {props.tools.map((x) => {
                        return <li onClick={() => props.addNewTag(x)}>{x}</li>
                    })}
                </ul>

            </div>
        </div>
    )
}

export default JobItem;
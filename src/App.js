import React, { useState } from 'react';
import JobItem from './JobItem';
import jobData from './data.json';
import './app.css';

const App = () => {

  let filteredJobData = [];

  const [tags, setTags] = useState([]);

  const addTag = (tagName) => {
    if (!tags.includes(tagName)) {
      setTags(tags.concat(tagName));
    } else {
      setTags(tags.filter((x) => {
        return x !== tagName
      }))
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((x) => {
      return x !== tagToRemove
    }))
  }

  const clearAll = () => {
    setTags([]);
  }

  if (tags.length > 0) {
    if (filteredJobData.length > 0) {
      filteredJobData.forEach((x) => {
        let combo = x.languages.concat(x.tools).concat(x.role).concat(x.level)
        let result = tags.every(y => combo.indexOf(y) >= 0)
        if (result) {
          filteredJobData.push(x)
        }
      })
    } else {
      jobData.forEach((x) => {
        let combo = x.languages.concat(x.tools).concat(x.role).concat(x.level)
        let result = tags.every(y => combo.indexOf(y) >= 0)
        if (result) {
          filteredJobData.push(x)
        }
      })
    }
  } else {
    filteredJobData = [];
    filteredJobData = [...jobData];
  }

  return (
    <div className="App">
      <div className="headerImage"></div>
      <div className="selectedOuter" style={tags.length > 0 ? { display: 'flex' } : { display: 'none' }} >
        <div className="selectedTags">
          <div className="tagsLeft">
            {tags.map((x) => {
              return <span className="tagSpan">{x}<button onClick={() => removeTag(x)} className="tagXButton">X</button></span>
            })}
          </div>
          <div className="tagsRight"><span className="clearButton" onClick={() => clearAll()}>Clear</span></div>
        </div>
      </div>
      <div className="mappedJobs">

      {filteredJobData.map((x) => {
        return <JobItem className="jobItemComponent" addNewTag={addTag}
        logo={x.logo}
        company={x.company}
        new={x.new}
        featured={x.featured}
        position={x.position}
        postedAt={x.postedAt}
        contract={x.contract}
        location={x.location}
        role={x.role}
        level={x.level}
        tools={x.tools.concat(x.languages)} />
      })}
      </div>
    </div>
  );
}

export default App;

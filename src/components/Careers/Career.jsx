import React from 'react';
import "./Career.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Career = () => {
  return (
    <div className="main bg-gray-100">
      <div className="container">
        <div id="mail">
          <h4>Career at Future Core Innovations!</h4>
          <p>Mail your resume at <a href="mailto:hr.futurecore@outlook.com">hr.futurecore@outlook.com</a></p>
        </div>
        <div id="careers">
          <h2>Job Openings</h2>
          <div className="open-job">
            <div className="option-filter">
              <div className="job-in">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input type="text" placeholder="Search job" />
              </div>
              <span className="Category">
                <FontAwesomeIcon icon={faCaretDown} />
                <select id="Category">
                  <option value="Category">Category</option>
                  <option value="web-design">Web Design</option>
                  <option value="app-design">App Design</option>
                  <option value="app-development">App Development</option>
                </select>
              </span>
              <span className="filter">
                <FontAwesomeIcon icon={faCaretDown} />
                <select id="filter">
                  <option value="filter">Filter</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="internship">Internship</option>
                </select>
              </span>
            </div>
          </div>
        </div>
        {/* <div id="jobs">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="job-inner">
                <h2>HR Intern</h2>
                <div className="job-d">
                  <div>
                    <p>Required Experience</p>
                  </div>
                  <div>
                    <h4>Fresher</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Number of Position</p>
                  </div>
                  <div>
                    <h4>1</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Job Type</p>
                  </div>
                  <div>
                    <h4>Internship</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Today</p>
                  </div>
                  <div>
                    <button><a href="#">Apply Now</a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="job-inner">
                <h2>Social Media Manager</h2>
                <div className="job-d">
                  <div>
                    <p>Required Experience</p>
                  </div>
                  <div>
                    <h4>1 to 2 years</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Number of Position</p>
                  </div>
                  <div>
                    <h4>1</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Job Type</p>
                  </div>
                  <div>
                    <h4>Full Time</h4>
                  </div>
                </div>
                <div className="job-d">
                  <div>
                    <p>Today</p>
                  </div>
                  <div>
                    <button><a href="#">Apply Now</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Career;

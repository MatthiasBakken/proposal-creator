import React, { useState } from 'react';

import './builder.css';
import { IBuilderData } from '../dummy-data/builders-data';

interface IProps {
    data: IBuilderData;
}

const BUILDER = "builder__"

const Builder: React.FC<IProps> = (props) => {

    const { data } = props;

    return (
        <div className={`${BUILDER}main`}>
            <div className={`${BUILDER}container`}>
                <div className={`${BUILDER}header`}>
                    <h1 className={`${BUILDER}name`}>{`${data.firstName} ${data.lastName}`}</h1>
                    <p className={`${BUILDER}designation`}>{`Designation: ${data.designation}`}</p>
                </div>
                <div className={`${BUILDER}details`}>
                    <div className={`${BUILDER}skills-container`}>
                        <h2 className={`${BUILDER}skill-tag`}>Skills: </h2>
                        <div className={`${BUILDER}skills`}>
                            {data.skills.map(skill => {
                                return (
                                    <p className={`${BUILDER}skill`} key={skill}>{skill}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`${BUILDER}availability-container`}>
                        <p>{`Available: ${data.availability.currentlyAvail === true ? 'Yes' : 'No'}`}</p>
                        <p>{`Date Available: ${data.availability.availableOn.length ? data.availability.availableOn : 'No date available'}`}</p>
                        <p>{`Dates Unavailable: ${data.availability.blackoutDates.length ? data.availability.blackoutDates : 'No blackout dates scheduled'}`}</p>
                        <h2>Upcoming Project:</h2>
                        <div className={`${BUILDER}project-container`}>
                            <p>{`Start Date: ${data.availability.upcomingProjects.startDate}`}</p>
                            <p>Project: <a target="blank" href={data.availability.upcomingProjects.project === "No scheduled project" ? "#" : `${data.availability.upcomingProjects.project}`}>{`${data.availability.upcomingProjects.project}`}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builder;
import { Grid } from '@mui/material';
import React from 'react';
import TeamCard from '../components/Team/TeamCard';

function Team(props) {
    const team = [
        {Photo:"Davis", FullName:"Davis Carder", Role:"Super duper position"},
        {Photo:"Hayile", FullName:"Haylie Donin", Role:"Super duper position"},
        {Photo:"Miracle", FullName:"Miracle Bator", Role:"Super duper position"},
        {Photo:"Randy", FullName:"Randy Rosser", Role:"Super duper position"}
    ];

    return (
        <div id="Team" className=" flex flex-col lg:flex-row-reverse items-center justify-evenly h-[1600px] md:h-[950px]">
            <div className="text-center lg:text-left">
                <h1 className="font-bold text-[48px] lg:text-[64px] text-[#091638] md:pb-4 pt-8">
                    Our Team
                </h1>
                <p className="text-[16px] lg:text-[21px] text-[#091638] w-[380px] md:w-[600px] lg:w-[500px] text-justify">
                        We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-fit h-fit gap-8">
                {
                    team.map((teamMember) =>
                        <TeamCard 
                            Photo={`/images/Team/${teamMember.Photo}.svg`}
                            FullName={teamMember.FullName}
                            Role={teamMember.Role}
                        />
                    )
                }      
            </div>
        </div>
    );
}

export default Team;
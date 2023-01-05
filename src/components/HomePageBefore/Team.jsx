import React from "react";
import TeamCard from "./TeamCard";
import { team } from "../../utils/team";


export default function Team() {

  return (
    <div
      id="Team"
      className=" flex flex-col lg:flex-row-reverse items-center justify-evenly h-[1600px] md:h-[950px]"
    >
      <div className="text-center lg:text-left">
        <h1 className="font-bold text-[48px] lg:text-[64px] text-[#091638] md:pb-4 pt-8">
          Our Team
        </h1>
        <p className="text-[16px] lg:text-[21px] text-[#091638] w-[380px] md:w-[600px] lg:w-[500px] text-justify">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-fit h-fit gap-8">
        {team.map((teamMember) => (
          <TeamCard
            Path={teamMember.Path}
            FullName={teamMember.FullName}
            Role={teamMember.Role}
          />
        ))}
      </div>
    </div>
  );
}

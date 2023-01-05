import TeamCard from "./TeamCard";
import { team } from "../../utils/team";

export default function Team() {
  return (
    <section
      id="Team"
      className="section-layout grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div className="space-y-4 my-auto col-span-1">
        <h1 className="title-xl text-center lg:text-start">Our Team</h1>
        <p className="title-description-lg">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-1">
        {team.map((teamMember) => (
          <TeamCard
            Path={teamMember.Path}
            FullName={teamMember.FullName}
            Role={teamMember.Role}
          />
        ))}
      </div>
    </section>
  );
}

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
          Our team is dedicated to provide personalized and attentive service.
          With their unique expertise and deep knowledge of the local market, we
          work together to help our clients find their dream home.
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

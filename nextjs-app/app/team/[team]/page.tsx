import { sanityFetch } from "@/sanity/lib/live";
import { getTeamQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ team: string }>;
};

export default async function Page(props: Props) {
  const params = await props.params;

  const [{ data: team }] = await Promise.all([
    sanityFetch({ query: getTeamQuery, params: { slug: params.team } }),
  ]);

  if (team == null) {
    return null;
  }
  return (
    <div>
      <h2>{team.name}</h2>
      {team.goals.map((goal, index) => {
        return (
          <div key={goal._id} className="max-w-[40rem] m-12 bg-red">
            <h2>Mål {index + 1}</h2>
            <h3>{goal.objective}</h3>
            {goal.keyResults.map((kr, krIndex) => {
              return (
                <div key={kr._id}>
                  <h2>KR {krIndex + 1}</h2>
                  <h3>{kr.description}</h3>
                  <div
                    style={{
                      height: "16px",
                      width: `${kr.progress}%`,
                      backgroundColor: "gray",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

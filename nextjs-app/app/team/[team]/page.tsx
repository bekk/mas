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
    <div className="max-w-[1440px] mx-auto px-12">
      <h2 className="text-[32px]">{team.name}</h2>
      <div className="grid grid-cols-3 gap-8">
        {team.goals.map((goal, index) => {
          console.log(goal);
          
          return (
            <div key={goal._id} >
              <div className="p-8 bg-slate-200 flex gap-4 flex-col max-w-[440px] h-48">

                <h3 className="text-[24px]">Mål {index + 1}</h3>
                <h3>{goal.objective}</h3>
                {goal.dependentOn.length > 0 &&<div>
                  Avhengig av:{' '}
                  {goal.dependentOn.map((dependentTeam) => {
                    console.log(dependentTeam);
                    
                    return (
                      <span key={dependentTeam._id}>
                        {dependentTeam.name}
                      </span>
                    );
                  })}
                  </div>}
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {goal.keyResults.map((kr, krIndex) => {
                  return (
                    <div key={kr._id} className="p-8 bg-slate-400 flex gap-4 flex-col max-w-[440px]">
                      <h4 className="text-[18px]">KR {krIndex + 1}</h4>
                      <p>{kr.description}</p>
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
            </div>
          );
        })}
      </div>

    </div>
  );
}

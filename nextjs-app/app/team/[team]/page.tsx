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
  return <h2>{team.name}</h2>;
}

import { RepoCard } from "@/components/repo-card";

interface IRepo {
  name: string;
  id: number;
  description: string;
  html_url: string;
  [key: string]: any;
}

const ProjectPage = async () => {
  const res = await fetch("https://api.github.com/users/takijaki516/repos", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "*/*",
    },
  });

  const repos: Array<IRepo> = await res.json();

  return (
    <div className="container my-20  items-start grid md:grid-cols-2 gap-5 gap-y-10">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          description={repo.description}
          html_url={repo.html_url}
          name={repo.name}
        />
      ))}
    </div>
  );
};

export default ProjectPage;

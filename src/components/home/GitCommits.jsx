const GitCommits = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GITHUB);
    if (!response.ok) throw new Error("Failed to fetch commits");
    const data = await response.json();

    const commits = data["items"];

    return (
      <div>
        {commits.length && (
          <div className="">
            {commits.map((c, idx) => (
              <div key={idx} className="flex gap-2">
                <p>{c.sha.slice(0, 7)}</p>
                <p>{c.commit.message}</p>
                <p className="flex-1 text-right">{c.repository.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching commits:", error);
    return <div>Error loading commits</div>;
  }
};

export default GitCommits;

function ParseRepo(repoUrl: string): void {
  let owner: string, repoName: string;

  // Remove .git extension if present
  repoUrl = repoUrl.replace(/\.git$/, "");

  // Extract owner and repository name
  const parts: string[] = repoUrl.split("/");
  if (
    (parts.length === 5 || parts.length === 4) &&
    parts[0] === "https:" &&
    parts[1] === "" &&
    parts[2] === "github.com"
  ) {
    owner = parts[3];
    repoName = parts[4];
  } else if (parts.length === 2) {
    [owner, repoName] = parts;
  } else {
    console.error("Invalid GitHub repository URL or name");
    return;
  }

  console.log("Owner:", owner);
  console.log("Repository Name:", repoName);
}

export default ParseRepo;

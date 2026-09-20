import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/ArchiveMark-Support' : '',
  assetPrefix: isGitHubPages ? '/ArchiveMark-Support/' : '',
};

export default nextConfig;

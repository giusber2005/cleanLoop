'use client'

import { nFormatter } from '@/app/utils/lib/utils';
import React, { useEffect, useState } from 'react';

const GitHubStars = ({ owner, repo }: { owner: string; repo: string }) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchStars();
  }, [owner, repo]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <p>
        <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
        <span className="font-semibold">{nFormatter(stars ?? 0)}</span>
    </p>
  );
};

export default GitHubStars;

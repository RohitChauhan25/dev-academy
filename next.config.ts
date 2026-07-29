import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.3'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  /* config options here */
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

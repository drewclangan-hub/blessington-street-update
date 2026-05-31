// Simple GitHub OAuth proxy for Decap CMS
// Requires env vars: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) {
    // Redirect to GitHub OAuth
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: 'repo,user',
      redirect_uri: `${process.env.SITE_URL}/api/callback`,
    });
    return res.redirect(`https://github.com/login/oauth/authorize?${params}`);
  }
}

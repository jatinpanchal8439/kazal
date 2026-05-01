{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "functions": {
    "dist/server/index.js": {
      "runtime": "nodejs18.x"
    }
  },
  "env": {
    "SUPABASE_URL": "@supabase_url",
    "SUPABASE_PUBLISHABLE_KEY": "@supabase_publishable_key",
    "VITE_SUPABASE_URL": "@supabase_url",
    "VITE_SUPABASE_PUBLISHABLE_KEY": "@supabase_publishable_key",
    "VITE_SUPABASE_PROJECT_ID": "@supabase_project_id"
  }
}

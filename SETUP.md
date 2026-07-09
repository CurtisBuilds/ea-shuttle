# EA Hoops — Setup & Deploy

## Run locally
```bash
cd "Jr Basketball/ea-hoops"
npm install
npm run dev        # runs on http://localhost:3001 (update NEXT_PUBLIC_APP_URL if needed)
```

## Deploy (Vercel)
1. Push `Jr Basketball/ea-hoops/` to GitHub (or connect this folder directly in Vercel)
2. Set environment variables in Vercel dashboard — copy from `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `DATABASE_URL`
3. Custom domain: `ea-hoops.elevationathletics.ca`

## Auth
- Shares the same Supabase project (`cztbfzlxkyioecuzchdd`) and Coach table as EA Rally
- Coaches log in with OTP email code — same email they use for EA Rally
- New coaches need to be added to the Coach table in Supabase with `status = 'active'`

## Curriculum
- All 48 practice plan pages scraped from `elevationathletics.ca/jr-basketball-curriculum/`
- Content lives in `lib/curriculum.ts` — edit there to add/update drills
- MVP Practice Plan 11 was not found on the source website (marked as empty)

## PWA icons
- Orange (#F55D1B) background with basketball logo
- 192×192 and 512×512 in `public/`

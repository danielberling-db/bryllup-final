# Deploy Guide - Bryllupsside til Vercel

## 🚀 Enkleste Metode: Direkte Deploy via Vercel Web Interface

**Dette er den raskeste måten å få siden live:**

1. Gå til https://vercel.com og logg inn med GitHub
2. Klikk "Add New Project"
3. Velg `bryllup-final` repository (eller `danielberling-db/bryllup-final`)
4. Vercel vil automatisk detektere at det er et Vite-prosjekt
5. La innstillingene stå som de er (Build Command: `npm run build`, Output Directory: `dist`)
6. Klikk "Deploy"
7. Venter 1-2 minutter - siden er nå live! 🎉

Du får en URL som `bryllup-final.vercel.app` - denne kan du deretter koble til remine.no.

### Koble til remine.no:
1. Gå til Project Settings → Domains
2. Legg til `remine.no` og `www.remine.no`
3. Følg instruksjonene for å oppdatere DNS-innstillingene hos din domeneleverandør

---

## Automatisk Deploy via GitHub Actions (Valgfritt)

### Steg 1: Opprett Vercel-prosjekt
1. Gå til https://vercel.com og logg inn med GitHub
2. Klikk "Add New Project"
3. Velg `bryllup-final` repository
4. Vercel vil automatisk detektere Vite-prosjektet
5. Klikk "Deploy"

### Steg 2: Hent Vercel Credentials
Etter første deploy:
1. Gå til Project Settings → General
2. Kopier **Project ID** og **Organization ID**
3. Gå til https://vercel.com/account/tokens
4. Opprett en ny token (kall den "GitHub Actions")
5. Kopier tokenet

### Steg 3: Legg til Secrets i GitHub
1. Gå til https://github.com/danielberling-db/bryllup-final/settings/secrets/actions
2. Legg til tre secrets:
   - `VERCEL_TOKEN` = tokenet fra steg 2
   - `VERCEL_ORG_ID` = Organization ID fra steg 2
   - `VERCEL_PROJECT_ID` = Project ID fra steg 2

### Steg 4: Automatisk Deploy
Nå vil hver push til `main` automatisk deploye til Vercel!

## Alternativ: Direkte Deploy (uten GitHub Actions)

Hvis du foretrekker å deploye direkte uten GitHub Actions:

```bash
# Installer Vercel CLI
npm i -g vercel

# Deploy første gang
vercel

# Deploy til produksjon
vercel --prod
```

## Custom Domain (remine.no)

For å koble til remine.no:
1. Gå til Project Settings → Domains
2. Legg til `remine.no` og `www.remine.no`
3. Følg instruksjonene for å oppdatere DNS-innstillingene

Vercel har ingen reklame-merker og er helt gratis for personlige prosjekter!

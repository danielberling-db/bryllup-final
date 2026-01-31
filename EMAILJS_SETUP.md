# EmailJS Oppsett for RSVP

For at RSVP-skjemaet skal sende e-post til daniel.berling@hotmail.com, må du sette opp EmailJS:

## Steg 1: Opprett EmailJS konto
1. Gå til [EmailJS.com](https://www.emailjs.com/)
2. Registrer en gratis konto

## Steg 2: Sett opp en e-post service
1. Gå til "Email Services" i dashboardet
2. Klikk "Add New Service"
3. Velg din e-post provider (Gmail, Outlook, etc.)
4. Følg instruksjonene for å koble til din e-postkonto
5. Noter ned **Service ID** (f.eks. "service_rsvp")

## Steg 3: Opprett en e-post mal
1. Gå til "Email Templates"
2. Klikk "Create New Template"
3. Bruk følgende innstillinger:

**Template Name:** RSVP Wedding Template

**Subject:** Ny RSVP for bryllupet fra {{from_name}}

**Content:**
```
Fra: {{from_name}}
E-post: {{from_email}}

{{message}}
```

**To Email:** daniel.berling@hotmail.com

4. Noter ned **Template ID** (f.eks. "template_rsvp")

## Steg 4: Hent Public Key
1. Gå til "Account" → "General"
2. Finn din **Public Key**

## Steg 5: Oppdater koden
I filen `src/components/RSVP.jsx`, linje 55-66, erstatt:
- `'service_rsvp'` med din Service ID
- `'template_rsvp'` med din Template ID
- `'YOUR_PUBLIC_KEY'` med din Public Key

Eksempel:
```javascript
await emailjs.send(
  'service_abc123',           // Din Service ID
  'template_xyz789',          // Din Template ID
  {
    to_email: 'daniel.berling@hotmail.com',
    from_name: data.main_guest,
    from_email: data.email,
    message: emailMessage,
    reply_to: data.email
  },
  'abcd1234efgh5678'          // Din Public Key
);
```

Nå vil alle RSVP-svar bli sendt til daniel.berling@hotmail.com med full informasjon om gjestene!

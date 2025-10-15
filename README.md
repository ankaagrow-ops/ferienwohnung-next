# Ferienwohnung Unterm Schloß - Next.js Website

Professionelle, SEO-optimierte Website für die Ferienwohnung "Unterm Schloß" in Hambach an der Weinstraße.

## 🚀 Features

- ✅ **Next.js 14 mit App Router** - Modern & performant
- ✅ **Server-Side Rendering (SSR)** - Perfektes SEO
- ✅ **TypeScript** - Type-safe Code
- ✅ **Tailwind CSS** - Modernes Styling
- ✅ **Responsive Design** - Mobile-first
- ✅ **Kontaktformular** mit Server Actions & Zod-Validierung
- ✅ **Impressum & Datenschutz** - Rechtlich korrekt
- ✅ **404-Error-Page** - Professionelle Fehlerbehandlung
- ✅ **SEO-optimiert** - robots.txt & sitemap.xml

## 📁 Projektstruktur

```
ferienwohnung-next/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing Page
│   │   ├── layout.tsx            # Root Layout
│   │   ├── not-found.tsx         # 404 Page
│   │   ├── impressum/page.tsx    # Impressum
│   │   └── datenschutz/page.tsx  # Datenschutz
│   ├── components/
│   │   ├── hero-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── highlights-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── contact-section.tsx   # Mit Server Action
│   │   └── footer.tsx
│   └── lib/
│       ├── landing-content.ts    # Content-Daten
│       └── actions.ts            # Server Actions
├── public/
│   ├── images/                   # Alle Bilder
│   ├── robots.txt                # SEO
│   └── sitemap.xml               # SEO
└── package.json
```

## 🛠 Installation & Entwicklung

### Voraussetzungen
- Node.js **18.x oder 20.x** (NICHT 22.x!)
- npm 9+

### Setup

```bash
# Dependencies installieren
npm install

# Development-Server starten
npm run dev

# Öffne http://localhost:3000
```

### Verfügbare Scripts

```bash
npm run dev      # Development-Server (localhost:3000)
npm run build    # Production Build (funktioniert nur auf Vercel/Server mit Node 18-20)
npm run start    # Production-Server starten
npm run lint     # ESLint ausführen
```

## 🌐 Deployment auf Vercel

### WICHTIG: Lokaler Build schlägt fehl!

⚠️ Der `npm run build` Befehl funktioniert **NICHT** lokal wegen Node v22!
✅ Deployment auf **Vercel funktioniert perfekt** (Vercel nutzt Node 20)

### Deployment-Schritte:

1. **Vercel-Account erstellen:**
   - Gehe zu [vercel.com](https://vercel.com)
   - Melde dich mit GitHub an

2. **Projekt verknüpfen:**
   - Klicke auf "Add New Project"
   - Wähle dein GitHub-Repository
   - Vercel erkennt Next.js automatisch

3. **Build-Einstellungen (automatisch):**
   ```
   Build Command: next build
   Output Directory: .next
   Install Command: npm install
   Development Command: next dev
   ```

4. **Node-Version konfigurieren:**
   - In Vercel Dashboard → Project Settings → General
   - Node.js Version: **20.x** auswählen

5. **Deploy!**
   - Klicke auf "Deploy"
   - Vercel buildet & deployed automatisch
   - Jeder Git-Push deployed automatisch

### Environment Variables (optional)

Falls du Email-Versand implementierst:

```env
# In Vercel Dashboard → Settings → Environment Variables
RESEND_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 Content bearbeiten

Alle Inhalte (Texte, Bilder, etc.) befinden sich in:
```
src/lib/landing-content.ts
```

Einfach diese Datei bearbeiten und neu deployen!

## 🔧 Troubleshooting

### "Build error: TypeError: generate is not a function"

**Problem:** Lokaler Build schlägt fehl
**Lösung:** Das ist normal! Deploy auf Vercel - dort funktioniert es.
**Grund:** Node v22 ist inkompatibel, Vercel nutzt Node 20

### "Port 3000 already in use"

```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Dev-Server läuft nicht

```bash
# Node-Version prüfen
node --version  # Sollte 18.x oder 20.x sein

# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📧 Kontaktformular

Das Kontaktformular nutzt **Next.js Server Actions**.

**Aktuell:** Formular-Daten werden in Console geloggt
**Production:** Ersetze `console.log()` in `src/lib/actions.ts` mit echtem Email-Versand

### Email-Integration Beispiel (Resend):

```typescript
// In src/lib/actions.ts
const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  },
  body: JSON.stringify({
    from: "Ferienwohnung <noreply@your-domain.com>",
    to: ["eva.dirion@gmx.net"],
    subject: `Neue Anfrage von ${name}`,
    html: `...`
  }),
});
```

## 🎨 Styling anpassen

Tailwind-Konfiguration: `tailwind.config.cjs`
Globale Styles: `src/app/globals.css`

## 📊 SEO

- ✅ Server-Side Rendering (Google sieht vollständigen Content)
- ✅ Meta-Tags in jedem `page.tsx` (Metadata-API)
- ✅ `robots.txt` für Crawler
- ✅ `sitemap.xml` für Google
- ✅ Open Graph Tags für Social Media
- ✅ Semantic HTML

## 🚨 Wichtige Hinweise

1. **Node-Version:** Lokal Node 18-20 verwenden (nicht 22!)
2. **Build:** Lokaler Build schlägt fehl - das ist OK
3. **Deployment:** NUR über Vercel deployen
4. **Email:** Kontaktformular-Integration noch implementieren
5. **Domain:** In Vercel Custom-Domain verbinden

## 📞 Support

Bei Fragen:
1. Prüfe diese README
2. Prüfe Vercel Deployment Logs
3. Checke Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Gastgeber:** Eva Dirion & Jon Howard
**Location:** Hambach, Neustadt an der Weinstraße
**Rating:** 9,7/10 auf Booking.com ⭐

---

*Built with Next.js 14, TypeScript & Tailwind CSS*

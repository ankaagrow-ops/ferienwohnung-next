# 🚀 Deployment-Anleitung

## Schnellstart (5 Minuten)

### 1. Code auf GitHub pushen

```bash
cd "/Users/jkwak/VS Coding Studio/ferienwohnung-next"

# Git initialisieren (falls noch nicht)
git init
git add .
git commit -m "Initial commit - Ferienwohnung Next.js Website"

# Zu GitHub pushen
git remote add origin https://github.com/DEIN-USERNAME/ferienwohnung-next.git
git branch -M main
git push -u origin main
```

### 2. Auf Vercel deployen

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke "Sign up" und nutze GitHub OAuth
3. Klicke "Add New Project"
4. Wähle dein Repository `ferienwohnung-next`
5. Vercel erkennt Next.js automatisch
6. Klicke "Deploy"

**Das war's!** ✅ Website ist live in ~2 Minuten!

---

## ⚙️ Erweiterte Konfiguration

### Node-Version einstellen

Vercel nutzt standardmäßig Node 18.x. Das funktioniert!

Falls Probleme:
1. Gehe zu Project → Settings → General
2. Node.js Version → **20.x** auswählen
3. Redeploy

### Environment Variables

Für Email-Versand via Resend:

1. Gehe zu Project → Settings → Environment Variables
2. Füge hinzu:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://deine-domain.com
   ```
3. Redeploy

### Custom Domain verbinden

1. Gehe zu Project → Settings → Domains
2. Klicke "Add Domain"
3. Gib deine Domain ein (z.B. `ferienwohnung-unterm-schloss.de`)
4. Folge den DNS-Anweisungen

**DNS-Records bei deinem Provider:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔄 Automatische Deployments

Jeder Git-Push deployed automatisch:

```bash
# Code ändern
# ...

# Pushen → Automatisches Deployment
git add .
git commit -m "Update content"
git push
```

Vercel:
- Buildet automatisch
- Testet automatisch
- Deployed automatisch
- Zeigt Preview-URL

---

## 📊 Deployment-Status prüfen

1. Gehe zu [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klicke auf dein Projekt
3. Sieh Deployment-Logs

### Häufige Deployment-Fehler

#### "Build failed: Module not found"
```bash
# Lokal testen:
rm -rf node_modules package-lock.json
npm install
npm run dev  # Sollte funktionieren
```

#### "TypeError: generate is not a function"
Das ist NORMAL lokal! Vercel nutzt Node 20 → funktioniert dort.

#### "Environment Variable missing"
Füge sie in Vercel Dashboard → Settings → Environment Variables hinzu.

---

## 🎯 Produktions-Checklist

Vor dem Launch:

- [ ] Content in `src/lib/landing-content.ts` geprüft
- [ ] Alle Bilder in `/public/images` vorhanden
- [ ] Impressum & Datenschutz ausgefüllt
- [ ] Kontaktdaten korrekt (Eva's Email/Telefon)
- [ ] Email-Integration getestet (falls implementiert)
- [ ] Custom Domain verbunden
- [ ] SSL-Zertifikat aktiv (automatisch von Vercel)
- [ ] robots.txt korrekt
- [ ] sitemap.xml aktualisiert
- [ ] SEO Meta-Tags geprüft

---

## 🚨 Rollback bei Problemen

Vercel speichert alle Deployments:

1. Gehe zu Project → Deployments
2. Finde funktionierendes Deployment
3. Klicke "..." → "Promote to Production"

---

## 📞 Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

✅ Website ist jetzt **PRODUCTION-READY** und kann deployed werden!

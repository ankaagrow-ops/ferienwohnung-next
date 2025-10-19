# Buchungssystem Setup

## Übersicht

Das Buchungssystem ist jetzt installiert und funktioniert mit Mock-Daten. Um echte Buchungsdaten von Booking.com zu synchronisieren, folge dieser Anleitung.

## Features

✅ **Interaktiver Kalender** - Gäste sehen verfügbare/gebuchte Tage
✅ **Automatische Synchronisation** - Liest gebuchte Daten von Booking.com via iCal
✅ **Email-Benachrichtigung** - Buchungsanfragen kommen per Email
✅ **Responsive Design** - Funktioniert perfekt auf Handy & Desktop
✅ **Validierung** - Alle Formulareingaben werden geprüft

## Setup: Booking.com iCal-Link verbinden

### Schritt 1: iCal-Link von Booking.com holen

1. Gehe zu **Booking.com Extranet**: https://admin.booking.com
2. Logge dich mit deinen Gastgeber-Zugangsdaten ein
3. Navigiere zu:
   - **"Unterkunft"** → **"Kalender"** → **"Kalender synchronisieren"**
   - ODER: **"Verfügbarkeit & Preise"** → **"Kalender exportieren"**
4. Kopiere den **iCal-Link** (endet mit `.ics`)
   - Beispiel: `https://admin.booking.com/hotel/hcalendar/ical/XXXXXXX.ics`

### Schritt 2: iCal-Link in Vercel hinterlegen

1. Gehe zu deinem **Vercel Dashboard**: https://vercel.com
2. Wähle das Projekt **"ferienwohnung-next"**
3. Gehe zu **Settings** → **Environment Variables**
4. Klicke auf **"Add New"**
5. Füge folgende Variable hinzu:
   - **Key**: `BOOKING_COM_ICAL_URL`
   - **Value**: Dein iCal-Link von Booking.com
   - **Environment**: Wähle alle (Production, Preview, Development)
6. Klicke auf **"Save"**

### Schritt 3: Deployment neu starten

Nach dem Hinzufügen der Environment Variable:

1. Gehe zu **Deployments** in Vercel
2. Klicke auf das neueste Deployment
3. Klicke auf die **drei Punkte** (•••) → **"Redeploy"**
4. ODER: Mache einen neuen Git-Push (löst automatisch Deployment aus)

## Setup: Email-Versand aktivieren

Aktuell werden Buchungsanfragen nur in der Console geloggt. Für echten Email-Versand:

### Option 1: Resend (Empfohlen - Kostenlos bis 3000 Emails/Monat)

1. Registriere dich bei **Resend**: https://resend.com
2. Erstelle einen **API Key**
3. Füge in Vercel Environment Variables hinzu:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Dein Resend API Key

4. Öffne die Datei `src/lib/actions.ts`
5. In der Funktion `submitBookingRequest()` entferne die Kommentare `/*` und `*/` um den Email-Code

### Option 2: Gmail / Nodemailer / SendGrid

Siehe Next.js Docs für andere Email-Provider.

## Wie es funktioniert

### Für Gäste:

1. Gast besucht deine Website
2. Sieht im Kalender welche Tage **verfügbar** und **blockiert** sind
3. Wählt Check-in und Check-out Datum
4. Füllt Kontaktformular aus (Name, Email, Telefon, Gästeanzahl)
5. Sendet Buchungsanfrage
6. Bekommt Bestätigung: "Wir melden uns in 24h"

### Für dich (Gastgeber):

1. Du bekommst **Email** mit allen Buchungsdetails:
   - Name, Email, Telefon
   - Check-in & Check-out Daten
   - Anzahl Gäste & Nächte
   - Nachricht (falls vorhanden)
2. Du antwortest dem Gast per Email
3. **WICHTIG**: Du musst die Daten **manuell in Booking.com sperren**
4. Nach Bestätigung ist die Buchung verbindlich

## Synchronisation

### Booking.com → Website ✅ AUTOMATISCH

- Alle Buchungen die über Booking.com gemacht werden erscheinen **automatisch** als gesperrt im Kalender
- Der iCal-Feed wird **alle 60 Minuten** aktualisiert

### Website → Booking.com ❌ MANUELL

- Wenn jemand über deine Website bucht, musst du die Daten **manuell in Booking.com eintragen/sperren**
- Das verhindert Doppelbuchungen

## Vorteile für Direktbuchungen

Auf der Website werden folgende Vorteile kommuniziert:

✅ **Keine Buchungsgebühren** - Spare die 15-18% Provision von Booking.com
✅ **Direkter Kontakt** - Persönliche Betreuung
✅ **Schnelle Bestätigung** - Antwort in 24h

## Testing

### Lokal testen (mit Mock-Daten)

```bash
npm run dev
# Öffne http://localhost:3000
# Scrolle zu "Jetzt buchen"
# Kalender zeigt ein paar blockierte Test-Tage
```

### Mit echtem iCal-Link testen

1. Setze die Environment Variable lokal:
   ```bash
   # Erstelle .env.local Datei
   echo "BOOKING_COM_ICAL_URL=https://admin.booking.com/hotel/hcalendar/ical/XXXXX.ics" > .env.local
   ```

2. Starte Dev-Server neu:
   ```bash
   npm run dev
   ```

3. Kalender sollte jetzt echte gebuchte Daten von Booking.com zeigen

## Troubleshooting

### Kalender zeigt keine blockierten Daten

- Prüfe ob `BOOKING_COM_ICAL_URL` in Vercel gesetzt ist
- Prüfe ob der iCal-Link korrekt ist (teste im Browser - sollte XML/iCal-Daten zeigen)
- Checke Vercel Deployment Logs für Fehler

### Email kommt nicht an

- Prüfe ob `RESEND_API_KEY` gesetzt ist
- Prüfe ob du die Kommentare in `src/lib/actions.ts` entfernt hast
- Checke Vercel Logs für Email-Fehler

### Daten synchronisieren sich nicht

- iCal-Feed wird alle 60 Minuten gecacht
- Nach neuen Buchungen in Booking.com kann es bis zu 1h dauern
- Force-Reload in Browser (Cmd+Shift+R / Ctrl+Shift+F5)

## Nächste Schritte (Optional)

### Für später: Upgrade zu Datenbank

Wenn du willst dass Website-Buchungen **automatisch** gespeichert werden:

1. Richte Supabase ein (kostenlos)
2. Erstelle Tabelle für Buchungen
3. Kalender liest von Booking.com **UND** Supabase
4. Admin-Dashboard zum Verwalten

→ Frag mich wenn du das willst, dann baue ich es!

## Support

Bei Fragen zu Setup/Problemen:
- Checke diese README
- Checke Vercel Deployment Logs
- Schau in Browser Console (F12)

---

**Status**: ✅ Buchungssystem installiert und bereit für iCal-Verbindung!

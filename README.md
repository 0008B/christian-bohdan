# Christian Bohdan — Bewerbungswebseite

Statische Website (zwei Seiten, komplett self-contained). Kein Build-Schritt, kein
Node, keine Abhängigkeiten. Jede HTML-Datei enthält alles inline: Markup, Styles,
Runtime und das Foto als Data-URI.

## Inhalt

| Datei                 | Zweck                                        |
|-----------------------|----------------------------------------------|
| `index.html`          | Startseite (Hero, Über mich, Skills, Werdegang, Zertifikate, Anschreiben, Kontakt) |
| `impressum.html`      | Impressum & Datenschutz                      |
| `robots.txt`          | Suchmaschinen-Freigabe                       |
| `netlify.toml`        | Netlify-Konfiguration + Security-Header      |
| `.nojekyll`           | nötig für GitHub Pages (kein Jekyll-Build)   |

Die Seiten verlinken sich relativ (`./impressum.html` / `./index.html`) — funktioniert
in jedem Unterordner und auch per Doppelklick lokal ohne Server.

## Datenschutz

- Keine Google Fonts, keine CDNs, keine externen Requests — ausschließlich Systemschriften.
- Keine Cookies, kein Tracking, keine Analytics, keine Formulare.
- Kontakt erfolgt über `mailto:` und `tel:` Links.

Wenn du Inhalte änderst, prüfe im Browser unter DevTools → Network, dass weiterhin
keine Requests zu Drittanbietern (`*.googleapis.com`, `*.gstatic.com`) entstehen.

## Deployment

### Variante A — Netlify (empfohlen)

**Per Drag & Drop:** Ordnerinhalt auf https://app.netlify.com/drop ziehen. Fertig.

**Per GitHub (automatische Deploys bei jedem Push):**

1. Repository auf GitHub erstellen, z. B. `christian-bohdan-cv`.
2. Diesen Ordner pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Bewerbungswebseite"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/christian-bohdan-cv.git
   git push -u origin main
   ```
3. In Netlify: *Add new site → Import an existing project → GitHub → Repository wählen*.
4. Build-Einstellungen:
   - **Build command:** leer lassen
   - **Publish directory:** `.` (bzw. `deploy`, falls du den Ordner mit-committet hast)
5. Deploy starten. Jeder weitere `git push` deployt automatisch.

**Eigene Domain:** Netlify → *Domain management → Add domain*. HTTPS-Zertifikat
(Let's Encrypt) wird automatisch ausgestellt.

### Variante B — GitHub Pages

1. Repository erstellen und pushen (siehe oben).
2. *Settings → Pages → Source: Deploy from a branch*, Branch `main`, Ordner `/ (root)`.
3. Nach ca. einer Minute erreichbar unter
   `https://<dein-user>.github.io/<repo-name>/`.

Die Datei `.nojekyll` muss dabei im Root liegen, damit GitHub die Dateien
unverändert ausliefert.

### Variante C — beliebiges Webhosting

Dateien per FTP/SFTP in das Web-Root (`public_html`, `htdocs`, …) hochladen.
Es ist keine serverseitige Konfiguration erforderlich.

## Aktualisieren

Die Seiten in diesem Ordner sind kompilierte Ausgaben — bearbeite sie nicht direkt.
Änderungen im Quellprojekt vornehmen (`Christian Bohdan.dc.html`,
`Impressum.dc.html`), neu bündeln und die beiden HTML-Dateien hier ersetzen.

## Kontaktdaten in den Seiten

- E-Mail: chris.bohdan.de@gmail.com
- Telefon: +49 157 703 907 46
- LinkedIn: https://www.linkedin.com/in/chrisbohdan

Diese Angaben stehen in `index.html` (Kontaktbereich, Seitenleiste) und in
`impressum.html`. Bei Änderungen beide Seiten anpassen.

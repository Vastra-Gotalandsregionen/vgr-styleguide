---
title: Stylelint
label: Stylelint
---

[Stylelint](https://stylelint.io/) är ett sätt att kunna konfigurera css-regler för ett projekt, detta för att undvika fel i koden och att ge konsekventa riktlinjer för de konventioner som bestämts för hur css ska skrivas. Stylelint konfiguration för arbete med VGR:

- Använd en selektor per rad vid multi-selektor.
- Ett space/blanksteg mellan selektor och öppnande klammerparentes.
- En deklaration per rad i ett deklarationsblock.
- En indentering för deklarationsblock.
- Ett space/blanksteg mellan egenskap och värde i en deklaration.
- Använd hex-värden med gemener och korta värden (tex #fff, inte #FFFFFF).
- Använd singel- eller dubbelt citationstecken konsekvent. Dubbla (&quot;...&quot;) rekommenderas.
- Citationstecken för attributens värden i selektorer (tex [type = &quot;checkbox&quot;]).
- Om möjligt, undvik att ange enheter för nollvärden (tex margin: 0; inte margin: 0px;).
- Ett space/blanksteg efter komma i kommaseparerade egenskaps- eller funktionsvärden.
- Ett semikolon i slutet av ett deklarationsblock.
- Stängande klammerparentes i samma kolumn som regeluppsättningens första tecken.
- Separera varje regeluppsättning med en blank rad.

### **Hämta plugin:**

- [linter-stylelint](https://github.com/AtomLinter/linter-stylelint) - Atom.
- [SublimeLinter-contrib-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint) - Sublime Text.
- [vscode-stylelint](https://github.com/shinnn/vscode-stylelint) - Visual Studio Code.
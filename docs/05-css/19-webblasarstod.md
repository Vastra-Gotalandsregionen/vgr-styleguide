---
title: Webbläsarstöd
label: Webbläsarstöd
---

Det grundläggande ramverket stödjer de senaste versionerna av de vanligt förekommande webbläsarna. Vid planering av nya projekt, ta reda på vilka webbläsare som stöd krävs för. Om möjligt, be beställaren om en rapport för de minst tre- och max sex senaste månaderna från ett analysverktyg (tex Google Analytics), där det går att utläsa statistik om vilken typ av webbläsare som används. Uppdatera sedan inställningarna för [autoprefixer](https://github.com/postcss/autoprefixer) i config.json efter denna analys.

Nedanstående lista på webbläsare som ramverket och stilguiden stödjer utesluter inte att andra webbläsare går att använda eller att funktioner och lösningar inte fungerar, det betyder enbart att övriga webbläsare inte aktivit testas. Stilguiden strävar efter att följa standarder och inte bygga speciella lösningar för specifika webbläsare.

### Webbläsare - Dator

- Chrome – Support: Mac, Windows, senaste versionen och en version tillbaka
- Firefox – Support: Mac, Windows, senaste versionen och en version tillbaka
- Internet Explorer – Support: Windows, version 11
- Edge – Support: Windows, senaste versionen och en version tillbaka
- Opera – Support: Full support men inga speciella tester görs då webbläsaren använder samma renderingsmotor som Chrome
- Safari – Support: Mac, senaste versionen och en version tillbaka

### Webbläsare - Surfplatta och mobiltelefoner

- Safari i iOS, senaste versionen och en version tillbaka
- Chrome i Android, senaste versionen och en version tillbaka
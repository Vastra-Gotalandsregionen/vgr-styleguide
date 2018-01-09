---
title: Semantisk versionshantering
label: Semantisk versionshantering
---

Flera olika paket och moduler integreras ofta i ett system och i sin tur interagerar ofta olika system med varandra. Detta nät skapar ett beroende sinsemellan där det är viktigt att varje modul levererar och kommunicerar på ett givet sätt. För att kunna vidareutveckla och förändra en modul men ändå kunna garantera ett visst beteende är versionshanteringen viktig för att kunna spara och nyttja ett visst stadie av utvecklingen. [Semantisk versionshantering](http://semver.org/lang/sv/) följer en modell med tre nivåer eller typer av uppdateringar som kallas major, minor och patch (syntax: 0.0.0 (major.minor.patch)). Följande typer av förändringar påverkar de olika parametrarna:

- Ändringar som påverkar bakåtkompabiliteten ökar major.
- Ny funktionalitet men full bakåtkompabilitet ökar minor.
- Buggfix och andra små justeringar ökar patch (förutsatt full bakåtkompabilitet).

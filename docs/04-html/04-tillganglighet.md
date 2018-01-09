---
title: Tillgänglighet - Gömma och visa innehåll
label: Tillgänglighet - Gömma och visa innehåll
---

Det finns lägen då innehåll behöver gömmas eller visas antingen genom att gömma det visuellt eller att hindra skärmläsare från att läsa det. VGR-stilguide följer dessa konventioner:

- **Göm visuellt och gör otillgängligt för skärmläsare**
Lägg till attributet hidden för att gömma innehåll för alla användare. Ta bort attributet för att visa innehållet igen.

- **Visa innehåll visuellt men gör otillgängligt för skärmläsare**
Använd attributet aria-hidden="true" för att gömma innehåll för skärmläsare men behålla det visuellt.

- **Göm innehåll visuellt men gör tillgängligt för skärmläsare**
Använd klassen "vgr-visually-hidden" för att göra innehåll tillgängligt enbart för skärmläsare. Detta tar bort innehållet endast visuellt men behåller dess läsbarhet för skärmläsare.

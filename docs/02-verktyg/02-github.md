---
title: GitHub
label: GitHub
---

[GitHub](https://guides.github.com/) är en kod-plattform för versionshantering och samarbeten som gör det enkelt att arbeta tillsammans på projekt från var som helst. För att använda Git behövs inga programmeringskunskaper, du kan antingen arbeta via ett gränssnitt (tex SourceTree, GitUp, GitKraken) eller direkt i terminalen.

## Repo

Ett repository (repo) är de filer som utgör ett enskilt projekt tillsammans med den historik som versionshanteringen via git ger. På svenska är översättningen `förvar` beskrivande för vad ett repo innebär.

## Pull request

En [pull request](https://guides.github.com/activities/hello-world/#pr) på GitHub kan beskrivas som att ge förslag på ändring i projektets kod. Det börjar med att du utvecklar i en egen `branch` (gren/kopia) av projektet och om du sedan vill föreslå att din kod ska bli en del av huvudprojektet (`master`) så öppnar du en pull request. En pull request visar vad som skiljer mellan `master` och den `branch` som utvecklats och det är upp till behörig ägare för projektet att godkänna eller ge annan feedback.

## Issues

Felrapportering, förslag och feedback etc för ett GitHub-repo kan kommenteras i [issues](https://guides.github.com/features/issues/) (finns i menyn för varje repo). Detta är mer än ett kommentarsfält, behöriga användare kan använda diverse funktioner för en strukturerad hantering av de uppgifter som planeras utifrån rapporter som kommer in i issues.

## Releases

Releasehantering för git-repon knutna till VGR-stilguide ska dokumenteras för varje version under `releases` som finns för varje repo. För att underhålla denna dokumentation används Git-kommandon för att tagga upp vissa versioner via terminalen eller valfritt gränssnitt. Taggar ska följa semantisk versionering.

Läs mer här: [https://help.github.com/articles/creating-releases/](https://help.github.com/articles/creating-releases/)
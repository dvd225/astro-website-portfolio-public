---
title: Creare un software di analisi SEO
publishDate: 2019-12-01 00:00:00
img: /assets/SEOgull.png
img_alt: Logo di SEOgull
description: |
 Ho realizzato un software di analisi SEO dei siti web. 
tags: [Funnel, SEO, Marketing, Dev]
---


> 

SEOgull è stato un interessante progetto che ho realizzato per la mia tesi magistrale all'Università di Torino; ha raggruppato molti argomenti del Marketing e della progettazione web ed è stato valutato positivamente anche dalla commissione di laurea che mi ha premiato con un voto di 110 e lode.

Il software è stato progettato come una *web application* attraverso il framework PHP <a href="https://codeigniter.com/" traget="_blank">CodeIgniter</a> per la parte di back-end e Javascript (Vanilla, Bootstrap e altre librerie) e CSS/HTML per la parte di front-end.

La logica di business dell'applicazione segue un pattern architetturale ***Model-View-Controller*** per la gestione delle diverse pagine e l'interazione con un database per l'interazioni con l'utente attraverso delle sessioni di lavoro.

La parte interessente del progetto è un web crawler realizzato con Python, grazie al quale è possibile eseguire una chiamata GET di un URL specifico, analizzarne delle proprietà ed automatizzare la raccolta di un *SEO audit* con le API Lighthouse di Google.

<img class="img-post mx-auto" src="/assets/crawler.png" style ="width: 80%;" title="Funzinamento del web crawler" alt="Diagramma che mostra il funzionamento del web crawler di SEOgull"/>

Il software ha dimostrato di essere molto elastico ed utile per automatizzare un analisi SEO per un intero sito web. Purtoppo ancora non è disponibile online, ma nel frattempo se ti interessa approfondire l'argomento puoi <a href="/asset/risorse/Tesi SEOgull.pdf" download>scaricare la mia tesi di laurea</a> nella quale spiego nel dettaglio tutta la realizzazione di SEOgull.
<br>
<br>

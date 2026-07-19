# THE SHAPE OF MYTH

> **STATUS NOTE — 19 July 2026.** The canonical custom publication has been redesigned as a historical public-humanities narrative. Its current copy, ordering, image credits, and figure placement live in `index.html`, with source and rights documentation in `PUBLIC_HISTORY_SOURCES.md`. The ArcGIS assembly script below remains a technically accurate earlier derivative, but its narrative order and “data-native media only” rule are superseded by the canonical site.

## Publication-ready ArcGIS StoryMaps master script

**Author:** Jay Jung  
**Draft StoryMap:** <https://storymaps.arcgis.com/stories/325d391715274077a3ff3d3a43d477bf/edit>  
**Interactive host assumed below:** <https://jayjung124.github.io/SSTP_StoryMap/>  
**Repository:** <https://github.com/jayjung124/SSTP_StoryMap>  
**Canonical network release:** 16 July 2026  
**Canonical partition-comparison release:** 17 July 2026  
**Story companion audit:** PASS, 19 July 2026

> **BUILDER NOTE — do not paste this note into the public story.** This file replaces the earlier fourteen-section draft. It contains thirteen sections in publication order, exact public copy, media placement, captions, accessible descriptions, and build instructions. Delete the old “Ever since the dawn of humanity…” sentence and the earlier composite earth-diver opener before assembling this version. Do not publish until the final checklist at the end passes.

---

## How to use this script

Text following `[PUBLIC TEXT]`, `[TITLE]`, `[SUBTITLE]`, `[BYLINE]`, `[H1]`, `[H2]`, `[QUOTE]`, or `[CAPTION]` is public-facing copy. Paste it into the corresponding StoryMaps block.

Text following `[BUILDER]`, `[MEDIA]`, `[EMBED]`, `[SIDECAR]`, `[MAP]`, `[SWIPE]`, `[ALT]`, or `[ACCESSIBILITY]` is an assembly instruction. Do not paste the bracketed label into the story.

Use one text block for each `[PUBLIC TEXT]` paragraph. This prevents the editor’s auto-scroll behavior from tangling long sections and gives each claim a stable block.

### Editorial and visual system

- Build the story as an editorial research feature, not a slide deck. Alternate short passages with maps or interactives; never stack more than three ordinary text paragraphs without a visual or a section break.
- Use only data-native media: the supplied maps, interactives, released network layouts, and restrained typographic dividers. Do not use AI-generated mythology imagery, generic fantasy art, faux parchment, glowing networks, ornamental runes, or invented cultural symbols.
- Use a light warm-neutral background, near-black body text, and the existing restrained accent `#7B241C`. Recommended typography: a bookish serif for display headings and an accessible sans serif for body copy. Use the closest available StoryMaps theme rather than forcing unsupported fonts.
- Preserve the colorblind-aware chart palettes. Binary communities: B1 `#0072B2`, B2 `#D55E00`, B3 `#009E73`, B4 `#CC79A7`. Topic communities: T1 `#6A3D9A`, T2 `#0072B2`, T3 `#009E73`, T4 `#D55E00`, T5 `#E69F00`.
- Do not use color alone. Captions, direct labels, hover text, and prose must name every community being compared.
- Keep map extents consistent when comparing layers. Catalogue coordinates are reference locations, not origins, homelands, territorial boundaries, or proof of where a narrative began.
- Add a thin divider between sections. Avoid unnecessary animations. Use a single restrained fade only where StoryMaps applies one by default.
- The reference StoryMap supplied for inspiration is useful for its map-led rhythm, short sidecar panels, and movement from global overview to close reading: <https://storymaps.arcgis.com/stories/c61ac50131594a4fb2ff371e2bce7517>. This project should borrow that editorial rhythm, not its visual identity.

### Story navigation

Turn on Story navigation and add these seven headings after assembly:

1. The archive
2. Two networks
3. Shared backbone
4. Principal divergence
5. Context audit
6. Conclusions
7. Methods & data

---

# SECTION 1 — COVER

[BUILDER] Use the **Full** cover layout. Use a clean, wide capture of `map_traditions.html` in “World region” mode or an Equal Earth release map as the cover media. Crop for the global distribution, keep the map legible, and do not add decorative mythology imagery. If a static capture is used, retain a small source credit.

[TITLE]

The Shape of Myth

[SUBTITLE]

Tracing recurrence and divergence across 926 catalogue traditions and 2,138 recorded motifs

[BYLINE]

Jay Jung · An independent computational folkloristics research project

[CAPTION]

Catalogue reference locations for 926 analytical tradition records. Points indicate where records are situated in the source data; they do not identify cultural origins or homelands.

[ALT]

A world map with 926 colored points distributed across Africa, Eurasia, the Americas, Oceania, and the Arctic. The points are catalogue reference locations for tradition records.

[BUILDER] Immediately below the cover, insert a compact credits block in small type.

[PUBLIC TEXT]

This project independently analyzes a secondary scholarly catalogue. It is not affiliated with, commissioned by, or endorsed by the Smithsonian Institution or the Smithsonian Center for Folklife and Cultural Heritage.

---

# SECTION 2 — A RECURRENCE QUESTION

[BUILDER] Use an immersive sidecar with the interactive world map fixed on the media side. Keep panels short enough that the map remains the dominant visual. The opening deliberately poses a question rather than retelling or attributing a myth.

[H1]

When stories recur, what kind of similarity are we seeing?

[SIDECAR — fixed media]

[EMBED — full bleed, suggested height 640 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/map_traditions.html?embed=1>

Embed title: **Interactive map of 926 catalogue tradition records**

[ALT]

Interactive globe showing all 926 catalogue tradition records. Controls recolor the same points by one of sixteen broad regions, four binary-motif communities, or five provisional semantic-topic communities. Hovering reveals the catalogue label, reference region, community IDs, and number of recorded motifs.

## Sidecar panel 1

[H2]

A resemblance is not an explanation

[PUBLIC TEXT]

Across a large comparative catalogue, related images, actions, beings, and narrative problems recur in records associated with distant communities. A resemblance may reflect historical contact, movement, shared ancestry, parallel response to an environment, recurring human concerns, a collector’s categories, uneven documentation, or several of these at once. The resemblance alone cannot choose among them.

## Sidecar panel 2

[H2]

Change the measurement

[PUBLIC TEXT]

This study asks a controlled structural question: if the same 926 catalogue records are compared first by **exact recorded motifs** and then by **broader semantic profiles**, which community patterns remain recognizable—and where does the archive reorganize?

## Sidecar panel 3

[H2]

The result in one sentence

[QUOTE]

Across 926 catalogue traditions and 2,138 recorded motifs, exact-motif and semantic networks preserve a shared global backbone but reorganize local communities.

[PUBLIC TEXT]

The important object is not a single universal map of mythology. It is the difference between two defensible ways of making cultural similarity measurable.

[CAPTION]

All three color modes use the same 926 points. Community colors are analytical overlays; the region field is a broad catalogue-level geographic grouping.

---

# SECTION 3 ★ — THE ARCHIVE

[H1]

What this archive is—and is not

[BUILDER] Use a normal scrolling section with one narrow text column, then a four-item fact strip. Do not place a stock photograph behind this section.

[PUBLIC TEXT]

The source is the [Berezkin–Duvakin Electronic Analytical Catalogue of Folklore and Mythological Motifs](https://ruthenia.ru/folklore/berezkin/), with an [English-facing interface at Maps of Myths](https://mapsofmyths.com/). The frozen research release represents 926 catalogue tradition records against 2,138 motif records, for 68,837 recorded tradition–motif presences.

[BUILDER — four-number fact strip]

- **926** catalogue tradition records
- **2,138** recorded motifs
- **68,837** recorded motif presences
- **16** broad macroareas used in the geographic audit

[PUBLIC TEXT]

A catalogue record is an analytical unit, not a complete portrait of a living people, religion, or narrative tradition. Some labels aggregate more than one named group; some archival labels may be outdated or exonymic and should be presented explicitly as source-catalogue labels, paired with community-preferred contemporary names where these can be verified responsibly. A motif is a coded recurrence defined by the catalogue, not a full performance or a storyteller’s exact words. A coordinate is a reference location attached to a record, not proof of origin, territory, migration, or ownership.

[PUBLIC TEXT]

The binary matrix records whether the catalogue links a motif to a tradition. A zero therefore means **not recorded in this matrix**. It should not automatically be read as proof that a motif is culturally absent. Documentation density varies sharply: a record with more catalogued motifs supplies more opportunities to resemble other records.

[PUBLIC TEXT]

The semantic pipeline also depends on English motif title fields and glosses. Of the 2,138 motif documents in the frozen release, 2,052 include a gloss and 86 lack one. One of those 86, `m29g1_9`, also lacks a descriptive title: its title field repeats the motif ID. Translation, editorial phrasing, missing description, and catalogue design are therefore part of the measurement system.

[BUILDER] Insert a pull quote on a plain background.

[QUOTE]

These networks organize a recorded catalogue. They do not classify cultures themselves.

[H2]

Ethical position

[PUBLIC TEXT]

The project treats cultural knowledge as living, situated, and connected to communities rather than as placeless computational content. Its public presentation draws guidance from the Smithsonian Center for Folklife and Cultural Heritage’s work on [cultural sustainability](https://folklife.si.edu/cultural-sustainability-research-group/smithsonian) and [shared stewardship](https://folklife.si.edu/news-and-events/shared-stewardship-new-guidelines-for-ethical-archiving): name provenance, preserve uncertainty, avoid turning records into cultural essences, and distinguish access from authority.

[PUBLIC TEXT]

This is still secondary archive analysis, not community-led documentation or co-curation. The present research record does not document community review or authorization of these computational community assignments. Smithsonian principles inform the standard of presentation; they do not imply Smithsonian affiliation, endorsement, or a claim that this project has achieved shared stewardship.

---

# SECTION 4 ★ — TWO NETWORKS

[H1]

Two operational definitions of similarity

[BUILDER] Use a docked sidecar with two methodological slides and a third synthesis slide. If available, use simple crops of the corresponding interactive or a clean matrix/profile diagram—not generated illustration.

## Sidecar slide 1 — binary motif repertoire

[H2]

Lens 1 · Exact recorded-motif co-presence

[PUBLIC TEXT]

The binary representation begins with the frozen 926 × 2,138 tradition-by-motif presence matrix. For each pair of traditions, ordinary **Jaccard similarity** divides the number of jointly recorded motifs by the number recorded in either tradition. Shared zeroes do not increase similarity.

[PUBLIC TEXT]

Every off-diagonal pair with Jaccard similarity greater than zero is retained. The resulting weighted graph has 926 nodes and **358,966 edges**—83.8% of all possible pairs—with one connected component and no isolates. No k-nearest-neighbor pruning is used.

## Sidecar slide 2 — motif-first semantic profile

[H2]

Lens 2 · Broader semantic composition

[PUBLIC TEXT]

The topic representation does not run NMF directly on the tradition-by-motif matrix. It first treats each unique motif’s English title and gloss as one document. Sublinear, L2-normalized TF–IDF and **non-negative matrix factorization with 15 factors** create a semantic profile for each motif; those motif profiles are then aggregated through the binary incidence matrix and normalized into one 15-factor profile for each tradition.

[PUBLIC TEXT]

Tradition profiles are compared by cosine similarity. The graph retains the weighted undirected union of each node’s **12 nearest neighbors**. It contains 926 nodes and **8,854 edges**, with one connected component and no isolates.

## Sidecar slide 3 — what is actually held constant

[H2]

Paired, not identical

[PUBLIC TEXT]

Both analyses hold the node universe and underlying motif catalogue constant. They do **not** use identical graph construction: the binary graph retains all positive Jaccard ties, while the topic graph uses a 12-neighbor cosine graph. Differences between the final partitions therefore belong to the full representation pipeline—feature construction, similarity measure, and graph rule—not to semantic encoding alone.

[PUBLIC TEXT]

Both graphs are partitioned with weighted Leiden community detection using the RB configuration objective ([Traag, Waltman, and van Eck 2019](https://doi.org/10.1038/s41598-019-41695-z)). Community IDs such as B1 or T4 are nominal structural labels, not ranked outcomes or cultural names.

[BUILDER] Add a compact comparison table.

| Property | Binary-motif network | Topic-profile network |
|---|---:|---:|
| Nodes | 926 | 926 |
| Feature basis | 2,138 motif presences | 15 aggregated semantic factors |
| Similarity | Jaccard | Cosine |
| Graph rule | All positive similarities | Weighted union-kNN, k = 12 |
| Edges | 358,966 | 8,854 |
| Leiden resolution γ | 1.00 | 0.75 |
| Released communities | 4 | 5 provisional |

---

# SECTION 5 — BUILDING AND VALIDATING THE NETWORKS

[H1]

From similarity to communities

[PUBLIC TEXT]

For the binary graph, resolution γ = 1.00 was selected from candidate resolutions by modularity subject to a cross-seed stability gate. Across optimizer seeds 0, 1, 2, 3, and 42, its mean pairwise adjusted Rand index was **0.9933** and its minimum was **0.9832**. The released four-community overlay uses the medoid seed, 1.

[PUBLIC TEXT]

For the topic graph, γ = 0.75 and released seed 42 produce five communities. This partition is less settled: across ten optimizer seeds its mean pairwise ARI was **0.8581**, the minimum was **0.7118**, and solutions ranged from four to five communities. Separate checks found mean ARI **0.9273** across NMF seeds and **0.8932** after deleting 10% of edges, but human semantic validation remains pending. T1–T5 must therefore remain explicitly **provisional**.

[PUBLIC TEXT]

An internal masked-repertoire retrieval diagnostic also underperformed a simple popularity baseline: NDCG@50 was **0.0276**, compared with **0.1417** for the baseline. That diagnostic was not used to select the semantic representation because catalogue co-occurrence prediction and semantic interpretability are different tasks. It does, however, rule out presenting this topic model as a validated predictor of unrecorded motif codes.

[EMBED — full width, suggested height 680 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/network_explorer.html?embed=1>

Embed title: **Interactive explorer for the binary and topic network layouts**

[CAPTION]

Two released two-dimensional network layouts for the same 926 nodes. Switch representation and color by community or macroarea. The topic view draws all 8,854 released analyzed links. Because the binary graph has 358,966 analyzed links, its legible display draws the reproducible union of each node’s six strongest incident Jaccard links: 4,113 actual released edges. Position is a display layout; it is neither geography nor a calibrated distance scale.

[ALT]

Interactive node-layout explorer with 926 points. Controls switch between binary and topic layouts and recolor points by Leiden community or one of sixteen broad regions. Hovering reveals a catalogue label, region, community assignments, and recorded motif count.

[PUBLIC TEXT]

Layout is an aid to inspection, not a result variable. Dense areas do not prove cultural centers, and nearby points do not establish contact. The graph statistics and partitions come from the high-dimensional similarities and released edge tables—not from distances measured on the screen.

---

# SECTION 6 — TWO GLOBAL PARTITIONS

[H1]

The same records, grouped twice

[PUBLIC TEXT]

The positive-Jaccard graph yields four communities: **B1, n = 363; B2, n = 123; B3, n = 230; and B4, n = 210**. The semantic-profile graph yields five provisional communities: **T1, n = 271; T2, n = 204; T3, n = 196; T4, n = 164; and T5, n = 91**.

[PUBLIC TEXT]

These groups are neither purely geographic nor geography-free. Recoloring the same points makes this visible: each partition spans regions, while several communities also have strong regional concentrations. That is a prompt for formal comparison, not permission to rename a community as a people, civilization, or homeland.

[EMBED — full width, suggested height 760 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/community_profiles.html?embed=1>

Embed title: **Interactive profiles of all nine network communities**

[CAPTION]

Profiles of the four binary and five provisional topic communities. Sizes use the full community denominator. Region bars show composition; climate values summarize WorldClim-labelled BIO1/BIO12 fields at catalogue reference coordinates; motif labels are the most prevalent recorded motifs within each community. Motif percentages overlap and do not sum to 100%.

[ALT]

Interactive cards for nine communities. A toggle switches between binary and topic partitions. Each card reports size, leading macroareas, mean annual temperature and precipitation, and four prevalent recorded motif labels.

[PUBLIC TEXT]

The profile cards are descriptive. Their motif labels reuse features involved in network construction, and their geographic and climate summaries are contextual attributes. They help interpret a grouping after it has been found; they do not independently validate it or identify a historical mechanism.

---

# SECTION 7 ★ — SHARED BACKBONE

[H1]

Agreement is nonrandom—and incomplete

[PUBLIC TEXT]

The two partitions can be compared directly because every one of the 926 node labels aligns. Their 4 × 5 contingency table contains twenty overlaps, and every agreement statistic below is calculated from that same table. Agreement metrics are complementary descriptions, not independent replications.

[EMBED — full width, suggested height 590 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/overlap_heatmap.html?embed=1>

Embed title: **Interactive overlap table for binary and topic communities**

[CAPTION]

The default view prints and shades each cell by its share of the binary row. Readers can switch to raw count, share of the topic column, or fixed-margin fold enrichment; focusing or selecting a cell reports all values. Margins are B1 363, B2 123, B3 230, B4 210 and T1 271, T2 204, T3 196, T4 164, T5 91.

[ALT]

A four-row by five-column interactive heatmap. The largest cells are B3–T3 with 166, B1–T2 with 162, B4–T1 with 161, B1–T4 with 148, and B2–T5 with 64.

[H2]

How much agreement?

[PUBLIC TEXT]

Among all **428,275 unordered pairs** of traditions, 55,389 pairs are placed together by both partitions, 66,097 only by the binary partition, 38,473 only by the topic partition, and 268,316 are separated by both. The raw Rand index is 0.7558, but 62.65% of all pairs contribute simply because both partitions separate them. It should not be read as 76% recovery of the same communities.

[BUILDER — metric strip]

- **ARI 0.3549** · chance-adjusted pair agreement
- **AMI 0.3888** · chance-adjusted shared information
- **NMI 0.3916** · arithmetic normalization; not chance-adjusted
- **VI 1.7485 nats / 2.5226 bits** · information distance; zero would mean identical

[PUBLIC TEXT]

The adjusted Rand index is **0.3549** and arithmetic adjusted mutual information is **0.3888**. Arithmetic normalized mutual information is **0.3916**; it is normalized but not chance-corrected. Variation of information is **1.7485 nats**, or **2.5226 bits**; unlike the agreement scores, it is a distance, so lower values mean greater similarity.

[H2]

What would chance produce?

[PUBLIC TEXT]

Under a fixed-margin null, the expected number of coassigned pairs is **26,625.23**, compared with **55,389 observed**. Analytical z-Rand is **151.11**. This is an unbounded standardized test statistic—not a percentage or an effect size—and, with fixed margins, it is built from the same coassignment count as ARI. None of 99,999 global permutations reached the observed result; with the finite-sample correction, Monte Carlo **p = 0.00001**, not zero.

[PUBLIC TEXT]

A second null shuffled topic labels only within each of the catalogue’s sixteen broad macroareas. That restriction raised the mean null ARI to **0.2075** with a 95% interval of **0.1915 to 0.2244**, showing that broad geography supplies a substantial baseline. Observed ARI 0.3549 still exceeded all 99,999 restricted draws (difference from null mean 0.1474; restricted z = 17.52; p = 0.00001). This test controls broad macroarea composition only—not precise spatial dependence, language relationships, documentation intensity, chronology, or history.

[H2]

Three anchors and one bifurcation

[PUBLIC TEXT]

Fixed-margin hypergeometric tests with Holm correction across all twenty cells identify five enriched overlaps. Three are prominent one-to-one anchors: **B3–T3, n = 166** (84.7% of T3; Jaccard 0.638), **B4–T1, n = 161** (59.4% of T1; Jaccard 0.503), and **B2–T5, n = 64** (70.3% of T5; Jaccard 0.427). The other two enriched cells, B1–T2 and B1–T4, reveal the main structural divergence.

---

# SECTION 8 ★ — PRINCIPAL DIVERGENCE

[H1]

The largest binary community becomes two semantic communities

[BUILDER] Use a short three-panel sidecar. Fix a cropped view of the overlap heatmap or a simple, non-decorative alluvial graphic made from the exact counts below. If you create an alluvial, label every stream directly and use the existing B/T colors.

## Sidecar panel 1

[H2]

B1 is the starting denominator

[PUBLIC TEXT]

Binary community B1 contains **363** records. Under the topic partition, **162** of them enter T2 and **148** enter T4. The remaining **53** enter T1 (43), T3 (1), or T5 (9). Thus, B1∩T2 and B1∩T4 account for 310 of 363 B1 records—85.4%—but neither intersection is a complete topic community.

## Sidecar panel 2

[H2]

Keep branch and full-community counts separate

[PUBLIC TEXT]

The split analysis compares **B1∩T2, n = 162**, with **B1∩T4, n = 148**. The full topic communities are larger: **T2, n = 204**, and **T4, n = 164**. Geographic composition and motif-depth tests below use the two B1 branches; the climate and latitude panels summarize the full T2 and T4 communities unless explicitly stated otherwise.

## Sidecar panel 3

[H2]

A change in scale, not a winner

[PUBLIC TEXT]

The binary partition keeps these records together because their exact recorded-motif repertoires overlap. The semantic partition separates them because their aggregated factor compositions differ. This does not show that topic modeling is more truthful. It shows that the two pipelines make different levels of a recorded archive salient.

[QUOTE]

Substantial agreement does not make two classifications interchangeable.

---

# SECTION 9 — WHAT REORGANIZES

[H1]

Themes persist more clearly than individual motifs

[EMBED — full width, suggested height 760 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/nmf_factors.html?embed=1>

Embed title: **Interactive comparison of fifteen semantic factors in the B1 split**

[CAPTION]

Mean factor shares for B1∩T2 (n = 162) and B1∩T4 (n = 148). Stars mark six factors with Benjamini–Hochberg q < 0.05 under the joint macroarea × recorded-repertoire-quartile permutation scheme. Four factors—F3, F5, F9, and F10—also remain Holm-significant under all three permutation schemes. Factors helped construct the topic partition, so this is post-clustering characterization rather than independent validation.

[ALT]

Grouped horizontal bars compare fifteen factor shares. T2 is higher for Sun, Moon and eclipses and for sky, earth and world structure. T4 is higher for first people, plants and beings; trees, rocks and climbing; water, fish and aquatic beings; and women, birth and children.

[PUBLIC TEXT]

The conservative cross-scheme core contains four factors. T2 assigns a mean share of **16.0%** to *Sun, Moon & eclipses*, versus **6.7%** in T4, and **15.8%** to *sky, earth & world structure*, versus **8.0%**. T4 assigns **17.8%** to *first people, plants & beings*, versus **12.2%** in T2, and **7.1%** to *trees, rocks & climbing*, versus **3.7%**.

[PUBLIC TEXT]

Two additional T4-leaning factors meet the chart’s joint-restricted BH criterion: *water, fish & aquatic beings* (**11.5%** in T4 versus **8.5%** in T2) and *women, birth & children* (**10.7%** versus **7.5%**). They do not join all four core factors under Holm correction across every permutation scheme, so they are secondary rather than equivalent evidence.

[PUBLIC TEXT]

The Aitchison distance between the two compositional centers is **1.6097**. No unrestricted or macroarea-restricted permutation reaches it (p = 0.00001 for each); 14 of 99,999 joint macroarea × repertoire-quartile draws reach or exceed it (Monte Carlo p = 0.00015). The thematic separation remains coherent after those restrictions, while still being conditional on factors that helped define the topic graph.

[H2]

Exact motif labels make the contrast legible

[BUILDER] Set the following two blocks in a balanced two-column layout. Use plain text and small prevalence bars if desired; do not use culturally suggestive illustration.

### T2-leaning recorded motifs within B1

- *Figure on lunar disc*: 45.7% in B1∩T2 versus 14.9% in B1∩T4; **+30.8 percentage points**
- *Male sun and female moon*: **+22.3 points**
- *The female earth*: **+21.0 points**
- *Eclipses: a monster’s attack*: **+20.4 points**
- *Four supports of the world*: **+17.9 points**

### T4-leaning recorded motifs within B1

- *Theft of fire*: 58.1% in B1∩T4 versus 25.3% in B1∩T2; **+32.8 percentage points**
- *Breaking the obstacle*: **+28.3 points**
- *Mankind ascends from the underworld*: **+25.7 points**
- *Women and sacred knowledge*: **+25.2 points**
- *The incestuous Moon*: **+24.5 points**

[PUBLIC TEXT]

These are catalogue titles, not quotations from performances. Across all 2,138 motifs, **232** differences pass unstratified BH correction. Only **eight** remain after stratifying by macroarea, all favoring T4; **none** remains after jointly stratifying by macroarea and recorded-repertoire quartile. The individual motif story is therefore strongly context-sensitive even though the aggregate factor composition persists.

[PUBLIC TEXT]

The eight macroarea-adjusted motifs are *Women and sacred knowledge*, *Water in the tree trunk*, *Theft of fire*, *Rolling head pursues people*, *The sound sleep*, *Man joins wild animals*, *Food baked in the sun*, and *Mankind ascends from the underworld*. Their survival under a broad-region stratification still does not control fine spatial dependence, language, chronology, source relationships, or all forms of documentation bias.

[H2]

Not every anchor is equally stable

[PUBLIC TEXT]

The B2–T5 and B3–T3 anchors have recognizable full-community motif signatures, but none remains enriched on both sides after their overlapping members are removed. B4–T1 is stronger under that leave-overlap-out test: twelve motifs remain, led by *Primeval waters*, *The diver is a bird*, *Earth grows big*, *The earth-diver*, and *The diver*. This is the strongest representation-stable motif anchor **within this catalogue**, not evidence of universality or historical transmission.

---

# SECTION 10 ★ — CONTEXT AUDIT

[H1]

Geography, documentation, language, and environment change the interpretation

[PUBLIC TEXT]

The B1 split is not independent of context. The right question is not whether context “explains away” the result, but how much geography and documentation already structure what the semantic pipeline can resolve.

[H2]

Map the two branches, not imagined homelands

[SWIPE — two native ArcGIS web maps built from `data/traditions.csv`]

[BUILDER]

Build both sides from the same hosted layer and use the same projection, basemap, extent, point size, and popup. On the left, emphasize records whose `B1_split` value is exactly `B1→T2`; on the right, emphasize `B1→T4`. Keep all other points small and neutral for reference. Label the maps **B1∩T2 · n = 162** and **B1∩T4 · n = 148**. Do not title either map “where the myths came from,” “origin,” or “homeland.”

[CAPTION]

Catalogue reference locations for the two principal B1 branches. The swipe compares B1∩T2 (162 records) with B1∩T4 (148 records); it does not compare every member of the full T2 and T4 communities.

[ALT]

Swipe comparison of two world maps using the same extent. The left highlights 162 B1 records assigned to T2 across several regions; the right highlights 148 B1 records assigned to T4, with a dense concentration in Amazonia and Northern South America.

[EMBED — full width, suggested height 660 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/geo_divergence.html?embed=1>

Embed title: **Interactive macroarea composition of the two B1 branches**

[CAPTION]

Macroarea composition within B1∩T2 (n = 162) and B1∩T4 (n = 148). The first view uses each branch as its denominator, so the bars on each side sum to 100%. The residual view shows adjusted Pearson residuals from the 12-observed-macroarea × 2-branch table.

[ALT]

Diverging horizontal bars compare the macroarea composition of 162 B1∩T2 records and 148 B1∩T4 records. A toggle switches from shares to over- and under-representation residuals. Amazonia and Northern South America is the largest T4 concentration.

[PUBLIC TEXT]

Within the B1 split, T2 draws **39 of 162 records from Mesoamerica and Central America (24.1%)**, **35 from South and Southeast Asia (21.6%)**, and **22 each from Amazonia and Northern South America and from Melanesia and Oceania (13.6% each)**. This distribution is cross-regional; that fact alone does not identify a universal cognitive cause or a historical route.

[PUBLIC TEXT]

T4 is more concentrated: **90 of 148 records (60.8%)** are assigned to Amazonia and Northern South America, with an adjusted Pearson residual of approximately **+8.65**. Across the twelve macroareas represented in these two branches, χ²(11) = **94.53**, permutation p = **0.00001**, Cramér’s V = **0.552**, and Jensen–Shannon distance = **0.496**. These values describe association with broad catalogue geography, not cultural origin.

[H2]

Documentation depth is part of the pattern

[PUBLIC TEXT]

B1∩T2 records contain a mean of **35.3 recorded motifs** and a median of **29.5**. B1∩T4 records contain a mean of **61.1** and a median of **52.0**. The T2-minus-T4 mean difference is **−25.84 motifs**; it remains under within-macroarea permutation (p = 0.00001), with Cliff’s δ = **−0.408**.

[QUOTE]

Recorded motif count is an indicator of catalogue depth, not a measure of a culture’s narrative richness or complexity.

[H2]

Language is an acknowledged audit gap

[PUBLIC TEXT]

The companion table supplies a language-family label for **586 of 926 records (63.3%)** and is missing one for **340 (36.7%)**; the nonblank entries contain 97 distinct labels. No language-family result is presented as confirmatory here. The missingness, aggregation of some tradition labels, and non-independence of related languages require a dedicated phylogenetic and source-critical analysis before language can support a historical claim.

[H2]

Climate is present-day spatial context, not historical cause

[EMBED — full width, suggested height 660 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/climate_scatter.html?embed=1>

Embed title: **Interactive temperature and precipitation context for all 926 records**

[CAPTION]

Each point uses WorldClim v2.1 BIO1 annual mean temperature and BIO12 annual precipitation values at 10-arc-minute resolution for its catalogue reference coordinate. The highlighted T2 and T4 values refer to the **full communities**—T2 n = 204 and T4 n = 164—not only the B1 branches. These modern/reference-location summaries are contextual and noncausal.

[ALT]

Scatter plot of annual mean temperature against annual precipitation for 926 catalogue records. Full T2 and T4 communities are highlighted, with controls to show all topic or binary communities.

[PUBLIC TEXT]

For full T2 (n = 204), median latitude is **14.0° N**, median absolute latitude is **17.2°**, mean annual temperature is **21.1 °C**, and mean annual precipitation is **1,496.8 mm**. For full T4 (n = 164), median latitude is **2.5° S**, median absolute latitude is **7.8°**, mean annual temperature is **23.5 °C**, and mean annual precipitation is **2,042.9 mm**.

[PUBLIC TEXT]

The fields come from **WorldClim v2.1 at 10-arc-minute resolution** and are joined to catalogue coordinates. Fifty-nine coordinates required nearby-grid imputation, searching up to seven pixels; Tuvalu and Rotuma inherited complete profiles from the nearest resolved tradition. These repairs keep every record drawable but reduce local precision. The values do not reconstruct the climate of a narrative’s formation, the historical location of a community, seasonality of performance, mobility, or environmental causation.

[EMBED — full width, suggested height 640 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/latitude_ridgelines.html?embed=1>

Embed title: **Interactive latitude distributions for every network community**

[CAPTION]

Recorded latitude distributions for all four binary and five provisional topic communities. Curves summarize catalogue coordinates, not bounded cultural territories. Toggle between partitions and compare shapes rather than treating the vertical stacking as magnitude.

[ALT]

Stacked density curves show latitude distributions for each binary or topic community. Topic T2 spans a broader north–south range, while T4 is more concentrated near the equator.

[PUBLIC TEXT]

Taken together, the audits change the meaning of the split. T2 and T4 are coherent semantic profiles, but their contrast is entangled with broad geography and catalogue depth. The networks locate a phenomenon that requires explanation; they do not isolate the explanation.

---

# SECTION 11 ★ — CONCLUSIONS

[H1]

What the comparison supports

[QUOTE]

Representation is not merely preprocessing. It helps define what can count as cultural similarity.

[PUBLIC TEXT]

The paired analysis supports a bounded conclusion: exact recorded-motif co-presence and semantic-profile similarity preserve a nonrandom shared backbone while reorganizing local community membership. Three prominent anchors persist, and the largest binary community divides into two semantically coherent—but context-entangled—branches.

[PUBLIC TEXT]

The contribution is methodological and epistemological. A computational study of culture should test whether its claims survive more than one reasonable representation. Robust structures become candidates for deeper investigation; unstable structures reveal where an encoding, similarity rule, or graph choice matters.

[H2]

Neither universal sameness nor absolute isolation

[PUBLIC TEXT]

One error is **homogenization**: treating culturally distinct traditions as interchangeable versions of a universal story. Another is **fragmentation**: treating every record as isolated and making recurrence impossible to study. The paired result resists both. It preserves meaningful cross-cultural structure without turning structural similarity into cultural equivalence.

[BUILDER] Place the following as a two-column “supports / does not establish” block.

### The analysis supports

- nonrandom but incomplete agreement between two released partitions;
- three prominent one-to-one community anchors;
- a principal B1 subdivision into B1∩T2 and B1∩T4;
- a persistent aggregate thematic contrast within that split;
- substantial covariation with broad geography and documentation depth;
- the need to treat representation and graph construction as substantive research choices.

### The analysis does not establish

- migration, contact, borrowing, or transmission direction;
- common ancestry or a date of divergence;
- where a motif or narrative originated;
- an environmental cause;
- emic cultural categories or bounded cultural identities;
- the superiority of topic modeling over exact-motif comparison;
- a representative sample of all traditions or all performances.

[PUBLIC TEXT]

The strongest conclusion is therefore not that one network is correct. The two methods observe different levels of the same recorded archive, and their disagreement is itself evidence about the measurement architecture.

---

# SECTION 12 — WHAT EVIDENCE COMES NEXT

[H1]

From structural result to historical test

[PUBLIC TEXT]

Networks generate hypotheses; they do not prove histories. The next research phase should test each possible explanation with evidence that was not used to build the communities.

[BUILDER] Use six restrained numbered cards or a vertical sequence. No icons are necessary.

## 1 · Human semantic validation

[PUBLIC TEXT]

Have folklorists, area specialists, translators, and—where feasible and invited—knowledge holders examine motif wording, factor labels, and representative records. Validation should record disagreement and revise analyst-facing labels rather than asking reviewers to rubber-stamp algorithmic communities.

## 2 · Historical and archaeological chronology

[PUBLIC TEXT]

For a narrowly defined motif family or anchor, specify plausible time windows and compare the network hypothesis with dated movement, exchange, settlement, and material evidence. A temporal mismatch should count against a transmission explanation.

## 3 · Language-aware models

[PUBLIC TEXT]

Repair missing language-family metadata, preserve uncertainty and multilingual naming, and use explicit phylogenetic or relatedness models. Language resemblance should be tested against geography and documentation, not used as a loose ancestry label.

## 4 · Spatial and ecological alternatives

[PUBLIC TEXT]

Replace broad macroareas with spatial nulls that preserve local autocorrelation and sampling density. Treat environmental variables as candidate contexts with dates and mechanisms, not as explanations inferred from a scatter plot.

## 5 · Documentation sensitivity

[PUBLIC TEXT]

Repeat the analysis under repertoire-matched resampling, source-level blocking, and deliberate down-sampling of heavily documented records. Report which anchors and factors survive and which depend on catalogue depth.

## 6 · Model uncertainty

[PUBLIC TEXT]

Propagate NMF seed, factor number, graph sparsification, Leiden resolution, optimizer seed, and translation choices through the partition comparison. The provisional topic communities should not be made substantive names until this uncertainty and human validation are resolved.

[QUOTE]

The map is an instrument for locating questions. Independent evidence must decide among their explanations.

---

# SECTION 13 ★ — METHODS & DATA

[H1]

Explore, reproduce, and respond

[PUBLIC TEXT]

Every visualization in this story has a persistent text summary, an explicit denominator, and a link to its public interactive. The companion repository records the released counts used here and an audit manifest for the StoryMap data bundle.

[EMBED — full width, suggested height 680 px]

URL: <https://jayjung124.github.io/SSTP_StoryMap/figures.html>

Embed title: **Interactive gallery for The Shape of Myth**

[CAPTION]

Open any panel in the companion gallery. The gallery is a navigation layer over the same audited interactives used in this story; it is not an additional analysis.

[ALT]

Gallery of links to the world map, network explorer, community profiles, community-overlap table, semantic-factor comparison, geographic composition chart, climate scatter plot, and latitude distributions.

[BUILDER — add two buttons]

- **Open the public repository** → <https://github.com/jayjung124/SSTP_StoryMap>
- **Read the companion audit manifest** → <https://jayjung124.github.io/SSTP_StoryMap/data/audit_manifest.json>

[H2]

Compact reproducibility record

[PUBLIC TEXT]

**Frozen input:** 926 × 2,138 binary incidence matrix. **Binary graph:** Jaccard intersection over union, all positive off-diagonal ties, 358,966 weighted edges; weighted Leiden RB configuration at γ = 1.00, released seed 1, four communities. **Semantic graph:** one title-plus-gloss document per motif, sublinear L2 TF–IDF, NMF-15, incidence-weighted aggregation to normalized tradition profiles, cosine similarity, weighted union-kNN at k = 12, 8,854 edges; weighted Leiden RB configuration at γ = 0.75, released seed 42, five provisional communities.

[PUBLIC TEXT]

**Partition comparison:** exact node-label alignment; 4 × 5 contingency table; ARI, AMI, arithmetic NMI, VI, pair diagnostics, analytical z-Rand; 99,999 global fixed-margin permutations and 99,999 within-macroarea permutations; one-sided hypergeometric cell enrichment with Holm correction across twenty cells. **B1 follow-up:** Fisher/CMH motif tests; compositional factor analysis using centered log-ratios and Aitchison distance; unrestricted, macroarea-restricted, and macroarea × recorded-repertoire-quartile permutations; macroarea and documentation-depth audits.

[PUBLIC TEXT]

The current public StoryMap companion contains the interactive HTML files, their JavaScript data, a 926-row tradition-level CSV for mapping, and the audit manifest. It should not be described as the complete canonical research release unless the full binary matrix, motif dictionary, factor tables, node and edge tables, selected configurations, software lock, and checksum manifest are also deposited in the repository or a DOI-bearing archive.

[H2]

Data interpretation and rights

[PUBLIC TEXT]

Motif titles, glosses, catalogue organization, and source attributions should be cited to the Berezkin–Duvakin catalogue. Any license supplied in the repository governs reuse of project code and visualization assets; if no license is supplied, permission should not be assumed. The source catalogue’s terms govern its content. A public visualization does not transfer authority over the underlying cultural knowledge.

[PUBLIC TEXT]

Corrections are welcome through the [GitHub repository](https://github.com/jayjung124/SSTP_StoryMap). A correction should identify the specific record, field, figure, or claim and—where possible—link to supporting scholarship or community-authorized documentation. Corrections should remain visible in version history.

[H2]

Works cited and methodological sources

[BUILDER] Put each reference in its own small text block. Use hanging-indent styling if the selected StoryMaps theme supports it.

[PUBLIC TEXT]

Abello, James, Peter Broadwell, and Timothy R. Tangherlini. 2012. “Computational Folkloristics.” *Communications of the ACM* 55(7): 60–70. [https://doi.org/10.1145/2209249.2209263](https://doi.org/10.1145/2209249.2209263)

[PUBLIC TEXT]

Berezkin, Yuri E., and Evgeny N. Duvakin. Ongoing. *Thematic Classification and Areal Distribution of Folklore-Mythological Motifs: Electronic Analytical Catalogue.* [Russian catalogue](https://ruthenia.ru/folklore/berezkin/) · [English-facing interface](https://mapsofmyths.com/)

[PUBLIC TEXT]

Fick, Stephen E., and Robert J. Hijmans. 2017. “WorldClim 2: New 1-km Spatial Resolution Climate Surfaces for Global Land Areas.” *International Journal of Climatology* 37(12): 4302–4315. [https://doi.org/10.1002/joc.5086](https://doi.org/10.1002/joc.5086)

[PUBLIC TEXT]

Hubert, Lawrence, and Phipps Arabie. 1985. “Comparing Partitions.” *Journal of Classification* 2: 193–218. [https://doi.org/10.1007/BF01908075](https://doi.org/10.1007/BF01908075)

[PUBLIC TEXT]

Lee, Daniel D., and H. Sebastian Seung. 1999. “Learning the Parts of Objects by Non-negative Matrix Factorization.” *Nature* 401: 788–791. [https://doi.org/10.1038/44565](https://doi.org/10.1038/44565)

[PUBLIC TEXT]

Meilă, Marina. 2007. “Comparing Clusterings—An Information Based Distance.” *Journal of Multivariate Analysis* 98(5): 873–895. [https://doi.org/10.1016/j.jmva.2006.11.013](https://doi.org/10.1016/j.jmva.2006.11.013)

[PUBLIC TEXT]

Phipson, Belinda, and Gordon K. Smyth. 2010. “Permutation P-values Should Never Be Zero: Calculating Exact P-values When Permutations Are Randomly Drawn.” *Statistical Applications in Genetics and Molecular Biology* 9(1). [https://doi.org/10.2202/1544-6115.1585](https://doi.org/10.2202/1544-6115.1585)

[PUBLIC TEXT]

Traag, Vincent A., Ludo Waltman, and Nees Jan van Eck. 2019. “From Louvain to Leiden: Guaranteeing Well-connected Communities.” *Scientific Reports* 9: 5233. [https://doi.org/10.1038/s41598-019-41695-z](https://doi.org/10.1038/s41598-019-41695-z)

[PUBLIC TEXT]

Traud, Amanda L., Eric D. Kelsic, Peter J. Mucha, and Mason A. Porter. 2011. “Comparing Community Structure to Characteristics in Online Collegiate Social Networks.” *SIAM Review* 53(3): 526–543. [https://doi.org/10.1137/080734315](https://doi.org/10.1137/080734315)

[PUBLIC TEXT]

Vinh, Nguyen Xuan, Julien Epps, and James Bailey. 2010. “Information Theoretic Measures for Clusterings Comparison.” *Journal of Machine Learning Research* 11: 2837–2854. [https://jmlr.org/papers/v11/vinh10a.html](https://jmlr.org/papers/v11/vinh10a.html)

[H2]

Ethics and public-humanities references

[PUBLIC TEXT]

Smithsonian Center for Folklife and Cultural Heritage. “Mission and History.” [https://folklife.si.edu/mission-and-history](https://folklife.si.edu/mission-and-history)

[PUBLIC TEXT]

Smithsonian Center for Folklife and Cultural Heritage. “Shared Stewardship: New Guidelines for Ethical Archiving.” [https://folklife.si.edu/news-and-events/shared-stewardship-new-guidelines-for-ethical-archiving](https://folklife.si.edu/news-and-events/shared-stewardship-new-guidelines-for-ethical-archiving)

[PUBLIC TEXT]

Smithsonian Center for Folklife and Cultural Heritage. “Cultural Sustainability Research Group.” [https://folklife.si.edu/cultural-sustainability-research-group/smithsonian](https://folklife.si.edu/cultural-sustainability-research-group/smithsonian)

[H2]

Acknowledgments and independence statement

[PUBLIC TEXT]

This independent project builds on the Berezkin–Duvakin catalogue and on the work of the storytellers, communities, collectors, translators, editors, and scholars whose knowledge and labor made its records possible. The computational interpretation and any errors are Jay Jung’s. The project is not affiliated with or endorsed by the Smithsonian Institution or the Smithsonian Center for Folklife and Cultural Heritage.

[PUBLIC TEXT]

The final responsibility of this StoryMap is not to make detected similarity look like certainty. It is to make the representation, denominator, context, and limit of every claim visible.

---

# FINAL BUILD AND PUBLICATION CHECKLIST

## Content integrity

- [ ] Old “Ever since the dawn of humanity…” copy and the earlier composite earth-diver opener are removed.
- [ ] The story has exactly thirteen numbered sections in the order above.
- [ ] Every occurrence of T1–T5 in methodological or interpretive copy preserves the qualifier **provisional** where status matters.
- [ ] B1∩T2/B1∩T4 branch results use denominators 162/148; full T2/T4 climate results use 204/164.
- [ ] Coordinates are called catalogue reference locations, never origins or homelands.
- [ ] No sentence says the binary network captures ethnographers’ exact words.
- [ ] No sentence says both pipelines are identical or that representation alone is causally isolated.
- [ ] NMI is not called chance-adjusted; VI is labeled as a distance; z-Rand is not treated as an effect size.
- [ ] Theme and motif contrasts are labeled post-clustering characterization.
- [ ] Climate is labeled modern/reference-location context; language missingness is stated as 340/926 (36.7%).
- [ ] The Smithsonian non-affiliation statement appears near the cover and in acknowledgments.

## Interactive integrity

- [ ] All nine URLs open over HTTPS with no 404 or mixed-content warning.
- [ ] `styles.css`, `mythdata.js`, and any edge-data script required by the network explorer sit beside the HTML files.
- [ ] Every embed is set to **Interactive**, not Card.
- [ ] Every chart loads at phone, tablet, and desktop widths.
- [ ] The T2/T4 swipe is built from `B1_split`, uses identical extents, and labels n = 162 / n = 148.
- [ ] No displayed line in the network explorer is described as an analyzed edge unless the deployed chart explicitly documents it as one.

## Accessibility and design

- [ ] Every map, embed, and static image has the supplied accessible description or an equivalent one.
- [ ] A reader can recover the main result without hovering or distinguishing color.
- [ ] Text contrast meets WCAG AA; community colors are paired with labels.
- [ ] There is no AI-generated art, generic fantasy imagery, faux parchment, decorative glyph system, or unexplained iconography.
- [ ] Motion is minimal, and no autoplay media is used.
- [ ] Captions remain visible beneath embeds and identify source, denominator, and interpretive limit.

## Release and preservation

- [ ] `data/audit_manifest.json` still reports `audit_status: passed` after the final upload.
- [ ] The GitHub commit used by the StoryMap is recorded in the StoryMap credits or project notes.
- [ ] The complete canonical research release is deposited separately before claiming full reproducibility.
- [ ] Repository and source-catalogue rights statements are accurate on publication day.
- [ ] Publish first as a private or organization-only review link; complete a final factual, mobile, accessibility, and rights review before sharing with Everyone.

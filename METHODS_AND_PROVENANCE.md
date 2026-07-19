# Methods, data provenance, and interpretive boundaries

## Technical companion to *The Shape of Myth*

This document records the data, computational procedures, statistical comparisons, and claim boundaries behind the StoryMap. It is intended to make the public-facing visualizations auditable without turning algorithmic similarity into a historical claim.

The specifications below are frozen to three source releases:

- core-network release: `mythology_core_network_claude_export_2026_07_16`;
- partition-comparison release: `final_partition_comparison_2026_07_17`;
- node-attribute audit: `topic_node_attribute_analysis_2026_07_18`.

The StoryMap display table, `data/traditions.csv`, is a compact derivative of those releases. The canonical matrices, factor weights, complete edge lists, parameter sweeps, validation tables, and executable analysis code remain the authority for methodological details.

## 1. Research object and unit of analysis

The study analyzes an English-language programmatic export of Yuri Berezkin's mythological motif catalogue. Its shared analytical object is a binary incidence matrix with:

- **926 catalogue traditions** as rows;
- **2,138 motif IDs** as columns;
- **68,837 recorded motif presences**;
- a value of 1 when a motif is recorded for a tradition in the export;
- a value of 0 when that motif is not recorded for that tradition in the export.

A zero is therefore not proof that a community lacked, rejected, or never knew a narrative. It records absence from this catalogue export. Likewise, the 926 rows should be called *catalogue traditions* or *catalogue entries*, not uniformly oral traditions, ethnic groups, or bounded cultures. The source includes heterogeneous ethnographic, regional, historical, literary, and composite entries.

The motif dictionary contains a nonblank title field for every motif, although one record (`m29g1_9`) uses its motif ID as that field and has no descriptive title or gloss. Of 2,138 motifs, 2,052 have a usable English gloss and 86 do not; title fields keep every motif available to the text pipeline. The analysis contains neither a corpus of complete tales nor original-language narrative texts. It models catalogue-coded motif occurrence and the English wording of catalogue annotations.

The source files derive from the public [`macleginn/mythology-queries`](https://github.com/macleginn/mythology-queries) project, its [English query interface](https://eurphon.info/static/mythqueries/), and the [full-text Russian catalogue](http://ruthenia.ru/folklore/berezkin/index.htm). The retained raw source table is tab-delimited despite its `.csv` suffix; the canonical analysis matrix is a cleaned comma-delimited derivative aligned to a one-row-per-motif dictionary. All network tables preserve the same 926-row node order.

## 2. Controlled paired design—and what was not held constant

Both pipelines begin with the same 926 traditions, 2,138 motif IDs, and 68,837 recorded presences. They ask different similarity questions:

1. **Exact-motif representation:** How much do two traditions overlap in the specific motif codes recorded for them?
2. **Semantic-factor representation:** How similar are the traditions' aggregate profiles over lexical-semantic factors learned from motif titles and glosses?

The comparison controls the node universe and source assignments, but it does **not** hold every downstream operation constant. The binary pipeline retains every positive Jaccard dyad, whereas the topic pipeline uses a sparse cosine union-k-nearest-neighbor graph. The Leiden resolutions also differ. Results must therefore be described as a comparison of two fully specified representation-and-graph pipelines, not as proof that representation alone caused every difference.

Geography, language, climate, and community content were not used to choose the released graphs. They were joined or interpreted after graph construction and are used as descriptive attributes, sensitivity controls, or claim gates.

## 3. Exact-motif network

### 3.1 Representation and similarity

For tradition \(i\), let \(M_i\) be its set of recorded motif IDs. Pairwise similarity is Jaccard similarity:

\[
J(i,j)=\frac{|M_i\cap M_j|}{|M_i\cup M_j|}.
\]

Shared absences do not increase similarity. The implementation computes the full \(926\times926\) matrix from the binary incidence matrix, sets the diagonal to one, and retains every unordered off-diagonal dyad with \(J(i,j)>0\).

### 3.2 Graph construction

The released binary graph has:

- 926 nodes;
- 358,966 weighted edges out of 428,275 possible unordered dyads;
- density 0.838167;
- one connected component and no isolates;
- raw Jaccard similarity as the edge weight;
- no k-nearest-neighbor filtering, threshold above zero, backbone extraction, or unweighting.

An edge means only that the two entries share at least one recorded motif. It does not document observed contact or transmission.

### 3.3 Leiden community overlay

Weighted Leiden `RBConfigurationVertexPartition` was run on the fixed graph at gamma values from 0.50 to 3.00 in increments of 0.25 and seeds 0, 1, 2, 3, and 42. For each gamma, the release records community counts, standard weighted modularity, coverage, community-size diagnostics, and all pairwise seed-adjusted Rand indices.

The selection rule fixed before interpretation was:

1. retain gamma values with mean pairwise seed ARI at least 0.95;
2. choose the retained gamma with the highest mean standard weighted modularity;
3. break ties by higher mean seed ARI and then lower gamma.

The selected overlay uses gamma 1.00 and medoid seed 1. It yields four communities:

| Community | Traditions |
|---|---:|
| B1 | 363 |
| B2 | 123 |
| B3 | 230 |
| B4 | 210 |

Mean seed ARI is 0.993263, minimum seed ARI is 0.983158, and mean weighted modularity is 0.187302. These values support optimizer stability; they do not demonstrate cultural truth. The four-community partition is a stable descriptive overlay on a graph that exists independently of community detection.

Motif enrichment was calculated only after selection. Eligible motifs occurred at least three times within a community; one-sided hypergeometric tests were corrected across the declared test family with Benjamini-Hochberg. These enrichments describe selected groups and are not independent validation of the groups.

## 4. Motif-first semantic representation and topic network

### 4.1 One document per motif

The semantic pipeline first constructs one document for each of the 2,138 unique motif records, using the title and available English gloss exactly once. It does not fit NMF to 926 tradition documents containing repeated copies of the same editorial gloss.

The selected preprocessing profile, `motif_first_light_field_bigrams_df2`, applies:

- Unicode NFKC normalization and case-folding;
- normalized dashes, apostrophes, and whitespace;
- retained parenthetical content;
- Unicode alphabetic surface tokens of at least two characters;
- no stemming;
- standard English function-word removal with protected semantic terms;
- removal only of explicit catalogue-container words such as “motif,” “story,” and “catalogue”;
- title-local and gloss-local bigrams, without bigrams crossing the title/gloss boundary;
- `min_df=2` and `max_df=0.80` across the 2,138 motif documents;
- sublinear, smoothed, row-L2-normalized TF-IDF.

### 4.2 NMF and aggregation to traditions

Nonnegative matrix factorization decomposes the motif-by-term TF-IDF matrix \(A\):

\[
A\approx W_mH,
\]

where \(W_m\) contains motif-by-factor weights and \(H\) contains factor-by-term weights. Candidate factor counts were 5, 10, 15, 20, 28, 35, 50, and 70. Seeds 0, 1, and 42 were compared using convergence, automated lexical coherence, factor alignment, motif assignment stability, support, and redundancy diagnostics.

The selected model has 15 factors and uses scikit-learn NMF with `init="nndsvdar"`, released seed 42, 800 maximum iterations, tolerance \(10^{-4}\), coordinate descent, and Frobenius loss. The motif factor rows are L1-normalized before aggregation. If \(X\) is the \(926\times2{,}138\) incidence matrix, the released tradition profiles are:

\[
Z=\operatorname{rowL1}\left(X\,\operatorname{rowL1}(W_m)\right).
\]

Each represented motif therefore contributes unit total factor mass before the resulting tradition profile is normalized to sum to one. Eighty-three motifs have no term surviving document-frequency filtering and contribute zero semantic mass; no tradition profile is empty.

### 4.3 Cosine graph and Leiden selection

The 15-factor tradition profiles are L2-normalized and compared with cosine similarity. For each tested \(k\), every tradition nominates its \(k\) highest positive-similarity neighbors. The undirected union rule retains an edge if either endpoint nominates the other, while preserving raw cosine similarity as the edge weight. Nomination direction has no historical meaning.

Tested \(k\) values were 2, 3, 5, 8, 10, 12, 15, 20, 25, 30, and 40. For each union-kNN graph, weighted Leiden was run at 12 gamma values from 0.25 through 3.00 and ten optimizer seeds: 0, 1, 2, 3, 4, 10, 42, 101, 202, and 303. This produced 132 \(k\)-by-gamma cells and 1,320 primary Leiden runs.

Candidate cells passed sequential gates for graph validity, partition admissibility, optimizer stability, local parameter-plateau stability, NMF-seed stability, and ten replicates of 10% edge deletion. No composite score selected the result. The widest surviving parameter plateau comprised \((k,\gamma)=(12,0.75),(15,0.75),(20,0.75)\); the specified tie-breaking rule selected the smallest \(k\), giving \(k=12\), \(\gamma=0.75\).

The released topic graph has:

- 926 nodes and 8,854 weighted edges;
- density 0.020674;
- one component and no isolates;
- mean degree 19.1231 and maximum degree 47;
- mean edge cosine 0.946017;
- weighted modularity 0.597770;
- weighted within-edge coverage 0.826003.

The released medoid seed is 42. The partition contains five communities:

| Community | Traditions |
|---|---:|
| T1 | 271 |
| T2 | 204 |
| T3 | 196 |
| T4 | 164 |
| T5 | 91 |

Mean optimizer-seed ARI is 0.858073, minimum optimizer-seed ARI is 0.711798, mean NMF-seed partition ARI is 0.927266, and mean edge-deletion ARI is 0.893181. The partition is reproducible under these tested perturbations but remains **provisional pending human semantic validation**. Graph layout coordinates are display artifacts, not substantive dimensions.

### 4.4 Negative holdout result and semantic caveat

Automated diagnostics do not establish human interpretability. The selected NMF model's bootstrap NPMI interval included zero. In a three-seed diagnostic that masked 20% of recorded repertoires, mean NDCG@50 was 0.0276, below a motif-popularity baseline of 0.1417. This test was not the model-selection objective, but its negative result is retained: the semantic representation should not be claimed to predict missing motif codes.

Analyst factor labels summarize top English catalogue terms and high-weight motif records. They are not original catalogue categories, emic classifications, or validated universal themes.

## 5. Comparing the released partitions

The comparison aligns the two hard partitions on the identical ordered set of 926 traditions. Community identifiers are nominal: a shared numeral does not imply correspondence. The observed contingency table is:

|  | T1 | T2 | T3 | T4 | T5 | Total |
|---|---:|---:|---:|---:|---:|---:|
| B1 | 43 | 162 | 1 | 148 | 9 | 363 |
| B2 | 20 | 12 | 19 | 8 | 64 | 123 |
| B3 | 47 | 8 | 166 | 0 | 9 | 230 |
| B4 | 161 | 22 | 10 | 8 | 9 | 210 |
| Total | 271 | 204 | 196 | 164 | 91 | 926 |

### 5.1 Agreement statistics

| Statistic | Observed value | Interpretation |
|---|---:|---|
| Same-community pairs in both | 55,389 | Of 428,275 unordered pairs |
| Expected same-community pairs | 26,625.227 | Fixed row/column-margin null |
| Rand index | 0.755834 | Includes the 62.65% of pairs separated in both partitions |
| Adjusted Rand index | 0.354895 | Primary chance-adjusted pair-counting effect size |
| Arithmetic AMI | 0.388784 | Primary chance-adjusted information effect size |
| Arithmetic NMI | 0.391561 | Must be reported with its normalization |
| Variation of information | 1.748516 nats | 2.522576 bits; zero would mean identical partitions |
| Pair Jaccard | 0.346270 | Overlap among positively coassigned pairs |
| z-Rand | 151.1127 | Standardized test statistic, not a percentage or effect size |

The raw Rand index is elevated by joint coseparation: 268,316 pairs, or 62.65% of all pairs, are separated by both partitions. ARI and AMI are therefore the principal magnitude measures. NMI ranges from 0.361565 to 0.426984 under standard normalizations; the StoryMap reports the arithmetic form.

Directional diagnostics show subdivision rather than equivalence. Only 45.6% of pairs coassigned in the binary partition remain together in the topic partition, whereas 59.0% of topic-coassigned pairs are also together in the binary partition. These measures do not rank one representation as superior.

### 5.2 Null models

Analytical z-Rand uses the generalized hypergeometric null with fixed binary and topic community margins. Its analytical standard deviation, 190.3465 coassigned pairs, was checked against 99,999 global permutations of the complete topic-label vector. No permutation reached the observed agreement; with the plus-one Monte Carlo correction, \(p=0.00001\). The reported z-Rand is analytical; permutations verify its null and supply the tail probability.

A second set of 99,999 permutations shuffled topic labels independently within each of 16 broad macroareas, preserving each macroarea's topic-community composition. Under this restricted null:

- mean ARI was 0.2075;
- standard deviation was 0.0084;
- the 95% permutation interval was [0.1915, 0.2244];
- observed minus null-mean ARI was 0.1474;
- the restricted standardized contrast was 17.52;
- no draw reached observed ARI, giving \(p=0.00001\).

Broad geography therefore supplies a substantial baseline of agreement, but the observed alignment exceeds that baseline. This null controls only the released macroareas; it is not a complete adjustment for spatial dependence, language relationship, source history, or documentation practice.

One-sided fixed-margin hypergeometric tests with Holm familywise-error correction across 20 cells identify five enriched overlaps: B1–T2, B1–T4, B2–T5, B3–T3, and B4–T1.

## 6. The B1 divergence: exact analytical scope

The principal divergence is defined within the largest binary community, B1. The inferential comparison is **B1∩T2 versus B1∩T4**, not every member of full T2 versus every member of full T4.

| Display or analysis group | Count | Scope |
|---|---:|---|
| Full T2 | 204 | All traditions assigned to topic community T2 |
| Full T4 | 164 | All traditions assigned to topic community T4 |
| B1∩T2 | 162 | B1 traditions assigned to T2; primary B1-split group |
| B1∩T4 | 148 | B1 traditions assigned to T4; primary B1-split group |

B1∩T2 contains 79.4% of full T2; B1∩T4 contains 90.2% of full T4. StoryMap views filtered with `is_T2` or `is_T4` show the full topic communities. Views filtered with `B1_split` show the two groups used in the B1 divergence tests. Captions must state the scope and denominator.

## 7. Theme, motif, geography, and documentation robustness

### 7.1 Aggregate semantic-factor contrast

The 15 factor weights are compositional. Zeros were replaced with half the smallest positive released weight, rows were closed, and centered log-ratio transforms were compared. Significance used 99,999 unrestricted permutations, within-macroarea permutations, and joint within-macroarea-by-recorded-repertoire-quartile permutations. Holm correction across 15 factors was primary.

The Aitchison distance between B1∩T2 and B1∩T4 compositional centers was 1.6097. No unrestricted or macroarea-restricted permutation reached this value (\(p=0.00001\) for each); 14 of 99,999 joint restricted draws reached or exceeded it (\(p=0.00015\)). Four factors were Holm-significant under all three permutation schemes:

| Factor | B1∩T2 mean | B1∩T4 mean | Robust direction |
|---|---:|---:|---|
| F3 Sun, Moon & eclipses | 16.0% | 6.7% | Higher in B1∩T2 |
| F5 sky, earth & world structure | 15.8% | 8.0% | Higher in B1∩T2 |
| F9 first people, plants & beings | 12.2% | 17.8% | Higher in B1∩T4 |
| F10 trees, rocks & climbing | 3.7% | 7.1% | Higher in B1∩T4 |

F14 women, birth & children is higher in B1∩T4 and reaches Holm \(p=0.0176\) under the most restricted null, but not under the other two schemes; it is secondary, not part of the four-factor robust set.

### 7.2 Exact motifs are more context-sensitive

For all 2,138 motifs, the comparison calculated group prevalence, prevalence difference, a Haldane-Anscombe log2 odds ratio, and two-sided Fisher exact tests with Benjamini-Hochberg and Holm corrections. It then repeated association testing with Cochran-Mantel-Haenszel tests stratified by macroarea and jointly by macroarea and motif-count quartile.

- 232 motifs pass BH \(q<0.05\) without contextual stratification.
- 8 remain after macroarea stratification.
- 0 remain after joint macroarea-by-repertoire-quartile stratification.

The defensible result is therefore a robust aggregate semantic contrast with a context-sensitive list of individual motifs. Unadjusted motif examples make the groups legible, but they must not be presented as geography-free or documentation-free signatures.

The B1 split also differs strongly in context. Macroarea composition yields \(\chi^2(11)=94.53\), permutation \(p=0.00001\), Cramer's \(V=0.552\), and Jensen-Shannon distance 0.496. Recorded motif counts average 35.3 in B1∩T2 and 61.1 in B1∩T4, with medians 29.5 and 52.0. The mean difference is -25.84 motifs; the within-macroarea permutation gives \(p=0.00001\), and Cliff's \(\delta=-0.408\). The topic split covaries with both geography and catalogue depth.

### 7.3 Representation-stable community anchors

For the B2–T5, B3–T3, and B4–T1 anchors, a motif had to be enriched in both full communities. A leave-overlap-out sensitivity then removed every shared member and required enrichment in both nonoverlapping residues. B2–T5 and B3–T3 retained no motif under that dual residue requirement. B4–T1 retained 12, led by *Primeval waters*, *The diver is a bird*, *Earth grows big*, *The earth-diver*, and *The diver*.

This makes the primeval-water/earth-diver complex the strongest representation-stable motif anchor in this catalogue. It belongs principally to the B4–T1 correspondence, not to B1. It remains a post-clustering, context-unadjusted characterization, not evidence of universality or historical transmission.

All motif and theme analyses reuse features that contributed to graph construction. They characterize released communities; they are not independent tests that validate those communities.

## 8. Climate provenance and limitations

The StoryMap display file includes annual mean temperature and annual precipitation sampled from **WorldClim 2.1 at 10-arc-minute resolution**:

- `annual_mean_temp_C` is BIO1 in degrees Celsius, rounded to one decimal for display;
- `annual_precip_mm` is BIO12 in millimeters, rounded to a whole millimeter for display.

WorldClim values were sampled at the catalogue coordinates for all 926 records. Fifty-nine records required an imputation procedure, with local raster search extending to at most seven pixels. Two unresolved small-island points—Tuvalu (Ellice) and Rotuma—received complete climate profiles copied from the nearest resolved tradition and were explicitly flagged in the canonical metadata. The compact StoryMap CSV does not retain the imputation flags, so this disclosure must accompany climate figures.

These variables are modern climate normals, not paleoclimate estimates for the formation or movement of motifs. The catalogue point may be a reference location for a documented tradition rather than an origin. Climate plots in the StoryMap are descriptive context and cannot establish environmental causation.

## 9. Language, coordinates, and archival metadata

### Language-family coverage

Glottolog family is available for 586 of 926 records; 340 are unlinked or missing. The linked subset contains 97 distinct nonblank family labels. Missingness must remain explicit and must not be counted as a ninety-eighth family. The labels are broad classifications used for audit and display, not complete representations of multilingual practice, historical language shift, or every disputed genealogical relationship.

### Coordinates and regions

Latitude and longitude are catalogue reference points. They are suitable for point display and coarse contextual sampling, but they are not cultural boundaries, homelands, dated origins, or proof that a narrative arose at that point. Some entries represent dispersed populations, historical polities, literary corpora, or composite source traditions. The 16 `world_region` categories are broad analytical macroareas, not mutually isolated cultural systems.

Maps show recorded catalogue occurrence or algorithmic community membership. Network-layout coordinates show only a display embedding. Neither map form demonstrates movement, diffusion, chronology, or direction of transmission.

### Archival labels

`tradition` preserves the source-catalogue label for reproducibility. Some labels may be historical, exonymic, broad, or no longer community-preferred. Public display should identify them as archival source labels, retain the original value in the audit record, and add a sourced contemporary community name where authoritative guidance is available. A label should not be silently modernized in a way that breaks provenance.

## 10. StoryMap data dictionary

The public file `data/traditions.csv` has 926 rows, 13 fields, no duplicate tradition labels, and no missing values except `language_family`.

| Field | Type / values | Definition and cautions |
|---|---|---|
| `tradition` | text; 926 unique | Source-catalogue entry label. An archival identifier, not necessarily a current self-designation or uniform cultural unit. |
| `latitude` | decimal number | Catalogue reference latitude used for mapping and climate lookup; not an origin or homeland coordinate. |
| `longitude` | decimal number | Catalogue reference longitude used for mapping and climate lookup; not an origin or homeland coordinate. |
| `world_region` | 16-category text | Broad macroarea used for display and restricted null models. It is a coarse analytical grouping. |
| `binary_community` | `B1`–`B4` | Gamma-1 Leiden label on the complete positive-Jaccard graph. Nominal identifier. |
| `topic_community` | `T1`–`T5` | Gamma-0.75 Leiden label on the cosine union-kNN graph at \(k=12\). Provisional nominal identifier. |
| `language_family` | text or blank | Glottolog family for the linked subset. Present for 586 rows, blank for 340; 97 distinct nonblank labels. |
| `n_motifs` | positive integer | Row sum of the canonical binary matrix: number of motif IDs recorded for the entry. Matrix-derived values are used because a source-reported count was stale for 71 traditions. |
| `annual_mean_temp_C` | decimal degrees Celsius | WorldClim 2.1 BIO1 sampled at the reference point and rounded to one decimal. Modern climate context only. |
| `annual_precip_mm` | integer millimeters | WorldClim 2.1 BIO12 sampled at the reference point and rounded to a whole millimeter. Modern climate context only. |
| `is_T2` | `T2` or `other` | Display flag for all 204 full-community T2 records. It does not isolate the B1 split. |
| `is_T4` | `T4` or `other` | Display flag for all 164 full-community T4 records. It does not isolate the B1 split. |
| `B1_split` | `B1→T2`, `B1→T4`, or `other` | Primary B1-divergence scope: 162 B1→T2, 148 B1→T4, and 616 other records. |

SHA-256 for the released StoryMap table:

```text
b9e92a8969e166a9456e2197d5fe78faf0c95a629a23aa6c285766b6fe55a125  data/traditions.csv
```

## 11. Reproducibility record

The canonical core-network release contains the materials needed to reconstruct both graphs:

- `canonical_core_specs.json` for machine-readable frozen specifications;
- `data/source/01_binary_tradition_motif_matrix_926x2138.csv`;
- `data/source/02_motif_dictionary_2138.csv`;
- the complete positive-Jaccard edge list and selected binary-node table;
- processed motif text, factor-term weights, complete motif-factor weights, and tradition-factor profiles;
- the complete topic cosine matrix, selected union-kNN edge list, and GraphML;
- preprocessing, NMF, gamma, and network parameter sweeps;
- seed, representation, connectivity, and edge-deletion robustness tables;
- `code/verify_core_export.py`, which recomputes the released edge sets and validates the bundle checksums.

The comparison release freezes node-file hashes, requires exact index/name alignment, and provides:

- the 4-by-5 contingency table and all agreement metrics;
- 99,999-draw global and macroarea-restricted null distributions;
- all 20 cell-enrichment tests and multiplicity corrections;
- B1 motif, factor, geography, and documentation contrast tables;
- leave-overlap-out anchor tests;
- analysis specifications, software versions, locked requirements, validation manifest, and executable scripts.

Global and macroarea permutation seeds are 20260717 and 20260718. Monte Carlo values use \((e+1)/(R+1)\), so a result with zero exceedances among 99,999 draws is reported as \(p=0.00001\), never zero.

The StoryMap's `data/audit_manifest.json` identifies the canonical and comparison releases used to build the interactives. Display subsampling or layout optimization must never be substituted for analytical edges or used to recompute results.

## 12. Claim boundaries

The evidence supports the following statements:

- the two released partitions share substantially more structure than expected under fixed margins;
- broad macroarea composition explains part, but not all, of that agreement;
- the partitions are not interchangeable classifications;
- B1 divides primarily into B1∩T2 and B1∩T4 under the topic pipeline;
- an aggregate celestial/world-structure versus terrestrial-narrative contrast remains detectable under the specified contextual permutations;
- individual motif contrasts are strongly sensitive to macroarea and documentation depth;
- B4–T1 carries the strongest leave-overlap-out motif anchor in this catalogue.

The evidence does **not** establish:

- historical contact, borrowing, common ancestry, migration, or a direction of transmission;
- the date or geographic origin of a motif;
- culturally bounded, universal, or emic categories corresponding to algorithmic communities;
- that topic modeling is intrinsically superior to exact-motif comparison;
- that modern climate caused a motif to form or spread;
- that a displayed point is a homeland or that a dispersed pattern proves independent recurrence;
- cultural ownership, authority, or identity from network position.

The appropriate interpretation is conditional and comparative: exact motif codes and broader lexical-semantic profiles reveal a nonrandom shared backbone while organizing some local relationships differently. The result is a method for generating historically testable hypotheses. Claims about transmission require independent chronological, linguistic, archaeological, ethnographic, ecological, and community-grounded evidence.

## Selected methodological references

- Amigó, E., Gonzalo, J., Artiles, J., and Verdejo, F. 2009. “A Comparison of Extrinsic Clustering Evaluation Metrics Based on Formal Constraints.” *Information Retrieval* 12: 461–486. [DOI](https://doi.org/10.1007/s10791-008-9066-8)
- Fick, S. E., and Hijmans, R. J. 2017. “WorldClim 2: New 1-km Spatial Resolution Climate Surfaces for Global Land Areas.” *International Journal of Climatology* 37: 4302–4315. [DOI](https://doi.org/10.1002/joc.5086)
- Hubert, L., and Arabie, P. 1985. “Comparing Partitions.” *Journal of Classification* 2: 193–218. [DOI](https://doi.org/10.1007/BF01908075)
- Meilă, M. 2007. “Comparing Clusterings—an Information Based Distance.” *Journal of Multivariate Analysis* 98: 873–895. [DOI](https://doi.org/10.1016/j.jmva.2006.11.013)
- Phipson, B., and Smyth, G. K. 2010. “Permutation P-values Should Never Be Zero.” *Statistical Applications in Genetics and Molecular Biology* 9, Article 39. [DOI](https://doi.org/10.2202/1544-6115.1585)
- Traag, V. A., Waltman, L., and van Eck, N. J. 2019. “From Louvain to Leiden: Guaranteeing Well-Connected Communities.” *Scientific Reports* 9: 5233. [DOI](https://doi.org/10.1038/s41598-019-41695-z)
- Traud, A. L., Kelsic, E. D., Mucha, P. J., and Porter, M. A. 2011. “Comparing Community Structure to Characteristics in Online Collegiate Social Networks.” *SIAM Review* 53: 526–543. [DOI](https://doi.org/10.1137/080734315)
- Vinh, N. X., Epps, J., and Bailey, J. 2010. “Information Theoretic Measures for Clusterings Comparison.” *Journal of Machine Learning Research* 11: 2837–2854. [Article](https://www.jmlr.org/papers/volume11/vinh10a/vinh10a.pdf)

# Publish and embed guide

## Public host

- Repository: <https://github.com/jayjung124/SSTP_StoryMap>
- Figure gallery: <https://jayjung124.github.io/SSTP_StoryMap/>
- StoryMap draft: <https://storymaps.arcgis.com/stories/325d391715274077a3ff3d3a43d477bf/edit>

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. A push to `main` redeploys the static site. If GitHub Pages has not yet been enabled, open **Repository Settings → Pages → Build and deployment → Source → GitHub Actions** once. Do not upload the source folder’s `node_modules`; it is not used by the published site.

## The eight StoryMaps embed URLs

Use the `?embed=1` form inside StoryMaps. It removes the repeated figure headline, long note, and download links while retaining controls, the visual, legend, semantic labels, and accessible descriptions. The URL without the query parameter remains the complete stand-alone figure.

| Story section | Embed URL | Scope that must appear in StoryMap prose |
|---|---|---|
| Archive coverage | <https://jayjung124.github.io/SSTP_StoryMap/map_traditions.html?embed=1> | 926 catalogue reference locations; not origins |
| Paired representations | <https://jayjung124.github.io/SSTP_StoryMap/network_explorer.html?embed=1> | Same nodes; different feature, similarity, graph, and Leiden settings |
| Structural agreement | <https://jayjung124.github.io/SSTP_StoryMap/overlap_heatmap.html?embed=1> | 4×5 partition cross-tabulation over all 926 records |
| Theme-level divergence | <https://jayjung124.github.io/SSTP_StoryMap/nmf_factors.html?embed=1> | B1∩T2 n=162 versus B1∩T4 n=148 |
| Macroarea audit | <https://jayjung124.github.io/SSTP_StoryMap/geo_divergence.html?embed=1> | B1∩T2 n=162 versus B1∩T4 n=148 |
| Modern climate context | <https://jayjung124.github.io/SSTP_StoryMap/climate_scatter.html?embed=1> | Full T2 n=204 versus full T4 n=164 by default |
| Latitude context | <https://jayjung124.github.io/SSTP_StoryMap/latitude_ridgelines.html?embed=1> | Full communities; catalogue coordinates |
| Descriptive profiles | <https://jayjung124.github.io/SSTP_StoryMap/community_profiles.html?embed=1> | Full B1–B4 or provisional T1–T5 communities |

The same information is machine-readable in `embed_manifest.json`.

## Add one embed in ArcGIS StoryMaps

1. Open the saved draft in edit mode.
2. Select the **+** insertion control at the correct point in the narrative.
3. Choose **Embed**.
4. Paste one URL from the table above.
5. Select **Live content**, not the card preview.
6. Use the largest available block size for the map, networks, factors, macroarea, climate, and latitude figures. The overlap matrix and community profiles also need a wide block on phones.
7. Add the matching StoryMap caption and accessible description from `STORYMAP_MASTER_SCRIPT.md`.
8. Test every control with a mouse and keyboard, then use StoryMaps preview at desktop, tablet, and phone widths.

ArcGIS StoryMaps accepts secure public web content through an Embed block and offers small, medium, and large presentation sizes. Official guidance: <https://doc.esri.com/en/arcgis-storymaps/latest/author-and-share/add-embeds.html>.

## Recommended StoryMap order

1. Cover
2. A recurrence question
3. What the archive is—and is not
4. Two operational definitions of similarity
5. Building and validating the graphs
6. Two global partitions
7. The shared backbone
8. The B1→T2/T4 divergence
9. Theme-level and exact-motif evidence
10. Geography, language, climate, and documentation audit
11. What can be concluded
12. What evidence comes next
13. Methods, data, rights, corrections, and acknowledgments

The complete block-by-block copy, captions, alt text, and assembly directions are in `STORYMAP_MASTER_SCRIPT.md`.

## Accuracy gates before publishing the StoryMap

- The binary pipeline is described as all positive Jaccard dyads: 358,966 weighted edges; Leiden γ=1.00.
- The semantic pipeline is motif title+gloss TF–IDF → NMF-15 → tradition aggregation → cosine union-kNN k=12: 8,854 weighted edges; Leiden γ=0.75.
- The topic partition is always called provisional pending human semantic validation.
- ARI and AMI are called chance-adjusted; NMI is normalized; VI is a distance; z-Rand is an unbounded test statistic.
- The theme and macroarea figures use B1∩T2 n=162 and B1∩T4 n=148.
- The climate figure’s default uses full T2 n=204 and full T4 n=164.
- Catalogue coordinates are never called origins or homelands.
- Modern WorldClim values are never treated as historical or causal evidence.
- Language-family missingness is reported as 340/926 (36.7%).
- The project states that it is independent and not affiliated with or endorsed by the Smithsonian.
- The saved draft is reviewed in Preview before anyone selects Publish.

## Updating a figure later

1. Change the matching local file.
2. Run `python3 work/audit_storymap_bundle.py` from the project workspace.
3. Re-run browser QA at desktop and mobile widths.
4. Commit the changed deployable files to `main`.
5. Wait for the **Deploy static content to Pages** workflow to succeed.
6. Reload the existing StoryMap embed. Its URL remains stable; no ArcGIS block needs to be replaced.

## Public data and provenance

- `METHODS_AND_PROVENANCE.md` provides the full reproducibility and claim-boundary record.
- `data/audit_manifest.json` records the publication audit.
- `data/canonical_core_specs.json` freezes the selected graph specifications.
- `data/` includes the 926-row display table, canonical 2,138-row motif dictionary, and the key comparison/null/context result tables used in the figures.

No blanket license is asserted for catalogue-derived cultural data. Preserve source attribution and review rights, sensitivity, and community naming before reusing or redistributing records.

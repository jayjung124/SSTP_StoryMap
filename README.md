# The Shape of Myth

Interactive research figures for a paired network analysis of 926 catalogue traditions and 2,138 recorded motifs.

**Public gallery:** <https://jayjung124.github.io/SSTP_StoryMap/>  
**ArcGIS StoryMap draft:** <https://storymaps.arcgis.com/stories/325d391715274077a3ff3d3a43d477bf/edit>

## Central result

Across two operationalizations of the same 926 catalogue records, exact-motif and semantic-topic partitions share a nonrandom structural backbone but are not interchangeable. The principal divergence is binary community B1 dividing between semantic communities T2 and T4.

This is a finding about representational sensitivity in a secondary catalogue. Algorithmic similarity does not by itself establish genealogy, migration, borrowing, environmental causation, or universal meaning.

## Figures

1. `map_traditions.html` — catalogue reference locations
2. `network_explorer.html` — authentic paired network layouts and edges
3. `overlap_heatmap.html` — 4×5 overlap, enrichment, and agreement metrics
4. `nmf_factors.html` — B1∩T2 versus B1∩T4 factor profiles
5. `geo_divergence.html` — macroarea composition of the B1 split
6. `climate_scatter.html` — modern WorldClim context
7. `latitude_ridgelines.html` — latitude density by community
8. `community_profiles.html` — full-community descriptive profiles

Append `?embed=1` to any figure URL for the compact ArcGIS StoryMaps view.

## Verification

The publication payload passed 26/26 checks against the frozen network and partition-comparison releases on 19 July 2026. Checks cover row counts and ordering, partition sizes, all contingency cells, independently recomputed agreement metrics, factor and macroarea tables, climate means, motif-title integrity, graph specifications, and semantic-partition status.

See:

- `METHODS_AND_PROVENANCE.md`
- `data/audit_manifest.json`
- `data/canonical_core_specs.json`
- `STORYMAP_MASTER_SCRIPT.md`
- `PUBLISH_AND_EMBED_GUIDE.md`

## Ethical position

Catalogue records are analytical and historically mediated units, not complete representations of living cultures. Coordinates are reference points, not origins or territories. Algorithmic communities are analytical groupings, not cultural identities. Some source labels may be outdated or externally imposed and require name-by-name review.

This is an independent project. It is not affiliated with or endorsed by the Smithsonian Institution. Its public presentation is informed by Smithsonian Folklife principles of rigorous scholarship, transparent provenance, community authority, and shared stewardship; the present analysis is secondary catalogue research, not community co-curation.

No blanket license is asserted for catalogue-derived cultural data. Preserve attribution and review rights, sensitivity, and community naming before reuse.

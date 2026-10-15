# Traditional Chinese anatomy terminology

`zh-Hant.json` is the committed lookup used by the viewer. Keys are the original
BodyParts3D/FMA English names, lowercased. The English name and FMA identifier
remain the reference; Chinese appears as a smaller annotation.

Sources:

- [undergravity/human-atlas dictionary](https://github.com/undergravity/human-atlas/blob/d82f3e04602b83cf9a0847fa7497d93a7827e1fe/app/dict.json), MIT; converted with OpenCC.js 1.4.2 (`cn` → `twp`) and edited. The license is preserved in `public/licenses/undergravity-human-atlas-MIT.txt`.
- [National Academy for Educational Research, Human Anatomy glossary](https://data.gov.tw/dataset/14549), [CSV](https://opendata.naer.edu.tw/學術名詞/國家教育研究院-人體解剖學學術名詞.csv), Government Open Data License 1.0. Exact English matches and matching Latin muscle names inform the terminology; ambiguous general entries such as “axis” are handled in the anatomy context.

Edits remove invented laterality from unqualified names, restore incomplete
ordinals, distinguish thumb/toe muscles, and correct broader concepts whose
initial gloss inherited a narrower child term. Some ontology labels use
literal descriptive translations rather than a named dictionary entry.

Run `node scripts/validate-terminology.mjs` after edits. It checks full atlas
coverage and regression cases for laterality, ordinals, and distinct structures.

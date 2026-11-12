# Figure Preparation & Editorial Standards Checklist

Mandatory internal standard for figures, diagrams, plots, and visual research material in company research reports.  
**Typesetting Engine:** LaTeX / PDF / Web Markdown.

The objective is to ensure that every figure is scientifically accurate, visually consistent, technically reproducible, publication-quality, and properly integrated into the report.

This checklist applies to:
- Scientific plots and experimental graphs.
- System architecture and methodology diagrams.
- Flowcharts and process diagrams.
- Mathematical and conceptual illustrations.
- Hardware and experimental setup photographs.
- Comparative visualizations.
- Subfigures and multi-panel figures.

---

## 1. Figure Selection and Scientific Relevance
- Every figure must serve a clear scientific or explanatory purpose.
- Include a figure only when it improves understanding, communicates evidence, or supports an important argument.
- Avoid decorative illustrations that do not contribute to the research.
- Do not include figures merely to make the report visually dense or lengthy.
- Ensure that every figure directly relates to the research objectives, methodology, experiments, or findings.
- Avoid presenting the same information repeatedly through a graph, table, and paragraph.
- Prefer visual representations that communicate complex information more efficiently than text.
- Ensure that the figure presents the actual research concept, experimental configuration, or measured result.
- Clearly distinguish conceptual illustrations from experimentally generated visualizations.
- Never present illustrative or simulated diagrams as real experimental evidence.

---

## 2. Figure Dimensions and Layout
- Maintain consistent figure dimensions and proportions throughout the report.
- Use dimensions appropriate for the intended LaTeX document layout.
- Ensure that figures fit within the available text width without clipping or distortion.
- Prefer vector graphics for diagrams, flowcharts, and plots whenever possible.
- Avoid unnecessarily large figures that consume excessive page space.
- Avoid figures that become unreadable when scaled to the document's column width.
- Maintain appropriate margins and whitespace within the figure.
- Ensure that important labels, legends, and annotations are not positioned too close to figure boundaries.
- Maintain consistent alignment when multiple figures appear together.
- Ensure that multi-panel figures have balanced dimensions and spacing.
- Avoid excessive whitespace inside exported figures.
- Do not stretch images disproportionately to fit the document.

---

## 3. Typography and Text Inside Figures
- Use a consistent font family throughout all figures.
- Prefer typography that visually complements the report's LaTeX body text.
- Maintain consistent font sizes across figures.
- Ensure that all text remains readable at its final rendered size.
- Avoid excessively small labels, annotations, legends, and axis titles.
- Use consistent capitalization for labels and headings.
- Maintain consistent mathematical notation between figures and the main text.
- Render mathematical expressions using proper LaTeX-quality typesetting.
- Avoid mixing unrelated fonts or typography styles.
- Use bold text sparingly, primarily for important labels or visual hierarchy.
- Avoid unnecessary text embedded inside diagrams.
- Check that subscripts, superscripts, Greek letters, and special mathematical symbols render correctly.
- Avoid manually approximating mathematical expressions with ordinary text.
- Ensure that no text overlaps with lines, shapes, markers, or other labels.

---

## 4. Scientific Plots and Graphs
- Select the appropriate visualization type for the underlying data.
- Use line plots for continuous trends, bar plots for appropriate categorical comparisons, and scatter plots for relationships between variables.
- Ensure that each axis has a descriptive label.
- Include measurement units in axis labels wherever applicable.
- Use consistent axis scales when comparing related experiments.
- Clearly identify the independent and dependent variables.
- Ensure that axis ranges do not distort the interpretation of results.
- Do not truncate axes in ways that exaggerate differences.
- Use logarithmic scales only when scientifically justified and clearly indicated.
- Ensure that tick marks and tick labels are readable and consistently spaced.
- Avoid excessive gridlines and unnecessary background elements.
- Use appropriate marker shapes and line styles to distinguish data series.
- Ensure that legends identify every plotted series accurately.
- Position legends so that they do not obscure important data.
- Include error bars, confidence intervals, or uncertainty bands where applicable.
- Define what error bars represent, such as standard deviation, standard error, or confidence interval.
- Distinguish measured observations from fitted curves and theoretical predictions.
- Clearly identify baseline and proposed-method results.
- Ensure that plotted values match the original experimental data.
- Avoid smoothing, interpolation, or curve fitting that changes the apparent interpretation of results.
- Disclose normalization, aggregation, and filtering operations where relevant.
- Avoid unnecessary 3D plots when a 2D representation communicates the same information more accurately.
- Do not use visual effects, gradients, shadows, or decorative elements that interfere with scientific interpretation.

---

## 5. Color and Visual Encoding
- Maintain a consistent company-wide color palette across research reports.
- Assign consistent colors to the same model, method, dataset, or experimental condition.
- Do not change the color assigned to a component between figures without a clear reason.
- Use colors that remain distinguishable when printed in grayscale.
- Ensure adequate contrast between foreground elements and backgrounds.
- Avoid relying exclusively on color to communicate differences.
- Use marker shapes, line patterns, labels, or annotations as additional visual identifiers.
- Check color-blind accessibility, particularly for red-green combinations.
- Avoid unnecessarily saturated or fluorescent colors.
- Use neutral backgrounds unless a specific scientific purpose requires otherwise.
- Avoid decorative color variation between unrelated elements.
- Ensure that heatmaps use appropriate and clearly identified color scales.
- Label color bars with the corresponding quantity and units.
- Maintain consistent color semantics across the entire report.

---

## 6. Architecture Diagrams, Flowcharts, and Methodology Illustrations
- Ensure that the diagram accurately represents the implemented architecture or proposed methodology.
- Use consistent shapes, line weights, arrow styles, and spacing.
- Clearly identify individual components and their functions.
- Maintain a logical direction of information flow.
- Ensure that arrows represent actual relationships, dependencies, or data movement.
- Distinguish inputs, intermediate processing stages, and outputs.
- Use consistent terminology with the methodology section.
- Avoid introducing components in diagrams that are not explained in the main text.
- Ensure that every important component in the diagram is described in the report.
- Avoid excessive detail that makes the diagram difficult to understand.
- Use hierarchical grouping where appropriate.
- Distinguish optional operations from mandatory processing stages.
- Clearly indicate feedback loops, recurrent connections, and conditional branches.
- Avoid ambiguous arrow intersections and overlapping connectors.
- Ensure that diagram labels remain readable at final document size.
- Do not use decorative icons as substitutes for technically meaningful labels.
- Clearly distinguish existing components from newly proposed components.
- Do not imply that a conceptual architecture has been implemented or experimentally validated unless it has.

---

## 7. Figure Captions and Descriptions
- Every figure must have a caption.
- Captions must be concise, descriptive, and technically accurate.
- Use consistent caption formatting throughout the report.
- Begin captions with the figure's primary subject or purpose.
- Explain important abbreviations or symbols if they are not defined elsewhere.
- Describe multiple panels using consistent identifiers such as (a), (b), and (c).
- Avoid lengthy explanations of methodology inside captions.
- Do not repeat entire paragraphs from the main text.
- Avoid unsupported interpretations in figure captions.
- Ensure that captions accurately describe the displayed information.
- Use consistent punctuation and capitalization.
- Make captions understandable without requiring the reader to search extensively through the main text.

> **Preferred Caption Style:**  
> `Figure 3. Detection performance across evaluation thresholds for the proposed model.`  
>  
> **Avoid:**  
> `Figure 3. The following figure shows the complete experimental results obtained from running the model under different configurations, which demonstrates how the model performs across several different thresholds and experimental conditions.`

---

## 8. Figure Referencing and Integration in Main Text
- Every figure must be referenced explicitly in the main text.
- Introduce figures before their appearance in the document whenever practical.
- Use a consistent reference format, preferably `Figure~\ref{fig:identifier}`.
- Never refer to a figure using ambiguous phrases such as "the image below" or "the following diagram".
- Explain why the figure is relevant to the surrounding discussion.
- Do not simply insert a figure without discussing its significance.
- Ensure that the surrounding paragraph explains the important observations or relationships visible in the figure.
- Avoid repeating the complete caption in the main text.
- Reference subfigures individually when discussing specific panels.
- Ensure every figure reference resolves to the correct figure number.
- Avoid referencing figures before introducing the relevant concepts.
- Ensure that figure references remain correct after adding, removing, or rearranging figures.
- Use non-breaking spaces in LaTeX references to prevent awkward line breaks:
  - *Example:* `As illustrated in Figure~\ref{fig:architecture}, the proposed model processes the input through three sequential computational stages.`
  - *For Subfigures:* `Figure~\ref{fig:results}(a) presents the baseline performance, whereas Figure~\ref{fig:results}(b) shows the proposed model's performance.`

---

## 9. LaTeX Implementation Standards

### Mandatory LaTeX Conventions
- Use `\label{}` for every numbered figure.
- Use `\ref{}` or `\autoref{}` consistently for cross-references.
- Prefer `\includegraphics` for importing external figures.
- Use descriptive, lowercase figure filenames.
- Use a consistent filename convention, such as `fig_architecture.pdf` or `fig_results_01.pdf`.
- Store figures in a dedicated directory, such as `figures/`.
- Avoid spaces and special characters in filenames.
- Use relative file paths rather than machine-specific absolute paths.
- Use appropriate graphics packages, including `graphicx`.
- Use `subcaption` for multi-panel figures where appropriate.
- Avoid mixing incompatible caption-management packages.
- Place `\label{}` after `\caption{}` to ensure correct numbering.
- Use `\centering` instead of manual horizontal spacing for standard figure alignment.
- Use `width=0.85\linewidth` or an appropriate fraction of `\linewidth` to control scaling.
- Use `\columnwidth` when preparing figures for single-column placement in two-column layouts.
- Use `figure*` only when a figure genuinely requires spanning both columns.
- Avoid excessive manual `\vspace` adjustments to force figure placement.
- Prefer appropriate float placement options such as `[htbp]` or `[H]` where strict in-place pinning is required.
- Ensure that all figure references compile correctly without undefined-reference warnings.
- Check the final compiled PDF rather than relying exclusively on the LaTeX source.
- Ensure that figures do not overflow margins or interfere with surrounding text.

---

## 10. Image Formats and Export Quality
- Prefer **PDF** for vector diagrams, flowcharts, and plots in LaTeX.
- Use **SVG** as an editable intermediate format where appropriate.
- Use **PNG** for raster diagrams, screenshots, and graphics requiring lossless compression (at least **300 DPI**).
- Use **JPEG** only for photographic material where lossy compression is acceptable.
- Avoid low-resolution screenshots and compressed images.
- Ensure vector exports preserve fonts and mathematical symbols.
- Embed fonts in exported PDFs where possible.
- Avoid rasterizing vector graphics unnecessarily.
- Avoid transparency or blending effects that render inconsistently across PDF viewers.
- Check for missing glyphs, font substitutions, clipping, and rendering artifacts.
- Ensure image dimensions are appropriate for their final placement.
- Verify that exported images have no unintended borders, artifacts, or background elements.

---

## 11. Multi-Panel Figures and Subfigures
- Use multi-panel figures when multiple visualizations contribute to one unified argument.
- Ensure all panels share a consistent visual style.
- Use consistent axis limits when direct comparison requires them.
- Label panels sequentially using `(a)`, `(b)`, `(c)`, and so forth.
- Position panel labels consistently.
- Ensure panel labels are distinguishable from plotted data labels.
- Provide an overall caption describing the combined figure.
- Provide concise individual panel descriptions where necessary.
- Maintain consistent panel spacing and alignment.
- Avoid combining unrelated plots merely to reduce figure count.
- Ensure each panel can be understood independently when referenced in the text.
- Verify that individual panels remain readable after the complete figure is scaled.

---

## 12. Scientific Integrity and Data Visualization
- Generate plots directly from the underlying experimental data wherever possible.
- Preserve original experimental observations.
- Do not manually modify plotted values to improve visual appearance.
- Document any normalization, smoothing, filtering, or aggregation.
- Do not omit unfavorable observations without methodological justification.
- Clearly distinguish experimental measurements, simulations, predictions, and theoretical curves.
- Include uncertainty information wherever scientifically relevant.
- Ensure that comparisons use equivalent evaluation conditions.
- Avoid misleading axis ranges, distorted proportions, and deceptive visual scaling.
- Do not use visual emphasis to imply statistical significance that has not been established.
- Verify that all plotted data correspond to the reported experimental configuration.
- Preserve scripts or source data used to generate important figures.
- Ensure that figures can be regenerated from the documented source whenever possible.

---

## 13. Accessibility and Readability
- Ensure that figures remain understandable when viewed at normal document zoom.
- Use sufficient contrast between text, lines, markers, and backgrounds.
- Avoid color combinations that are difficult for color-blind readers to distinguish.
- Do not communicate critical information using color alone.
- Use descriptive labels rather than unexplained symbols.
- Ensure that small text is not required to understand the central result.
- Maintain legibility in grayscale printing.
- Avoid unnecessarily dense legends and annotations.
- Ensure that figure captions provide sufficient context.
- Provide appropriate alternative text for figures on the company website.
- Ensure that website-rendered figures remain legible on mobile devices.

---

## 14. Website and PDF Publication
- Ensure the figure renders correctly in the final compiled PDF.
- Verify that figures load correctly on the company's website.
- Ensure that website images do not become excessively compressed.
- Provide appropriate image scaling and aspect-ratio preservation.
- Verify that figures are not cropped on mobile screens.
- Ensure that captions and figure numbers remain associated with their respective figures.
- Verify that hyperlinks and figure references work in the downloadable PDF.
- Ensure that figures are included in the final publication archive.
- Maintain original high-quality figure files separately from compressed website versions.
- Ensure that figure filenames and identifiers remain consistent across versions.

---

## 15. Final Figure Quality Gate

Use this 12-point checklist before approving each figure for publication:

### Scientific Correctness
- [ ] 1. The figure represents actual research information.
- [ ] 2. All plotted values and labels have been verified against raw canonical CSVs.
- [ ] 3. The visualization does not misrepresent the findings or distort scales.

### Visual Quality
- [ ] 4. Typography, colors, dimensions, and spacing are consistent with company palette.
- [ ] 5. All labels and annotations remain readable at final rendered size.
- [ ] 6. The figure is exported in vector PDF (for LaTeX) and $\ge 300\text{ DPI}$ PNG (for web).

### LaTeX Integration
- [ ] 7. The figure has a unique label (`\label{fig:...}`) placed after `\caption{}`.
- [ ] 8. The figure is explicitly referenced in the main text (`Figure~\ref{fig:...}`).
- [ ] 9. The compiled PDF has no clipping, rendering errors, or broken references.

### Publication Readiness
- [ ] 10. The figure serves a clear scientific purpose and improves understanding.
- [ ] 11. The caption is concise, informative, and technically accurate.
- [ ] 12. Proportions are preserved across both desktop PDF and responsive website views.

> **Final Invariant:** A figure is not publication-ready simply because it looks professional. It must be scientifically accurate, technically reproducible, visually consistent, properly referenced, and correctly rendered in the final LaTeX document without breaking document layout or proportions.

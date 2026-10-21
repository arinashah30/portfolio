ARINA SHAH — PORTFOLIO

Start here
Open index.html in a browser. Upload the CONTENTS of this folder to the
publishing root of your GitHub Pages repository. Keep the folder structure.
The site needs no packages or build tools. It has not been published for you.

Files
index.html                 Page content, teaching, experience, leadership
styles.css                 Colors, spacing, layout, photo crop
projects.js                Project descriptions and resource links
assets/headshot.jpg        Original full-resolution uploaded photograph
assets/papers/dmsim-paper.pdf   Original uploaded final DMSim paper
assets/presentations/      Add future presentation PDFs here
.nojekyll                  Bypass Jekyll processing for this static site

Publish on GitHub Pages
1. For a personal site, use a repository named arinashah30.github.io.
   An ordinary repository name also works as a project site.
2. Upload the files and assets folders at the repository root, with index.html
   at the top level. Do not upload only the ZIP file.
3. In the repository's Settings > Pages, choose Deploy from a branch,
   select main and / (root), and save.
4. Use the published URL shown by GitHub once the deployment finishes.

Papers and slides
The portfolio uses a brief summary plus a Read paper (PDF) link on the DMSim
card, in its detail dialog, and in the Tambe Lab experience entry. The PDF
opens in a new tab; the portfolio remains available in the original tab.
There is no large PDF iframe in the main scrolling page.

For presentation decks, export to PDF for browser viewing. Place the file in
assets/presentations/ and add an entry to the corresponding project's
resources array in projects.js. For example, after adding simd-slides.pdf:

resources: [
  {label: 'View slides (PDF)', href: 'assets/presentations/simd-slides.pdf'}
]

To add a downloadable PowerPoint alongside a PDF, put the .pptx in that
folder too and add another resource with label 'Download slides (PPTX)'.
The renderer shows each real resource on the project card and detail dialog.
No links to presentations that have not yet been supplied are enabled.

Use paths such as assets/papers/dmsim-paper.pdf, with no leading slash.
This keeps the site working under a GitHub Pages repository subdirectory.
File names and letter case must match exactly.

Ordinary HTML version of the paper link:
<a href="assets/papers/dmsim-paper.pdf" target="_blank" rel="noopener noreferrer">
  Read paper (PDF)
</a>

Photo
The original headshot is kept at its full 1364 x 2048 resolution.
CSS displays a square crop and uses scale(1.22), slightly wider than the
previous scale(1.35). Adjust .portrait in styles.css to change the zoom.

Content sources
Teaching, industry, project, education, and leadership facts use the uploaded
ArinaShah_fullCV(2).pdf. Tambe Lab dates are January–June 2026, as corrected.
DMSim details and author names use the supplied final paper. It is described
as a research paper without claiming an unverified publication venue.
Company marks are embedded SVGs; there are no runtime logo downloads.

GitHub documentation
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

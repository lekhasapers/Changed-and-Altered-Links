# Federal Website Removals Archive

Tracking journalist-documented changes to U.S. government websites

## About

This archive collects federal website changes as reported by journalists who use Internet Archive snapshots to document alterations or removals. Each entry includes:

- The news article documenting the change
- Internet Archive snapshots showing before/after comparisons
- Timestamps and descriptions of what was altered or removed

All sources are verifiable through journalism and the [Internet Archive Wayback Machine](https://archive.org).

## View the Site

Live site: [https://lekhasapers.github.io/Changed-and-Altered-Links/](https://lekhasapers.github.io/Changed-and-Altered-Links/)

## Contributing

Found a news article documenting a federal website change? Submit it.

**Requirements:**
1. Link to the news article reporting the change
2. Internet Archive snapshots (before & after) with dates
3. Brief description of what changed

**How to submit:**
1. Fork this repo
2. Add to the `changes` array in `script.js`:
```javascript
{
    title: "Clear, descriptive title",
    agency: "Agency Name",
    description: "What was changed or removed",
    newsSource: {
        title: "Article headline",
        outlet: "Publication name",
        url: "https://...",
        author: "Author name",
        date: "Month Day, Year"
    },
    before: {
        url: "https://web.archive.org/...",
        date: "Month Day, Year"
    },
    after: {
        url: "https://web.archive.org/...",
        date: "Month Day, Year",
        note: "Optional note"
    },
    sortDate: new Date("YYYY-MM-DD")
}
```
3. Submit a pull request

## Technical

Static site:
- HTML5 / CSS3 / Vanilla JavaScript
- Hosted on GitHub Pages
- Responsive design

## License

MIT License. Archived government content is public domain.

## Acknowledgments

- [Internet Archive](https://archive.org) for the Wayback Machine
- Journalists documenting these changes
- Contributors to this archive

---

*Civic documentation project. All claims backed by journalism and Internet Archive snapshots.*
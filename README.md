# Documented Federal Website Changes 

A verified archive tracking content removed or altered on U.S. government websites

## About

This project documents changes to federal government websites using Internet Archive snapshots. Each documented change includes:

- Links to archived snapshots before and after the change
- Timestamps showing when content was captured
- Brief, factual descriptions of what was removed or altered
- Agency and topic tags for easy reference

All sources are verifiable through the [Internet Archive Wayback Machine](https://archive.org).

## View the Site

Visit the live site: [https://lekhasapers.github.io/Changed-and-Altered-Links/](https://lekhasapers.github.io/Changed-and-Altered-Links/)

## Current Documentation

As of the last update, this project tracks **5 documented changes** across:
- Department of Justice
- Centers for Disease Control and Prevention
- National Institute of Justice
- Office of Justice Programs

### Topics covered:
- Infrastructure security
- Domestic terrorism research
- Health equity
- LGBTQ+ youth health
- Public health resources

## Contributing

Contributions are welcome! If you've documented a change to a federal website, please ensure your submission includes:

1. **Internet Archive links** to both "before" and "after" snapshots
2. **Clear timestamps** for both snapshots
3. **Brief, factual description** of the change (what was removed/altered)
4. **Agency name** and relevant topic tags

### How to Contribute

1. Fork this repository
2. Add your documented change to the `changes` array in `script.js`
3. Follow the existing data structure:
```javascript
{
    title: "Page or Document Title",
    agency: "Agency Name",
    description: "Brief factual description of what changed",
    before: {
        url: "https://web.archive.org/...",
        date: "Month Day, Year"
    },
    after: {
        url: "https://web.archive.org/...",
        date: "Month Day, Year",
        note: "Optional note about the change"
    },
    tags: ["Tag1", "Tag2", "Tag3"]
}
```
4. Submit a pull request with a clear description

## Verification

All changes documented on this site are verifiable through the Internet Archive. We encourage users to:
- Click through to the archived snapshots
- Verify timestamps and content
- Report any inaccuracies

## Technical Details

This is a static site built with:
- HTML5
- CSS3 (responsive design)
- Vanilla JavaScript
- Hosted on GitHub Pages

## License

This project is released under the MIT License. The archived content belongs to the original government agencies and is in the public domain.

## Contact

For questions, corrections, or suggestions, please open an issue on this repository.

## Acknowledgments

- [Internet Archive](https://archive.org) for providing the Wayback Machine
- All contributors who help document these changes

---

*This is a civic documentation project. All information is presented factually with verifiable sources.*

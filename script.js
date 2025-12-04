const changes = [
    {
        title: "CDC Vaccines.gov Website Scrubbed",
        agency: "Centers for Disease Control",
        description: "The CDC's vaccines.gov website had its vaccine search tool and comprehensive information removed, leaving only basic content.",
        newsSource: {
            title: "CDC Vaccine Search Tool No Longer Works, Vaccines.Gov Website Scrubbed",
            outlet: "Forbes",
            url: "https://www.forbes.com/sites/brucelee/2025/12/04/cdc-vaccine-search-tool-no-longer-works-vaccinesgov-website-scrubbed/",
            author: "Bruce Y. Lee",
            date: "December 4, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250624010930/https://www.vaccines.gov/en/",
            date: "June 24, 2025",
            note: "Full vaccine search tool available"
        },
        after: {
            url: "https://www.vaccines.gov/en/",
            date: "December 4, 2025",
            note: "Website scrubbed of search functionality"
        }
    },
    {
        title: "Missing and Murdered Indigenous Report Removed",
        agency: "Department of Justice",
        description: "A comprehensive report on missing and murdered Indigenous people was removed from the Department of Justice website.",
        newsSource: {
            title: "Did Trump's DOJ Remove Report on Missing, Murdered Indigenous People?",
            outlet: "Snopes",
            url: "https://www.snopes.com/fact-check/trump-missing-murdered-indigenous-report/",
            author: "Snopes Staff",
            date: "December 4, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250208004230/https://www.justice.gov/d9/2023-11/34%20NIAC%20Final%20Report_version%2011.1.23_FINAL.pdf",
            date: "February 8, 2025",
            note: "Report available"
        },
        after: {
            url: "https://web.archive.org/web/20250209174003/https://www.justice.gov/d9/2023-11/34%20NIAC%20Final%20Report_version%2011.1.23_FINAL.pdf",
            date: "February 9, 2025",
            note: "Report removed"
        }
    },
    {
        title: "Conference Censored Gender-Neutral Bathroom Info",
        agency: "Lunar and Planetary Science Conference",
        description: "Gender-neutral bathroom locations were removed from the conference planning page following Trump's anti-DEI executive order.",
        newsSource: {
            title: "'This is censorship.' Conference requires abstracts to comply with Trump anti-DEI order",
            outlet: "Science",
            url: "https://www.science.org/content/article/censorship-conference-requires-abstracts-comply-trump-anti-dei-order",
            author: "Elise Cutts",
            date: "November 20, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250103202037/https://www.hou.usra.edu/meetings/lpsc2025/plan/",
            date: "January 3, 2025"
        },
        after: {
            url: "https://web.archive.org/web/20250410223847/https://www.hou.usra.edu/meetings/lpsc2025/plan/",
            date: "April 10, 2025",
            note: "Gender-neutral bathroom locations removed"
        }
    },
    {
        title: "Stonewall Website Changed 'LGBQ' to 'LGB'",
        agency: "National Park Service",
        description: "The Stonewall National Monument history page was altered to remove the 'Q' from LGBQ references.",
        newsSource: {
            title: "Lawmakers Call For Restoration Of Materials Removed From Stonewall National Monument",
            outlet: "National Parks Traveler",
            url: "https://www.nationalparkstraveler.org/2025/10/lawmakers-call-restoration-materials-removed-stonewall-national-monument",
            author: "NPT Staff",
            date: "October 18, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250213214903/https://www.nps.gov/ston/learn/historyculture.htm",
            date: "February 13, 2025",
            note: "Shows 'LGBQ'"
        },
        after: {
            url: "https://web.archive.org/web/20250215003430/https://www.nps.gov/ston/learn/historyculture.htm",
            date: "February 15, 2025",
            note: "Changed to 'LGB'"
        }
    },
    {
        title: "CDC Vaccine Search Tool Turned Off",
        agency: "Centers for Disease Control",
        description: "The comprehensive vaccination search tool was replaced with a basic pharmacy finder, removing detailed vaccine information.",
        newsSource: {
            title: "CDC Quietly Turned Off Its Vaccine Search Tool. It's Not Clear When It's Coming Back.",
            outlet: "Notus",
            url: "https://www.notus.org/health-science/cdc-quietly-turned-off-vaccine-search-tool",
            author: "Margaret Manto",
            date: "November 25, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250624010930/https://www.vaccines.gov/en/",
            date: "June 24, 2025"
        },
        after: {
            url: "https://web.archive.org/web/20250626011218/https://www.vaccines.gov/en/",
            date: "June 26, 2025",
            note: "Replaced with pharmacy finder"
        }
    },
    {
        title: "CDC Now Questions Vaccine-Autism Science",
        agency: "Centers for Disease Control",
        description: "The CDC vaccine safety page was rewritten to cast doubt on the scientific consensus that vaccines don't cause autism, claiming studies haven't ruled it out and that evidence has been ignored.",
        newsSource: {
            title: "Wisconsin health agency says CDC linking vaccines with autism is false",
            outlet: "Milwaukee Journal Sentinel",
            url: "https://www.jsonline.com/story/news/health/2025/11/21/department-of-health-services-dismisses-cdc-linking-vaccines-to-autism/87400360007/",
            author: "Natalie Eilbert",
            date: "November 21, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20241229234515/https://www.cdc.gov/vaccine-safety/about/autism.html",
            date: "December 29, 2024",
            note: "States no link between vaccines and autism"
        },
        after: {
            url: "https://web.archive.org/web/20251129161836/https://www.cdc.gov/vaccine-safety/about/autism.html",
            date: "November 29, 2025",
            note: "Questions the evidence, suggests link hasn't been ruled out"
        }
    },
    {
        title: "White House 'Hall of Shame' Falsely Listed Fox as 'Woke'",
        agency: "The White House",
        description: "The White House 'media bias' page misidentified a reporter as Fox News staff and labeled the outlet as 'woke' and 'biased' before correcting it.",
        newsSource: {
            title: "White House's 'Hall Of Shame' For 'Woke' Media Has An Awkward Error",
            outlet: "HuffPost",
            url: "https://www.huffpost.com/entry/white-house-media-hall-of-shame-fox-woke_n_692db994e4b0c8c3c7ce6e19",
            author: "HuffPost",
            date: "November 30, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20251129193217/https://www.whitehouse.gov/mediabias/?query-47-page=4&cst",
            date: "November 29, 2025",
            note: "Fox News listed as 'woke' and 'biased'"
        },
        after: {
            url: "https://web.archive.org/web/20251130023106/https://www.whitehouse.gov/mediabias/?query-47-page=4&cst",
            date: "November 30, 2025",
            note: "Fox News removed from list"
        }
    }
];

function renderChanges(filteredChanges = changes) {
    const container = document.getElementById('changes');
    container.innerHTML = '';

    filteredChanges.forEach(change => {
        const card = document.createElement('div');
        card.className = 'change-card';

        card.innerHTML = `
            <div class="date-marker">${change.newsSource.date}</div>
            <h3>${change.title}</h3>
            <span class="agency">${change.agency}</span>
            <div class="description">${change.description}</div>

            <div class="timeline-container">
                <div class="timeline-box">
                    <div class="source-section">
                        <div class="source-label">Source</div>
                        <a href="${change.newsSource.url}" target="_blank" rel="noopener" class="source-title">${change.newsSource.title}</a>
                        <div class="source-meta">${change.newsSource.outlet} • ${change.newsSource.author} • ${change.newsSource.date}</div>
                    </div>
                </div>

                <div class="timeline-box">
                    <div class="link-section">
                        <div class="link-label">Before</div>
                        <div class="link-date">${change.before.date}</div>
                        ${change.before.note ? `<div class="link-note">${change.before.note}</div>` : ''}
                        <a href="${change.before.url}" target="_blank" rel="noopener" class="archive-link">View Archive</a>
                    </div>
                </div>

                <div class="timeline-box">
                    <div class="link-section">
                        <div class="link-label">After</div>
                        <div class="link-date">${change.after.date}</div>
                        ${change.after.note ? `<div class="link-note">${change.after.note}</div>` : ''}
                        <a href="${change.after.url}" target="_blank" rel="noopener" class="archive-link">View Archive</a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function filterChanges(searchTerm) {
    const term = searchTerm.toLowerCase();
    const filtered = changes.filter(change => {
        return (
            change.title.toLowerCase().includes(term) ||
            change.agency.toLowerCase().includes(term) ||
            change.description.toLowerCase().includes(term) ||
            change.newsSource.outlet.toLowerCase().includes(term)
        );
    });
    renderChanges(filtered);
}

function setDate() {
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('footerUpdate').textContent = date;
}

function setCount() {
    document.getElementById('changeCount').textContent = changes.length;
}

document.addEventListener('DOMContentLoaded', () => {
    renderChanges();
    setDate();
    setCount();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterChanges(e.target.value);
    });
});
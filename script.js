const changes = [
    {
        title: "NASA Turned Off Space Science Data Coordinated Archive",
        agency: "National Aeronautics and Space Administration",
        description: "NASA's Space Science Data Coordinated Archive (NSSDC) was turned off, removing access to decades of space science data.",
        newsSource: {
            title: "Someone Turned Off NASA Space Science Data Coordinated Archive. Why?",
            outlet: "NASA Watch",
            url: "https://nasawatch.com/itweb/someone-turned-off-nasa-space-science-data-coordinated-archive-why/",
            author: "NASA Watch",
            date: "December 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250805224225/https://nssdc.gsfc.nasa.gov/",
            date: "August 5, 2025",
            note: "NSSDC archive accessible"
        },
        after: {
            url: "https://www.nasa.gov/nssdc/",
            date: "December 2025",
            note: "Archive turned off"
        }
    },
    {
        title: "EPA Erased References to Human-Caused Climate Change",
        agency: "Environmental Protection Agency",
        description: "The EPA removed references to human-caused climate change from its climate science website.",
        newsSource: {
            title: "EPA erases references to human-caused climate change from websites",
            outlet: "E&E News",
            url: "https://www.eenews.net/articles/epa-erases-references-to-human-caused-climate-change-from-websites/",
            author: "E&E News",
            date: "December 2025",
            additionalSources: [
                {
                    title: "E.P.A. Erases Mention of Humans Causing Climate Change From Some Web Pages",
                    outlet: "The New York Times",
                    url: "https://www.nytimes.com/2025/12/09/climate/epa-website-climate-change-causes.html",
                    author: "The New York Times"
                },
                {
                    title: "EPA eliminates mention of fossil fuels in website on warming's causes. Scientists call it misleading",
                    outlet: "AP News",
                    url: "https://apnews.com/article/epa-climate-change-censorship-fossil-fuels-1c83071f9eea81e8e31ebad0c4444775",
                    author: "AP News"
                },
                {
                    title: "EPA eliminates mention of fossil fuels in website on warming's causes. Scientists call it misleading",
                    outlet: "The Washington Post",
                    url: "https://www.washingtonpost.com/business/2025/12/09/epa-climate-change-censorship-fossil-fuels/5a31aff2-d546-11f0-a93c-a869cf73ebd6_story.html",
                    author: "The Washington Post"
                },
                {
                    title: "EPA websites now downplay link between humans and climate change",
                    outlet: "CNN",
                    url: "https://www.cnn.com/2025/12/11/climate/epa-climate-change-webpage-changes-oil-gas-coal",
                    author: "CNN"
                },
                {
                    title: "EPA Scrubs Information About Climate Change Indicators and Impacts",
                    outlet: "Environmental Data & Governance Initiative",
                    url: "https://envirodatagov.org/epa-scrubs-information-about-climate-change-indicators-and-impacts/",
                    author: "EDGI"
                }
            ]
        },
        before: {
            url: "https://web.archive.org/web/20251008162033/https://www.epa.gov/climatechange-science/causes-climate-change",
            date: "October 8, 2025",
            note: "References to human-caused climate change present"
        },
        after: {
            url: "https://www.epa.gov/climatechange-science/causes-climate-change",
            date: "December 2025",
            note: "Human-caused climate change references removed"
        }
    },
    {
        title: "Towson University Removed DEI Strategic Plan",
        agency: "Towson University",
        description: "Towson University removed its comprehensive diversity, equity, and inclusion strategic plan document from its website.",
        newsSource: {
            title: "Towson University end standalone DEI plan, denies federal pressure",
            outlet: "Campus Reform",
            url: "https://www.campusreform.org/article/towson-university-end-standalone-dei-plan-denies-federal-pressure/29096",
            author: "Campus Reform",
            date: "December 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250202051515/https://www.towson.edu/inclusionequity/documents/a_more_inclusive_tu_advancing_equity_diversity_strategic_plan_20_25.pdf",
            date: "February 2, 2025",
            note: "DEI strategic plan available"
        },
        after: {
            url: "https://www.towson.edu/inclusionequity/",
            date: "December 2025",
            note: "Strategic plan document removed"
        }
    },
    {
        title: "FCC Removed 'Independent Agency' from Website",
        agency: "Federal Communications Commission",
        description: "The FCC removed references to being an 'independent agency' from its website as Chair Brendan Carr stated the agency is not independent and defended allegiance to Trump.",
        newsSource: {
            title: "FCC Deletes 'Independent Agency' from Website as Carr Defends Allegiance to Trump",
            outlet: "Ars Technica",
            url: "https://arstechnica.com/tech-policy/2025/12/fcc-deletes-independent-agency-from-website-as-carr-defends-allegiance-to-trump/",
            author: "Jon Brodkin",
            date: "December 5, 2025",
            additionalSources: [
                {
                    title: "FCC chair Brendan Carr says 'independent agency' is 'just a label'",
                    outlet: "The Verge",
                    url: "https://www.theverge.com/policy/846845/fcc-senate-commerce-oversight-hearing-brendan-carr",
                    author: "The Verge"
                }
            ]
        },
        before: {
            url: "https://web.archive.org/web/20251001051308/https://www.fcc.gov/about/overview",
            date: "October 1, 2025",
            note: "References to 'independent agency' present"
        },
        after: {
            url: "https://www.fcc.gov/about-fcc/what-we-do",
            date: "December 5, 2025",
            note: "'Independent agency' language removed"
        }
    },
    {
        title: "State Department Removed Passport Sex Designation Guidance",
        agency: "Department of State",
        description: "The State Department removed the section of its foreign affairs manual instructing officials on how to assign a person's sex marker on passports.",
        newsSource: {
            title: "Trump Admin Requires Proof People Were Assigned Cis at Birth to Get Passport",
            outlet: "Snopes",
            url: "https://www.snopes.com/news/2025/12/05/trump-passport-trans-proven-cis/",
            author: "Snopes Staff",
            date: "December 5, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250117092546/https://fam.state.gov/FAM/08FAM/08FAM040303.html",
            date: "January 17, 2025",
            note: "Sex designation guidance available"
        },
        after: {
            url: "https://web.archive.org/web/20250818074728/https://fam.state.gov/FAM/08FAM/08FAM040303.html",
            date: "August 18, 2025",
            note: "Sex designation section removed"
        }
    },
    {
        title: "Defense.gov Redirected to WAR.gov",
        agency: "Department of Defense",
        description: "The Department of Defense's primary domain Defense.gov, in use since 2002 with over 120,000 archived snapshots, began redirecting to the newly activated WAR.gov domain.",
        newsSource: {
            title: "From Defense to War: U.S. Government Deploys Bold New WAR.gov Domain",
            outlet: "Strategic Revenue",
            url: "https://www.strategicrevenue.com/from-defense-to-war-us-government-deploys-bold-new-war-gov-domain/",
            author: "Strategic Revenue",
            date: "December 4, 2025"
        },
        before: {
            url: "https://web.archive.org/web/20250101004237/https://www.defense.gov/",
            date: "January 1, 2025",
            note: "Defense.gov active without redirect"
        },
        after: {
            url: "https://web.archive.org/web/20251130053336/https://www.defense.gov/",
            date: "November 30, 2025",
            note: "Defense.gov redirects to WAR.gov"
        }
    },
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
            title: "Multiple outlets reported on CDC's vaccine-autism page changes",
            outlet: "Various",
            url: "#",
            author: "Multiple Authors",
            date: "November 21-29, 2025",
            additionalSources: [
                {
                    title: "Wisconsin health agency says CDC linking vaccines with autism is false",
                    outlet: "Milwaukee Journal Sentinel",
                    url: "https://www.jsonline.com/story/news/health/2025/11/21/department-of-health-services-dismisses-cdc-linking-vaccines-to-autism/87400360007/",
                    author: "Natalie Eilbert"
                },
                {
                    title: "CDC autism question was based on disputed study retracted for ethical violations",
                    outlet: "Popular Science",
                    url: "https://www.popsci.com/health/cdc-autism-question-retracted-study/",
                    author: "Jackie Rocheleau"
                },
                {
                    title: "Despite Scientific Evidence, CDC Questions Vaccine-Autism Link",
                    outlet: "Snopes",
                    url: "https://www.snopes.com/news/2025/11/21/cdc-vaccine-autism-link/",
                    author: "Snopes Staff"
                },
                {
                    title: "The CDC Is Now Questioning the Science on Vaccines and Autism",
                    outlet: "WIRED",
                    url: "https://www.wired.com/story/cdc-is-now-questioning-the-science-on-vaccines-and-autism/",
                    author: "Dhruv Mehrotra"
                }
            ]
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
                        <div class="source-label">Source${change.newsSource.additionalSources ? 's' : ''}</div>
                        <a href="${change.newsSource.url}" target="_blank" rel="noopener" class="source-title">${change.newsSource.title}</a>
                        <div class="source-meta">${change.newsSource.outlet} • ${change.newsSource.author} • ${change.newsSource.date}</div>
                        ${change.newsSource.additionalSources ? change.newsSource.additionalSources.map(source => `
                            <div class="additional-source">
                                <a href="${source.url}" target="_blank" rel="noopener" class="additional-source-link">${source.title}</a>
                                <div class="source-meta">${source.outlet} • ${source.author}</div>
                            </div>
                        `).join('') : ''}
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
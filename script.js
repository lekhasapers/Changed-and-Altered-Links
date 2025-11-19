// Data structure for documented changes organized by category
const changesByCategory = {
    "Public Health": [
        {
            title: "Health Equity - CDC Blog Post",
            agency: "Centers for Disease Control and Prevention",
            description: "A CDC blog post discussing health equity and featuring imagery about equal access to healthcare was removed. The post used visual metaphors to explain health equity concepts.",
            before: {
                url: "https://web.archive.org/web/20250109133208/https://blogs.cdc.gov/healthequity/2014/05/30/the-image-of-equity/",
                date: "January 9, 2025"
            },
            after: {
                url: "https://web.archive.org/web/20250419102258/https://blogs.cdc.gov/healthequity/2014/05/30/the-image-of-equity/",
                date: "April 19, 2025"
            }
        },
        {
            title: "LGBTQ+ Youth Health Data and Resources",
            agency: "Centers for Disease Control and Prevention",
            description: "CDC resources on LGBTQ+ youth health and wellbeing were removed, including a 'Dear Colleague' letter about data on the health of lesbian, gay, and bisexual youth, and a dedicated page on LGBTQ youth health issues.",
            before: {
                url: "https://web.archive.org/web/20161220131850/https://www.cdc.gov/nchhstp/dear_colleague/2016/dcl-081116-data-on-the-health-and-wellbeing-lgb-youth.html",
                date: "December 20, 2016 (Dear Colleague letter)"
            },
            after: {
                url: "https://web.archive.org/web/20241114084027/https://www.cdc.gov/nchhstp/dear_colleague/2016/dcl-081116-data-on-the-health-and-wellbeing-lgb-youth.html",
                date: "November 14, 2024"
            },
            additionalUrls: [
                {
                    title: "LGBTQ Youth Health Page",
                    description: "A dedicated CDC page on LGBTQ youth health was removed. The page provided health data, resources, and guidance for addressing health disparities among LGBTQ youth.",
                    before: "https://web.archive.org/web/20170428005203/https://www.cdc.gov/lgbthealth/youth.htm",
                    beforeDate: "April 28, 2017",
                    after: "https://web.archive.org/web/20250501025155/https://www.cdc.gov/lgbthealth/youth.htm",
                    afterDate: "May 1, 2025"
                }
            ]
        }
    ],
    "National Security": [
        {
            title: "NIAC Final Report - National Infrastructure Advisory Council",
            agency: "Department of Justice",
            description: "A 34-page National Infrastructure Advisory Council report on critical infrastructure security was removed from the DOJ website. The report provided recommendations for protecting national infrastructure systems.",
            before: {
                url: "https://web.archive.org/web/20250114014449/https://www.justice.gov/d9/2023-11/34%20NIAC%20Final%20Report_version%2011.1.23_FINAL.pdf",
                date: "November 1, 2023"
            },
            after: {
                url: "https://web.archive.org/web/20251011193533/https://www.justice.gov/d9/2023-11/34%20NIAC%20Final%20Report_version%2011.1.23_FINAL.pdf",
                date: "May 30, 2025",
                note: "Not One More Report"
            }
        },
        {
            title: "What NIJ Research Tells Us About Domestic Terrorism",
            agency: "Office of Justice Programs / National Institute of Justice",
            description: "Research and analysis on domestic terrorism was removed from the National Institute of Justice website. The original content provided evidence-based findings on domestic terrorism trends and patterns.",
            before: {
                url: "https://web.archive.org/web/20250911165140/https://www.ojp.gov/pdffiles1/nij/306123.pdf",
                date: "September 11, 2025"
            },
            after: {
                url: "https://web.archive.org/web/20251008021942/https://www.ojp.gov/pdffiles1/nij/306123.pdf",
                date: "October 8, 2025"
            }
        },
        {
            title: "NIJ Domestic Terrorism Research Page",
            agency: "National Institute of Justice",
            description: "The entire NIJ page dedicated to domestic terrorism research was removed. The page was replaced with a redirect to the general NIJ homepage, removing access to multiple research articles and resources on domestic terrorism.",
            before: {
                url: "https://web.archive.org/web/20250911012550/https://nij.ojp.gov/topics/articles/what-nij-research-tells-us-about-domestic-terrorism",
                date: "September 11, 2025"
            },
            after: {
                url: "https://web.archive.org/web/20251008033532/https://nij.ojp.gov/",
                date: "October 8, 2025",
                note: "Page redirects to NIJ homepage"
            }
        }
    ]
};

// Render changes to the page organized by category
function renderChanges() {
    const changesContainer = document.getElementById('changes');

    Object.keys(changesByCategory).forEach(category => {
        // Create category header
        const categoryHeader = document.createElement('h2');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = category;
        changesContainer.appendChild(categoryHeader);

        // Render all changes in this category
        changesByCategory[category].forEach((change) => {
            const card = document.createElement('div');
            card.className = 'change-card';

            // Build notes section
            let notesHTML = '';
            if (change.after.note || change.description) {
                notesHTML = '<div class="notes">';
                if (change.after.note) {
                    notesHTML += `<p><strong>Note:</strong> ${change.after.note}</p>`;
                }
                if (change.description) {
                    notesHTML += `<p>${change.description}</p>`;
                }
                notesHTML += '</div>';
            }

            card.innerHTML = `
                <h3>${change.title}</h3>
                <div class="agency">${change.agency}</div>

                <div class="snapshots">
                    <div class="snapshot">
                        <h4>Before</h4>
                        <div class="date">${change.before.date}</div>
                        <a href="${change.before.url}" target="_blank">View Archive →</a>
                    </div>
                    <div class="snapshot">
                        <h4>After</h4>
                        <div class="date">${change.after.date}</div>
                        <a href="${change.after.url}" target="_blank">View Archive →</a>
                    </div>
                </div>
                ${notesHTML}
            `;

            changesContainer.appendChild(card);

            // Add additional URLs if present as separate cards in the grid
            if (change.additionalUrls && change.additionalUrls.length > 0) {
                change.additionalUrls.forEach(addUrl => {
                    const addCard = document.createElement('div');
                    addCard.className = 'change-card';

                    let addNotesHTML = '';
                    if (addUrl.description) {
                        addNotesHTML = `<div class="notes"><p>${addUrl.description}</p></div>`;
                    }

                    addCard.innerHTML = `
                        <h3>${addUrl.title}</h3>
                        <div class="snapshots">
                            <div class="snapshot">
                                <h4>Before</h4>
                                <div class="date">${addUrl.beforeDate}</div>
                                <a href="${addUrl.before}" target="_blank">View Archive →</a>
                            </div>
                            <div class="snapshot">
                                <h4>After</h4>
                                <div class="date">${addUrl.afterDate}</div>
                                <a href="${addUrl.after}" target="_blank">View Archive →</a>
                            </div>
                        </div>
                        ${addNotesHTML}
                    `;

                    changesContainer.appendChild(addCard);
                });
            }
        });
    });
}

// Set last update date
function setLastUpdate() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdateElement.textContent = today.toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderChanges();
    setLastUpdate();
});

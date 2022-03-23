export function calculateOffset(): number {
    const siteHeaderEl = document.getElementById("docs-site-header");
    const toolbarEl = document.getElementById("docs-toolbar");

    let offset = 20; // 20 is extra offset added before the focused element
    offset += siteHeaderEl ? siteHeaderEl.offsetHeight : 0;
    offset += toolbarEl ? toolbarEl.offsetHeight : 0;

    return -offset;
}

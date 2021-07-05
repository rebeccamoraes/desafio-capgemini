const viewsPerReal = 30;
const clicksPerView = 0.12;
const sharesPerClick = 3/20;
const viewsPerShare = 40;
const maxShare = 4;

export default function maxViews(investedAmount: number) {
    const initialViews = investedAmount * viewsPerReal;
    var currentViews = initialViews;
    var maxViews = initialViews;
    var counter: number;

    for (counter = 1; counter < maxShare; counter++) {
        var clicks = currentViews * clicksPerView;
        var shares = clicks * sharesPerClick;
        var views = shares * viewsPerShare;
        currentViews = views;
        maxViews = maxViews + currentViews;
    }

    return maxViews;
}

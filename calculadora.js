const viewsPerReal = 30;
const clicksPerView = 0.12;
const sharesPerClick = 3/20;
const viewsPerShare = 40;
const maxShare = 4;


module.exports = function maxViews(investedAmount) {
    const initialViews = investedAmount * viewsPerReal;
    var currentViews = initialViews;
    var maxViews = initialViews;

    for (i = 1; i < maxShare; i++) {
        var clicks = currentViews * clicksPerView;
        var shares = clicks * sharesPerClick;
        var views = shares * viewsPerShare;
        currentViews = views;
        maxViews = maxViews + currentViews;
    }

    return maxViews;
}

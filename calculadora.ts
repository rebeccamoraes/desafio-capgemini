const viewsPerReal = 30;
const clicksPerView = 0.12;
const sharesPerClick = 3/20;
const viewsPerShare = 40;
const maxShare = 4;

 function maxViews(investedAmount: number) {
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

function maxClicks (investedAmount: number) {
    var currentViews = investedAmount * viewsPerReal;
    var clicks = currentViews * clicksPerView;
    var currentClicks = clicks;
    var counter: number;


    for (counter = 1; counter < maxShare; counter++) {
        var shares = currentClicks * sharesPerClick;
        var views = shares * viewsPerShare;
        currentViews = views;
        currentClicks = currentViews * clicksPerView;
        clicks = clicks + currentClicks;
    }
  
    return clicks;
  }
  
  function maxShares (investedAmount) {
    const initialViews = investedAmount * viewsPerReal;
    var currentViews = initialViews;
    var shares = 0;
    var counter: number;
  
    for (counter = 1; counter < maxShare; counter++) {
        var clicks = currentViews * clicksPerView;
        var currentShares = clicks * sharesPerClick;
        var views = currentShares * viewsPerShare;
        currentViews = views;
        shares = shares + currentShares;
    }
  
    return shares;
  }

  export { maxClicks, maxShares, maxViews };

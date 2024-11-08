// Before `search.start()`
search.addWidgets([
    instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
    }),
  
    instantsearch.widgets.refinementList({
      container: '#brand-list',
      attribute: 'brand',
    }),
  
    instantsearch.widgets.configure({
      hitsPerPage: 8
    }),
  ]);
  
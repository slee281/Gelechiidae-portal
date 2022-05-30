var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'taxonKey', value: 5 }
};

var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: 60.0344351910359,
      lng: -111.28467879517733,
      zoom: 0.9115440763665068
    },
    rootPredicate: {
       "type": "and",
       "predicates": [
         {
           "type": "equals",
           "key": "notIssues",
           "value": "COUNTRY_COORDINATE_MISMATCH"
         }
       ]
     },
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS']
  }
};

if (pageLang === 'da')  {
  siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
}
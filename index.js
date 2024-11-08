import { searchClient } from '@algolia/client-search';

const client = searchClient('90CLAVPGC8', '2b1a583cbcf4cc9b0f850cbc4f9b4b6f');

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch('https://dashboard.algolia.com/sample_datasets/airports.json');
  const movies = await datasetRequest.json();
  return await client.saveObjects({ indexName: 'airports_index', objects: airports });
};

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch((err) => console.error(err));

//Search index
const search = instantsearch({
  indexName: 'airports_index',
  searchClient: algoliasearch('90CLAVPGC8', '2b1a583cbcf4cc9b0f850cbc4f9b4b6f')
});

//Widgets
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox'
  }),
  instantsearch.widgets.hits({
    container: '#hits'
  })
]);

//Search initiation 
search.start();



//write filter based on a key value
//filter through the info and it should only filter through the data i asked for 
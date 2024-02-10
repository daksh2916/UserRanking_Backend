const paginateResults = (query, page = 1, limit = 25) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    const results = {};
  
    if (endIndex < query.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
  
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
  
    results.results = query.slice(startIndex, endIndex);
  
    return results;
  };
  
  module.exports = paginateResults;
  
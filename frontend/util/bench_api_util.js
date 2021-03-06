export const fetchBenches = (filters, success) => {
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filters,
    success,
    error: () => console.log('Error')
  });
};

export const createBench = (bench, success) => {
  $.ajax({
    method: "POST",
    url: "/api/benches",
    data: bench,
    success
  });
};

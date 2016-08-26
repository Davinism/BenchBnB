export const BenchConstants = {
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  REQUEST_BENCHES: "REQUEST_BENCHES"
};

// The action that is intercepted by the middleware:
export const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

// The action that is processed by the reducer:
export const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches
});

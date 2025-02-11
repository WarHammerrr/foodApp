const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(20)
        .fill(0)
        .map((ele, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;

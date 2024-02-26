const Shimmer = ({count}) => {
   // Create an array with `count` elements and map over it to render shimmer cards
  const shimmerCards = Array.from({ length: count }, (_, index) => (
    <div key={index} className="shimmer-card"></div>
  ));

  return <div className="shimmer-container">{shimmerCards}</div>;
};
    // return (
    //     <div className="shimmer-container">
    //         {/* <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div>
    //         <div className="shimmer-card"></div> */}
    //     </div>
    // )

export default Shimmer;
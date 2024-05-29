function Section(){
  return (
    <>
  <div className="section">
    <div className="section-img">
      <img src="./src/section.jpg"></img>
    </div>
      <div className="section-h1">
        <h1 style={{marginBottom:"-10px",fontWeight:"bolder"}}>Let us find your</h1>
        <h1 style={{color:"rgb(190,18,60)"}}>Forever Food.</h1>
        <div className="section-p" style={{marginLeft:"-30px"}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Eos ullam alias commodi, cum corrupti quasi.</p>
        </div>
        <button className="srch-btn">Search Now</button>
        <button className="know-btn">Know more</button>
      </div>
  </div>
    </>
  )
}
export default Section
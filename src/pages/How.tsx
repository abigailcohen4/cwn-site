function How() {

  return (
    <>
      <div className="textPage">
        <h1>How Does It Work?</h1>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/8UZlwhiWKmA?si=n8Qewec4diVJJQir" 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h2>Devices</h2>
        <p>The devices are listed in order lowest to highest quantity within a CWN.</p>
        <ol>
          <li><strong>High Sites: </strong> one site of particularly high elevation to broadcast an Internet signal provided by an ISP</li>
          <li><strong>Routers: </strong>a device that forwards data from a wide or local area network to other networks (like the internet); must have line of sight with a high site</li>
          <li><strong>Access Points: </strong>a device that enables a wireless internet connection; must have line of sight with a router</li>
          <li><strong>Mesh Nodes: </strong>repeats an access point's signal; must have line of sight with an access point</li>
        </ol>
      </div>
    </>
  )
}
export default How
// Duplicate download button and icon removed

function ResumePage() {
  return (
    <div className="container-lg my-resume-container mb-5">
      <h1 className="text-center text-violet fw-bold">
        My Resume
      </h1>
      {/* <p className="text-center" style={{ color: "grey", fontWeight: "bold" }}>
        updating Soon...
      </p> */}
      <section className="my-resume mb-5">
        <div className="d-flex align-items-center justify-content-center ">
          <img
            src="/assets/resume.jpg"
            className="img-fluid"
            alt="resume"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </section>
      
      {/* Bottom download button removed since it's now in the Hero section */}
    </div>
  );
}

export default ResumePage;

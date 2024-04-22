// const Projects = () => {
//   return (
//     <>
//       <main className="container">
//         <h1 className="text-light mt-sm-5 d-none py-5 text-center">Top Projects</h1>

//         <div className="row d-none">
//           <div className="col-12 col-sm-6 col-lg-4 my-lg-0 fade-in-up my-2">
//             <div className="card">
//               <div className="card-image">
//                 <img src="/media/04.jpg" className="card-img-top" alt="..." />
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">Project Title</h5>
//                 <p className="card-text text-truncate">
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi corrupti
//                   inventore consequatur, omnis quae ipsa quo quasi adipisci?
//                 </p>
//                 <span className="text-info font-weight-light r-more">Read More</span>

//                 <div className="mt-auto pt-4 text-right">
//                   <i className="fas fa-chevron-left"></i>
//                   <h6 className="d-inline font-italic font-weight-normal">html, css, js</h6>
//                   <i className="fas fa-chevron-right"></i>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                   <a
//                     className="btn btn-dark text-decoration-none mr-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     className="btn btn-outline-dark text-decoration-none ml-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 col-lg-4 my-lg-0 fade-in-up my-2">
//             <div className="card">
//               <div className="card-image">
//                 <img src="media/04.jpg" className="card-img-top" alt="..." />
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">Project Title</h5>
//                 <p className="card-text text-truncate">
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi corrupti
//                   inventore consequatur, omnis quae ipsa quo quasi adipisci?
//                 </p>
//                 <span className="text-info font-weight-light r-more">Read More</span>

//                 <div className="mt-auto pt-4 text-right">
//                   <i className="fas fa-chevron-left"></i>
//                   <h6 className="d-inline font-italic font-weight-normal">html, css, js</h6>
//                   <i className="fas fa-chevron-right"></i>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                   <a
//                     className="btn btn-dark text-decoration-none mr-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     className="btn btn-outline-dark text-decoration-none ml-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 col-lg-4 my-lg-0 fade-in-up mx-auto my-2">
//             <div className="card">
//               <div className="card-image">
//                 <img src="media/04.jpg" className="card-img-top" alt="..." />
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">Project Title</h5>
//                 <p className="card-text text-truncate">
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet sequi corrupti
//                   inventore consequatur, omnis quae ipsa quo quasi adipisci?
//                 </p>
//                 <span className="text-info font-weight-light r-more">Read More</span>

//                 <div className="mt-auto pt-4 text-right">
//                   <i className="fas fa-chevron-left"></i>
//                   <h6 className="d-inline font-italic font-weight-normal">html, css, js</h6>
//                   <i className="fas fa-chevron-right"></i>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                   <a
//                     className="btn btn-dark text-decoration-none mr-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     className="btn btn-outline-dark text-decoration-none ml-1"
//                     target="blank"
//                     href=""
//                     style="font-size: 0.9rem;"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- top projects ends --> */}

//         {/* <!-- <h1 className="text-light text-center my-sm-5 py-5">All Projects</h1> --> */}
//         <h1 className="text-light mb-sm-5 pb-5 text-center">All Projects</h1>

//         <form className="form-inline mb-md-3 mb-5">
//           <div className="d-flex flex-column-reverse flex-md-row ml-md-auto mr-md-0 mx-auto">
//             <div className="d-flex mt-md-0 mx-3 mt-2 flex-row">
//               <div className="form-check form-check-inline mx-auto px-2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="inlineRadioOptions"
//                   id="title"
//                   value="title"
//                 />
//                 <label className="form-check-label text-light font-weight-light h5" for="title">
//                   title
//                 </label>
//               </div>
//               <div className="form-check form-check-inline mx-auto px-2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="inlineRadioOptions"
//                   id="tag"
//                   value="tag"
//                   onclick="tagClicked()"
//                 />
//                 <label className="form-check-label text-light font-weight-light h5" for="tag">
//                   tag
//                 </label>
//               </div>
//             </div>

//             <input
//               id="search-box"
//               className="form-control mr-sm-2"
//               type="search"
//               placeholder="Quick Search Projects"
//               aria-label="Search"
//               onclick="search()"
//               onsearch="onSearch()"
//             />
//           </div>
//         </form>

//         <div className="text-light font-weight-light h3 d-none my-5 py-5 text-center" id="nullMatch">
//           - - -
//         </div>

//         {/* <!-- search form ends    --> */}

//         <div className="row mb-sm-2 mb-0">
//           <div className="col-12 col-sm-6 project-item mb-4">
//             <div className="card h-100" style="max-width: 540px;">
//               <div className="card-image d-flex">
//                 <video
//                   className="img-fluid m-auto"
//                   preload="metadata"
//                   src="media/sample-1.mp4"
//                   controls
//                   controlsList="nodownload"
//                 ></video>
//               </div>

//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title project-title text-center">
//                   Responsive real estate business page with Bootstrap-v4.5 & jQuery
//                 </h5>
//                 <p className="card-text text-truncate">
//                   A complete responsive real estate business page using the latest resources; interactive,
//                   modern look and feel, fresh appearance with visible whitespace, HD quality images, and low
//                   loading time.
//                 </p>
//                 <span className="text-info font-weight-light r-more">Read More</span>

//                 <div className="mt-auto pt-4 text-right">
//                   <i className="fas fa-chevron-left"></i>
//                   <h6 className="d-inline font-italic font-weight-normal tags">
//                     html5, css3, js, bootstrap4, psd-to-html, responsive-design
//                   </h6>
//                   <i className="fas fa-chevron-right"></i>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                   <a
//                     className="btn btn-dark text-decoration-none mr-1"
//                     target="blank"
//                     href="https://www.demo.emranffl.com/sample-1/"
//                     style="font-size: 0.9rem;"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     className="btn btn-outline-dark text-decoration-none ml-1"
//                     target="blank"
//                     href="https://github.com/emranffl/sample-1"
//                     style="font-size: 0.9rem;"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 project-item mb-4">
//             <div className="card h-100" style="max-width: 540px;">
//               <div className="card-image d-flex">
//                 <video
//                   className="img-fluid m-auto"
//                   preload="metadata"
//                   src="media/sample-9.mp4"
//                   controls
//                   controlsList="nodownload"
//                 ></video>
//               </div>

//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title project-title text-center">
//                   Responsive gym page with Bootstrap-v4.5 & jQuery
//                 </h5>
//                 <p className="card-text text-truncate">
//                   A gym page for customers with tips, trainer portfolio, and schedule for training built with
//                   modern tools; a responsive layout, HD images & embedded Google Maps.
//                 </p>
//                 <span className="text-info font-weight-light r-more">Read More</span>

//                 <div className="mt-auto pt-4 text-right">
//                   <i className="fas fa-chevron-left"></i>
//                   <h6 className="d-inline font-italic font-weight-normal tags">
//                     html5, css3, js, bootstrap4, xd-to-html, responsive-design
//                   </h6>
//                   <i className="fas fa-chevron-right"></i>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                   <a
//                     className="btn btn-dark text-decoration-none mr-1"
//                     target="blank"
//                     href="https://www.demo.emranffl.com/sample-9/"
//                     style="font-size: 0.9rem;"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     className="btn btn-outline-dark text-decoration-none ml-1"
//                     target="blank"
//                     href="https://github.com/emranffl/sample-9"
//                     style="font-size: 0.9rem;"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default Projects

const Projects = () => {
  return (
    <>
      <h1 className="mt-sm-5 d-none mt-10 text-center text-3xl text-white">Top Projects</h1>

      <section className="my-20 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="">
          <div className="flex h-full flex-col rounded border border-white backdrop-blur">
            <div className="">
              <img className="rounded-t" src="./media/projects/eximtel.png" alt="nsdf" />
            </div>
            <div className="flex grow flex-col space-y-4 p-3 text-white">
              <h3 className="text-xl font-bold">Eximtel</h3>
              <p className="text-sm">
                Eximtel follows global trade movements and provides visual analysis based on containerised
                shipment manifests and records from customs agencies around the world. Whether you&apos;re
                directly involved in international trade or whether you&apos;re a service provider, Eximtel is
                the perfect tool for your market strategy.
              </p>
              <div className="!mt-auto flex justify-end space-x-3 pt-3">
                <span className="">&lt;</span>
                <span className="italic">Next.js, TypeScript, Bootstrap 5</span>
                <span className="">&gt;</span>
              </div>
              <div className="grid grid-cols-2">
                <a
                  href="https://eximtel.com/"
                  className="btn btn-outline-primary block text-center text-sm backdrop-blur-sm"
                  target="blank"
                >
                  VISIT WEBSITE
                </a>
                <div className="flex items-center justify-end space-x-2">
                  <small>Developed by:</small>
                  <a href="https://www.aritsltd.com" target="blank">
                    <img
                      src="./media/arits.png"
                      alt="ARITS logo"
                      className="inline-block w-14 rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-full flex-col rounded border border-white backdrop-blur">
            <div className="">
              <img className="rounded-t" src="./media/projects/nsdf.png" alt="nsdf" />
            </div>
            <div className="flex grow flex-col space-y-4 p-3 text-white">
              <h3 className="text-xl font-bold">NSDF</h3>
              <p className="text-sm">
                Natore Sustainable Development Foundation (NSDF) is largely working for social wellbeing in a
                sustainable way across the country. A pool of capable staffs, executive committee and advisory
                panel working together to achieve the NSDF goal.
              </p>
              <div className="!mt-auto flex justify-end space-x-3 pt-3">
                <span className="">&lt;</span>
                <span className="italic">Next.js, TypeScript, tailwindcss</span>
                <span className="">&gt;</span>
              </div>
              <div className="grid grid-cols-2">
                <a
                  href="https://nsdf.org.bd/"
                  className="btn btn-outline-primary block text-center text-sm backdrop-blur-sm"
                  target="blank"
                >
                  VISIT WEBSITE
                </a>
                <div className="flex items-center justify-end space-x-2">
                  <small>Developed by:</small>
                  <a href="https://www.aritsltd.com" target="blank">
                    <img
                      src="./media/arits.png"
                      alt="ARITS logo"
                      className="inline-block w-14 rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects

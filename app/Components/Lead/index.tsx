const Lead = () => {
  return (
    <section className="flex min-h-[90dvh] flex-col justify-center align-middle">
      <div className="px-4 py-5 text-center text-slate-100">
        <h1 className="text-7xl" id="index-msg">
          Hi, I&apos;m Emran
        </h1>
        <h5 className="mt-2 text-3xl">
          a web developer, intended to
          <wbr /> achieve perfection
        </h5>

        <a href="/resume/Emran_Hossain_Resume.pdf" download>
          <button
            type="button"
            className="btn btn-outline-primary my-9 rounded-[1.5rem!important] text-sm backdrop-blur-sm"
          >
            DOWNLOAD RESUME
          </button>
        </a>

        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/emranffl/" target="blank">
            <div className="btn btn-outline-primary hover-float backdrop-blur-sm">
              <i className="bi bi-linkedin text-2xl" aria-hidden="true"></i>
            </div>
          </a>
          <a href="https://www.github.com/emranffl" target="blank">
            <div className="btn btn-outline-primary hover-float backdrop-blur-sm">
              <i className="bi bi-github text-2xl" aria-hidden="true"></i>
            </div>
          </a>
          <a href="mailto:emranffl.biz@gmail.com">
            <div className="btn btn-outline-primary hover-float backdrop-blur-sm">
              <i className="bi bi-envelope-fill text-2xl" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Lead

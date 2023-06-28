<?php
$metaTitle = "Emran Hossain";
$relativePath = "./portfolio/";
include './portfolio/components/header.php';
?>

<main class="container mx-auto">
    <section class="min-h-[80vh] flex flex-col justify-center align-middle">
        <div class="px-4 py-5 text-center text-slate-100">
            <h1 class="text-7xl" id="index-msg">Hi, I'm Emran</h1>
            <h5 class="text-3xl mt-2">a web developer, intended to<wbr> achieve perfection</h5>

            <a href="<?php echo $relativePath; ?>Emran_Hossain_Resume.pdf" download>
                <button type="button" class="btn btn-outline-primary rounded-[1.5rem!important] my-9 backdrop-blur-sm text-sm">
                    DOWNLOAD RESUME
                </button>
            </a>

            <div class="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/emranffl/" target="blank">
                    <div class="btn btn-outline-primary backdrop-blur-sm hover-float">
                        <i class="bi bi-linkedin text-2xl" aria-hidden="true"></i>
                    </div>
                </a>
                <a href="https://www.github.com/emranffl" target="blank">
                    <div class="btn btn-outline-primary backdrop-blur-sm hover-float">
                        <i class="bi bi-github text-2xl" aria-hidden="true"></i>
                    </div>
                </a>
                <a href="mailto:emranffl.biz@gmail.com">
                    <div class="btn btn-outline-primary backdrop-blur-sm hover-float">
                        <i class="bi bi-envelope-fill text-2xl" aria-hidden="true"></i>
                    </div>
                </a>
            </div>

        </div>
    </section>
    <section></section>
</main>

<?php
include './portfolio/components/footer.php';
?>
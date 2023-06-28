<?php
$metaTitle = "Projects";
$relativePath = "./";
include './components/header.php';
?>

<main class="container mx-auto">

    <h1 class="text-white text-center text-3xl mt-sm-5 mt-10 d-none">Top Projects</h1>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-20">
        <div class="">
            <div class="rounded backdrop-blur border border-white h-full flex flex-col">
                <div class="">
                    <img class="rounded-t" src="./media/projects/eximtel.png" alt="nsdf">
                </div>
                <div class="p-3 text-white space-y-4 flex flex-col grow">
                    <h3 class="text-xl font-bold">Eximtel</h3>
                    <p class="text-sm">
                        Eximtel follows global trade movements and provides visual analysis based on containerised shipment manifests and records from customs agencies around the world. Whether you're directly involved in international trade or whether you're a service provider, Eximtel is the perfect tool for your market strategy.
                    </p>
                    <div class="flex justify-end space-x-3 !mt-auto pt-3">
                        <span class="">&lt;</span>
                        <span class="italic">Next.js, TypeScript, Bootstrap 5</span>
                        <span class="">&gt;</span>
                    </div>
                    <div class="grid grid-cols-2">
                        <a href="https://eximtel.com/" class="btn btn-outline-primary block backdrop-blur-sm text-sm text-center" target="blank">
                            VISIT WEBSITE
                        </a>
                        <div class="flex items-center justify-end space-x-2">
                            <small>Developed by:</small>
                            <a href="https://www.aritsltd.com" target="blank">
                                <img src="./media/arits.png" alt="ARITS logo" class="w-14 rounded-full inline-block">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="rounded backdrop-blur border border-white h-full flex flex-col">
                <div class="">
                    <img class="rounded-t" src="./media/projects/nsdf.png" alt="nsdf">
                </div>
                <div class="p-3 text-white space-y-4 flex flex-col grow">
                    <h3 class="text-xl font-bold">NSDF</h3>
                    <p class="text-sm">
                        Natore Sustainable Development Foundation (NSDF) is largely working for social wellbeing in a sustainable way across the country. A pool of capable staffs, executive committee and advisory panel working together to achieve the NSDF goal.
                    </p>
                    <div class="flex justify-end space-x-3 !mt-auto pt-3">
                        <span class="">&lt;</span>
                        <span class="italic">Next.js, TypeScript, tailwindcss</span>
                        <span class="">&gt;</span>
                    </div>
                    <div class="grid grid-cols-2">
                        <a href="https://nsdf.org.bd/" class="btn btn-outline-primary block backdrop-blur-sm text-sm text-center" target="blank">
                            VISIT WEBSITE
                        </a>
                        <div class="flex items-center justify-end space-x-2">
                            <small>Developed by:</small>
                            <a href="https://www.aritsltd.com" target="blank">
                                <img src="./media/arits.png" alt="ARITS logo" class="w-14 rounded-full inline-block">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
include './components/footer.php';
?>
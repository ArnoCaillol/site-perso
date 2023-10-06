<script>
    export let experience;
</script>
<li class="mb-10 ml-6">
    <div class="absolute w-3 h-3 timeline-icon mt-1.5 -left-2.5 bg-[#05d797]"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.meta.date}</time>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{experience.meta.title}</h3>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.meta.caption}</p>
    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
</li>
<style>
  .timeline-icon {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    transform: skewX(-10deg);
    z-index: 1;
  }

  li:hover .timeline-icon {
	animation: float 1s ease-in-out infinite;
  }

@keyframes float {
	0% {
		transform: scale(1) skewX(-10deg);
	}
	50% {
		transform: scale(1.1) skewX(-10deg);
	}
	100% {
		transform: scale(1) skewX(-10deg);
	}
}
</style>
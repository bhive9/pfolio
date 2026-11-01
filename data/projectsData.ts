interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

// TODO: Replace with your actual projects or remove this file + /projects route if not needed
const projectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    // TODO: Replace with your project image (place in public/static/images/)
    imgSrc: '/static/images/google.png',
    // TODO: Replace with your project URL
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    // TODO: Replace with your project image
    imgSrc: '/static/images/time-machine.jpg',
    // TODO: Replace with your project URL (can be internal blog post)
    href: '/blog/the-time-machine',
  },
]

export default projectsData

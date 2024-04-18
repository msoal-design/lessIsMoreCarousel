# Less is More Carousel
An ultra lite and flexible Carousel, for those moments you just need a simple and performant carousel of items.



For those moments you just need a simple and performant carousel of items.

**Ultra Lite:** Everything fits in a 2.4 KB single file with only 39 lines of code.

**Flexible:** adjust the items to your project's needs.

**Performant:** super lite and speed component. You can add several carousels on the same page with confidence.

**Mobile & Desktop:** It was designed to be used in responsive websites, with the mobile-first approach in mind.

**UX Ready:** I’m a UX Designer, so the component was designed considering all the UI Patterns.



> [!WARNING]
> This carousel doesn’t calculate the available space to show X quantity of items. This carousel uses the contemporary UI Pattern that lets the users see a small part of the next item so they know there is more to discover.



# Install
- Download the `HorizontalCarousel.jsx` file and added to your components folder.
- Download the `baseimage.png` file and added to your public folder (this is temporary, you can deleted later)


# Dependencies

We use Tailwind CSS to style the component.

**If you are using Next.js**

You can install Tailwind CSS from the comand line.

```jsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**If you are using another framework**

You can install Tailwind CSS from their oficial guide. [Installation - Tailwind CSS](https://tailwindcss.com/docs/installation)

**If you don’t want to use Tailwind CSS**

You can change the CSS classes in the component file to point your own. It’s just more work.

# Import

Import the component into your page.jsx

```jsx
import { HorizontalCarousel, Item } from '@/components/HorizontalCarousel.jsx';
```


# Add images

```jsx
import { HorizontalCarousel, Item } from '@/components/HorizontalCarousel.jsx';
// Images
import baseimage from "@/public/baseimage.png";
// import all the images you will use
```

# Basic Usage

```jsx
import { HorizontalCarousel, Item } from '@/components/HorizontalCarousel.jsx';
// Images
import baseimage from "@/public/baseimage.png";
// import all the images you will use

export default function MyPage() {
  return(
    <HorizontalCarousel sectionTitle="Section Title" id="my-unique-carousel">
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
      <Item title="Item title, play around this area." link="/my-link" src={baseimage} alt="my-alt" />
    </HorizontalCarousel>
  );
}
```

# Using your own Items

The Carousel accepts a children, so you can put wherever you want inside them. 
For example, you can use `p` tags.

```jsx
import { HorizontalCarousel } from '@/components/HorizontalCarousel.jsx';
// Images
import baseimage from "@/public/baseimage.png";
// import all the images you will use

export default function MyPage() {
  return(
    <HorizontalCarousel sectionTitle="Section Title" id="my-unique-carousel">
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </HorizontalCarousel>
  );
}
```

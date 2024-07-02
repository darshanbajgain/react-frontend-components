# React Image Carousel

A simple and efficient image carousel component in React using Circular Array Indexing.

## Introduction

This project demonstrates how to build a basic image carousel in React. The carousel uses a technique called **Circular Array Indexing** to handle image transitions smoothly, wrapping the index around the start and end of the array.

## Features

- Infinite looping through images
- Responsive design with basic styling
- Easy to integrate and customize

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/darshanbajgain/frontend-components.git
   cd frontend-components/react-image-carousel
   ```

2. Install dependencies using Vite:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

### Step-by-Step Guide to Creating an Image Carousel in React

#### 1. Setup Your React Project

#### 2. Create the Carousel Component

Create a new file named Carousel.jsx in the src directory and add the following code:

```javascript
import { useState } from "react";

const IMAGE_URLS = [
    "https://s.alicdn.com/@sc04/kf/H8b92917429e046099a56d5aa27c360b9I.jpg",
    "https://s.alicdn.com/@sc04/kf/Ha349a51c40284e0f83f9d1dba94e1841l.jpg",
    "https://s.alicdn.com/@sc04/kf/H3ed53fc664a64d46b3d071e1464aa53bU.jpg",
    ];

const Carousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % IMAGE_URLS.length);
    };

const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + IMAGE_URLS.length) % IMAGE_URLS.length);
    };

    return (
        <div className="flex flex-row justify-center mt-36">
        <div className="flex w-1/3 justify-center items-center p-6 bg-gray-100 rounded-xl shadow-lg">
            <button
            className="mx-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handlePrevious}
            >
            Previous
            </button>
            <img
            alt="Product"
            className="w-64 h-64 object-cover rounded-lg mx-4"
            src={IMAGE_URLS[currentIndex]}
            />
            <button
            className="mx-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handleNext}
            >
            Next
            </button>
        </div>
        </div>
);
};

export default Carousel;

```

#### 3. Understanding the Code

**Initializing State:**

```js
const [currentIndex, setCurrentIndex] = useState(0);
```

We use useState to keep track of the current index of the image being displayed.

**Next Button Handler with Circular Array Indexing:**

```javascript
const handleNext = () => {
  setCurrentIndex((currentIndex + 1) % IMAGE_URLS.length);
};
```

This function increments the current index by 1. The modulo operation (% IMAGE_URLS.length) ensures the index wraps around to 0 when it reaches the end of the array. For example, if the currentIndex is 2 (the last image in the array), (currentIndex + 1) % IMAGE_URLS.length will be (2 + 1) % 3, which equals 0, thus looping back to the first image.

**Previous Button Handler with Circular Array Indexing:**

```javascript
const handlePrevious = () => {
  setCurrentIndex((currentIndex - 1 + IMAGE_URLS.length) % IMAGE_URLS.length);
};
```

This function decrements the current index by 1. By adding the length of the array before applying the modulo operation, we ensure the index wraps around to the last image when it goes below 0. For example, if the currentIndex is 0 (the first image in the array), (currentIndex - 1 + IMAGE_URLS.length) % IMAGE_URLS.length will be (-1 + 3) % 3, which equals 2, thus looping back to the last image.

**Import and Use the Carousel Component:**
Finally, import and use the Carousel component in your src/App.js file:

```javascript
import Carousel from "./components/Carousel";

const App = () => (
  <div>
    <Carousel />
  </div>
);
export default App;

```

## Conclusion
And that’s it! You've successfully built a simple and efficient image carousel in React. This component uses Circular Array Indexing to handle the index wrapping, ensuring a smooth user experience. Give it a try in your next project! 🚀
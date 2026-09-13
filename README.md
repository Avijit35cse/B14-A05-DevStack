# DEV STACK

A modern and responsive developer technology stack builder. Dev Stack allows developers to explore different technologies, select the technologies we want, and build our own developer stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* Vite

## ✨ Features

### 1. Explore Technologies

Browse different frontend, backend, database, language, styling, and DevOps technologies with their descriptions, ratings, and difficulty levels.

### 2. Build Own Stack

Add technologies to your personal stack and remove individual technologies whenever you want.

### 3. Responsive Design & Notifications

The website is fully responsive and provides toast notifications when technologies are added, removed, or already exist in the stack.

---

# ⚛️ React Questions & Answers

## 1. What is JSX and why is it used in React?

JSX is an HTML-like syntax that allows us to write UI code inside JavaScript or TypeScript.

React uses JSX to make components easier to read and write and to describe what the UI should look like.

## 2. What is the difference between props & state?

**Props (Properties)** are used to pass read-only data from a parent component to a child component.

**State** manages data inside a component. When the state changes, React updates the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state inside a component.

I used `useState` in the `Technologies` component to store the technologies selected by the user.

```tsx
const [selectedTechnology, setSelectedTechnology] = useState<Itech[]>([])
```

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data from an API.

In this project, the JSON data is loaded through a Promise and React's `use()` with `Suspense`, so I did not need `useEffect` for loading the JSON data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item was added, removed, or changed and update the UI efficiently.

For example:

```tsx
{technologies.map((technology) => (
    <div key={technology.id}>
        {technology.name}
    </div>
))}
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering refers to showing different UI depending on a condition.

I used conditional rendering in the `Stack` component. When there are no selected technologies, it returns an empty stack message.

```tsx
{technologies.length === 0 && (
    <p>Your stack is empty</p>
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

In this project, `Technologies` passes the selected technologies and the state setter to the `TechCards` component.

```tsx
<TechCards
    technologies={technologies}
    selectedTechnology={selectedTechnology}
    setSelectedTechnology={setSelectedTechnology}
/>
```

The child can send data back to the parent using a function passed through props.

In this project, `TechCards` calls `setSelectedTechnology()` to update the parent's state.

---

# 📌 Project Overview

Dev Stack is designed to help developers explore different technologies and create a personalized technology stack for their projects.

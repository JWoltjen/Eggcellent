# Eggcellent!

![recordit gif](http://g.recordit.co/bEk1DrZHul.gif)
A simple react application that uses Tailwindcss to style components and react-router to simulate multi pages across a navigation bar. It is hooks based and features a responsive hamburger dropdown menu that appears in mobile but is hidden on destop sizes. 

## TailwindCSS

Tailwind is a little janky to set up, but once you get over that initial 20 minutes the rest of it is a breeze. Tailwind also has awesome documentation that allows you to search very easily for the tailwind equivalent of the css you're looking for.

## React-Router

React Router makes it easy to switch content currently displayed. It does not actually generate different pages. The advantage to this approach is that the page does not have to refresh even though the content changes. This is because what is actually happening when someone click a <Link> in react-router, they are clicking on a higher-order-component (HOC) which determines what content to display on the screen. 

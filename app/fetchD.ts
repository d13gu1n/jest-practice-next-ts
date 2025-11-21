export default function fetchD() {
   return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
   });
}
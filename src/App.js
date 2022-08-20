import Navbar from './Components/Navbar';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

export default function App() {
   return (
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
         {/* navbar */}
         <Navbar />

         <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            {/* header */}
            <Header />
            <hr class="mt-4" />

            {/* todo list */}
            <TodoList />

            <hr class="mt-4" />

            {/* footer */}
            <Footer />
         </div>
      </div>
   );
}

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const blogs = [
  {
//none for now
  }
];

export default function Blog() {
 // return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //   >
    //     <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Blog Posts</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {blogs.map((post, index) => (
    //         <motion.a
    //           key={index}
    //           href={post.link}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: index * 0.2, duration: 0.6 }}
    //           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    //         >
    //           <div className="relative aspect-w-16 aspect-h-9">
    //             <img
    //               src={post.image}
    //               alt={post.title}
    //               className="object-cover w-full h-48"
    //             />
    //           </div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
    //             <p className="text-gray-600 mb-4">{post.excerpt}</p>
    //             <div className="flex items-center text-gray-500 text-sm">
    //               <Calendar className="h-4 w-4 mr-1" />
    //               <span className="mr-4">{post.date}</span>
    //               <Clock className="h-4 w-4 mr-1" />
    //               <span>{post.readTime}</span>
    //             </div>
    //           </div>
    //         </motion.a>
    //       ))}
    //     </div>
    //   </motion.div>
    // </div>
  //);
}
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    client: "Adelfio",
    rating: 5,
    date: "February 2025",
    text: "Rai Tabish delivered EXCEPTIONAL software development services with unmatched professionalism and attention to detail, ensuring a bug-free project 👌. His quick responsiveness and proactive communication truly went above and beyond, making our 2nd collaboration as fantastic as the first. 10/10 experience - highly recommended for a fast delivery with an exceptional product!",
    project: "Software Development"
  },
  {
    id: 2,
    client: "Pickloo",
    rating: 5,
    date: "January 2025",
    text: "It was excellent working with Rai. He actively communicates to understand properly what your requirements are, and he executed it brilliantly. Would work with him again in the future!",
    project: "AI Development"
  },
  {
    id: 3,
    client: "Forrest Schultz",
    rating: 5,
    date: "December 2024",
    text: "Very professional and knowledgeable. Really nailed the project and all the aspects of the code that required attention to detail. It was great working with you!",
    project: "Custom Software Solution"
  }
];

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">{review.client}</span>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{review.text}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{review.project}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.fiverr.com/rai_m_tabish" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <span className="mr-2">See More Reviews on Fiverr</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

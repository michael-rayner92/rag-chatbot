import Link from 'next/link';
import { FaBrain, FaRocketchat, FaUpload } from 'react-icons/fa6';

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-10 row-start-2 items-center sm:items-start max-w-xl w-full">
				<h1 className="flex items-center text-3xl font-bold text-center sm:text-left mb-2">
					<FaBrain className="inline-flex mr-2 text-blue-400" />
					RAG Chatbot Demo
				</h1>
				<p className="text-lg text-center sm:text-left text-gray-700 dark:text-gray-300 mb-6">
					This application demonstrates a Retrieval-Augmented Generation (RAG) chatbot. You can
					upload your own documents and chat with an AI assistant that uses your data to answer
					questions.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
					<Link
						href="/chat"
						className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18181b] shadow hover:shadow-lg transition p-6 text-center"
					>
						<span className="mx-auto mb-3 flex justify-center">
							<FaRocketchat size={40} className="mx-auto mb-3" />
						</span>
						<h2 className="text-xl font-semibold mb-1">Chat</h2>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Ask questions and interact with the AI assistant.
						</p>
					</Link>
					<Link
						href="/upload"
						className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18181b] shadow hover:shadow-lg transition p-6 text-center"
					>
						<FaUpload size={40} className="mx-auto mb-3" />
						<h2 className="text-xl font-semibold mb-1">Upload</h2>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Add your own documents to enhance the chatbot's knowledge.
						</p>
					</Link>
				</div>
			</main>
		</div>
	);
}

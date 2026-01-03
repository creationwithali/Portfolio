import React from 'react'
import { FiDownload } from 'react-icons/fi'

const ResumeDownload = () => {
  const files = [
    {
      path: '/HTMLHANDBOOK.pdf',
      name: 'HTMLHANDBOOK.pdf',
      title: 'HTML Handbook',
      description: 'By codewithharry'
    },
    {
      path: '/HTMLCheatsheet.pdf',
      name: 'HTMLCheatsheet.pdf',
      title: 'HTML Cheatsheet',
      description: 'By codewithharry'
    },
    {
      path: '/HTML_Complete_Notes.pdf',
      name: 'HTML_Complete_Notes.pdf',
      title: 'HTML Complete Notes',
      description: 'By codewithharry'
    }
  ]

  // Handle PDF download from public folder
  const handleDownload = (filePath, fileName) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle PDF preview
  const handlePreview = (filePath) => {
    window.open(filePath, '_blank')
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Download Resources</h2>
          <p className="text-gray-300">Get my PDFs and documents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 border-2 border-dashed border-green-500 hover:border-green-400 transition hover:shadow-lg"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <FiDownload className="text-5xl text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-center">{file.title}</h3>
                <p className="text-gray-400 text-sm mb-6 text-center">{file.description}</p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => handlePreview(file.path)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-semibold"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(file.path, file.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition font-semibold"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeDownload

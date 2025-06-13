
import { PRIVACY_POLICY_CONTENT } from '@/data/privacyPolicy';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            {PRIVACY_POLICY_CONTENT.title}
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last updated: {PRIVACY_POLICY_CONTENT.date}
          </p>
          
          <div className="prose prose-lg max-w-none">
            {PRIVACY_POLICY_CONTENT.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  {section.title}
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

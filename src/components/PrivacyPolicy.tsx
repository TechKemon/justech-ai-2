import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Import the privacy policy content
import { PRIVACY_POLICY_CONTENT } from '@/data/privacyPolicy';

const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-gray-600 hover:text-gray-800">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          {/* Use the title from the data */}
          <DialogTitle className="text-2xl font-bold mb-4">{PRIVACY_POLICY_CONTENT.title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none">
          {/* Map over the sections from the imported data */}
          {PRIVACY_POLICY_CONTENT.sections.map((section, index) => (
            <div key={index} className="mb-6"> {/* Added margin-bottom for spacing */}
              <h2>{section.title}</h2>
              {/* Use dangerouslySetInnerHTML to render the HTML content */}
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
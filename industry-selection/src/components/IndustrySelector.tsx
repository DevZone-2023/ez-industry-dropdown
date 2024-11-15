import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface IndustrySelectorProps {
  columns?: number;
}

const industries = [
  "IT Services & Consulting",
  "Recruitment / Staffing",
  "Architecture / Interior Design",
  "Management Consulting",
  "Accounting / Auditing",
  "Design",
  "Law Enforcement / Security Services",
  "Legal",
  "Software Product",
  "Internet",
  "Emerging Technologies",
  "Hardware & Networking",
  "Electronics Manufacturing",
  "Electronic Components / Semiconductors",
  "Film / Music / Entertainment",
  "Advertising & Marketing",
  "Animation & VFX",
  "Telecom / ISP",
  "Events / Live Entertainment",
  "Gaming",
  "Printing & Publishing",
  "Sports / Leisure & Recreation",
  "TV / Radio",
  "BPO / Call Centre",
  "Analytics / KPO / Research",
  "Education / Training",
  "E-Learning / EdTech",
  "Financial Services",
  "FinTech / Payments",
  "Banking",
  "Insurance",
  "NBFC",
  "Courier / Logistics",
  "Engineering & Construction",
  "Real Estate",
  "Aviation",
  "Ports & Shipping",
  "Retail",
  "Travel & Tourism",
  "Consumer Electronics & Appliances",
  "Fitness & Wellness",
  "FMCG",
  "Gems & Jewellery",
  "Hotels & Restaurants",
  "Medical Devices & Equipment",
  "Medical Services / Hospital",
  "Pharmaceutical & Life Sciences",
  "Automobile",
  "Industrial Equipment / Machinery",
  "Industrial Automation",
  "Auto Components",
  "Building Material",
  "Miscellaneous",
  "Government / Public Administration",
  "NGO / Social Services / Industry Associations"
];

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const IndustrySelector: React.FC<IndustrySelectorProps> = ({ columns = 0 }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [displayedIndustries] = useState(() => columns === 0 ? shuffleArray(industries) : industries);

  const toggleIndustry = (industry: string) => {
    setSelectedIndustry(selectedIndustry === industry ? null : industry);
    console.log('Selected Industry:', industry);
  };

  const getGridStyle = () => {
    if (columns === 0) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '0.75rem',
      };
    }
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '0.75rem',
    };
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto" style={getGridStyle()}>
        {displayedIndustries.map((industry) => {
          const isSelected = selectedIndustry === industry;
          return (
            <button
              key={industry}
              onClick={() => toggleIndustry(industry)}
              className={`
                relative group p-3 rounded-full border-2 text-sm font-medium
                transition-all duration-200 ease-in-out w-full
                ${isSelected 
                  ? 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700' 
                  : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }
                flex items-center justify-between gap-2
              `}
            >
              <span className="truncate flex-1 text-left">{industry}</span>
              <span className={`
                flex-shrink-0 w-5 h-5 rounded-full 
                flex items-center justify-center
                transition-all duration-200
                ${isSelected ? 'bg-indigo-500' : 'bg-slate-100 group-hover:bg-slate-200'}
              `}>
                {isSelected && <Check size={14} className="text-white" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
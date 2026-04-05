export type Internship = {
  id: number;
  name: string;
  field: string;
  location: string;
  deadline: string;
  grade: string;
  url: string;
  featured?: boolean;
};

export const internships: Internship[] = [
  { id: 1, name: "Google CSSI", field: "CS", location: "U.S./Virtual", deadline: "Mar", grade: "HS", url: "#", featured: true },
  { id: 2, name: "NASA High School Internship", field: "STEM", location: "U.S.", deadline: "Mar", grade: "HS", url: "#", featured: true },
  { id: 3, name: "Harvard SRMP", field: "Medicine", location: "MA", deadline: "Jan", grade: "HS", url: "#", featured: true },
  { id: 4, name: "Adobe Creative Challenges", field: "Design", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#", featured: true },
  { id: 5, name: "Bank of America Student Leaders", field: "Business", location: "U.S.", deadline: "Mar", grade: "HS", url: "#", featured: true },
  { id: 6, name: "AI Scholars Live Online", field: "AI", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#", featured: true },
  { id: 7, name: "Siemens STEM Programs", field: "Engineering", location: "U.S.", deadline: "Jan", grade: "HS", url: "#" },
  { id: 8, name: "Johnson & Johnson Youth Programs", field: "Healthcare", location: "U.S.", deadline: "Feb", grade: "HS", url: "#" },
  { id: 9, name: "General Motors STEM Internship", field: "Engineering", location: "MI", deadline: "Jan", grade: "HS", url: "#" },
  { id: 10, name: "Visa Student Internship", field: "Tech Entrepreneurship", location: "U.S.", deadline: "Feb", grade: "College", url: "#" },
  { id: 11, name: "Accenture Youth Programs", field: "Business", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#" },
  { id: 12, name: "Boston Children's Hospital Research", field: "Medicine", location: "MA", deadline: "Jan", grade: "HS", url: "#" },
  { id: 13, name: "CDC Disease Detective Camp", field: "Public Health", location: "Atlanta", deadline: "Jan", grade: "HS", url: "#" },
  { id: 14, name: "Science Writing Mentorship Program", field: "Science Writing", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#" },
  { id: 15, name: "Tuskegee University STEM Bridge", field: "STEM", location: "AL", deadline: "Feb", grade: "HS", url: "#" },
  { id: 16, name: "Doctors Without Borders Youth", field: "Global Health", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#" },
  { id: 17, name: "Discovery Channel Student Programs", field: "Media/Science", location: "Virtual", deadline: "Rolling", grade: "HS", url: "#" },
  { id: 18, name: "Lemelson-MIT InvenTeams", field: "Engineering", location: "U.S.", deadline: "Oct", grade: "HS", url: "#" },
  { id: 19, name: "Microsoft TEALS", field: "CS", location: "U.S.", deadline: "Rolling", grade: "HS", url: "#" },
  { id: 20, name: "Stanford AI4ALL", field: "AI", location: "CA", deadline: "Feb", grade: "HS", url: "#" },
  { id: 21, name: "Yale Young Global Scholars", field: "Multidisciplinary", location: "CT", deadline: "Feb", grade: "HS", url: "#" },
  { id: 22, name: "Smithsonian Internship", field: "Arts", location: "DC", deadline: "Mar", grade: "HS", url: "#" },
  { id: 23, name: "Tesla STEM Internship", field: "Engineering", location: "CA", deadline: "Jan", grade: "HS", url: "#" },
  { id: 24, name: "NIH Summer Research", field: "Medicine", location: "MD", deadline: "Mar", grade: "HS", url: "#" },
  { id: 25, name: "Goldman Sachs Scholars", field: "Business", location: "NY", deadline: "Feb", grade: "HS", url: "#" },
];

export const categories = ["STEM", "Law", "Design", "Business", "AI", "Medicine", "Arts", "Engineering"];

export const fieldColors: Record<string, string> = {
  CS: "bg-emerald-100 text-emerald-700",
  STEM: "bg-emerald-100 text-emerald-700",
  Medicine: "bg-primary/10 text-primary",
  Design: "bg-purple-100 text-purple-700",
  Business: "bg-accent/30 text-accent-foreground",
  AI: "bg-sky-100 text-sky-700",
  Engineering: "bg-orange-100 text-orange-700",
  Arts: "bg-rose-100 text-rose-700",
  Law: "bg-secondary text-secondary-foreground",
  Healthcare: "bg-teal-100 text-teal-700",
  "Public Health": "bg-teal-100 text-teal-700",
  "Global Health": "bg-teal-100 text-teal-700",
  "Tech Entrepreneurship": "bg-violet-100 text-violet-700",
  "Science Writing": "bg-amber-100 text-amber-700",
  "Media/Science": "bg-indigo-100 text-indigo-700",
  Multidisciplinary: "bg-secondary text-secondary-foreground",
};

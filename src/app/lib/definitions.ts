// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Experience = {
    id: number;
    companyLogo: string;
    image: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    url: string;
    skills: [];
};

export type Education = {
    id: number;
    degree: string;
    universityName: string;
    startDate: string;
    endDate: string;
    description: string;
};
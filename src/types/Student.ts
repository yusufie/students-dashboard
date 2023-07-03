interface Student {
    id: string | number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    domain: string;
    company: { name: string };
  }

  export default Student;
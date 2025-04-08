export interface Iuser {
  data: {
    _id: string;
    name: string;
    email: string;
    password?: string;
    phone: string;
  };
}

// export interface Address {
//     street: string;
//     city: string;
//     state?: string;
//     country: string;
//     zipCode?: string;
//   }

//   export interface Iuser {
//     _id: string;
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     role: "user" | "admin"; // Adjust if there are more roles
//     slug: string;
//     active: boolean;
//     addresses: Address[];
//     wishlist: string[];
//     createdAt: string; // ISO date string
//     updatedAt: string; // ISO date string
//     __v: number;
//   }

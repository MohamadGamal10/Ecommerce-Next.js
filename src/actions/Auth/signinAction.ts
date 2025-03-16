"use server";

interface IprevState {
    success: boolean,
    data: {
        email: string,
        password: string
    }, 
}

export const signinAction = async (prevState: IprevState ,formData: FormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });


  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();



//   Return the data along with a redirect action
  return {
    success: true,
    data, 
  };

};

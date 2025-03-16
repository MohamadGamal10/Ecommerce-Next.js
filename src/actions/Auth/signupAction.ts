"use server";


interface IprevState {
  success: boolean;
  data: {
    name: string,
    email: string,
    password: string,
  };
}

export const signupAction = async (
  prevState: IprevState,
  formData: FormData
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("confirmPassword"),
      phone: formData.get("phone"),
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

import React from "react";
import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <section
      id="signup"
      className="min-h-screen flex items-start justify-center bg-gray-100 pt-12"
    >
      {/* Give the current path of page */}
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/login"
        appearance={{
          elements: {
            firstNameField: { display: "none" },
            lastNameField: { display: "none" },
            formButtonPrimary:
              "bg-primary hover:bg-secondary text-white border-0",
            formInput: "border border-gray-300 rounded-md p-2",
            formFieldLabel: "text-heading font-semibold",
            // rootBox: "bg-gray-50 p-6 rounded-2xl shadow-lg",
            socialButtonsBlock: "space-y-2",
          },
        }}
      />
    </section>
  );
}

export default Signup;

import { Label, TextInput, Button, Spinner, Alert } from "flowbite-react";
import { Link } from "react-router-dom";

export function SignInForm({
  userType,
  formData,
  handleChange,
  handleFormSubmit,
  loading,
  error,
}) {
  return (
    <div className="flex-1">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        <div>
          <Label className="text-[#eeeeee]" value="Your email" />
          <TextInput
            className="mt-2"
            type="email"
            onChange={handleChange}
            placeholder="name@company.com"
            id="email"
            value={formData.email}
          />
        </div>
        <div>
          <Label className="text-[#eeeeee]" value="Your password" />
          <TextInput
            className="mt-2"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            id="password"
            value={formData.password}
          />
        </div>
        <Button
          className=" mt-2 bg-black"
          gradientDuoTone="greenToBlue"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
      <div className="flex gap-2 text-sm mt-4">
        <span>Don't have an account?</span>
        <Link to="/sign-up" className="text-[#00adb5] ">
          Sign Up
        </Link>
      </div>
      {error && (
        <Alert className="mt-5" color="failure">
          {error}
        </Alert>
      )}
    </div>
  );
}

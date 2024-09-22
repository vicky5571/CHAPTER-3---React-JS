export default function App() {
  // NOT_VERIFIED / VERIFIED / ACCOUNT_DISABLED
  const USER_STATUS = "VERIFIED";

  switch (USER_STATUS) {
    case "NOT_VERIFIED":
      return (
        <div>
          <span>Please verify your email or mobile number.</span>
        </div>
      );
    case "VERIFIED":
      return (
        <div>
          <span>Click here to access your dashboard.</span>
        </div>
      );
    case "ACCOUNT_DISABLED":
      return (
        <div>
          <span>Your account is disabled.</span>
        </div>
      );
    default:
      return (
        <div>
          <span>Please contact the admin</span>
        </div>
      );
  }
}

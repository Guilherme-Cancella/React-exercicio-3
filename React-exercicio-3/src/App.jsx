import Profile from "./components/profile";
export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        nome="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        email="John.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://Linkedin.com"
        TwitterUrl="https://twitter.com"
      />
    </div>
  );
}

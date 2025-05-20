import Image from "next/image";
import KycLayout from "@/components/kyx/kycLayout";
import Onboarding from "@/components/Onboarding";

export default function Home() {
  return (
    <KycLayout>
      <h1>Home page</h1>
      <Onboarding />
    </KycLayout>
  );
}

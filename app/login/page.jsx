"useclient";
import { title, subtitle } from "@/components/primitives";
import {
  Card as NextUICard,
  CardHeader,
  Divider,
  CardBody,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
export default function LoginPage() {
  return (
    <>
      <div class="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p class="pb-2 text-xl font-medium">Sign up</p>
        <form class="flex flex-col gap-3">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="email" label="Email" placeholder="Enter your email" />
          </div>
        </form>
      </div>
    </>
  );
}

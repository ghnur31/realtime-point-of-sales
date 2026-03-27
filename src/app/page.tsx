import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Input placeholder="Enter text..." />
      <Button className="dark:bg-yellow-400 bg-red-400">Hello</Button>
      <DarkmodeToggle></DarkmodeToggle>
    </div>
  );
}

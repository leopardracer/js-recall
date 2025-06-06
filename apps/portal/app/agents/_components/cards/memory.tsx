import { ComponentProps } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@recallnet/ui/components/shadcn/card";
import { Label } from "@recallnet/ui/components/shadcn/label";
import { Textarea } from "@recallnet/ui/components/shadcn/textarea";

type ChatProps = ComponentProps<typeof Card> & {
  persona: string;
  human: string;
};

export function Memory({ persona, human, ...props }: ChatProps) {
  return (
    <Card {...props}>
      <CardHeader className="pb-3">
        <CardTitle>Core Memory</CardTitle>
        <CardDescription>
          Memories are logged by the agent and imbue unique skills and
          capabilities onto the agent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label>Persona</Label>
        <Textarea placeholder="Agent persona" defaultValue={persona} />
        <Label>Human</Label>
        <Textarea placeholder="Memories of humans" defaultValue={human} />
      </CardContent>
    </Card>
  );
}

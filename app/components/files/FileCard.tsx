import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FileCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File...</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://picsum.photos/200/300" />
        <CardFooter>
            <Button className="mt-4" variant={"default"} size={"lg"}>Share file with friends</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default FileCard;

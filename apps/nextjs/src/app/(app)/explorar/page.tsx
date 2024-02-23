import { FreeContent } from "@/components/shared/freeContent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Explorar() {
  return (
    <div className=" flex flex-col gap-10 ">
      <h1 className="text-3xl font-extrabold">Explorar</h1>

      <Tabs defaultValue="account" className="relative w-full">
        <TabsList className="fixed top-16 z-50 mt-2 grid w-full grid-cols-2">
          <TabsTrigger className="" value="account">
            Aprenda
          </TabsTrigger>
          <TabsTrigger value="password">Desafios</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <FreeContent />
          {/*   <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <h1>ff</h1>
                </div>
                <div className="space-y-1">
                  <h1>ff</h1>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card> */}
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <h1>ff</h1>
              </div>
              <div className="space-y-1">
                <h1>ff</h1>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/*   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-48"></div> */}
    </div>
  );
}

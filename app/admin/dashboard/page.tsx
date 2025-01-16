import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$23,544.57</div>
                <p className="text-xs text-gray-600">+20.1% From last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscription
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2354</div>
                <p className="text-xs text-gray-600">+120.3% From last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,304</div>
                <p className="text-xs text-gray-600">+17% From last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-gray-600">+201 From last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Signups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Template Use</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ali Askari</TableCell>
                      <TableCell>aliaskari@gmail.com</TableCell>
                      <TableCell>Creative CV</TableCell>
                      <TableCell>January 04, 2025</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

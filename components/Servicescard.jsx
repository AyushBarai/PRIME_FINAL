import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export function Servicescard() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-3xl font-bold text-gray-900">
          Our Service Offering
        </h2>
        <p className="mt-4 text-gray-600 flex justify-center">
          With an extensive list of great quality and ecological options, you'll
          be able to find the perfect finish for your spaces.
        </p>
        <div className="mt-8 flex justify-end">
          <Button className="bg-black text-white">
            <Link href="./contactpage">Get in touch</Link>{" "}
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Banking
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailored financial solutions for modern banking needs.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#banking"> Details </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#FECACA] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                CyberSecurity
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Protecting your digital assets with cutting-edge defense
                strategies.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#cyber"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Networking & Telecom
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Building reliable connections for seamless communication.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#networking"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#BFDBFE] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Retail Industry
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Elevating retail experiences through innovative solutions.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#retail"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#FBCFE8] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Manufacturing
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Streamlining operations and optimizing production processes.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#manufacturing"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Cloud Services
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Empowering businesses with scalable and flexible cloud
                solutions.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#cloud"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Customer Realtionship Management
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Enhancing customer engagement through personalized interactions.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#customer"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                SAP - System Application & Products
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Integrated software solutions for efficient business management.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#sap"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
          <Card className="bg-[#FBCFE8] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Consulting Services
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Strategic guidance and expertise to drive business success.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#consulting"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#A7F3D0] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Automated Ops
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Optimizing workflows through automated operational processes.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#automated"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#BFDBFE] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Digital Workspace
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Transforming work environments for enhanced productivity and
                collaboration.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#digital"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>{" "}
          <Card className="bg-[#FDE68A] p-5">
            <CardContent>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Service & Information Technlogy Service Managements
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Ensuring IT services align with business objectives for optimal
                performance.
              </p>
              <Button className="mt-4">
                <Link href="/ssp#service"> Details </Link>
              </Button>{" "}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

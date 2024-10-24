import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/card";
export default function CheckoutPage() {
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-2 gap-8 px-4 lg:px-12 py-8">
        <div>
          <h1 className="text-3xl font-bold text-center">Checkout makanan</h1>
          <Card className="max-w-[400px]">
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          3
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$20.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Product B</td>
                <td className="px-6 py-4 whitespace-nowrap">$15.00</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">$15.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td
                  className="px-6 py-4 text-left text-sm font-medium"
                  colSpan={3}
                >
                  Total
                </td>
                <td className="px-6 py-4 text-left text-sm font-medium">
                  $35.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>2</div>

        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </>
  );
}

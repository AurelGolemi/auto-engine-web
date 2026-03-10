import { ProductClient } from "@/app/Components/client/ProductClient";

export default async function CarPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProductClient params={resolvedParams} />;
}
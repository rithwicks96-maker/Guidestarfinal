export default async function ScenePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Scene Details</h1>
      <p>Current Scene ID: {id}</p>
    </main>
  );
}

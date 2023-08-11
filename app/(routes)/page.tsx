import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // to make sure it's never cached

const HomePage = async () => {
  const billboard = await getBillboard("27fbdcc2-6041-42c6-8245-3605ed68c657");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;

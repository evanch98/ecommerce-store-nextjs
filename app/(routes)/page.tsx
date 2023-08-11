import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // to make sure it's never cached

const HomePage = async () => {
  const billboard = await getBillboard("b25f11e2-97c1-443e-92e3-da667ea15753");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;

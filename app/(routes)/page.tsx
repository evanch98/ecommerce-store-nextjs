import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // to make sure it's never cached

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
      </div>
    </Container>
  );
};

export default HomePage;

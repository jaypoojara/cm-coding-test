import { Container } from "../shared/container";

export const Footer = () => {
  return (
    <footer className="border-t-color mt-10 border-t border-gray200">
      <Container className="py-4">
        <p className=" text-center">
          Footer powered by <strong>Open source</strong>
        </p>
      </Container>
    </footer>
  );
};

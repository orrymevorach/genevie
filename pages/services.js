import HomePage from '@/components/HomePage/HomePage';
import Tiles from '@/components/HomePage/Tiles/Tiles';
import ServicesPage from '@/components/ServicesPage/ServicesPage';
import Meta from '@/components/shared/Head/Head';
import Nav from '@/components/shared/Nav/Nav';

export default function Services({ services }) {
  return (
    <>
      <Meta />
      <ServicesPage services={services} />
    </>
  );
}

export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <div className="text-primary font-bold text-4xl" style={{ borderBottom: '2px solid grey', paddingBottom: '10px', marginBottom: '25px', display: 'inline-block' }}>
        {mainHeader}
      </div>
    </>
  );
}

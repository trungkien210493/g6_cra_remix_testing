import G6Graph from '../component/G6Graph';

export default function Index() {
  return (
    <div className='w-screen'>
      <h1 className="text-3xl font-bold underline">
        Demo Topology
      </h1>
      <G6Graph></G6Graph>
    </div>
  );
}

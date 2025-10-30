export function Solutions() {
  const solutions = [
    {
      title: 'Home Security',
      description: 'Protect your family and property with our residential security packages.'
    },
    {
      title: 'Business Security',
      description: 'Safeguard your business assets with commercial-grade security systems.'
    }
  ];

  return (
    <section className="py-16 bg-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Security Solutions for Your Work and Home
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Whether you need to secure your home or your business, we have the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-slate-600 p-8 rounded-xl hover:bg-slate-500 transition-colors"
            >
              <h3 className="text-white mb-3">{solution.title}</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Phone, FileCheck, Settings } from 'lucide-react';

export function WorkingProcess() {
  const steps = [
    {
      icon: Phone,
      title: 'Reservation',
      description: 'Contact us to schedule a consultation and discuss your security needs.',
      bgColor: 'bg-slate-200'
    },
    {
      icon: FileCheck,
      title: 'Get Estimate',
      description: 'Receive a detailed quote tailored to your specific requirements.',
      bgColor: 'bg-blue-900'
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Enjoy ongoing support and maintenance to ensure optimal performance.',
      bgColor: 'bg-slate-200'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Our Working Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple and efficient steps to get you the security protection you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} ${step.bgColor === 'bg-blue-900' ? 'text-white' : 'text-gray-900'} p-8 rounded-xl text-center hover:scale-105 transition-transform`}
            >
              <div className={`${step.bgColor === 'bg-blue-900' ? 'bg-blue-800' : 'bg-white'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`w-8 h-8 ${step.bgColor === 'bg-blue-900' ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className={`${step.bgColor === 'bg-blue-900' ? 'text-white' : 'text-gray-900'} mb-3`}>
                {step.title}
              </h3>
              <p className={`${step.bgColor === 'bg-blue-900' ? 'text-blue-100' : 'text-gray-600'} leading-relaxed`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

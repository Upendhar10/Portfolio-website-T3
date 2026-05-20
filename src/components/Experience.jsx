const Card = ({ role, company, Timeline, workMode, summaryList }) => {
  return (
    <div className="p-4 rounded-md grid gap-2">
        <div className="flex justify-between flex-wrap">
            <h2 className="text-lg alkatra-medium">{role}</h2>
            <p className="alkatra-regular text-md">{Timeline}</p>
        </div>
        <div className="flex justify-between flex-wrap">
            <p className="alkatra-regular text-base text-gray-600">{company}</p>
            <p className="alkatra-regular text-base text-gray-600">{workMode}</p>
        </div >
    </div>
  );
};

function Experience() {
  return (
    <div className="py-6 md:max-w-[100%] md:m-auto">
      <h1 className="text-3xl alkatra-bold mb-2 text-blue-500 text-center">
        Work Experience.
      </h1>
        <div className="gap-5 p-2">
        <Card
          role={"Accounts & Operations Assistant [Part-Time]"}
          company={
            "Mahitha Marketing Pvt Ltd. [MSME Business]"
          }
          Timeline={"August 2025 - Present"}
          workMode={"Remote"}
        />
        <ul className="list-disc list-inside px-5 alkatra-regular text-base ">
          <li className="tracking-wide">Manage warehouse inventory and stock tracking using MS Excel.</li>
          <li>Track daily sales records and transactional data with high accuracy.</li>
          <li>Generate weekly and monthly operational reports for business analysis.</li>
          <li>Create and manage GST invoices and billing documentation.</li>
          <li>Handle large operational datasets while ensuring data consistency.</li>
        </ul>
        </div>
    </div>
  );
}

export default Experience;
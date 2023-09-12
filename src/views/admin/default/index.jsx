import TaskCard from "views/admin/default/components/TaskCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="">
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

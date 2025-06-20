import type { User } from "../hooks/useUserFeed";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div
      className="bg-gray-900 rounded-xl p-4 shadow-lg flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      tabIndex={0}
      aria-label={`User ${user.firstName} ${user.lastName}, email: ${user.email}, job: ${user.company.title}`}
    >
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-white font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-gray-300 text-sm">{user.company.title}</p>
        <p className="text-gray-400 text-sm">{user.email}</p>
        <p className="text-gray-400 text-sm">{user.phone}</p>
        <p className="text-gray-400 text-sm">{user.university}</p>
      </div>
    </div>
  );
};

export default UserCard;

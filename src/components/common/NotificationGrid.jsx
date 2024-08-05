import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Heart, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const NotificationGrid = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Dummy data for notifications
    const dummyNotifications = [
      {
        id: 1,
        type: "like",
        user: "johndoe",
        avatar: "https://via.placeholder.com/150",
        message: "liked your post.",
        time: "2h",
      },
      {
        id: 2,
        type: "comment",
        user: "janedoe",
        avatar: "https://via.placeholder.com/150",
        message: "commented: Nice picture!",
        time: "3h",
      },
      {
        id: 3,
        type: "comment",
        user: "user123",
        avatar: "https://via.placeholder.com/150",
        message: "started following you.",
        time: "5h",
      },
    ];

    setNotifications(dummyNotifications);
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="text-red-500" />;
      case "comment":
        return <MessageCircle className="text-blue-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 lg:px-60 rounded-lg shadow-lg overflow-y-auto no-scrollbar">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
          >
            <Avatar className="w-10 h-10 rounded-full overflow-hidden">
              <AvatarImage src={notification.avatar} alt={notification.user} />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                {notification.user[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-lg font-semibold">
                {notification.user} {notification.message}
              </p>
              <p className="text-gray-500">{notification.time}</p>
            </div>
            <div>{renderIcon(notification.type)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationGrid;

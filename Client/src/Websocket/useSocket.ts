import { useEffect, useState } from "react";

const WS_LINK = "ws://localhost:3060";

const useSocket = (): WebSocket | null => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_LINK);

    ws.onopen = () => {
      console.log("WebSocket frontend connected");
      setSocket(ws);
    };

    ws.onclose = () => {
      console.log("WebSocket frontend disconnected");
      setSocket(null);
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  return socket;
};

export default useSocket;

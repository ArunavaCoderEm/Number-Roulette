let socket: WebSocket | null = null;

const getWebSocket = (): WebSocket | null => {
  if (!socket) {
    socket = new WebSocket("ws://localhost:3060");

    socket.onopen = () => {
      console.log("WebSocket frontend connected");
    };

    socket.onclose = () => {
      console.log("WebSocket frontend disconnected");
      socket = null;
    };
  }

  return socket;
};

export default getWebSocket;


const RulesPage = () => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center p-4">
      <h1 className="text-3xl text-blue-400 font-bold mb-8">Game Rules</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">1. Join Game Room</h2>
          <p>When you land on the landing page, you see a button to join the game room.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">2. Enter Game Arena</h2>
          <p>To play, you must click the join button and you'll reach the game arena page.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">3. Enter Arena</h2>
          <p>In the game arena, there is an "Enter Arena" button.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">4. Ready to Play</h2>
          <p>On clicking that button, you are now ready to play.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">5. Wait for Players</h2>
          <p>You will have to wait until another player joins in.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">6. Pairing Players</h2>
          <p>When there are at least 2 players, you are paired with them.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">7. Lucky Wheel</h2>
          <p>Now each of you will see your own lucky wheel and only the scorecards of the opponent.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">8. Spin the Wheel</h2>
          <p>When you spin the wheel, it generates a number for each user.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">9. Increase Score</h2>
          <p>The user with the greater number will have an increase in their score.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">10. Win Condition</h2>
          <p>If the score reaches 100, that player wins.</p>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;

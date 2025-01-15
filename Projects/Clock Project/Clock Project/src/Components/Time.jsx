function Time() {
  const now = new Date();
  const currentDate = now.toDateString();
  const currentTime = now.toLocaleTimeString();
  return (
    <div>
      <p>
        This is the current time : {currentDate} - {currentTime}
      </p>
    </div>
  );
}

export default Time;

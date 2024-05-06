function BasicDashboard({ item }) {
    const formatCurrency = (amount) => {
      // Determine the sign prefix
      const sign = amount < 0 ? "-" : "";
  
      // Format the absolute value as a dollar amount with commas
      return `${sign}$${Math.abs(amount).toLocaleString()}`;
    };
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
    };
    return (
      <div className="flex flex-col w-full">
        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-4 justify-around">
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div className="text-blue-800 text-5xl">{item.name}</div>
            <div class="text-black text-xl">YTD as of {formatDate(item.date)}</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-5xl">{formatCurrency(item.revenue)}</div>
            <div class="text-black text-xl">Revenue</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-4xl">{formatCurrency(item.arr)}</div>
            <div class="text-black text-xl">ARR</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-5xl">{formatCurrency(item.gross_profit)}</div>
            <div class="text-black text-xl">Gross Profit</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-5xl">{item.gross_margin}%</div>
            <div class="text-black text-xl">Gross Margin</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div className="text-blue-800 text-4xl">
              {formatCurrency(item.operating_profit_loss)}
            </div>
            <div class="text-black text-xl">Operating Profit/Loss</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-4xl">{formatCurrency(item.cash)}</div>
            <div class="text-black text-xl">Cash</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-4xl">{formatCurrency(item.ar)}</div>
            <div class="text-black text-xl">AR</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px]">
            <div class="text-blue-800 text-4xl">{formatCurrency(item.ap)}</div>
            <div class="text-black text-xl">AP</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BasicDashboard;
  
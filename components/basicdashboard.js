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
        <div className="grid grid-cols-3 gap-4 justify-around max-[1100px]:gap-0 max-[800px]:grid-cols-2 max-[540px]:flex max-[540px]:flex-col">
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div className="text-blue-800 text-5xl max-[1100px]:text-3xl">{item.name}</div>
            <div class="text-black text-xl max-[1100px]:text-lg">YTD as of {formatDate(item.date)}</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-5xl max-[1100px]:text-3xl">{formatCurrency(item.revenue)}</div>
            <div class="text-black text-xl">Revenue</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-4xl max-[1100px]:text-3xl">{formatCurrency(item.arr)}</div>
            <div class="text-black text-xl">ARR</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-5xl max-[1100px]:text-3xl">{formatCurrency(item.gross_profit)}</div>
            <div class="text-black text-xl">Gross Profit</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-5xl max-[1100px]:text-3xl">{item.gross_margin}%</div>
            <div class="text-black text-xl">Gross Margin</div>
          </div>
          <div className="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div className="text-blue-800 text-4xl max-[1100px]:text-3xl">
              {formatCurrency(item.operating_profit_loss)}
            </div>
            <div class="text-black text-xl">Operating Profit/Loss</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-4xl max-[1100px]:text-3xl">{formatCurrency(item.cash)}</div>
            <div class="text-black text-xl">Cash</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-4xl max-[1100px]:text-3xl">{formatCurrency(item.ar)}</div>
            <div class="text-black text-xl">AR</div>
          </div>
          <div class="flex flex-col text-center rounded-2xl shadow-md p-5 m-5 bg-white gap-4 border-4 border-orange-600 w-[300px] max-[1100px]:w-[250px] max-[1100px]:p-3 max-[1100px]:m-3 max-[540px]:w-full max-[540px]:mx-0">
            <div class="text-blue-800 text-4xl max-[1100px]:text-3xl">{formatCurrency(item.ap)}</div>
            <div class="text-black text-xl">AP</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BasicDashboard;
  
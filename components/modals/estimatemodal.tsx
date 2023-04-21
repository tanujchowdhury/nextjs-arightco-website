import { motion } from "framer-motion";
import { useState } from "react";
import Backdrop from "./backdrop";
import { dropIn } from "../animations";

export default function EstimateModal({
  handleClose,
}: {
  handleClose: React.MouseEventHandler;
}) {
  const [transactions, setTransactions] = useState("700");

  const [detail, setDetail] = useState(false);
  const openDetail = () => setDetail(true);
  const closeDetail = () => setDetail(false);

  const time = Math.round(0.065 * parseInt(transactions) + 10);
  const junior = Math.round(0.7 * time * 35);
  const senior = Math.round(0.2 * time * 60);
  const controller = Math.round(0.1 * time * 100);
  const total = junior + senior + controller;
  const result = Math.max(total, 2500);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 min-[763px]:w-[700px] min-[1400px]:w-1/2 min-h-1/2 max-h-full min m-auto px-0 py-8 rounded-xl bg-gradient-to-br from-blue to-blue-light overflow-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-row-reverse pr-8 text-white">
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:text-orange-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center text-center text-black">
          <div className="pt-5 text-2xl font-bold text-white">
            Pricing Estimate
          </div>
          <div className="pt-2 pb-5 px-3 text-white">Get a Quote Now</div>
          <div className="pt-2 pb-5 px-3 text-white">
            Get a quote based on the number of your monthly transactions. <br />
            Our minimum price is $2500.
          </div>

          <div>
            <label
              className="text-gray-light self-start"
              htmlFor="transactions"
            >
              Monthly Transactions:&nbsp;&nbsp;
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="transactions"
              type="number"
              placeholder="700"
              name="transactions"
              value={transactions}
              onChange={({ target }) => setTransactions(target.value)}
            />
          </div>

          {detail && total >= 2500 ? (
            <div className="">
              <div className="text-gray-light pt-5 text-xl underline">
                Cost Estimation
              </div>
              <table className="table-fixed">
                <tbody className="text-white">
                  <tr>
                    <td className="p-3">Total Time Taken:</td>
                    <td className="p-3">
                      {time ? <>{time} hours</> : <>N/A</>}
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Junior Resource</td>
                    <td className="border p-3">
                      {junior ? <>${junior}</> : <>N/A</>}
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Senior Resource</td>
                    <td className="border p-3">
                      {junior ? <>${senior}</> : <>N/A</>}
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Controller Resource</td>
                    <td className="border p-3">
                      {junior ? <>${controller}</> : <>N/A</>}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div></div>
          )}

          {result ? (
            <div className="m-5 p-3 sm:text-xl text-white border-4 border-orange-dark rounded-xl">
              Estimated Monthly Payment: ${result}
            </div>
          ) : (
            <div className="m-5 p-3 sm:text-xl text-white border-4 border-orange-light rounded-xl">
              Please enter a number
            </div>
          )}

          {total >= 2500 ? (
            detail ? (
              <div
                className="text-white underline text-orange-light cursor-pointer"
                onClick={closeDetail}
              >
                ← Simple View
              </div>
            ) : (
              <div
                className="text-white underline text-orange-light cursor-pointer"
                onClick={openDetail}
              >
                Detailed View →
              </div>
            )
          ) : (
            <></>
          )}
          {}
        </div>
      </motion.div>
    </Backdrop>
  );
}

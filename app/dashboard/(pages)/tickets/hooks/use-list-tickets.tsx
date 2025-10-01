import { tickets } from "../data/tickets";
import { TicketWithId } from "../types/ticket";

const useListTickets = () => {
  const getTickets = async (): Promise<TicketWithId[]> => {
    // fetch tickets from API
    return tickets;
  };

  return { getTickets };
};

export default useListTickets;

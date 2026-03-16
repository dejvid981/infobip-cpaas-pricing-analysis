import type { WhatsAppBaseRate, WhatsAppMarkup } from "./types";

export const whatsappBaseRates: WhatsAppBaseRate[] = [
  {
    category: "Marketing",
    rates: {
      USA: 0.025,
      Germany: 0.1365,
      UK: 0.0942,
      India: 0.0107,
      Brazil: 0.0625,
      Nigeria: 0.0816,
    },
  },
  {
    category: "Utility",
    rates: {
      USA: 0.004,
      Germany: 0.0456,
      UK: 0.0233,
      India: 0.0042,
      Brazil: 0.008,
      Nigeria: 0.0042,
    },
  },
  {
    category: "Authentication",
    rates: {
      USA: 0.004,
      Germany: 0.0456,
      UK: 0.0233,
      India: 0.0042,
      Brazil: 0.0315,
      Nigeria: 0.0042,
    },
  },
  {
    category: "Service",
    rates: {
      USA: 0,
      Germany: 0,
      UK: 0,
      India: 0,
      Brazil: 0,
      Nigeria: 0,
    },
  },
];

export const whatsappMarkup: WhatsAppMarkup[] = [
  {
    category: "Marketing",
    metaBase: 0.0107,
    infobipEst: 0.0134,
    markupPct: 25,
    margin: 0.0027,
  },
  {
    category: "Utility",
    metaBase: 0.0042,
    infobipEst: 0.0055,
    markupPct: 31,
    margin: 0.0013,
  },
  {
    category: "Authentication",
    metaBase: 0.0042,
    infobipEst: 0.0055,
    markupPct: 31,
    margin: 0.0013,
  },
];

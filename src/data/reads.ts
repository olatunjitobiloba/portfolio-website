import { Book } from "@/types";

export const reads: Book[] = [
  {
    id: "ddia",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "/reads/ddia.jpg",
    takeaway:
      "Reliability is not an accident. In distributed systems, expect hardware to fail, networks to lag, and data to arrive out of order. The real engineering problem is managing state when components crash.",
    status: "Reading",
  },
  {
    id: "the-obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    cover: "/reads/obstacle.jpg",
    takeaway:
      "Complaining changes nothing. Focus entirely on what you can control, and treat every roadblock as the exact practice you need.",
    status: "Read",
  },
  {
    id: "satan-get-lost",
    title: "Satan Get Lost",
    author: "Bishop David Oyedepo",
    cover: "/reads/satan get lost.jpg",
    takeaway:
      "Spiritual authority is active, not passive. You do not negotiate with opposition; you take bold authority over it.",
    status: "Read",
  },
  {
    id: "the-law-of-faith",
    title: "The Law of Faith",
    author: "Bishop David Oyedepo",
    cover: "/reads/law-of-faith.jpg",
    takeaway:
      "Faith is not wishful thinking or emotion. It is a precise spiritual law that produces results only when backed by deliberate action.",
    status: "Read",
  },
  {
    id: "success-strategies",
    title: "Success Strategies",
    author: "Bishop David Oyedepo",
    cover: "/reads/success-strategies.jpg",
    takeaway:
      "Diligence and quiet preparation beat raw talent every time. Sustainable excellence comes from disciplined daily routines.",
    status: "Read",
  },
  {
    id: "how-to-be-led-by-the-spirit",
    title: "How to Be Led by the Spirit of God",
    author: "Bishop David Oyedepo",
    cover: "/reads/led-by-spirit.jpg",
    takeaway:
      "Direction comes from peace in your spirit, not noise in your head. Learning to recognize the quiet inner witness prevents costly mistakes.",
    status: "Read",
  },
  {
    id: "boundaries",
    title: "Boundaries: When to Say Yes, How to Say No",
    author: "Dr. Henry Cloud & Dr. John Townsend",
    cover: "/reads/boundaries.jpg",
    takeaway:
      "You cannot protect your focus if you cannot say no. Taking ownership of your life means knowing what is your responsibility and what belongs to others.",
    status: "Read",
  },
  {
    id: "finish",
    title: "Finish: Give Yourself the Gift of Done",
    author: "Jon Acuff",
    cover: "/reads/finish.jpg",
    takeaway:
      "Perfectionism is just fear disguised as high standards. Cut your initial goal in half, drop arbitrary rules, and cross the finish line.",
    status: "Read",
  },
  {
    id: "crucial-conversations",
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
    cover: "/reads/crucial-conversations.jpg",
    takeaway:
      "When conversations get heated, make the other person feel safe first. Most arguments happen because people feel attacked, not because they disagree on the facts.",
    status: "Read",
  },
  {
    id: "kora-wallet-guide",
    title: "A Guide to Building Secure Digital Wallets",
    author: "Kora",
    cover: "/reads/kora-wallets.jpg",
    takeaway:
      "Building payment systems in Africa requires zero assumptions. Make every ledger transaction idempotent, reconcile balances continuously, and never let money move without cryptographic verification.",
    status: "Read",
  },
];

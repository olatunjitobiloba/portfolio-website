import { Book } from "@/types";

export const reads: Book[] = [
  {
    id: "ddia",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "/reads/ddia.jpg",
    takeaway:
      "I learnt that production ML pipelines fail when distributed state is messy, so I design inference services around idempotent writes, clean partition keys, and predictable replication lag.",
    status: "Reading",
  },
  {
    id: "the-lean-startup",
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "/reads/lean startup.jpg",
    takeaway:
      "I learnt not to train complex models before verifying demand: shipping a fast baseline API with real telemetry always beats guessing what users want.",
    status: "Read",
  },
  {
    id: "kora-wallet-guide",
    title: "A Guide to Building Secure Digital Wallets",
    author: "Kora",
    cover: "/reads/kora-wallets.jpg",
    takeaway:
      "I learnt to treat financial API state as strictly zero-trust: every ledger update must have idempotency keys, race-condition locks, and atomic ACID guarantees.",
    status: "Read",
  },
  {
    id: "the-obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    cover: "/reads/obstacle.jpg",
    takeaway:
      "I learnt to use failing benchmarks and pipeline crashes as the exact checklist of edge cases to harden next.",
    status: "Read",
  },
  {
    id: "finish",
    title: "Finish: Give Yourself the Gift of Done",
    author: "Jon Acuff",
    cover: "/reads/finish.jpg",
    takeaway:
      "I learnt that shipping a tested 88% accuracy model to real users is infinitely more valuable than endlessly tuning a 95% model that never leaves a local notebook.",
    status: "Read",
  },
  {
    id: "boundaries",
    title: "Boundaries: When to Say Yes, How to Say No",
    author: "Dr. Henry Cloud & Dr. John Townsend",
    cover: "/reads/boundaries.jpg",
    takeaway:
      "I learnt to protect deep engineering focus by saying no to premature optimizations and scope creep that dilute core model reliability.",
    status: "Read",
  },
  {
    id: "crucial-conversations",
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
    cover: "/reads/crucial-conversations.jpg",
    takeaway:
      "I learnt how to align engineering teams and stakeholders during outages by focusing on shared facts rather than defensive blame.",
    status: "Read",
  },
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "/reads/psychology-of-money.jpg",
    takeaway:
      "I learnt that longevity in engineering comes from surviving worst-case tail risks, keeping cloud GPU costs sane, and compounding small daily improvements.",
    status: "Read",
  },
  {
    id: "the-richest-man-in-babylon",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    cover: "/reads/richest man in babylon.jpg",
    takeaway:
      "I learnt the discipline of paying myself first in dedicated learning and engineering hours every morning before the day's noise starts.",
    status: "Read",
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "/reads/rich dad poor dad.jpg",
    takeaway:
      "I learnt to build software assets that generate value repeatedly, like reusable inference APIs and automated CI/CD pipelines, rather than trading raw hours.",
    status: "Read",
  },
  {
    id: "satan-get-lost",
    title: "Satan Get Lost",
    author: "Bishop David Oyedepo",
    cover: "/reads/satan get lost.jpg",
    takeaway:
      "I learnt bold spiritual confidence and refusal to accept defeat when tackling complex, intimidating engineering challenges.",
    status: "Read",
  },
  {
    id: "the-law-of-faith",
    title: "The Law of Faith",
    author: "Bishop David Oyedepo",
    cover: "/reads/law-of-faith.jpg",
    takeaway:
      "I learnt that conviction without corresponding technical action is dead; believing a system will scale means doing the hard profiling and stress-testing to prove it.",
    status: "Read",
  },
  {
    id: "success-strategies",
    title: "Success Strategies",
    author: "Bishop David Oyedepo",
    cover: "/reads/success-strategies.jpg",
    takeaway:
      "I learnt that high academic performance (CGPA 4.83) and production engineering both boil down to quiet, relentless daily preparation.",
    status: "Read",
  },
  {
    id: "how-to-be-led-by-the-spirit",
    title: "How You Can Be Led by the Spirit of God",
    author: "Kenneth E. Hagin / Bishop David Oyedepo",
    cover: "/reads/led-by-spirit.jpg",
    takeaway:
      "I learnt to cultivate quiet inner discernment and peace before making high-stakes architecture, career, and life decisions.",
    status: "Read",
  },
];

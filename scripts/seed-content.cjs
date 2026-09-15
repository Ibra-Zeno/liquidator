/**
 * One-off script to seed Sanity with the copy that used to be hardcoded in
 * the Next.js pages, now that services/FAQ/about/site-settings are backed
 * by Sanity schemas. Safe to re-run — it upserts by a fixed _id per
 * document so it won't create duplicates.
 *
 * Requires SANITY_API_TOKEN (an Editor-permission token) in .env.local.
 * Run with: node scripts/seed-content.cjs
 */

const fs = require("node:fs");
const path = require("node:path");

// Minimal .env.local loader (avoids adding a dotenv dependency for one script).
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const key = match[1];
    let value = (match[2] || "").trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

const { createClient } = require("@sanity/client");

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error(
    "Missing SANITY_API_TOKEN in .env.local — add an Editor-permission token from sanity.io/manage first.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-09-30",
  token,
  useCdn: false,
});

let keyCounter = 0;
function key() {
  keyCounter += 1;
  return `k${keyCounter}${Math.random().toString(36).slice(2, 8)}`;
}

function p(text) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  };
}

function bullets(items) {
  return items.map((text) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  }));
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
const services = [
  {
    title: "Liquidation & Receivership",
    description:
      "Members' and creditors' voluntary winding-up, court liquidation, and receiver & manager appointments handled end to end.",
  },
  {
    title: "Corporate Rescue",
    description:
      "Restructuring plans, scheme of arrangement, and court-supervised protection that keep viable businesses trading.",
  },
  {
    title: "Revival of Abandoned Projects",
    description:
      "Turning stalled residential and commercial developments back over to completion for purchasers and financiers.",
  },
  {
    title: "Conveyancing & Sub-Sale",
    description:
      "Sub-sales, auctions, refinancing, deed reassignment and transfer perfection, managed to completion.",
  },
  {
    title: "Insolvency Administration with MDI",
    description:
      "Acting as appointed agent of the Malaysia Department of Insolvency on assigned cases, in full regulatory compliance.",
  },
  {
    title: "Litigation Support",
    description:
      "Case preparation and courtroom guidance for creditors, directors and stakeholders in dispute.",
  },
].map((s, i) => ({
  _id: `service-${i + 1}`,
  _type: "service",
  order: i + 1,
  ...s,
}));

// ---------------------------------------------------------------------------
// About page (singleton)
// ---------------------------------------------------------------------------
const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  eyebrow: "Business Support, Redefined",
  intro:
    "Liquidator.net specialises in expert corporate recovery and insolvency services, adeptly steering businesses through financial challenges.",
  body: "At Liquidator.net, we guide businesses through financial challenges with precision and care. Founded with a commitment to integrity, responsibility, and technical excellence, we deliver tailored solutions that empower our clients to navigate complexity and achieve sustainable outcomes.",
  values: [
    {
      _key: key(),
      title: "Integrity",
      description: "Ethical and transparent practices guide every engagement.",
    },
    {
      _key: key(),
      title: "Responsibility",
      description:
        "A proactive approach to solving complex financial challenges.",
    },
    {
      _key: key(),
      title: "Technical Excellence",
      description:
        "Superior expertise ensures high-quality, actionable results.",
    },
  ],
  strategies: [
    {
      _key: key(),
      title: "Pre-emptive Measures",
      description:
        "Our insight into financial distress is not limited to recessions; we understand that financial difficulties can be an early indicator of business failure.",
    },
    {
      _key: key(),
      title: "Strategic Alliances",
      description:
        "We maintain a collaborative approach with lenders and legal advisers to provide strategic counsel well-versed in liquidation preparation intricacies.",
    },
    {
      _key: key(),
      title: "Experienced Leadership",
      description:
        "Our experienced Management Team leverages their expertise in insolvency to provide actionable solutions and advice to creditors, shareholders, directors, and companies.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Site settings (singleton)
// ---------------------------------------------------------------------------
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  phone: "+6 03 2282 4558",
  phoneHref: "60322824558",
  fax: "+6 03 2282 1558",
  email: "info@theliquidator.net",
  address:
    "Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100 Kuala Lumpur, Malaysia",
  entities: [
    { _key: key(), name: "Radiant Consulting Asia Sdn Bhd", regNo: "(773117-T)" },
    { _key: key(), name: "Chilterns Insolvency Sdn Bhd", regNo: "(822208-U)" },
    { _key: key(), name: "MJ Insolvency", regNo: "(LLP0037224-LAL) (NF 2776)" },
    { _key: key(), name: "TS Insolvency", regNo: "(NF 2776)" },
    { _key: key(), name: "Radiant Corporate Solutions Sdn Bhd", regNo: "(1005821-D)" },
  ],
};

// ---------------------------------------------------------------------------
// FAQ — 3 categories, English + Bahasa Malaysia, matched 1:1 by position
// ---------------------------------------------------------------------------
const faqCategories = [
  {
    category: "Insolvency Procedures and Liquidation Processes",
    categoryMs: "Prosedur Kebankrapan dan Proses Pelikuidasian",
    items: [
      {
        question: "What is Insolvency and Winding-Up?",
        answer: [
          p(
            "The process where an insolvent company's assets are disposed and realized to settle debts owing to creditors.",
          ),
        ],
        questionMs: "Apakah Maksud Likuidasi Atau Syarikat Dalam Penggulungan?",
        answerMs: [
          p(
            "Likuidasi adalah proses di mana aset syarikat dijual atau diubah menjadi wang untuk membayar hutang-hutang kepada pemiutang.",
          ),
        ],
      },
      {
        question:
          "Under What Circumstances Can A Company Be Wound-Up By The Court?",
        answer: [
          p(
            "Section 218 of the Company Act, 1965 sets out the circumstances in which a company may be wound-up by the Court:",
          ),
          ...bullets([
            "The company has resolved by special resolution that it should be wound up by the court.",
            "The company is unable to pay its debts.",
            "The directors have acted in their own interests in the company's affairs rather than in the interests of the members collectively, or in a manner that seems unfair.",
            "The court believes that it is just and equitable for the company to be wound up.",
            "The number of members has fallen to one (not including a wholly-owned subsidiary).",
            "The company has not commenced business within a year of its incorporation or has suspended business for an entire year.",
            "The Memorandum and Articles of Association stipulate that the company will expire at a set time or upon the occurrence of a specified event.",
            "The company is being used for illegal purposes or for activities detrimental to national security or the public interest.",
          ]),
        ],
        questionMs: "Bila Boleh Sesebuah Syarikat Digulungkan Oleh Mahkamah?",
        answerMs: [
          p("Menurut Seksyen 218 Akta Syarikat 1965:"),
          ...bullets([
            "Syarikat membuat keputusan melalui resolusi khas untuk digulung oleh mahkamah.",
            "Syarikat gagal membayar hutang.",
            "Pengarah-pengarah bertindak demi kepentingan peribadi dan tidak adil kepada ahli-ahli syarikat.",
            "Mahkamah memutuskan adalah adil dan wajar untuk syarikat digulungkan.",
            "Bilangan ahli syarikat berkurang hingga tinggal seorang, kecuali bagi syarikat Milikan Tunggal.",
            "Syarikat tidak memulakan perniagaan dalam tempoh setahun selepas pemerbadanan atau menghentikan perniagaan untuk tempoh yang lama.",
            "Syarikat telah mencapai tempoh penamatan yang ditetapkan dalam memorandum & artikelnya, atau kejadian yang sepatutnya menyebabkan penamatan telah berlaku.",
            "Syarikat digunakan untuk tujuan yang menyalahi undang-undang atau merugikan keselamatan negara atau kepentingan umum.",
          ]),
        ],
      },
      {
        question:
          "Who May Be Appointed as a Liquidator in a Court-Ordered Winding-Up?",
        answer: [
          p(
            "Only an approved liquidator [Private Liquidator – an individual who is licensed as a liquidator] or the Official Receiver [Director General of Insolvency (DGI) in the capacity of Official Receiver] can be appointed as a liquidator in a court-ordered winding up.",
          ),
        ],
        questionMs: "Siapa Yang Boleh Dilantik Sebagai Pelikuidasi?",
        answerMs: [
          ...bullets([
            "Pegawai Penerima Insolvensi (DGI) atau",
            "Pelikuidasi persendirian yang berlesen.",
          ]),
        ],
      },
      {
        question: "What Is the Primary Function of a Liquidator?",
        answer: [
          ...bullets([
            "The principal role of a liquidator is to wind up the company by collecting and liquidating assets at the best possible price and in a manner that is most advantageous to the company.",
            "Investigate claims by creditors and third parties, settle all creditors' claims and distribute any surplus assets to the shareholders according to their respective rights.",
            "Look into the company's affairs and assets.",
            "Examine the conduct of its directors and any other related parties.",
            "It is the duty of the liquidator to ensure that the company is completely dissolved at the end of the process.",
          ]),
          p(
            "Once a winding up commences, directors of the company cease to have any power to manage the affairs of the company and all matters are taken over by the liquidator immediately upon the commencement of the winding up.",
          ),
        ],
        questionMs: "Apakah Tugas Utama Pelikuidasi?",
        answerMs: [
          ...bullets([
            "Melikuidasi syarikat dengan mengagihkan aset kepada pemiutang dan, jika ada baki, diagihkan kepada pemegang saham.",
            "Kuasa pengarah syarikat diambil alih oleh pelikuidasi sebaik sahaja proses pelikuidasi dimulakan.",
            "Pelikuidasi bertanggungjawab memastikan proses pembubaran syarikat dilakukan secara tuntas.",
          ]),
        ],
      },
      {
        question:
          "What Is Secured Creditors Or What Is Unsecured Creditors?",
        answer: [
          p("Secured Creditors"),
          p(
            "A lender who holds a legally enforceable claim over a borrower's assets, with a liquidation value equal to or greater than the amount of the loan. Secured creditors are entitled to receive the proceeds from the sale of the assets pledged, and in the event of bankruptcy, they must be satisfied prior to any unsecured creditors.",
          ),
          p("Unsecured Creditors"),
          p(
            "Any individual who has submitted proof of their debt to the liquidator.",
          ),
        ],
        questionMs:
          "Siapakah Pemiutang Yang Diasuransikan (Secured Creditor) Dan Yang Tidak Diasuransikan (Unsecured Creditor)?",
        answerMs: [
          p("Pemiutang Yang Diasuransikan (Secured Creditor)"),
          p(
            "Institusi atau korporasi yang memberikan pinjaman kepada syarikat dengan hak undang-undang untuk menuntut aset syarikat sebagai jaminan hutang. Pemiutang ini harus mengemukakan bukti hutang kepada Pelikuidasi.",
          ),
          p("Pemiutang Yang Tidak Diasuransikan (Unsecured Creditor)"),
          p(
            "Pemiutang yang tidak memiliki jaminan aset syarikat harus juga mengemukakan bukti hutang kepada Pelikuidasi.",
          ),
        ],
      },
    ],
  },
  {
    category: "Verification Process for Ownership of Abandoned Properties",
    categoryMs: "Proses Pengesahan Hakmilik",
    items: [
      {
        question: "Why is verification of ownership necessary?",
        answer: [
          p("Verification of ownership is imperative for several reasons:"),
          ...bullets([
            "The company has previously failed to maintain an accurate register of owners and their associated documents.",
            "It is required to keep and maintain a current and precise register of all housing accommodation purchasers until a separate title is issued, as mandated by Section 22D(3) of the Housing Development (Control and Licensing) Act 1966.",
            "It helps to prevent fraudulent activities by any third parties concerning the property.",
            "It is needed to ascertain which properties still belong to the company.",
          ]),
        ],
        questionMs: "Tujuan Proses Pengesahan Hakmilik",
        answerMs: [
          p("Proses ini penting untuk:"),
          ...bullets([
            "Memastikan syarikat menyimpan rekod lengkap pemilik dan dokumen pendukung.",
            "Mematuhi Seksyen 22D (3) Akta Perumahan (Kawalan dan Perlesenan), 1966.",
            "Mempercepatkan proses penyerahan hakmilik strata.",
            "Menghindari kegiatan penipuan berkaitan dengan unit oleh pihak ketiga.",
            "Mengidentifikasi unit yang masih dimiliki oleh syarikat yang dikelola.",
          ]),
        ],
      },
      {
        question: "Why is proof of purchase or possession of property important?",
        answer: [
          p(
            "Providing proof of purchase or possession is critical to ensure that there are no fraudulent claims made by third parties regarding the property and to maintain accurate records of ownership.",
          ),
        ],
        questionMs: "Kepentingan Pengemukakan Bukti Pembelian/Pemilikan",
        answerMs: [
          p("Mengemukakan dokumen bukti penting untuk:"),
          ...bullets([
            "Mencegah penipuan oleh pihak ketiga.",
            "Membuat rekod kepemilikan yang terperinci dan lengkap.",
          ]),
        ],
      },
      {
        question:
          "What are the consequences of failing to provide proof of purchase or possession?",
        answer: [
          p(
            "Should there be a failure to present proof of purchase or possession, the Liquidator will apply to the court for directions and to obtain a vesting order pertaining to the said properties. Any costs incurred during this process will be the responsibility of the party in default.",
          ),
        ],
        questionMs: "Akibat Tidak Mengemukakan Bukti Pembelian/Pemilikan",
        answerMs: [
          p("Jika bukti tidak diberikan:"),
          p(
            "Pelikuidasi akan meminta arahan mahkamah untuk mengambil alih unit atau harta yang bersangkutan.",
          ),
        ],
      },
      {
        question:
          "What documents are required to prove purchase or possession of property?",
        answer: [
          p("The following documents are required"),
          ...bullets([
            "Certified true copies of the principal Sale & Purchase Agreement and the Deed of Assignment (if applicable), including any subsequent agreements and other documentation between the first purchaser and any subsequent purchasers.",
            "Certified true copies of the Deed of Assignment (if applicable) to show that the unit is assigned to you, or receipts to demonstrate that the purchase price has been fully paid if you are a cash buyer.",
            "Certified true copies of the Bank Loan Agreement cum Assignment, bank statements (if a loan was taken), and the Deed of Receipt and Reassignment (if the loan is fully settled).",
            "A copy of the most recent Council Tax Assessment Receipts.",
            "Copies of the latest maintenance service charge receipts for the past three months.",
            "A copy of the Strata Title where the purchaser's interest is registered.",
            "A copy of the National Registration Identity Card (NRIC) of the purchaser(s).",
            "Any other relevant documents that the Liquidator may require.",
          ]),
        ],
        questionMs: "Dokumen Pendukung Pengesahan Pemilikan",
        answerMs: [
          p("Berikut ini adalah dokumen yang diperlukan:"),
          ...bullets([
            "Salinan Perjanjian Jual Beli.",
            "Salinan bukti pembayaran lengkap atau surat penyerahan hak.",
            "Untuk pembayaran pinjaman: Perjanjian Pinjaman Bank, Penyata Bank, Surat Penerimaan dan Penyerahhakkan Balik.",
            "Salinan Resit Taksiran untuk pembayaran cukai pintu terkini kepada Pihak Berkuasa Tempatan.",
            "Salinan bil penyelenggaraan terkini (3 bulan terakhir) untuk pembangunan bertingkat.",
            "Dokumen lain yang relevan dan berkaitan.",
          ]),
        ],
      },
    ],
  },
  {
    category: "Application for Transfer of Ownership",
    categoryMs: "Permohonan Pindah Milik",
    items: [
      {
        question: "Why is it important to perfect the transfer of ownership?",
        answer: [
          p(
            "The perfection of transfer is essential to legally substantiate ownership for various transactions, such as transfers, charges, leases, and distribution of small estates.",
          ),
          p(
            "Under Section 40A of the Strata Titles (Amendment) Act 2007, purchasers are required to execute transfer and charge documents within twelve months upon notification of strata title issuance by the original proprietor. Failure to do so constitutes an offence, incurring a fine ranging from a minimum of One Thousand Ringgit Malaysia (RM1,000) to a maximum of Ten Thousand Ringgit Malaysia (RM10,000) per parcel.",
          ),
        ],
        questionMs: "Kepentingan Menyempurnakan Pindah Milik/Gadaian",
        answerMs: [
          p(
            "Menyempurnakan pindah milik atau gadaian (perfection of transfer/charge) adalah penting karena:",
          ),
          ...bullets([
            "Itu menunjukkan bukti sah kepemilikan untuk berbagai transaksi seperti penjualan, gadai, atau pinjaman.",
            "Sesuai dengan Seksyen 40A, Akta Hakmilik Strata (Pindaan) 2007, pemilik baru harus menyelesaikan proses ini dalam 12 bulan setelah pemberitahuan keluaran hakmilik strata oleh pemilik asal.",
            "Jika tidak, denda antara RM1,000 hingga RM10,000 per unit bisa dikenakan.",
          ]),
        ],
      },
      {
        question: "What should the owner/buyer do upon receiving a notice?",
        answer: [
          p(
            "Upon receipt of notice, the owner/buyer should engage a solicitor and provide a letter of instruction to the Liquidator to initiate the perfection of the transfer process.",
          ),
          p(
            "The Liquidator will then sign the Form 14A and/or Consent to Transfer Form, contingent upon the submission of relevant documents and the payment of associated administrative costs by the owner/buyer.",
          ),
        ],
        questionMs: "Langkah-langkah Setelah Menerima Notis",
        answerMs: [
          p("Setelah menerima notis, pemilik/pembeli harus:"),
          ...bullets([
            "Menunjuk seorang peguam untuk mengirim surat instruksi kepada pelikuidasi.",
            "Pelikuidasi akan menandatangani Borang 14A dan/atau Borang Kebenaran Pindah Milik/Gadaian jika dokumen yang diperlukan dan pembayaran biaya administratif diserahkan.",
          ]),
        ],
      },
      {
        question:
          "Why must the owner/buyer bear the administrative costs for the perfection of transfer?",
        answer: [
          p(
            "According to Section 287(1) of the Companies Act 1965, a Liquidator is not obligated to incur any expenses related to the company's winding up unless there are adequate assets available. Therefore, the costs associated with administrative procedures for the perfection of transfer must be covered by the owner/buyer.",
          ),
        ],
        questionMs: "Alasan Pemilik/Pembeli Membayar Biaya Administratif",
        answerMs: [
          p(
            "Biaya administratif untuk menyempurnakan pindah milik/gadaian diperlukan karena:",
          ),
          ...bullets([
            "Seksyen 287 (1) Akta Syarikat 1965 menetapkan bahwa pelikuidasi tidak bertanggung jawab atas biaya yang terkait dengan syarikat setelah likuidasi, kecuali ada aset yang cukup.",
            "Oleh karena itu, pemilik/pembeli harus menanggung biaya administratif yang berkaitan dengan proses ini.",
          ]),
        ],
      },
    ],
  },
];

let globalOrder = 0;
const faqDocs = [];
faqCategories.forEach((cat) => {
  cat.items.forEach((item) => {
    globalOrder += 1;
    faqDocs.push({
      _id: `faq-${globalOrder}`,
      _type: "faq",
      category: cat.category,
      categoryMs: cat.categoryMs,
      order: globalOrder,
      question: item.question,
      answer: item.answer,
      questionMs: item.questionMs,
      answerMs: item.answerMs,
    });
  });
});

// ---------------------------------------------------------------------------
async function main() {
  const docs = [...services, aboutPage, siteSettings, ...faqDocs];
  const tx = client.transaction();
  docs.forEach((doc) => tx.createOrReplace(doc));
  await tx.commit();
  console.log(`Seeded ${docs.length} documents.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

'use client';
import { useEffect, useState } from 'react';
import Footer from '../pages/footer';
import FooterMobile from '../pages/footerMobile';

const Volunteer = () => {
  const [width, setWidth] = useState(0);
  const [activePencapaian, setActivePencapaian] = useState(0);
  const [pencapaianOpen, setPencapaianOpen] = useState(false);

  const handleActivePencapaian = (value) => {
    setPencapaianOpen(false);
    setActivePencapaian(value);
  };

  const pencapaianMadani = [
    [
      {
        question: 'Inisiatif Pendapatan Rakyat (IPR)',
        answer: [
          "The Madani Government has introduced the People's Income Initiative (IPR) to provide income-earning opportunities that guarantee minimum earnings of RM2,000 to the hardcore poor.",
          "IPR is divided into 3 components. 'INTAN' involves provision of land, equipment, and training to smallholder farmers and a supplementary allowance to ensure RM2,000 monthly income until their first harvest.",
          "'INSAN' involves the provision of vending machines and rental coverage in high-footfall areas such as public transportation hubs, universities, or hospitals. Food vendors are able to make use of these machines at zero cost to sell their products.",
          "'IKHSAN' involves the direct outsourcing of '3D' (Dirty, Dangerous, Difficult) jobs to qualified individuals, bypassing employment agencies who profit from employing foreign labour. IKHSAN workers will also be allowed to collect and keep public fees associated with facilities usage (e.g. public toilets).",
          'IPR applications can be made at https://ipr.epu.gov.my/sign_up.',
        ],
      },
      {
        question: 'Inisiatif Kemudahan Rakyat (IKR)',
        answer: [
          "The Madani Government has opened up job opportunities to small independent contractors via the People's Improvements Initiative (IKR).",
          'IKR allows small contractors to identify and apply directly for funding in order to carry out maintenance, improvement, and construction work for small public infrastructure in their local area.',
          'IKR applications can be made at https://ikr.ekonomi.gov.my/register.',
        ],
      },
      {
        question: 'Hiring of 4,914 Permanent Doctors in MOH',
        answer: [
          'The Madani Government has recruited 4,914 permanent positions in government healthcare facilities for 2023 - comprising 4,263 medical officers, 335 dental officers, and 316 pharmacy officers.',
          "To facilitate this increase, Budget 2023 increased MOH's emolument amount by RM3 billion.",
          'The Madani Government is expecting another 12,800 permanent posts to be created and filled by 2026.',
        ],
      },
      {
        question: 'Academy in Factory Initiative',
        answer: [
          'The Madani Government launched the Academy in Factory (AIF) training programme initiative that aims to help 100,000 TVET youths gain meaningful work experience and employment.',
          'Working with industry players, AIF provides TVET graduates with relevant on-the-job training in manufacturing fields, prior to absorption into the workforce of participating employers.',
        ],
      },
      {
        question: 'BERNAS Profit-Sharing for Rice Farmers',
        answer: [
          'In December, the Madani Government directed Bernas to pay out RM10 million in profits to rice farmers, beginning with farmers in Kelantan, Terengganu, and Pahang.',
          'The Madani Government has also directed Bernas to increase this contribution to RM50 million beginning in 2023. Bernas will also start contributing 30% of its net profits to rice farmers.',
        ],
      },
      {
        question: 'Subang Airport Regeneration Plan',
        answer: [
          'The Madani Government has approved the reintroduction of commercial jet service from Subang Airport for the first time since 2002.',
          'Beyond facilitating local businesses through greater business footfall, the regeneration plan entails greater investment and job opportunities for maintenance, repair, and overhaul (MRO) centres, aviation research & development centres, and regional commercial flight operations.',
        ],
      },
      {
        question: 'RM25.5 billion investment from AWS and Tesla',
        answer: [
          'The Madani Government secured RM25.5 billion worth of investment from Amazon Web Services (AWS) and Tesla, providing thousands of knowledge-intensive jobs under the main investors and relevant supporting network.',
          "These investments aim to spearhead Malaysia's development as a regional tech hub, leveraging the country's position as a neutral and strategically located nation.",
        ],
      },
      {
        question: 'RM30 billion investment from Geely',
        answer: [
          'The Madani Government has secured a RM30 billion investment from Geely for the development and commercialisation of the Automotive High-Tech Valley (AHTV) in Tanjong Malim.',
          'The AHTV will establish Malaysia as a regional leader in electric vehicle (EV) research and support services.',
        ],
      },
      {
        question: 'Termination of PUSPAKOM and MyEG Monopolies',
        answer: [
          "The Madani Government has ended PUSPAKOM's exclusive right to conduct vehicle inspection services and MyEG's exlusive right to provide e-government service.",
          'The increased competition aims to reduce waiting times for consumers and increase opportunities for small businesses offering relevant services.',
        ],
      },
      {
        question: 'SME Grant Scheme',
        answer: [
          'The Madani Government has allocated RM100 million under the SME Grant Scheme to support business automation and digitalisation activities.',
          'Matching grants of up to RM5,000 will be given to SMEs to subscribe to digital products and services, facilitating greater digitalisation and competitiveness of small business. A further RM1 billion has been provided via Bank Negara Malaysia to assist microSMEs through digitalisation and automation schemes.',
        ],
      },
    ],
    [
      {
        question:
          'Electricity Tariff Freeze for Residential Homes and Small Business',
        answer: [
          'The Madani Government spent RM10.7 billion in H1 2023 electricity subsidies for MSMEs, restaurants, retail stores, workshops, and agricultural smallholders. ',
          'This initiative ensured that 9.5 million electricity users were shielded from increases in fuel costs in the short-term.',
        ],
      },
      {
        question: 'Payung Rahmah Initiative',
        answer: [
          'In January, the Madani Government introduced the Payung Rahmah initiative. Working with local businesses and industry players, the Government has worked to expand the supply and sale of affordable products and services to the urban poor.',
          'This includes the introduction of lunch/dinner meals (Menu Rahmah), food baskets, medical treatment (Klinik Rahmah), and eyewear (Pakej Rahmah).',
        ],
      },
      {
        question: 'Facilitation of Egg Supply',
        answer: [
          'In December, the Madani Government temporarily relaxed import restrictions on foreign eggs in order to address a shortfall in the local supply. This measure was combined with price controls to maintain food costs. These measures were maintained until January, and reintroduced in July in order to offset the shortfall in local egg supply.',
          'The Madani Government has never subsidised the import of eggs, and continues to support local producers with exclusive subsidies.',
        ],
      },
      {
        question: '2% Income Tax Reduction for M40',
        answer: [
          'Under the Madani Government, a 2% income tax reduction has been implemented for those earning between RM35,000 to RM100,000 per annum.',
          'This allows relevant individuals to save up to RM2,300 in annual taxes.',
        ],
      },
      {
        question: 'Sumbangan Tunai Rahmah (STR) Incentives',
        answer: [
          'The Madani Government has introduced direct cash aid under the STR initiative.',
          'Households earning less than RM2,500 per month are entitled to up to RM2,500 cash aid (based on number of dependents), with households earning between RM2,501 to RM5,000 per month entitled to up to RM1,250 cash aid (based on number of dependents).',
          'Singles will also be entitled to between RM350 to RM600 based on age.',
        ],
      },
      {
        question: 'Madani Medical Scheme',
        answer: [
          'The Madani Government has also allocated RM100 million for the Madani Medical Scheme, applicable to STR recipients.',
          'STR recipients will be automatically entitled to the Madani Medical Scheme, which provides free consultations, checkups, medicines, and procedures.',
        ],
      },
      {
        question: '8% Reduction in BESRAYA and LEKAS Tolls',
        answer: [
          'The Madani Government enforced an 8% reduction in toll rates on the BESRAYA and LEKAS toll routes, helping lower transportation expenses for thousands of daily commuters between Selangor and Negeri Sembilan.',
        ],
      },
      {
        question: 'Free KTM Travel for Primary School Students and OKUs',
        answer: [
          'In February, the Madani Government introduced free travel on KTM commuter and intercity services for students aged up to 12 and people with disabilities.',
          'The cost of free travel is being covered by RM15 million savings achieved through the suspension of the KTM Subang Skypark line.',
        ],
      },
      {
        question: 'Reduction of Gas Facility Charge 2023-2025',
        answer: [
          'The Madani Government has reduced the gas facility charge for the period 2023 to 2025.',
          'Depending on the volume of gas consumption and sector, this reduction is projected to translate into savings of between RM4,000 to RM55.9 million for 2023 alone.',
        ],
      },
      {
        question: 'Seasonal Travel Cost and Capacity Controls',
        answer: [
          'Working with industry players, the Madani Government facilitated the increase of 25,020 extra seats from RM199 for the January holiday season.',
          'During the Aidilfitri season, the Madani Government facilitated the addition of 11,400 extra airline seats from RM199, and 13,860 extra ETS seats.',
          'During the Chinese New Year season, the Madani Government also provided regularatory approvals for an extra 291 flights, aimed at addressing capacity shortfall, increasing competition, and reducing airfares.',
        ],
      },
    ],
    [
      {
        question: '40 Flood Mitigation Projects in Kelantan & Terengganu',
        answer: [
          'In December, the Madani Government approved 40 flood mitigation and environmentally friendly drainage projects in Kelantan and Terengganu.',
          'Two major projects - the Sungai Kelantan Integrated River Basin Development Project (PLSB) and the Sungai Golok PLSB are expected to be completed in October 2023 and August 2024 respectively.',
          'The implementation of these projects is designed to increase the number of people protected from the effects of previous floods.',
        ],
      },
      {
        question: '47% of Sick PR1MA Projects Completed in 5 Months',
        answer: [
          "The Madani Government has intervened directly with relevant stakeholders to accelerate the completion of 'sick' PR1MA affordable housing projects.",
          'Between January to May 2023, the Madani Government has succeeded in completing 8 out of 17 identified sick PR1MA projects, with the remainder expected to be complete by 2024.',
        ],
      },
      {
        question: '7,000 New Affordable Housing Units under SASaR',
        answer: [
          'The Madani Government has made over RM500 million available to maintain and construct Malaysian Armed Forces (MAF) personnel homes, including 7,000 new affordable housing units.',
        ],
      },
      {
        question: "Emergency Funding for 'Sick' PPRs",
        answer: [
          "The Madani Government has allocated RM35 million of funding and facilitated the use of limited tender for the 'Kita Untuk Kita' PPR initiative.",
          'The initiative aims to accelerate the repair of faltering PPR infrastructure in Selangor and Kuala Lumpur.',
        ],
      },
      {
        question: 'Transition of Government Buildings to Solar Energy',
        answer: [
          'The Madani Government has allocated RM50 million of funding to upgrade and modify government buildings by end of 2023, so that the majority of electricity production is self-generated via solar. ',
          "The Government's goal is to reduce electricity bills and costs borne by the taxpayer, and contribute to Malaysia's ongoing green transition.",
        ],
      },
      {
        question: 'High-Powered Portable Pumps for Flood Response',
        answer: [
          'In December, the Madani Government spent RM12 million to provide 6 high-powered portable pumps to the Kelantan State Government. This was done in order to aid in the removal of stagnant floodwater in Pasir Mas.',
        ],
      },
      {
        question: 'RM1.5 billion for Kelantan Water Infrastructure',
        answer: [
          'The Madani Government has approved a combined RM1.5 billion in funding to resolve water supply issues in Kelantan.',
        ],
      },
      {
        question: 'RM11 billion Savings on ECRL',
        answer: [
          'The Madani Government announced the reduction in development cost of the ECRL from RM85.97 billion to RM74.96 billion, after the implementation of total value engineering (VM).',
          'By proceeding with the ECRL at a reduced cost, the Madani Government hopes to increase connectivity on a 665km stretch between Kota Bharu and Port Klang.',
        ],
      },
      {
        question: 'RM2.8 billion for Prasarana Equipment Replacement',
        answer: [
          'To address increasing cases of equipment failure, the Madani Government has provided Prasarana Malaysia with a RM2.8 billion allocation in order to replace faulty train/bus equipment and enable stockpiling of spare parts.',
          '',
        ],
      },
      {
        question: '7 New EV Charging Stations on PLUS',
        answer: [
          'Under the Madani Government, RM90 million has been allocated over a two-year period to build direct charging stations for EVs along the North-South Highway. ',
          'These stations will augment the existing stations in Ayer Keroh, Tapah, and Paka.',
        ],
      },
    ],
    [
      {
        question: '21,000kg of Food Supply for Orang Asli',
        answer: [
          'The Madani Government authorised the supply of 21,000kg of food to 1,400 Orang Asli families in Kelantan.',
          'The distribution of this food supply was undertaken by the Fire and Rescue Department, making use of helicopter equipment as villages were inaccessible via land after flooding. ',
        ],
      },
      {
        question: 'Citizenship via Malaysian Mothers',
        answer: [
          'The Madani Government has begun the process of amending Part III of the Federal Constitution to allow children born to Malaysian mothers abroad to obtain Malaysian citizenship.',
          'Separately, the Government has already resolved 8,288 out of 10,000 citizenship appeal cases.',
        ],
      },
      {
        question: "'Kill Switch' Policy for Banks",
        answer: [
          "The Madani Government has instructed Bank Negara to enforce a 'kill switch' policy for all banking institutions, enabling users to immediately freeze their accounts and cards in the event of suspicious activity.",
          'The move has been pursued as a measure combat online fraud and scams.',
        ],
      },
      {
        question: "'Second Chance' Policy for Bankrupts",
        answer: [
          "The Madani Government has implemented a 'Second Chance' policy for insolvents in Malaysia.",
          'Bankruptcy cases below RM50,000 have been automatically discharged, with amendments to the Insolvency Act passed in order to allow speedier discharge of bankruptcies in the future.',
        ],
      },
      {
        question: '289 Additional Schools Catering to Special Needs Children',
        answer: [
          'The Madani Government has increased the number of primary and secondary schools offering the Integrated Special Needs Programme from 2,343 to 2,632.',
          "This will allow further enforcement of the 'zero reject policy', and ensure that special needs children throughout the country have access to education.",
        ],
      },
      {
        question: 'New Affordable Housing Quality Standards',
        answer: [
          "The Madani Government has mandated that 220,000 new or incomplete affordable housing projects must abide by certain 'livability' and 'comfort' standards.",
          'Meeting these standards involve passing windtunnel tests, sun-path analysis, and thermal comfort analysis.',
        ],
      },
      {
        question: 'Regulation of Vapes',
        answer: [
          'The Madani Government has legalised e-cigarettes and vapes, allowing for the legal distribution and tighter regulation of such devices.',
          'This will enable the Government to enforce minimum health & safety standards on relevant products, and more closely monitor and intervene on vape-related health issues.',
        ],
      },
      {
        question:
          'Reactivation of Penang Bumiputera Development Council (PBDC)',
        answer: [
          "The Madani Government has reactivated the PBDC under the Prime Minister's Department. ",
          'The PBDC works closely with the Penang State Government to accelerate the development of the Penang Malay community, and focuses on the development of wakaf land and bumiputera property ownership.',
        ],
      },
      {
        question: 'RM100 million Flood Allocation for Kelantan and Terengganu',
        answer: [
          'The Madani Government allocated RM100 million to Kelantan and RM100 million to Terengganu to provide flood relief to those affected by the December floods.',
        ],
      },
      {
        question: 'Free Pneumococcal Vaccines for Children',
        answer: [
          'The Madani Government has introduced a one-year period of free pneumococcal vaccinations for children born between 2018 and 2019.',
          'This initiative seeks to close the gap present in the previous National Immunisation Programme, whereby children born between 2018 and 2019 were not covered.',
        ],
      },
    ],
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return width > 1280 ? (
    // ========================================================================================================================================
    // ========================================================================================================================================
    // web version here
    // ========================================================================================================================================
    // ========================================================================================================================================
    <div className='flex flex-col justify-center min-h-full min-w-full absolute top-0'>
      <div
        className='relative w-full h-screen bg-cover flex flex-col  text-tp-white p-[5%]'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <div className='flex justify-end items-start'>
          <div className='w-[50%] text-title p-[10%]'>
            The Madani Government has administered Malaysia for just over 6
            months.
          </div>
          <div className='w-[50%] text-2xl/[40px] p-[10%]'>
            In that short period, multiple initiatives have been rolled out to
            address the economic pressures that currently weigh down on the
            Malaysian rakyat.
            <br />
            <br />
            The following snapshot outlines relevant initiatives that the Madani
            Government has already undertaken to help enable dignified work,
            dignified wages, and a dignified life
          </div>
        </div>
        <div className=' w-full text-hero text-tp-white bottom-[10%]'>
          Pencapaian Madani.
        </div>
      </div>
      <div className='flex flex-col bg-tp-white text-tp-dark items-center '>
        <div className='text-title px-[25%] py-32 text-center'>
          If these policy objectives resonate with you, undilah perpaduan.
        </div>
        <div className='flex flex-row items-start justify-start w-full mb-40'>
          <div className='  flex flex-col gap-5 w-[50%] px-[5%]'>
            <button
              onClick={() => handleActivePencapaian(0)}
              className={` ${
                activePencapaian === 0
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center  `}
            >
              Jobs
            </button>
            <button
              onClick={() => handleActivePencapaian(1)}
              className={` ${
                activePencapaian === 1
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Cost of Living
            </button>
            <button
              onClick={() => handleActivePencapaian(2)}
              className={` ${
                activePencapaian === 2
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Infrastructure
            </button>
            <button
              onClick={() => handleActivePencapaian(3)}
              className={` ${
                activePencapaian === 3
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Welfare
            </button>
          </div>
          <div className='w-[50%] px-[5%] flex flex-col'>
            {pencapaianMadani[activePencapaian].map((item, index, list) => {
              return (
                <div
                  className='flex flex-col hover:cursor-pointer'
                  onClick={() => setPencapaianOpen(index)}
                >
                  <div className='flex flex-row items-center justify-between'>
                    <div className='text-xl w-[60%]'>{item.question}</div>
                    <div className='text-title'>
                      {pencapaianOpen === index ? '-' : '+'}
                    </div>
                  </div>
                  {pencapaianOpen === index
                    ? item.answer.map((paragraph, paragraphIndex, allPara) => {
                        return (
                          <div
                            className={`text-sm pr-[15%] ${
                              paragraphIndex === allPara.length - 1
                                ? 'mb-5'
                                : 'mb-10'
                            }`}
                          >
                            {paragraph}
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    // ========================================================================================================================================
    // ========================================================================================================================================
    // mobile version here
    // ========================================================================================================================================
    // ========================================================================================================================================
    <div className='flex flex-col justify-center min-h-full min-w-full absolute top-0'>
      {/* ======================================================================================================================================== */}
      {/* HERO */}
      {/* ======================================================================================================================================== */}
      <div
        className='relative w-full h-screen bg-cover bg-center text-tp-white py-[20%] px-[5%] flex flex-col justify-between'
        style={{ backgroundImage: 'url(images/volunteer1.png)' }}
      >
        <div>
          <div className='text-4xl mb-10'>TAWARAN MADANI</div>
          <div className=' text-2xl/[40px] mb-10'>
            The Madani Government has administered Malaysia for just over 6
            months.
          </div>
          <div className='p-[5%]'>
            In that short period, multiple initiatives have been rolled out to
            address the economic pressures that currently weigh down on the
            Malaysian rakyat. The following snapshot outlines relevant
            <br />
            <br />
            initiatives that the Madani Government has already undertaken to
            help enable dignified work, dignified wages, and a dignified life
          </div>
        </div>
        <div className='text-[72px]/[80px]'>Pencapaian Madani.</div>
      </div>
      <div className='bg-tp-white flex flex-col '>
        <div className='text-title px-[5%] py-32 text-center'>
          If these policy objectives resonate with you, undilah perpaduan.
        </div>
        <div className='flex flex-col justify-start w-full mb-20'>
          <div className=' flex flex-col gap-5 px-[5%] mb-20'>
            <button
              onClick={() => handleActivePencapaian(0)}
              className={` ${
                activePencapaian === 0
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center  `}
            >
              Jobs
            </button>
            <button
              onClick={() => handleActivePencapaian(1)}
              className={` ${
                activePencapaian === 1
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Cost of Living
            </button>
            <button
              onClick={() => handleActivePencapaian(2)}
              className={` ${
                activePencapaian === 2
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Infrastructure
            </button>
            <button
              onClick={() => handleActivePencapaian(3)}
              className={` ${
                activePencapaian === 3
                  ? 'bg-tp-red text-tp-white'
                  : 'bg-tp-blackTranslucent text-tp-gray'
              } py-5 px-10 text-2xl rounded-full justify-center items-center `}
            >
              Welfare
            </button>
          </div>
          <div className=' px-[5%] flex flex-col'>
            {pencapaianMadani[activePencapaian].map((item, index, list) => {
              return (
                <div
                  className='flex flex-col hover:cursor-pointer'
                  onClick={() => setPencapaianOpen(index)}
                >
                  <div className='flex flex-row items-center justify-between mb-3'>
                    <div className='text-xl w-[80%]'>{item.question}</div>
                    <div className='text-title'>
                      {pencapaianOpen === index ? '-' : '+'}
                    </div>
                  </div>
                  {pencapaianOpen === index
                    ? item.answer.map((paragraph, paragraphIndex, allPara) => {
                        return (
                          <div
                            className={`text-sm pr-[15%] ${
                              paragraphIndex === allPara.length - 1
                                ? 'mb-5'
                                : 'mb-10'
                            }`}
                          >
                            {paragraph}
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
};

export default Volunteer;

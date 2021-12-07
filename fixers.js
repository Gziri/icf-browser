const arr = [
  {
    title: "BODY FUNCTIONS",
    initial: "b",
    description:
      "Broad ranges of percentages are provided for those cases in which calibrated assessment instruments or other standards are available to quantify the impairment in body function. <br> For example, when no impairment or complete impairment in body function is coded, this scaling may have margin of error of up to 5%. Moderate impairment is generally up to half of the scale of total impairment. The percentages are to be calibrated in different domains with reference to population standards as percentiles. For this quantification to be used in a uniform manner, assessment procedures need to be developed through research. <br> For a further explanation of coding conventions in ICF, refer to Annex 2.",
    children: [
      {
        title: "MENTAL FUNCTIONS",
        initial: "b1",
        description:
          "This chapter is about the functions of the brain: both global mental functions, such as consciousness, energy and drive, and specific mental functions, such as memory, language and calculation mental functions.",
        children: [
          {
            title: "Global mental functions",
            initial: "b110-139",
            description: "",
            children: [
              {
                title: "Consciousness functions",
                initial: "b110",
                description:
                  "General mental functions of the state of awareness and alertness, including the clarity and continuity of the wakeful state. \n Inclusions: functions of the state, continuity and quality of consciousness; loss of consciousness; coma, vegetative states, fugues, trance states, possession states, drug-induced altered consciousness, delirium, stupor \n Exclusions: orientation functions (b114); energy and drive functions (b130); sleep functions (b134)",
                children: [
                  {
                    title: "State of consciousness",
                    initial: "b1100",
                    description:
                      "Mental functions that when altered produce states such as clouding of consciousness, stupor or coma.",
                    children: "",
                    key: 5,
                    isLeaf: true,
                  },
                  {
                    title: "Continuity of consciousness",
                    initial: "b1101",
                    description:
                      "Mental functions that produce sustained wakefulness, alertness and awareness and, when disrupted, may produce fugue, trance or other similar states.",
                    children: "",
                    key: 6,
                    isLeaf: true,
                  },
                  {
                    title: "Quality of consciousness",
                    initial: "b1102",
                    description:
                      "Mental functions that when altered effect changes in the character of wakeful, alert and aware sentience, such as druginduced altered states or delirium.",
                    children: "",
                    key: 7,
                    isLeaf: true,
                  },
                  {
                    title: "Consciousness functions, other specified",
                    initial: "b1108",
                    description: "",
                    children: "",
                    key: 8,
                    isLeaf: true,
                  },
                  {
                    title: "Consciousness functions, unspecified",
                    initial: "b1109",
                    description: "",
                    children: "",
                    key: 9,
                    isLeaf: true,
                  },
                ],
                key: 4,
                isLeaf: false,
              },
              {
                title: "Orientation functions",
                initial: "b114",
                description:
                  "General mental functions of knowing and ascertaining one's relation to time, to place, to self, to others, to objects and to space. \n Inclusions: functions of orientation to time, place and person; orientation to self and others; disorientation to time, place and person \n Exclusions: consciousness functions (b110); attention functions (b140); memory functions (b144)",
                children: [
                  {
                    title: "Orientation to time",
                    initial: "b1140",
                    description:
                      "Mental functions that produce awareness of time of the day, day of the week, date, month and year.",
                    children: "",
                    key: 11,
                    isLeaf: true,
                  },
                  {
                    title: "Orientation to place",
                    initial: "b1141",
                    description:
                      "Mental functions that produce awareness of one's location, such as one's immediate surroundings, one's town or country.",
                    children: "",
                    key: 12,
                    isLeaf: true,
                  },
                  {
                    title: "Orientation to person",
                    initial: "b1142",
                    description:
                      "Mental functions that produce awareness of one's own identity and of individuals in the immediate environment.",
                    children: [
                      {
                        title: "Orientation to self",
                        initial: "b11420",
                        description:
                          "Mental functions that produce awareness of one's own identity.",
                        children: "",
                        key: 14,
                        isLeaf: true,
                      },
                      {
                        title: "Orientation to others",
                        initial: "b11421",
                        description:
                          "Mental functions that produce awareness of the identity of other individuals in one's immediate environment.",
                        children: "",
                        key: 15,
                        isLeaf: true,
                      },
                      {
                        title: "Orientation to person, other specified",
                        initial: "b11428",
                        description: "",
                        children: "",
                        key: 16,
                        isLeaf: true,
                      },
                      {
                        title: "Orientation to person, unspecified",
                        initial: "b11429",
                        description: "",
                        children: "",
                        key: 17,
                        isLeaf: true,
                      },
                    ],
                    key: 13,
                    isLeaf: false,
                  },
                  {
                    title: "Orientation to objects",
                    initial: "b1143",
                    description:
                      "Mental functions that produce awareness of objects or features of objects.",
                    children: "",
                    key: 18,
                    isLeaf: true,
                  },
                  {
                    title: "Orientation to space",
                    initial: "b1144",
                    description:
                      "Mental functions that produce awareness of oneâ€™s body in relation to the immediate physical space.",
                    children: "",
                    key: 19,
                    isLeaf: true,
                  },
                  {
                    title: "Orientation functions, other specified",
                    initial: "b1148",
                    description: "",
                    children: "",
                    key: 20,
                    isLeaf: true,
                  },
                  {
                    title: "Orientation functions, unspecified",
                    initial: "b1149",
                    description: "",
                    children: "",
                    key: 21,
                    isLeaf: true,
                  },
                ],
                key: 10,
                isLeaf: false,
              },
              {
                title: "Intellectual functions",
                initial: "b117",
                description:
                  "General mental functions, required to understand and constructively integrate the various mental functions including all cognitive functions and their development over the life span. \n Inclusions: functions of intellectual growth; intellectual retardation, mental retardation, dementia \n Exclusions: memory functions (b144); thought functions (b160); higher level cognitive functions (b164)",
                children: "",
                key: 22,
                isLeaf: true,
              },
              {
                title: "Global psychosocial functions",
                initial: "b122",
                description:
                  "General mental functions, as they develop over the life span, required to understand and constructively integrate the mental functions that lead to the formation of the personal skills needed to establish reciprocal social interactions, in terms of both meaning and purpose.\n Inclusions: such as in autism",
                children: "",
                key: 23,
                isLeaf: true,
              },
              {
                title: "Temperament and personality functions",
                initial: "b126",
                description:
                  "General mental functions of constitutional disposition of the individual to react in a particular way to situations, including the set of mental characteristics that makes the individual distinct from others. \n Inclusions: functions of extraversion, introversion, agreeableness, conscientiousness, psychic and emotional stability, and openness to experience; optimism; novelty seeking; confidence; trustworthiness\n Exclusions: intellectual functions (b117); energy and drive functions (b130); psychomotor functions (b147); emotional functions (b152)",
                children: [
                  {
                    title: "Extraversion",
                    initial: "b1260",
                    description:
                      "Mental functions that produce a personal disposition that is outgoing, sociable and demonstrative, as contrasted to being shy, restricted and inhibited.",
                    children: "",
                    key: 25,
                    isLeaf: true,
                  },
                  {
                    title: "Agreeableness",
                    initial: "b1261",
                    description:
                      "Mental functions that produce a personal disposition that is cooperative, amicable, and accomodating, as contrasted to being unfriendly, oppositional and defiant.",
                    children: "",
                    key: 26,
                    isLeaf: true,
                  },
                  {
                    title: "Conscientiousness",
                    initial: "b1262",
                    description:
                      "Mental functions that produce a personal disposition such as in being hard-working, methodical and scrupulous, as contrasted to mental functions producing dispositions such as being lazy, unreliable and irresponsible.",
                    children: "",
                    key: 27,
                    isLeaf: true,
                  },
                  {
                    title: "Psychic stability",
                    initial: "b1263",
                    description:
                      "Mental functions that produce a personal disposition that is even-tempered, calm and composed, as contrasted to being irritable, worried, erratic and moody.",
                    children: "",
                    key: 28,
                    isLeaf: true,
                  },
                  {
                    title: "Openness to experience",
                    initial: "b1264",
                    description:
                      "Mental functions that produce a personal disposition that is curious, imaginative, inquisitive and experience-seeking, as contrasted to being stagnant, inattentive and emotionally inexpressive.",
                    children: "",
                    key: 29,
                    isLeaf: true,
                  },
                  {
                    title: "Optimism",
                    initial: "b1265",
                    description:
                      "Mental functions that produce a personal disposition that is cheerful, buoyant and hopeful, as contrasted to being downhearted, gloomy and despairing.",
                    children: "",
                    key: 30,
                    isLeaf: true,
                  },
                  {
                    title: "Confidence",
                    initial: "b1266",
                    description:
                      "Mental functions that produce a personal disposition that is self-assured, bold and assertive, as contrasted to being timid, insecure and self effacing.",
                    children: "",
                    key: 31,
                    isLeaf: true,
                  },
                  {
                    title: "Trustworthiness",
                    initial: "b1267",
                    description:
                      "Mental functions that produce a personal disposition that is dependable and principled, as contrasted to being deceitful and antisocial.",
                    children: "",
                    key: 32,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Temperament and personality functions, other specified",
                    initial: "b1268",
                    description: "",
                    children: "",
                    key: 33,
                    isLeaf: true,
                  },
                  {
                    title: "Temperament and personality functions, unspecified",
                    initial: "b1269",
                    description: "",
                    children: "",
                    key: 34,
                    isLeaf: true,
                  },
                ],
                key: 24,
                isLeaf: false,
              },
              {
                title: "Energy and drive functions",
                initial: "b130",
                description:
                  "General mental functions of physiological and psychological mechanisms that cause the individual to move towards satisfy specific needs and general goals in a persistent manner. \n Inclusions: functions of energy level, motivation, appetites, craving (including craving for substances that can be abused), and impulse control \n Exclusions: consciousness functions (b110); temperament and personality functions (b126); sleep functions (b134); psychomotor functions (b147); emotional functions (b152)",
                children: [
                  {
                    title: "Energy level",
                    initial: "b1300",
                    description:
                      "Mental functions that produce vigour and stamina.",
                    children: "",
                    key: 36,
                    isLeaf: true,
                  },
                  {
                    title: "Motivation",
                    initial: "b1301",
                    description:
                      "Mental functions that produce the incentive to act; the conscious or unconscious driving force for action.",
                    children: "",
                    key: 37,
                    isLeaf: true,
                  },
                  {
                    title: "Appetites",
                    initial: "b1302",
                    description:
                      "Mental functions that produce a natural longing or desire, especially the natural and recurring desire for food and drink.",
                    children: "",
                    key: 38,
                    isLeaf: true,
                  },
                  {
                    title: "Craving",
                    initial: "b1303",
                    description:
                      "Mental functions that produce the urge to consume substances, including substances that can be abused.",
                    children: "",
                    key: 39,
                    isLeaf: true,
                  },
                  {
                    title: "Impulse control",
                    initial: "b1304",
                    description:
                      "Mental functions that regulate and resist sudden intense urges to do something.",
                    children: "",
                    key: 40,
                    isLeaf: true,
                  },
                  {
                    title: "Energy and drive functions, other specified",
                    initial: "b1308",
                    description: "",
                    children: "",
                    key: 41,
                    isLeaf: true,
                  },
                  {
                    title: "Energy and drive functions, unspecified",
                    initial: "b1309",
                    description: "",
                    children: "",
                    key: 42,
                    isLeaf: true,
                  },
                ],
                key: 35,
                isLeaf: false,
              },
              {
                title: "Sleep functions",
                initial: "b134",
                description:
                  "General mental functions of periodic, reversible and selective physical and mental disengagement from one's immediate environment accompanied by characteristic physiological changes. \n Inclusions: functions of amount of sleeping, and onset, maintenance and quality of sleep; functions involving the sleep cycle, such as in insomnia, hypersomnia and narcolepsy \n Exclusions: consciousness functions (b110); energy and drive functions (b130); attention functions (b140); psychomotor functions (b147)",
                children: [
                  {
                    title: "Amount of sleep",
                    initial: "b1340",
                    description:
                      "Mental functions involved in the time spent in the state of sleep in the diurnal cycle or circadian rhythm.",
                    children: "",
                    key: 44,
                    isLeaf: true,
                  },
                  {
                    title: "Onset of sleep",
                    initial: "b1341",
                    description:
                      "Mental functions that produce the transition between wakefulness and sleep.",
                    children: "",
                    key: 45,
                    isLeaf: true,
                  },
                  {
                    title: "Maintenance of sleep",
                    initial: "b1342",
                    description:
                      "Mental functions that sustain the state of being asleep.",
                    children: "",
                    key: 46,
                    isLeaf: true,
                  },
                  {
                    title: "Quality of sleep",
                    initial: "b1343",
                    description:
                      "Mental functions that produce the natural sleep leading to optimal physical and mental rest and relaxation.",
                    children: "",
                    key: 47,
                    isLeaf: true,
                  },
                  {
                    title: "Functions involving the sleep cycle",
                    initial: "b1344",
                    description:
                      "Mental functions that produce rapid eye movement (REM) sleep (associated with dreaming) and non-rapid eye movement sleep (NREM) (characterized by the traditional concept of sleep as a time of decreased physiological and psychological activity).",
                    children: "",
                    key: 48,
                    isLeaf: true,
                  },
                  {
                    title: "Sleep functions, other specified",
                    initial: "b1348",
                    description: "",
                    children: "",
                    key: 49,
                    isLeaf: true,
                  },
                  {
                    title: "Sleep functions, unspecified",
                    initial: "b1349",
                    description: "",
                    children: "",
                    key: 50,
                    isLeaf: true,
                  },
                ],
                key: 43,
                isLeaf: false,
              },
              {
                title:
                  "Global mental functions, other specified and unspecified",
                initial: "b139",
                description: "",
                children: "",
                key: 51,
                isLeaf: true,
              },
            ],
            key: 3,
            isLeaf: false,
          },
          {
            title: "Specific mental functions",
            initial: "b140-189",
            description: "",
            children: [
              {
                title: "Attention functions",
                initial: "b140",
                description:
                  "Specific mental functions of focusing on an external stimulus or internal experience for the required period of time. \n Inclusions: functions of sustaining attention, shifting attention, dividing attention, sharing attention; concentration; distractibility \n Exclusions: consciousness functions (b110); energy and drive functions (b130); sleep functions (b134); memory functions (b144); psychomotor functions (b147); perceptual functions (b156)",
                children: [
                  {
                    title: "Sustaining attention",
                    initial: "b1400",
                    description:
                      "Mental functions that produce concentration for the period of time required.",
                    children: "",
                    key: 54,
                    isLeaf: true,
                  },
                  {
                    title: "Shifting attention",
                    initial: "b1401",
                    description:
                      "Mental functions that permit refocusing concentration from one stimulus to another.",
                    children: "",
                    key: 55,
                    isLeaf: true,
                  },
                  {
                    title: "Dividing attention",
                    initial: "b1402",
                    description:
                      "Mental functions that permit focusing on two or more stimuli at the same time.",
                    children: "",
                    key: 56,
                    isLeaf: true,
                  },
                  {
                    title: "Sharing attention",
                    initial: "b140",
                    description:
                      "Mental functions that permit focusing on the same stimulus by two or more people, such as a child and a caregiver both focusing on a toy.",
                    children: "",
                    key: 57,
                    isLeaf: true,
                  },
                  {
                    title: "Attention functions, other specified",
                    initial: "b1408",
                    description: "",
                    children: "",
                    key: 58,
                    isLeaf: true,
                  },
                  {
                    title: "Attention functions, unspecified",
                    initial: "b1409",
                    description: "",
                    children: "",
                    key: 59,
                    isLeaf: true,
                  },
                ],
                key: 53,
                isLeaf: false,
              },
              {
                title: "Memory functions",
                initial: "b144",
                description:
                  "Specific mental functions of registering and storing information and retrieving it as needed. \n Inclusions: functions of short-term and long-term memory, immediate, recent and remote memory; memory span; retrieval of memory; remembering; functions used in recalling and learning, such as in nominal, selective and dissociative amnesia \n Exclusions: consciousness functions (b110); orientation functions (b114), intellectual functioning (b117), attention functions (b140), perceptual functions (b156); thought functions (b160), higher-level cognitive functions (b164), mental functions of language (b167); calculation functions (b172)",
                children: [
                  {
                    title: "Short-term memory",
                    initial: "b1440",
                    description:
                      "Mental functions that produce a temporary, disruptable memory store of around 30 seconds duration from which information is lost if not consolidated into long-term memory.",
                    children: "",
                    key: 61,
                    isLeaf: true,
                  },
                  {
                    title: "Long-term memory",
                    initial: "b1441",
                    description:
                      "Mental functions that produce a memory system permitting the long-term storage of information from short-term memory and both autobiographical memory for past events and semantic memory for language and facts.",
                    children: "",
                    key: 62,
                    isLeaf: true,
                  },
                  {
                    title: "Retrieval and processing of memory",
                    initial: "b1442",
                    description:
                      "Specific mental functions of recalling information stored in long-term memory and bringing it into awareness.",
                    children: "",
                    key: 63,
                    isLeaf: true,
                  },
                  {
                    title: "Working memory",
                    initial: "b144",
                    description:
                      "Mental functions that compare and process information retrieved from both short-term and long-term memory.",
                    children: "",
                    key: 64,
                    isLeaf: true,
                  },
                  {
                    title: "Memory functions, other specified",
                    initial: "b1448",
                    description: "",
                    children: "",
                    key: 65,
                    isLeaf: true,
                  },
                  {
                    title: "Memory functions, unspecified",
                    initial: "b1449",
                    description: "",
                    children: "",
                    key: 66,
                    isLeaf: true,
                  },
                ],
                key: 60,
                isLeaf: false,
              },
              {
                title: "Psychomotor functions",
                initial: "b147",
                description:
                  "Specific mental functions of control over both motor and psychological events at the body level. \n Inclusions: functions of psychomotor control, such as in psychomotor retardation, excitement and agitation, posturing, catatonia, negativism, ambitendency, echopraxia and echolalia; quality of psychomotor function. \n Exclusions: consciousness functions (b110); orientation functions (b114); intellectual functions (b117); energy and drive functions (b130); attention functions (b140); mental functions of language (b167); mental function of sequencing complex movements (b176)",
                children: [
                  {
                    title: "Psychomotor control",
                    initial: "b1470",
                    description:
                      "Mental functions that regulate the speed of behaviour or response time that involves both motor and psychological components, such as in disruption of control producing psychomotor retardation (moving and speaking slowly; decrease in gesturing and spontaneity) or psychomotor excitement (excessive behavioural and cognitive activity, usually nonproductive and often in response to inner tension as in toe-tapping, hand-wringing, agitation, or restlessness).",
                    children: "",
                    key: 68,
                    isLeaf: true,
                  },
                  {
                    title: "Quality of psychomotor functions",
                    initial: "b1471",
                    description:
                      "Mental functions that produce nonverbal behaviour in the proper sequence and character of its subcomponents, such as hand and eye coordination, or gait.",
                    children: "",
                    key: 69,
                    isLeaf: true,
                  },
                  {
                    title: "Psychomotor functions, other specified",
                    initial: "b1478",
                    description: "",
                    children: "",
                    key: 70,
                    isLeaf: true,
                  },
                  {
                    title: "Psychomotor functions, unspecified",
                    initial: "b1479",
                    description: "",
                    children: "",
                    key: 71,
                    isLeaf: true,
                  },
                ],
                key: 67,
                isLeaf: false,
              },
              {
                title: "Emotional functions",
                initial: "b152",
                description:
                  "Specific mental functions related to the feeling and affective components of the processes of the mind. \n Inclusions: functions of appropriateness of emotion, regulation and range of emotion; affect, sadness, happiness, love, fear, anger, hate, tension, anxiety, joy, sorrow; lability of emotion; flattening of affect \n Exclusions: temperament and personality functions (b126); energy and drive functions (b130)",
                children: [
                  {
                    title: "Appropriateness of emotion",
                    initial: "b1520",
                    description:
                      "Mental functions that produce congruence of feeling or affect with the situation, such as happiness at receiving good news.",
                    children: "",
                    key: 73,
                    isLeaf: true,
                  },
                  {
                    title: "Regulation of emotion",
                    initial: "b1521",
                    description:
                      "Mental functions that control the experience and display of affect.",
                    children: "",
                    key: 74,
                    isLeaf: true,
                  },
                  {
                    title: "Range of emotion",
                    initial: "b1522",
                    description:
                      "Mental functions that produce the spectrum of experience of arousal of affect or feelings such as love, hate, anxiousness, sorrow, joy, fear and anger.",
                    children: "",
                    key: 75,
                    isLeaf: true,
                  },
                  {
                    title: "Emotional functions, other specified",
                    initial: "b1528",
                    description: "",
                    children: "",
                    key: 76,
                    isLeaf: true,
                  },
                  {
                    title: "Emotional functions, unspecified",
                    initial: "b1529",
                    description: "",
                    children: "",
                    key: 77,
                    isLeaf: true,
                  },
                ],
                key: 72,
                isLeaf: false,
              },
              {
                title: "Perceptual functions",
                initial: "b156",
                description:
                  "Specific mental functions of recognizing and interpreting sensory stimuli. \n Inclusions: functions of auditory, visual, olfactory, gustatory, tactile and visuospatial perception, such as in hallucination or illusion \n Exclusions: consciousness functions (b110); orientation functions (b114); attention functions (b140); memory functions (b144); mental functions of language (b167); seeing and related functions (b210-b229), hearing and vestibular functions (b230-b249); additional sensory functions (b250-b279)",
                children: [
                  {
                    title: "Auditory perception",
                    initial: "b1560",
                    description:
                      "Mental functions involved in discriminating sounds, tones, pitches and other acoustic stimuli.",
                    children: "",
                    key: 79,
                    isLeaf: true,
                  },
                  {
                    title: "Visual perception",
                    initial: "b1561",
                    description:
                      "Mental functions involved in discriminating shape, size, colour and other ocular stimuli.",
                    children: "",
                    key: 80,
                    isLeaf: true,
                  },
                  {
                    title: "Olfactory perception",
                    initial: "b1562",
                    description:
                      "Mental functions involved in distinguishing differences in smells.",
                    children: "",
                    key: 81,
                    isLeaf: true,
                  },
                  {
                    title: "Gustatory perception",
                    initial: "b1563",
                    description:
                      "Mental functions involved in distinguishing differences in tastes, such as sweet, sour, salty and bitter stimuli, detected by the tongue.",
                    children: "",
                    key: 82,
                    isLeaf: true,
                  },
                  {
                    title: "Tactile perception",
                    initial: "b1564",
                    description:
                      "Mental functions involved in distinguishing differences in texture, such as rough or smooth stimuli, detected by touch.",
                    children: "",
                    key: 83,
                    isLeaf: true,
                  },
                  {
                    title: "Visuospatial perception",
                    initial: "b1565",
                    description:
                      "Mental function involved in distinguishing by sight the relative position of objects in the environment or in relation to oneself. \n \n Exclusions: orientation to objects (b1143)",
                    children: "",
                    key: 84,
                    isLeaf: true,
                  },
                  {
                    title: "Perceptual functions, other specified",
                    initial: "b1568",
                    description: "",
                    children: "",
                    key: 85,
                    isLeaf: true,
                  },
                  {
                    title: "Perceptual functions, unspecified",
                    initial: "b1569",
                    description: "",
                    children: "",
                    key: 86,
                    isLeaf: true,
                  },
                ],
                key: 78,
                isLeaf: false,
              },
              {
                title: "Thought functions",
                initial: "b160",
                description:
                  "Specific mental functions related to the ideational component of the mind. \n Inclusions: functions of pace, form, control and content of thought; goaldirected thought functions, non-goal directed thought functions; logical thought functions, such as pressure of thought, flight of ideas, thought block, incoherence of thought, tangentiality, circumstantiality, delusions, obsessions and compulsions \n Exclusions: intellectual functions (b117); memory functions (b144); psychomotor functions (b147); perceptual functions (b156); higher-level cognitive functions (b164); mental functions of language (b167); calculation functions (b172)",
                children: [
                  {
                    title: "Pace of thought",
                    initial: "b1600",
                    description:
                      "Mental functions that govern speed of the thinking process.",
                    children: "",
                    key: 88,
                    isLeaf: true,
                  },
                  {
                    title: "Form of thought",
                    initial: "b1601",
                    description:
                      "Mental functions that organize the thinking process as to its coherence and logic. \n Inclusions: impairments of ideational perseveration, tangentiality and circumstantiality",
                    children: "",
                    key: 89,
                    isLeaf: true,
                  },
                  {
                    title: "Content of thought",
                    initial: "b1602",
                    description:
                      "Mental functions consisting of the ideas that are present in the thinking process and what is being conceptualized. \n Inclusions: impairments of delusions, overvalued ideas and somatization",
                    children: "",
                    key: 90,
                    isLeaf: true,
                  },
                  {
                    title: "Control of thought",
                    initial: "b1603",
                    description:
                      "Mental functions consisting of the ideas that are present in the thinking process and what is being conceptualized. \n Inclusions: impairments of delusions, overvalued ideas and somatization",
                    children: "",
                    key: 91,
                    isLeaf: true,
                  },
                  {
                    title: "Thought functions, other specified",
                    initial: "b1608",
                    description: "",
                    children: "",
                    key: 92,
                    isLeaf: true,
                  },
                  {
                    title: "Thought functions, unspecified",
                    initial: "b1609",
                    description: "",
                    children: "",
                    key: 93,
                    isLeaf: true,
                  },
                ],
                key: 87,
                isLeaf: false,
              },
              {
                title: "Higher-level cognitive functions",
                initial: "b164",
                description:
                  "Specific mental functions especially dependent on the frontal lobes of the brain, including complex goal-directed behaviours such as decision-making, abstract thinking, planning and carrying out plans, mental flexibility, and deciding which behaviours are appropriate under what circumstances; often called executive functions. \n Inclusions: functions of abstraction and organization of ideas; time management, insight and judgement; concept formation, categorization and cognitive flexibility \n Exclusions: memory functions (b144); thought functions (b160); mental functions of language (b167); calculation functions (b172)",
                children: [
                  {
                    title: "Abstraction",
                    initial: "b1640",
                    description:
                      "Mental functions of creating general ideas, qualities or characteristics out of, and distinct from, concrete realities, specific objects or actual instances.",
                    children: "",
                    key: 95,
                    isLeaf: true,
                  },
                  {
                    title: "Organization and planning",
                    initial: "b1641",
                    description:
                      "Mental functions of coordinating parts into a whole, of systematizing; the mental function involved in developing a method of proceeding or acting.",
                    children: "",
                    key: 96,
                    isLeaf: true,
                  },
                  {
                    title: "Time management",
                    initial: "b1642",
                    description:
                      "Mental functions of ordering events in chronological sequence, allocating amounts of time to events and activities.",
                    children: "",
                    key: 97,
                    isLeaf: true,
                  },
                  {
                    title: "Cognitive flexibility",
                    initial: "b1643",
                    description:
                      "Mental functions of changing strategies, or shifting mental sets, especially as involved in problem-solving.",
                    children: "",
                    key: 98,
                    isLeaf: true,
                  },
                  {
                    title: "Insight",
                    initial: "b1644",
                    description:
                      "Mental functions of awareness and understanding of oneself and one's behaviour.",
                    children: "",
                    key: 99,
                    isLeaf: true,
                  },
                  {
                    title: "Judgement",
                    initial: "b1645",
                    description:
                      "Mental functions involved in discriminating between and evaluating different options, such as those involved in forming an opinion.",
                    children: "",
                    key: 100,
                    isLeaf: true,
                  },
                  {
                    title: "Problem Solving",
                    initial: "b1646",
                    description:
                      "Mental functions of identifying, analysing, and integrating incongruent or conflicting information into a solution.",
                    children: "",
                    key: 101,
                    isLeaf: true,
                  },
                  {
                    title: "Higher-level cognitive functions, other specified",
                    initial: "b1648",
                    description: "",
                    children: "",
                    key: 102,
                    isLeaf: true,
                  },
                  {
                    title: "Higher-level cognitive functions, unspecified",
                    initial: "b1649",
                    description: "",
                    children: "",
                    key: 103,
                    isLeaf: true,
                  },
                ],
                key: 94,
                isLeaf: false,
              },
              {
                title: "Mental functions of language",
                initial: "b167",
                description:
                  "Specific mental functions of recognizing and using signs, symbols and other components of a language. \n Inclusions: functions of reception and decryption of spoken, written or other forms of language such as sign language; functions of expression of spoken, written, or other forms of language; integrative language functions spoken and written, such as involved in receptive, expressive, Broca's, Wernicke's and conduction aphasia \n Exclusions: attention functions (b140); memory functions (b144); perceptual functions (b156); thought functions (b160); higher-level cognitive functions (b164); calculation functions (b172); mental function of complex movements (b176); Chapter 2 Sensory Functions and Pain (b2); Chapter 3 Voice and Speech Functions (b3)",
                children: [
                  {
                    title: "Reception of language",
                    initial: "b1670",
                    description:
                      "Specific mental functions of decoding messages in spoken, written or other forms, such as sign language, to obtain their meaning.",
                    children: [
                      {
                        title: "Reception of spoken language",
                        initial: "b16700",
                        description:
                          "Mental functions of decoding spoken messages to obtain their meaning.",
                        children: "",
                        key: 106,
                        isLeaf: true,
                      },
                      {
                        title: "Reception of written language",
                        initial: "b16701",
                        description:
                          "Mental functions of decoding written messages to obtain their meaning.",
                        children: "",
                        key: 107,
                        isLeaf: true,
                      },
                      {
                        title: "Reception of sign language",
                        initial: "b16702",
                        description:
                          "Mental functions of decoding messages in languages that use signs made by hands and other movements, in order to obtain their meaning.",
                        children: "",
                        key: 108,
                        isLeaf: true,
                      },
                      {
                        title: "Reception of body language",
                        initial: "b16703",
                        description:
                          "Mental functions of decoding messages in body gestures made by hands or other movements, in order to obtain their meaning.",
                        children: "",
                        key: 109,
                        isLeaf: true,
                      },
                      {
                        title: "Reception of language, other specified",
                        initial: "b16708",
                        description: "",
                        children: "",
                        key: 110,
                        isLeaf: true,
                      },
                      {
                        title: "Reception of language, unspecified",
                        initial: "b16709",
                        description: "",
                        children: "",
                        key: 111,
                        isLeaf: true,
                      },
                    ],
                    key: 105,
                    isLeaf: false,
                  },
                  {
                    title: "Expression of language",
                    initial: "b1671",
                    description:
                      "Specific mental functions necessary to produce meaningful messages in spoken, written, signed or other forms of language.",
                    children: [
                      {
                        title: "Expression of spoken language",
                        initial: "b16710",
                        description:
                          "Mental functions necessary to produce meaningful spoken messages.",
                        children: "",
                        key: 113,
                        isLeaf: true,
                      },
                      {
                        title: "Expression of written language",
                        initial: "b16711",
                        description:
                          "Mental functions necessary to produce meaningful written messages.",
                        children: "",
                        key: 114,
                        isLeaf: true,
                      },
                      {
                        title: "Expression of sign language",
                        initial: "b16712",
                        description:
                          "Mental functions to produce meaningful messages in languages that use signs made by hands and other movements.",
                        children: "",
                        key: 115,
                        isLeaf: true,
                      },
                      {
                        title: "Expression of body language",
                        initial: "b16713",
                        description:
                          "Mental functions necessary to produce messages using body gestures made by hands or other movements.",
                        children: "",
                        key: 116,
                        isLeaf: true,
                      },
                      {
                        title: "Expression of language, other specified",
                        initial: "b16718",
                        description: "",
                        children: "",
                        key: 117,
                        isLeaf: true,
                      },
                      {
                        title: "Expression of language, unspecified",
                        initial: "b16719",
                        description: "",
                        children: "",
                        key: 118,
                        isLeaf: true,
                      },
                    ],
                    key: 112,
                    isLeaf: false,
                  },
                  {
                    title: "Integrative language functions",
                    initial: "b1672",
                    description:
                      "Mental functions that organize semantic and symbolic meaning, grammatical structure and ideas for the production of messages in spoken, written or other forms of language.",
                    children: "",
                    key: 119,
                    isLeaf: true,
                  },
                  {
                    title: "Mental functions of language, other specified",
                    initial: "b1678",
                    description: "",
                    children: "",
                    key: 120,
                    isLeaf: true,
                  },
                  {
                    title: "Mental functions of language",
                    initial: "b1679",
                    description: "Mental functions of language, unspecified",
                    children: "",
                    key: 121,
                    isLeaf: true,
                  },
                ],
                key: 104,
                isLeaf: false,
              },
              {
                title: "Calculation functions",
                initial: "b172",
                description:
                  "Specific mental functions of determination, approximation and manipulation of mathematical symbols and processes. \n Inclusions: functions of addition, subtraction, and other simple mathematical calculations; functions of complex mathematical operations \n Exclusions: attention functions (b140); memory functions (b144); thought functions (b160); higher-level cognitive functions (b164); mental functions of language (b167)",
                children: [
                  {
                    title: "Simple calculation",
                    initial: "b1720",
                    description:
                      "Mental functions of computing with numbers, such as addition, subtraction, multiplication and division.",
                    children: "",
                    key: 123,
                    isLeaf: true,
                  },
                  {
                    title: "Complex calculation",
                    initial: "b1721",
                    description:
                      "Mental functions of translating word problems into arithmetic procedures, translating mathematical formulas into arithmetic procedures, and other complex manipulations involving numbers.",
                    children: "",
                    key: 124,
                    isLeaf: true,
                  },
                  {
                    title: "Calculation functions, other specified",
                    initial: "b1728",
                    description: "",
                    children: "",
                    key: 125,
                    isLeaf: true,
                  },
                  {
                    title: "Calculation functions, unspecified",
                    initial: "b1729",
                    description: "",
                    children: "",
                    key: 126,
                    isLeaf: true,
                  },
                ],
                key: 122,
                isLeaf: false,
              },
              {
                title: "Mental function of sequencing complex movements",
                initial: "b176",
                description:
                  "Specific mental functions of determination, approximation and manipulation of mathematical symbols and processes. \n Inclusions: functions of addition, subtraction, and other simple mathematical calculations; functions of complex mathematical operations \n Exclusions: attention functions (b140); memory functions (b144); thought functions (b160); higher-level cognitive functions (b164); mental functions of language (b167)",
                children: "",
                key: 127,
                isLeaf: true,
              },
              {
                title: "Experience of self and time functions",
                initial: "b180",
                description:
                  "Specific mental functions related to the awareness of one's identity, one's body, one's position in the reality of one's environment and of time. \n Inclusions: functions of experience of self, body image and time",
                children: [
                  {
                    title: "Experience of self",
                    initial: "b1800",
                    description:
                      "Specific mental functions of being aware of one's own identity and one's position in the reality of one's environment around oneself. \n Inclusions: impairments such as depersonalization and derealization",
                    children: "",
                    key: 129,
                    isLeaf: true,
                  },
                  {
                    title: "Body image",
                    initial: "b1801",
                    description:
                      "Specific mental functions related to the representation and awareness of one's body. \n Inclusions: impairments such as phantom limb and feeling too fat or too thin",
                    children: "",
                    key: 130,
                    isLeaf: true,
                  },
                  {
                    title: "Experience of time",
                    initial: "b1802",
                    description:
                      "Specific mental functions of the subjective experiences related to the length and passage of time. \n Inclusions: impairments such as jamais vu and déjà vu",
                    children: "",
                    key: 131,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Experience of self and time functions, other specified",
                    initial: "b1808",
                    description: "",
                    children: "",
                    key: 132,
                    isLeaf: true,
                  },
                  {
                    title: "Experience of self and time functions, unspecified",
                    initial: "b1809",
                    description: "",
                    children: "",
                    key: 133,
                    isLeaf: true,
                  },
                ],
                key: 128,
                isLeaf: false,
              },
              {
                title:
                  "Specific mental functions, other specified and unspecified",
                initial: "b189",
                description: "",
                children: "",
                key: 134,
                isLeaf: true,
              },
            ],
            key: 52,
            isLeaf: false,
          },
          {
            title: "Mental functions, other specified",
            initial: "b198",
            description: "",
            children: "",
            key: 135,
            isLeaf: true,
          },
          {
            title: "Mental functions, unspecified",
            initial: "b199",
            description: "",
            children: "",
            key: 136,
            isLeaf: true,
          },
        ],
        key: 2,
        isLeaf: false,
      },
      {
        title: "SENSORY FUNCTIONS AND PAIN",
        initial: "b2",
        description:
          "This chapter is about the functions of the senses, seeing, hearing, tasting and so on, as well as the sensation of pain.",
        children: [
          {
            title: "Seeing and related functions",
            initial: "b210-229",
            description: "",
            children: [
              {
                title: "Seeing functions",
                initial: "b210",
                description:
                  "Sensory functions relating to sensing the presence of light and sensing the form, size, shape and colour of the visual stimuli. \n Inclusions: visual acuity functions; visual field functions; quality of vision; functions of sensing light and colour, visual acuity of distant and near vision, monocular and binocular vision; visual picture quality; impairments such as myopia, hypermetropia, astigmatism, hemianopia, colour-blindness, tunnel vision, central and peripheral scotoma, diplopia, night blindness and impaired adaptability to light \n Exclusions: perceptual functions (b156)",
                children: [
                  {
                    title: "Visual acuity functions",
                    initial: "b2100",
                    description:
                      "Seeing functions of sensing form and contour, both binocular and monocular, for both distant and near vision.",
                    children: [
                      {
                        title: "Binocular acuity of distant vision",
                        initial: "b21000",
                        description:
                          "Seeing functions of sensing size, form and contour using both eyes for objects distant from the eye.",
                        children: "",
                        key: 141,
                        isLeaf: true,
                      },
                      {
                        title: "Monocular acuity of distant vision",
                        initial: "b21001",
                        description:
                          "Seeing functions of sensing size, form and contour using either right or left eye alone, for objects distant from the eye.",
                        children: "",
                        key: 142,
                        isLeaf: true,
                      },
                      {
                        title: "Binocular acuity of near vision",
                        initial: "b21002",
                        description:
                          "Seeing functions of sensing size, form and contour, using both eyes, for objects close to the eye.",
                        children: "",
                        key: 143,
                        isLeaf: true,
                      },
                      {
                        title: "Monocular acuity of near vision",
                        initial: "b21003",
                        description:
                          "Seeing functions of sensing size, form and contour, using either right or left eye alone, for objects close to the eye.",
                        children: "",
                        key: 144,
                        isLeaf: true,
                      },
                      {
                        title: "Visual acuity functions, other specified",
                        initial: "b21008",
                        description: "",
                        children: "",
                        key: 145,
                        isLeaf: true,
                      },
                      {
                        title: "Visual acuity functions, unspecified",
                        initial: "b21009",
                        description: "",
                        children: "",
                        key: 146,
                        isLeaf: true,
                      },
                    ],
                    key: 140,
                    isLeaf: false,
                  },
                  {
                    title: "Visual field functions",
                    initial: "b2101",
                    description:
                      "Seeing functions related to the entire area that can be seen with fixation of gaze. \n Inclusions: impairments such as in scotoma, tunnel vision, anopsia",
                    children: "",
                    key: 147,
                    isLeaf: true,
                  },
                  {
                    title: "Quality of vision",
                    initial: "b2102",
                    description:
                      "Seeing functions involving light sensitivity, colour vision, contrast sensitivity and the overall quality of the picture.",
                    children: [
                      {
                        title: "Light sensitivity",
                        initial: "b21020",
                        description:
                          "Seeing functions of sensing a minimum amount of light (light minimum), and the minimum difference in intensity (light difference). \n Inclusions: functions of dark adaptation; impairments such as night blindness (hyposensitivity to light) and photophobia (hypersensitivity to light)",
                        children: "",
                        key: 149,
                        isLeaf: true,
                      },
                      {
                        title: "Colour vision",
                        initial: "b21021",
                        description:
                          "Seeing functions of differentiating and matching colours.",
                        children: "",
                        key: 150,
                        isLeaf: true,
                      },
                      {
                        title: "Contrast sensitivity",
                        initial: "b21022",
                        description:
                          "Seeing functions of separating figure from ground, involving the minimum amount of luminance required.",
                        children: "",
                        key: 151,
                        isLeaf: true,
                      },
                      {
                        title: "Visual picture quality",
                        initial: "b21023",
                        description:
                          "Seeing functions involving the quality of the picture. \n Inclusions: impairments such as in seeing stray lights; affected picture quality (floaters or webbing); picture distortion, and seeing stars or flashes",
                        children: "",
                        key: 152,
                        isLeaf: true,
                      },
                      {
                        title: "Quality of vision, other specified",
                        initial: "b21028",
                        description: "",
                        children: "",
                        key: 153,
                        isLeaf: true,
                      },
                      {
                        title: "Quality of vision, unspecified",
                        initial: "b21029",
                        description: "",
                        children: "",
                        key: 154,
                        isLeaf: true,
                      },
                    ],
                    key: 148,
                    isLeaf: false,
                  },
                  {
                    title: "Seeing functions, other specified",
                    initial: "b2108",
                    description: "",
                    children: "",
                    key: 155,
                    isLeaf: true,
                  },
                  {
                    title: "Seeing functions, unspecified",
                    initial: "b2109",
                    description: "",
                    children: "",
                    key: 156,
                    isLeaf: true,
                  },
                ],
                key: 139,
                isLeaf: false,
              },
              {
                title: "Functions of structures adjoining the eye",
                initial: "b215",
                description:
                  "Functions of structures in and around the eye that facilitate seeing functions. \n Inclusions: functions of internal muscles of the eye, eyelid, external muscles of the eye, including voluntary and tracking movements and fixation of the eye, lachrymal glands, accommodation, pupillary reflex; impairments such as in nystagmus, xerophthalmia and ptosis \n Exclusions: seeing functions (b210); Chapter 7 Neuromusculoskeletal and Movement-related Functions (b7)",
                children: [
                  {
                    title: "Functions of internal muscles of the eye",
                    initial: "b2150",
                    description:
                      "Functions of the muscles inside the eye, such as the iris, that adjust the shape and size of the pupil and lens of the eye. \n Inclusions: functions of accommodation; pupillar reflex",
                    children: "",
                    key: 158,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of the eyelid",
                    initial: "b2151",
                    description:
                      "Functions of the eyelid, such as the protective reflex.",
                    children: "",
                    key: 159,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of external muscles of the eye",
                    initial: "b2152",
                    description:
                      "Functions of the muscles that are used to look in different directions, to follow an object as it moves across the visual field, to produce saccadic jumps to catch up with a moving target, and to fix the eye. \n Inclusions: nystagmus; cooperation of both eyes",
                    children: "",
                    key: 160,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of lachrymal glands",
                    initial: "b2153",
                    description: "Functions of the tear glands and ducts.",
                    children: "",
                    key: 161,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Functions of structures adjoining the eye, other specified8",
                    initial: "b2158",
                    description: "",
                    children: "",
                    key: 162,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Functions of structures adjoining the eye, unspecified",
                    initial: "b2159",
                    description: "",
                    children: "",
                    key: 163,
                    isLeaf: true,
                  },
                ],
                key: 157,
                isLeaf: false,
              },
              {
                title:
                  "Sensations associated with the eye and adjoining structures",
                initial: "b220",
                description:
                  "Sensations of tired, dry and itching eye and related feelings. \n Inclusions: feelings of pressure behind the eye, of something in the eye, eye strain, burning in the eye; eye irritation \n Exclusions: sensation of pain (b280)",
                children: "",
                key: 164,
                isLeaf: true,
              },
              {
                title:
                  "Seeing and related functions, other specified and unspecified",
                initial: "b229",
                description: "",
                children: "",
                key: 165,
                isLeaf: true,
              },
            ],
            key: 138,
            isLeaf: false,
          },
          {
            title: "Hearing and vestibular functions",
            initial: "b230-249",
            description: "",
            children: [
              {
                title: "Hearing functions",
                initial: "b230",
                description:
                  "Sensory functions relating to sensing the presence of sounds and discriminating the location, pitch, loudness and quality of sounds. \n Inclusions: functions of hearing, auditory discrimination, localization of sound source, lateralization of sound, speech discrimination; impairments such as deafness, hearing impairment and hearing loss \n Exclusions: perceptual functions (b156) and mental functions of language (b167)",
                children: [
                  {
                    title: "Sound detection",
                    initial: "b2300",
                    description:
                      "Sensory functions relating to sensing the presence of sounds.",
                    children: "",
                    key: 168,
                    isLeaf: true,
                  },
                  {
                    title: "Sound discrimination",
                    initial: "b2301",
                    description:
                      "Sensory functions relating to sensing the presence of sound involving the differentiation of ground and binaural synthesis, separation and blending.",
                    children: "",
                    key: 169,
                    isLeaf: true,
                  },
                  {
                    title: "Localization of sound source",
                    initial: "b2302",
                    description:
                      "Sensory functions relating to determining the location of the source of sound.",
                    children: "",
                    key: 170,
                    isLeaf: true,
                  },
                  {
                    title: "Lateralization of sound",
                    initial: "b2303",
                    description:
                      "Sensory functions relating to determining whether the sound is coming from right or the left side.",
                    children: "",
                    key: 171,
                    isLeaf: true,
                  },
                  {
                    title: "Speech discrimination",
                    initial: "b2304",
                    description:
                      "Sensory functions relating to determining spoken language and distinguishing it from other sounds.",
                    children: "",
                    key: 172,
                    isLeaf: true,
                  },
                  {
                    title: "Hearing functions, other specified",
                    initial: "b2308",
                    description: "",
                    children: "",
                    key: 173,
                    isLeaf: true,
                  },
                  {
                    title: "Hearing functions, unspecified",
                    initial: "b2309",
                    description: "",
                    children: "",
                    key: 174,
                    isLeaf: true,
                  },
                ],
                key: 167,
                isLeaf: false,
              },
              {
                title: "Vestibular functions",
                initial: "b235",
                description:
                  "Sensory functions of the inner ear related to position, balance and movement. \n Inclusions: functions of position and positional sense; functions of balance of the body and movement \n Exclusions: sensation associated with hearing and vestibular functions (b240)",
                children: [
                  {
                    title: "Vestibular function of position",
                    initial: "b2350",
                    description:
                      "Sensory functions of the inner ear related to determining the position of the body.",
                    children: "",
                    key: 176,
                    isLeaf: true,
                  },
                  {
                    title: "Vestibular function of balance",
                    initial: "b2351",
                    description:
                      "Sensory functions of the inner ear related to determining the balance of the body.",
                    children: "",
                    key: 177,
                    isLeaf: true,
                  },
                  {
                    title: "Vestibular function of determination of movement",
                    initial: "b2352",
                    description:
                      "Sensory functions of the inner ear related to determining movement of the body, including its direction and speed.",
                    children: "",
                    key: 178,
                    isLeaf: true,
                  },
                  {
                    title: "Vestibular functions, other specified",
                    initial: "b2358",
                    description: "",
                    children: "",
                    key: 179,
                    isLeaf: true,
                  },
                  {
                    title: "Vestibular functions, unspecified",
                    initial: "b2359",
                    description: "",
                    children: "",
                    key: 180,
                    isLeaf: true,
                  },
                ],
                key: 175,
                isLeaf: false,
              },
              {
                title:
                  "Sensations associated with hearing and vestibular function",
                initial: "b240",
                description:
                  "Sensations of dizziness, falling, tinnitus and vertigo. \n Inclusions: sensations of ringing in ears, irritation in ear, aural pressure, nausea associated with dizziness or vertigo \n Exclusions: vestibular functions (b235); sensation of pain (b280)",
                children: [
                  {
                    title: "Ringing in ears or tinnitus",
                    initial: "b2400",
                    description:
                      "Sensation of low-pitched rushing, hissing or ringing in the ear.",
                    children: "",
                    key: 182,
                    isLeaf: true,
                  },
                  {
                    title: "Dizziness",
                    initial: "b2401",
                    description:
                      "Sensation of motion involving either oneself or one's environment; sensation of rotating, swaying or tilting.",
                    children: "",
                    key: 183,
                    isLeaf: true,
                  },
                  {
                    title: "Sensation of falling",
                    initial: "b2402",
                    description: "Sensation of losing one's grip and falling.",
                    children: "",
                    key: 184,
                    isLeaf: true,
                  },
                  {
                    title: "Nausea associated with dizziness or vertigo",
                    initial: "b2403",
                    description:
                      "Sensation of wanting to vomit that arises from dizziness or vertigo.",
                    children: "",
                    key: 185,
                    isLeaf: true,
                  },
                  {
                    title: "Irritation in the ear",
                    initial: "b2404",
                    description:
                      "Sensation of itching or other similar sensations in the ear.",
                    children: "",
                    key: 186,
                    isLeaf: true,
                  },
                  {
                    title: "Aural pressure",
                    initial: "b2405",
                    description: "Sensation of pressure in the ear.",
                    children: "",
                    key: 187,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with hearing and vestibular function, other specified",
                    initial: "b2408",
                    description: "",
                    children: "",
                    key: 188,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with hearing and vestibular function, unspecified",
                    initial: "b2409",
                    description: "",
                    children: "",
                    key: 189,
                    isLeaf: true,
                  },
                ],
                key: 181,
                isLeaf: false,
              },
              {
                title:
                  "Hearing and vestibular functions, other specified and unspecified",
                initial: "b249",
                description: "",
                children: "",
                key: 190,
                isLeaf: true,
              },
            ],
            key: 166,
            isLeaf: false,
          },
          {
            title: "Additional sensory functions",
            initial: "b250-279",
            description: "",
            children: [
              {
                title: "Taste function",
                initial: "b250",
                description:
                  "Sensory functions of sensing qualities of bitterness, sweetness, sourness and saltiness. \n Inclusions: gustatory functions; impairments such as ageusia and hypogeusia",
                children: "",
                key: 192,
                isLeaf: true,
              },
              {
                title: "Smell function",
                initial: "b255",
                description:
                  "Sensory functions of sensing odours and smells. \n Inclusions: functions of smelling, olfactory functions; anosmia, hyposmia",
                children: "",
                key: 193,
                isLeaf: true,
              },
              {
                title: "Proprioceptive function",
                initial: "b260",
                description:
                  "Sensory functions of sensing the relative position of body parts. \n Inclusions: functions of statesthesia and kinaesthesia \n Exclusions: vestibular functions (b235); sensations related to muscles and movement functions (b780)",
                children: "",
                key: 194,
                isLeaf: true,
              },
              {
                title: "Touch function",
                initial: "b265",
                description:
                  "Sensory functions of sensing surfaces and their texture or quality. \n Inclusions: functions of touching, feeling of touch; impairments such as numbness, anaesthesia, tingling, paraesthesia and hyperaesthesia \n Exclusions: sensory functions related to temperature and other stimuli (b270)",
                children: "",
                key: 195,
                isLeaf: true,
              },
              {
                title:
                  "Sensory functions related to temperature and other stimuli",
                initial: "b270",
                description:
                  "Sensory functions of sensing temperature, vibration, pressure and noxious stimulus. \n Inclusions: functions of being sensitive to temperature, vibration, shaking or oscillation, superficial pressure, deep pressure, burning sensation or a noxious stimulus \n Exclusions: touch functions (b265); sensation of pain (b280)",
                children: [
                  {
                    title: "Sensitivity to temperature",
                    initial: "b2700",
                    description: "Sensory functions of sensing cold and heat.",
                    children: "",
                    key: 197,
                    isLeaf: true,
                  },
                  {
                    title: "Sensitivity to vibration",
                    initial: "b2701",
                    description:
                      "Sensory functions of sensing shaking or oscillation.",
                    children: "",
                    key: 198,
                    isLeaf: true,
                  },
                  {
                    title: "Sensitivity to pressure",
                    initial: "b2702",
                    description:
                      "Sensory functions of sensing pressure against or on the skin. \n Inclusions: sensitivity to touch, numbness, hypaesthesia, hyperaesthesia, paraesethesia, tingling",
                    children: "",
                    key: 199,
                    isLeaf: true,
                  },
                  {
                    title: "Sensitivity to a noxious stimulus",
                    initial: "b2703",
                    description:
                      "Sensory functions of sensing painful or uncomfortable sensations. \n Inclusions: impairments such as hypalgesia, hyperpathia, allodynia, analgesia and anaesthesia dolorosa",
                    children: "",
                    key: 200,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensory functions related to temperature and other stimuli, other specified",
                    initial: "b2708",
                    description: "",
                    children: "",
                    key: 201,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensory functions related to temperature and other stimuli, unspecified",
                    initial: "b2709",
                    description: "",
                    children: "",
                    key: 202,
                    isLeaf: true,
                  },
                ],
                key: 196,
                isLeaf: false,
              },
              {
                title:
                  "Additional sensory functions, other specified and unspecified",
                initial: "b279",
                description: "",
                children: "",
                key: 203,
                isLeaf: true,
              },
            ],
            key: 191,
            isLeaf: false,
          },
          {
            title: "Pain",
            initial: "b280-289",
            description: "",
            children: [
              {
                title: "Sensation of pain",
                initial: "b280",
                description:
                  "Sensation of unpleasant feeling indicating potential or actual damage to some body structure. \n Inclusions: sensations of generalized or localized pain, in one or more body part, pain in a dermatome, stabbing pain, burning pain, dull pain, aching pain; impairments such as myalgia, analgesia and hyperalgesia",
                children: [
                  {
                    title: "Generalized pain",
                    initial: "b2800",
                    description:
                      "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt all over, or throughout the body.",
                    children: "",
                    key: 206,
                    isLeaf: true,
                  },
                  {
                    title: "Pain in body part",
                    initial: "b2801",
                    description:
                      "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in a specific part, or parts, of the body.",
                    children: [
                      {
                        title: "Pain in head and neck",
                        initial: "b28010",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the head and neck.",
                        children: "",
                        key: 208,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in chest",
                        initial: "b28011",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the chest.",
                        children: "",
                        key: 209,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in stomach or abdomen",
                        initial: "b28012",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the stomach or abdomen. \n Inclusions: pain in the pelvic region",
                        children: "",
                        key: 210,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in back",
                        initial: "b28013",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the back. \n Inclusions: pain in the trunk; low backache",
                        children: "",
                        key: 211,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in upper limb",
                        initial: "b28014",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in either one or both lower limbs, including feet.",
                        children: "",
                        key: 212,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in lower limb",
                        initial: "b28015",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in one or more joints, including small and big joints. \n Inclusions: pain in the hip; pain in the shoulder",
                        children: "",
                        key: 213,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in joints",
                        initial: "b28016",
                        description:
                          "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in one or more joints, including small and big joints. \n Inclusions: pain in the hip; pain in the shoulder",
                        children: "",
                        key: 214,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in body part, other specified",
                        initial: "b28018",
                        description: "",
                        children: "",
                        key: 215,
                        isLeaf: true,
                      },
                      {
                        title: "Pain in body part, unspecified",
                        initial: "b28019",
                        description: "",
                        children: "",
                        key: 216,
                        isLeaf: true,
                      },
                    ],
                    key: 207,
                    isLeaf: false,
                  },
                  {
                    title: "Pain in multiple body parts",
                    initial: "b2802",
                    description:
                      "Unpleasant sensation indicating potential or actual damage to some body structure located in several body parts.",
                    children: "",
                    key: 217,
                    isLeaf: true,
                  },
                  {
                    title: "Radiating pain in a dermatome",
                    initial: "b2803",
                    description:
                      "Unpleasant sensation indicating potential or actual damage to some body structure located in areas of skin served by the same nerve root.",
                    children: "",
                    key: 218,
                    isLeaf: true,
                  },
                  {
                    title: "Radiating pain in a segment or region",
                    initial: "b2804",
                    description:
                      "Unpleasant sensation indicating potential or actual damage to some body structure located in areas of skin in different body parts not served by the same nerve root.",
                    children: "",
                    key: 219,
                    isLeaf: true,
                  },
                ],
                key: 205,
                isLeaf: false,
              },
              {
                title: "Sensation of pain, other specified and unspecified",
                initial: "b289",
                description: "",
                children: "",
                key: 220,
                isLeaf: true,
              },
            ],
            key: 204,
            isLeaf: false,
          },
          {
            title: "Sensory functions and pain, other specified",
            initial: "b298",
            description: "",
            children: "",
            key: 221,
            isLeaf: true,
          },
          {
            title: "Sensory functions and pain, other specified unspecified",
            initial: "b299",
            description: "",
            children: "",
            key: 222,
            isLeaf: true,
          },
        ],
        key: 137,
        isLeaf: false,
      },
      {
        title: "VOICE AND SPEECH FUNCTIONS",
        initial: "b3",
        description:
          "This chapter is about the functions of producing sounds and speech.",
        children: [
          {
            title: "Voice functions",
            initial: "b310",
            description:
              "Functions of the production of various sounds by the passage of air through the larynx. \n Inclusions: functions of production and quality of voice; functions of phonation, pitch, loudness and other qualities of voice; impairments such as aphonia, dysphonia, hoarseness, hypernasality and hyponasality \n Exclusions: mental functions of language (b167); articulation functions (b320); alternative vocalization functions (b340)",
            children: [
              {
                title: "Production of voice",
                initial: "b3100",
                description:
                  "Functions of the production of sound made through coordination of the larynx and surrounding muscles with the respiratory system. \n Inclusions: functions of phonation, loudness, impairment of aphonia",
                children: "",
                key: 225,
                isLeaf: true,
              },
              {
                title: "Quality of voice",
                initial: "b3101",
                description:
                  "Functions of the production of characteristics of voice including pitch, resonance and other features. \n Inclusions: functions of high or low pitch; impairments such as hypernasality, hyponasality, dysphonia, hoarseness or harshness",
                children: "",
                key: 226,
                isLeaf: true,
              },
              {
                title: "Voice functions, other specified",
                initial: "b3108",
                description: "",
                children: "",
                key: 227,
                isLeaf: true,
              },
              {
                title: "Voice functions, unspecified",
                initial: "b3109",
                description: "",
                children: "",
                key: 228,
                isLeaf: true,
              },
            ],
            key: 224,
            isLeaf: false,
          },
          {
            title: "Articulation functions",
            initial: "b320",
            description:
              "Functions of the production of speech sounds. \n Inclusions: functions of enunciation, articulation of phonemes; spastic, ataxic, flaccid dysarthria; anarthria \n Exclusions: mental functions of language (b167); voice functions (b310)",
            children: "",
            key: 229,
            isLeaf: true,
          },
          {
            title: "Fluency and rhythm of speech functions",
            initial: "b330",
            description:
              "Functions of the production of flow and tempo of speech. \n Inclusions: functions of fluency, rhythm, speed and melody of speech; prosody and intonation; impairments such as stuttering, stammering, cluttering, bradylalia and tachylalia \n Exclusions: mental functions of language (b167); voice functions (b310); articulation functions (b320)",
            children: [
              {
                title: "Fluency of speech",
                initial: "b3300",
                description:
                  "Functions of the production of smooth, uninterrupted flow of speech. \n Inclusions: functions of smooth connection of speech; impairments such as stuttering, stammering, cluttering, dysfluency, repetition of sounds, words or parts of words and irregular breaks in speech",
                children: "",
                key: 231,
                isLeaf: true,
              },
              {
                title: "Rhythm of speech",
                initial: "b3301",
                description:
                  "Functions of the modulated, tempo and stress patterns in speech. \n Inclusions: impairments such as stereotypic or repetitive speech cadence",
                children: "",
                key: 232,
                isLeaf: true,
              },
              {
                title: "Speed of speech",
                initial: "b3302",
                description:
                  "Functions of the rate of speech production. \n Inclusions: impairments such as bradylalia and tachylalia",
                children: "",
                key: 233,
                isLeaf: true,
              },
              {
                title: "Melody of speech",
                initial: "b3303",
                description:
                  "Functions of modulation of pitch patterns in speech. \n Inclusions: prosody of speech, intonation, melody of speech; impairments such as monotone speech",
                children: "",
                key: 234,
                isLeaf: true,
              },
              {
                title:
                  "Fluency and rhythm of speech functions, other specified",
                initial: "b3308",
                description: "",
                children: "",
                key: 235,
                isLeaf: true,
              },
              {
                title: "Fluency and rhythm of speech functions, unspecified",
                initial: "b3309",
                description: "",
                children: "",
                key: 236,
                isLeaf: true,
              },
            ],
            key: 230,
            isLeaf: false,
          },
          {
            title: "Alternative vocalization functions",
            initial: "b340",
            description:
              "Functions of the production of other manners of vocalization. \n Inclusions: functions of the production of tones and range of sounds, such as in singing, chanting, babbling and humming; crying aloud and screaming \n Exclusions: mental functions of language (b167); voice functions (b310); articulation functions (b320); fluency and rhythm of speech functions (b330)",
            children: [
              {
                title: "Production of tones",
                initial: "b3400",
                description:
                  "Functions of production of musical vocal sounds. \n Inclusions: sustaining, modulating and terminating production of single or connected vocalizations with variation in pitch such as in singing, humming and chanting",
                children: "",
                key: 238,
                isLeaf: true,
              },
              {
                title: "Making a range of sounds",
                initial: "b3401",
                description:
                  "Functions of production of a variety of vocalizations. \n Inclusions: functions of crying, cooing, gurgling, and babbling, e.g. in children",
                children: "",
                key: 239,
                isLeaf: true,
              },
              {
                title: "Alternative vocalization functions, other specified",
                initial: "b3408",
                description: "",
                children: "",
                key: 240,
                isLeaf: true,
              },
              {
                title: "Alternative vocalization functions, unspecified",
                initial: "b3409",
                description: "",
                children: "",
                key: 241,
                isLeaf: true,
              },
            ],
            key: 237,
            isLeaf: false,
          },
          {
            title: "Voice and speech functions, other specified",
            initial: "b398",
            description: "",
            children: "",
            key: 242,
            isLeaf: true,
          },
          {
            title: "Voice and speech functions, unspecified",
            initial: "b399",
            description: "",
            children: "",
            key: 243,
            isLeaf: true,
          },
        ],
        key: 223,
        isLeaf: false,
      },
      {
        title:
          "FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL, IMMUNOLOGICAL AND RESPIRATORY SYSTEMS",
        initial: "b4",
        description:
          "This chapter is about the functions involved in the cardiovascular system (functions of the heart and blood vessels), the haematological and immunological systems (functions of blood production and immunity), and the respiratory system (functions of respiration and exercise tolerance).",
        children: [
          {
            title: "Functions of the cardiovascular system",
            initial: "b410-429",
            description: "",
            children: [
              {
                title: "Heart functions",
                initial: "b410",
                description:
                  "Functions of pumping the blood in adequate or required amounts and pressure throughout the body. \n Inclusions: functions of heart rate, rhythm and output; contraction force of ventricular muscles; functions of heart valves; pumping the blood through the pulmonary circuit; dynamics of circulation to the heart; impairments such as tachycardia, bradycardia and irregular heart beat and as in heart failure, cardiomyopathy, myocarditis, and coronary insufficiency \n Exclusions: blood vessel functions (b415); blood pressure functions (b420); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Heart rate",
                    initial: "b4100",
                    description:
                      "Functions related to the number of times the heart contracts every minute. \n Inclusions: impairments such as rates that are too fast (tachycardia) or too slow (bradycardia)",
                    children: "",
                    key: 247,
                    isLeaf: true,
                  },
                  {
                    title: "Heart rhythm",
                    initial: "b4101",
                    description:
                      "Functions related to the regularity of the beating of the heart. \n Inclusions: impairments such as arrhythmias",
                    children: "",
                    key: 248,
                    isLeaf: true,
                  },
                  {
                    title: "Contraction force of ventricular muscles",
                    initial: "b4102",
                    description:
                      "Functions related to the amount of blood pumped by the ventricular muscles during every beat. \n Inclusions: impairments such as diminished cardiac output",
                    children: "",
                    key: 249,
                    isLeaf: true,
                  },
                  {
                    title: "Blood supply to the heart",
                    initial: "b4103",
                    description:
                      "Functions related to the volume of blood available to the heart muscle. \n Inclusions: impairments such as coronary ischaemia",
                    children: "",
                    key: 250,
                    isLeaf: true,
                  },
                  {
                    title: "Heart functions, other specified",
                    initial: "b4108",
                    description: "",
                    children: "",
                    key: 251,
                    isLeaf: true,
                  },
                  {
                    title: "Heart functions, unspecified",
                    initial: "b4109",
                    description: "",
                    children: "",
                    key: 252,
                    isLeaf: true,
                  },
                ],
                key: 246,
                isLeaf: false,
              },
              {
                title: "Blood vessel functions",
                initial: "b415",
                description:
                  "Functions of transporting blood throughout the body. \n Inclusions: functions of arteries, capillaries and veins; vasomotor function; functions of pulmonary arteries, capillaries and veins; functions of valves of veins, blockage or constriction of arteries; atherosclerosis, arteriosclerosis, thromboembolism and varicose veins \n Exclusions: heart functions (b410); blood pressure functions (b420); haematological system functions (b430); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Functions of arteries",
                    initial: "b4150",
                    description:
                      "Functions related to blood flow in the arteries. \n Inclusions: impairments such as in arterial dilation; arterial constriction such as in intermittent claudication",
                    children: "",
                    key: 254,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of capillaries",
                    initial: "b4151",
                    description:
                      "Functions related to blood flow in the capillaries.",
                    children: "",
                    key: 255,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of veins",
                    initial: "b4152",
                    description:
                      "Functions related to blood flow in the veins, and the functions of valves of veins. \n Inclusions: impairments such as venous dilation; venous constriction; insufficient closing of valves as in varicose veins",
                    children: "",
                    key: 256,
                    isLeaf: true,
                  },
                  {
                    title: "Blood vessel functions, other specified",
                    initial: "b4158",
                    description: "",
                    children: "",
                    key: 257,
                    isLeaf: true,
                  },
                  {
                    title: "Blood vessel functions, unspecified",
                    initial: "b4159",
                    description: "",
                    children: "",
                    key: 258,
                    isLeaf: true,
                  },
                ],
                key: 253,
                isLeaf: false,
              },
              {
                title: "Blood pressure functions",
                initial: "b420",
                description:
                  "Functions of maintaining the pressure of blood within the arteries. \n Inclusions: functions of maintenance of blood pressure; increased and decreased blood pressure; impairments such as in hypotension, hypertension and postural hypotension \n Exclusions: heart functions (b410); blood vessel functions (b415); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Increased blood pressure",
                    initial: "b4200",
                    description:
                      "Functions related to a rise in systolic or diastolic blood pressure above normal for the age.",
                    children: "",
                    key: 260,
                    isLeaf: true,
                  },
                  {
                    title: "Decreased blood pressure",
                    initial: "b420",
                    description:
                      "Functions related to a fall in systolic or diastolic blood pressure below normal for the age.",
                    children: "",
                    key: 261,
                    isLeaf: true,
                  },
                  {
                    title: "Maintenance of blood pressure",
                    initial: "b4202",
                    description:
                      "Functions related to maintaining an appropriate blood pressure in response to changes in the body.",
                    children: "",
                    key: 262,
                    isLeaf: true,
                  },
                  {
                    title: "Blood pressure functions, other specified",
                    initial: "b4208",
                    description: "",
                    children: "",
                    key: 263,
                    isLeaf: true,
                  },
                  {
                    title: "Blood pressure functions, unspecified",
                    initial: "b4209",
                    description: "",
                    children: "",
                    key: 264,
                    isLeaf: true,
                  },
                ],
                key: 259,
                isLeaf: false,
              },
              {
                title:
                  "Functions of the cardiovascular system, other specified and unspecified",
                initial: "b429",
                description: "",
                children: "",
                key: 265,
                isLeaf: true,
              },
            ],
            key: 245,
            isLeaf: false,
          },
          {
            title: "Functions of the haematological and immunological systems",
            initial: "b430-439",
            description: "",
            children: [
              {
                title: "Haematological system functions",
                initial: "b430",
                description:
                  "Functions of blood production, oxygen and metabolite carriage, and clotting. \n Inclusions: functions of the production of blood and bone marrow; oxygen-carrying functions of blood; blood-related functions of spleen; metabolite carrying functions of blood; clotting impairments such as anaemia, haemophilia and other clotting dysfunctions \n Exclusions: functions of the cardiovascular system (b410-b429); immunological system functions (b435); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Production of blood",
                    initial: "b4300",
                    description:
                      "Functions related to the production of blood and all its constituents.",
                    children: "",
                    key: 268,
                    isLeaf: true,
                  },
                  {
                    title: "Oxygen-carrying functions of the blood",
                    initial: "b4301",
                    description:
                      "Functions related to the blood's capacity to carry oxygen throughout the body.",
                    children: "",
                    key: 269,
                    isLeaf: true,
                  },
                  {
                    title: "Metabolite-carrying functions of the blood",
                    initial: "b4302",
                    description:
                      "Functions related to the blood's capacity to carry metabolites throughout the body.",
                    children: "",
                    key: 270,
                    isLeaf: true,
                  },
                  {
                    title: "Clotting functions",
                    initial: "b4303",
                    description:
                      "Functions related to the coagulation of blood, such as at a site of injury.",
                    children: "",
                    key: 271,
                    isLeaf: true,
                  },
                  {
                    title: "Haematological system functions, other specified",
                    initial: "b4308",
                    description: "",
                    children: "",
                    key: 272,
                    isLeaf: true,
                  },
                  {
                    title: "Haematological system functions, unspecified",
                    initial: "b4309",
                    description: "",
                    children: "",
                    key: 273,
                    isLeaf: true,
                  },
                ],
                key: 267,
                isLeaf: false,
              },
              {
                title: "Immunological system functions",
                initial: "b435",
                description:
                  "Functions of the body related to protection against foreign substances, including infections, by specific and non-specific immune responses. \n Inclusions: immune response (specific and non-specific); hypersensitivity reactions; functions of lymphatic vessels and nodes; functions of cell mediated immunity, antibody-mediated immunity; response to immunization; impairments such as in autoimmunity, allergic reactions, lymphadenitis and lymphoedema \n Exclusions: haematological system functions (b430)",
                children: [
                  {
                    title: "Immune response",
                    initial: "b4350",
                    description:
                      "Functions of the body's response of sensitization to foreign substances, including infections.",
                    children: [
                      {
                        title: "Specific immune response",
                        initial: "b43500",
                        description:
                          "Functions of the body's response of sensitization to a specific foreign substance.",
                        children: "",
                        key: 276,
                        isLeaf: true,
                      },
                      {
                        title: "Non-specific immune response",
                        initial: "b43501",
                        description:
                          "Functions of the body's general response of sensitization to foreign substances, including infections.",
                        children: "",
                        key: 277,
                        isLeaf: true,
                      },
                      {
                        title: "Immune response, other specified",
                        initial: "b43508",
                        description: "",
                        children: "",
                        key: 278,
                        isLeaf: true,
                      },
                      {
                        title: "Immune response, unspecified",
                        initial: "b43509",
                        description: "",
                        children: "",
                        key: 279,
                        isLeaf: true,
                      },
                    ],
                    key: 275,
                    isLeaf: false,
                  },
                  {
                    title: "Hypersensitivity reactions",
                    initial: "b4351",
                    description:
                      "Functions of the body's response of increased sensitization to foreign substances, such as in sensitivities to different antigens. \n Inclusions: impairments such as hypersensitivities or allergies \n Exclusions: tolerance to food (b5153)",
                    children: "",
                    key: 280,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of lymphatic vessels",
                    initial: "b4352",
                    description:
                      "Functions related to vascular channels that transport lymph.",
                    children: "",
                    key: 281,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of lymph nodes",
                    initial: "b4353",
                    description:
                      "Functions related to glands along the course of lymphatic vessels.",
                    children: "",
                    key: 282,
                    isLeaf: true,
                  },
                  {
                    title: "Immunological system functions, other specified",
                    initial: "b4358",
                    description: "",
                    children: "",
                    key: 283,
                    isLeaf: true,
                  },
                  {
                    title: "Immunological system functions, unspecified",
                    initial: "b4359",
                    description: "",
                    children: "",
                    key: 284,
                    isLeaf: true,
                  },
                ],
                key: 274,
                isLeaf: false,
              },
              {
                title:
                  "Functions of the haematological and immunological systems, other specified and unspecified",
                initial: "b439",
                description: "",
                children: "",
                key: 285,
                isLeaf: true,
              },
            ],
            key: 266,
            isLeaf: false,
          },
          {
            title: "Functions of the respiratory system",
            initial: "b440-449",
            description: "",
            children: [
              {
                title: "Respiration functions",
                initial: "b440",
                description:
                  "Functions of inhaling air into the lungs, the exchange of gases between air and blood, and exhaling air. \n Inclusions: functions of respiration rate, rhythm and depth; impairments such as apnoea, hyperventilation, irregular respiration, paradoxical respiration, and bronchial spasm, and as in pulmonary emphysema; reduction in airflow through upper and lower airways \n Exclusions: respiratory muscle functions (b445); additional respiratory functions (b450); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Respiration rate",
                    initial: "b4400",
                    description:
                      "Functions related to the number of breaths taken per minute. \n Inclusions: impairments such as rates that are too fast (tachypnoea) or too slow (bradypnoea)",
                    children: "",
                    key: 288,
                    isLeaf: true,
                  },
                  {
                    title: "Respiratory rhythm",
                    initial: "b4401",
                    description:
                      "Functions related to the periodicity and regularity of breathing. \n Inclusions: impairments such as irregular breathing",
                    children: "",
                    key: 289,
                    isLeaf: true,
                  },
                  {
                    title: "Depth of respiration",
                    initial: "b4402",
                    description:
                      "Functions related to the volume of expansion of the lungs during breathing. \n Inclusions: impairments such as superficial or shallow respiration",
                    children: "",
                    key: 290,
                    isLeaf: true,
                  },
                  {
                    title: "Respiration functions, other specified",
                    initial: "b4408",
                    description: "",
                    children: "",
                    key: 291,
                    isLeaf: true,
                  },
                  {
                    title: "Respiration functions, unspecified",
                    initial: "b4409",
                    description: "",
                    children: "",
                    key: 292,
                    isLeaf: true,
                  },
                ],
                key: 287,
                isLeaf: false,
              },
              {
                title: "Respiratory muscle functions",
                initial: "b445",
                description:
                  "Functions of the muscles involved in breathing. \n Inclusions: functions of thoracic respiratory muscles; functions of the diaphragm; functions of accessory respiratory muscles \n Exclusions: respiration functions (b440); additional respiratory functions (b450); exercise tolerance functions (b455)",
                children: [
                  {
                    title: "Functions of the thoracic respiratory muscles",
                    initial: "b4450",
                    description:
                      "Functions of the thoracic muscles involved in breathing.",
                    children: "",
                    key: 294,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of the diaphragm",
                    initial: "b4451",
                    description:
                      "Functions of the diaphragm as involved in breathing.",
                    children: "",
                    key: 295,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of accessory respiratory muscles",
                    initial: "b4452",
                    description:
                      "Functions of the additional muscles involved in breathing.",
                    children: "",
                    key: 296,
                    isLeaf: true,
                  },
                  {
                    title: "Respiratory muscle functions, other specified",
                    initial: "b4458",
                    description: "",
                    children: "",
                    key: 297,
                    isLeaf: true,
                  },
                  {
                    title: "Respiratory muscle functions, unspecified",
                    initial: "b4459",
                    description: "",
                    children: "",
                    key: 298,
                    isLeaf: true,
                  },
                ],
                key: 293,
                isLeaf: false,
              },
              {
                title: "Functions of the respiratory system",
                initial: "b449",
                description: "",
                children: "",
                key: 299,
                isLeaf: true,
              },
            ],
            key: 286,
            isLeaf: false,
          },
          {
            title:
              "Additional functions and sensations of the cardiovascular and respiratory systems",
            initial: "b450-469",
            description: "",
            children: [
              {
                title: "Additional functions of the respiratory system",
                initial: "b450",
                description:
                  "Additional functions related to breathing, such as producing and transporting airway secretions, coughing, sneezing and yawning. \n Inclusions: functions of blowing, whistling and mouth breathing",
                children: [
                  {
                    title: "Functions of breathing thorugh the mouth",
                    initial: "b4500",
                    description:
                      "\n Inclusions: functions of blowing and whistling",
                    children: "",
                    key: 302,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of coughing",
                    initial: "b4501",
                    description: "",
                    children: "",
                    key: 303,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of sneezing",
                    initial: "b4502",
                    description: "",
                    children: "",
                    key: 304,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of yawning",
                    initial: "b4503",
                    description: "",
                    children: "",
                    key: 305,
                    isLeaf: true,
                  },
                  {
                    title: "Funtions related to mucus",
                    initial: "b4504",
                    description: "",
                    children: [
                      {
                        title: "Production of mucus",
                        initial: "b45040",
                        description: "",
                        children: "",
                        key: 307,
                        isLeaf: true,
                      },
                      {
                        title: "Transportation of mucus",
                        initial: "b45041",
                        description: "",
                        children: "",
                        key: 308,
                        isLeaf: true,
                      },
                      {
                        title: "Functions related to mucus, other specified",
                        initial: "b45048",
                        description: "",
                        children: "",
                        key: 309,
                        isLeaf: true,
                      },
                      {
                        title: "Functions related to mucus, not specified",
                        initial: "b45049",
                        description: "",
                        children: "",
                        key: 310,
                        isLeaf: true,
                      },
                    ],
                    key: 306,
                    isLeaf: false,
                  },
                  {
                    title:
                      "Additional functions of the respiratory system, other specified",
                    initial: "b4508",
                    description: "",
                    children: "",
                    key: 311,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Additional functions of the respiratory system, unspecified",
                    initial: "b4509",
                    description: "",
                    children: "",
                    key: 312,
                    isLeaf: true,
                  },
                ],
                key: 301,
                isLeaf: false,
              },
              {
                title: "Exercise tolerance functions",
                initial: "b455",
                description:
                  "Functions related to respiratory and cardiovascular capacity as required for enduring physical exertion. \n Inclusions: functions of physical endurance, aerobic capacity, stamina and fatiguability \n Exclusions: functions of the cardiovascular system (b410-b429); haematological system functions (b430); respiration functions (b440); respiratory muscle functions (b445); additional respiratory functions (b450)",
                children: [
                  {
                    title: "General physical endurance",
                    initial: "b4550",
                    description:
                      "Functions related to the general level of tolerance of physical exercise or stamina.",
                    children: "",
                    key: 314,
                    isLeaf: true,
                  },
                  {
                    title: "Aerobic capacity",
                    initial: "b4551",
                    description:
                      "Functions related to the extent to which a person can exercise without getting out of breath.",
                    children: "",
                    key: 315,
                    isLeaf: true,
                  },
                  {
                    title: "Fatiguability",
                    initial: "b4552",
                    description:
                      "Functions related to susceptibility to fatigue, at any level of exertion.",
                    children: "",
                    key: 316,
                    isLeaf: true,
                  },
                  {
                    title: "Exercise tolerance functions, other specified",
                    initial: "b4558",
                    description: "",
                    children: "",
                    key: 317,
                    isLeaf: true,
                  },
                  {
                    title: "Exercise tolerance functions, unspecified",
                    initial: "b4559",
                    description: "",
                    children: "",
                    key: 318,
                    isLeaf: true,
                  },
                ],
                key: 313,
                isLeaf: false,
              },
              {
                title:
                  "Sensations associated with cardiovascular and respiratory functions",
                initial: "b460",
                description:
                  "Sensations such as missing a heart beat, palpitation and shortness of breath. \n Inclusions: sensations of tightness of chest, feelings of irregular beat, dyspnoea, air hunger, choking, gagging and wheezing \n Exclusions: sensation of pain (b280)",
                children: "",
                key: 319,
                isLeaf: true,
              },
              {
                title:
                  "Additional functions and sensations of the cardiovascular and respiratory systems, other specified and unspecified",
                initial: "b469",
                description: "",
                children: "",
                key: 320,
                isLeaf: true,
              },
            ],
            key: 300,
            isLeaf: false,
          },
          {
            title:
              "Functions of the cardiovascular, haematological, immunological and respiratory systems, other specified",
            initial: "b498",
            description: "",
            children: "",
            key: 321,
            isLeaf: true,
          },
          {
            title:
              "Functions of the cardiovascular, haematological, immunological and respiratory systems, unspecified",
            initial: "b499",
            description: "",
            children: "",
            key: 322,
            isLeaf: true,
          },
        ],
        key: 244,
        isLeaf: false,
      },
      {
        title: "FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS",
        initial: "b5",
        description:
          "This chapter is about the functions of ingestion, digestion and elimination, as well as functions involved in metabolism and the endocrine glands.",
        children: [
          {
            title: "Functions related to the digestive system",
            initial: "b510-539",
            description: "",
            children: [
              {
                title: "Ingestion functions",
                initial: "b510",
                description:
                  "Functions related to taking in and manipulating solids or liquids through the mouth into the body. \n Inclusions: functions of sucking, chewing and biting, manipulating food in the mouth, salivation, swallowing, burping, regurgitation, spitting and vomiting; impairments such as dysphagia, aspiration of food, aerophagia, excessive salivation, drooling and insufficient salivation \n Exclusions: sensations associated with digestive system (b535)",
                children: [
                  {
                    title: "Sucking",
                    initial: "b5100",
                    description:
                      "Functions of drawing into the mouth by a suction force produced by movements of the cheeks, lips and tongue.",
                    children: "",
                    key: 326,
                    isLeaf: true,
                  },
                  {
                    title: "Biting",
                    initial: "b5101",
                    description:
                      "Functions of cutting into, piercing or tearing off food with the front teeth.",
                    children: "",
                    key: 327,
                    isLeaf: true,
                  },
                  {
                    title: "Chewing",
                    initial: "b5102",
                    description:
                      "Functions of crushing, grinding and masticating food with the back teeth (e.g. molars).",
                    children: "",
                    key: 328,
                    isLeaf: true,
                  },
                  {
                    title: "Manipulation of food in the mouth",
                    initial: "b5103",
                    description:
                      "Functions of moving food around the mouth with the teeth and tongue.",
                    children: "",
                    key: 329,
                    isLeaf: true,
                  },
                  {
                    title: "Salivation",
                    initial: "b5104",
                    description:
                      "Function of the production of saliva within the mouth.",
                    children: "",
                    key: 330,
                    isLeaf: true,
                  },
                  {
                    title: "Swallowing",
                    initial: "b5105",
                    description:
                      "Functions of clearing substances, such as food, drink or saliva through the oral cavity, pharynx and oesophagus into the stomach at an appropriate rate and speed. \n Inclusions: oral, pharyngeal or oesophageal dysphagia; impairments in oesophageal passage substances",
                    children: [
                      {
                        title: "Oral swallowing",
                        initial: "b51050",
                        description:
                          "Function of clearing substances through the oral cavity at an appropriate rate and speed. \n Inclusions: drooling",
                        children: "",
                        key: 332,
                        isLeaf: true,
                      },
                      {
                        title: "Pharyngeal swallowing",
                        initial: "b51051",
                        description:
                          "Function of clearing substances through the pharynx at an appropriate rate and speed.",
                        children: "",
                        key: 333,
                        isLeaf: true,
                      },
                      {
                        title: "Oesophageal swallowing",
                        initial: "b51052",
                        description:
                          "Function of clearing substances through the oesophagus at an appropriate rate and speed.",
                        children: "",
                        key: 334,
                        isLeaf: true,
                      },
                      {
                        title: "Swallowing, other specified",
                        initial: "b51058",
                        description: "",
                        children: "",
                        key: 335,
                        isLeaf: true,
                      },
                      {
                        title: "Swallowing, unspecified",
                        initial: "b51059",
                        description: "",
                        children: "",
                        key: 336,
                        isLeaf: true,
                      },
                    ],
                    key: 331,
                    isLeaf: false,
                  },
                  {
                    title:
                      "Functions of expelling the contents of the stomach, oesophagus or pharynx",
                    initial: "b5106",
                    description:
                      "Functions of moving substances such as food, liquid, medications, objects intentionally or unintentionally swallowed in the reverse direction to ingestion, such as in regurgitation and vomiting.",
                    children: [
                      {
                        title: "Vomiting",
                        initial: "b51060",
                        description: "",
                        children: "",
                        key: 338,
                        isLeaf: true,
                      },
                      {
                        title: "Regurgitation",
                        initial: "b51061",
                        description: "",
                        children: "",
                        key: 339,
                        isLeaf: true,
                      },
                      {
                        title:
                          "Functions of expelling the contents of the stomach, oesophagus, or pharynx, other specified",
                        initial: "b51068",
                        description: "",
                        children: "",
                        key: 340,
                        isLeaf: true,
                      },
                      {
                        title:
                          "Functions of expelling the contents of the stomach,oesophagus, or pharynx, unspecified",
                        initial: "b51069",
                        description: "",
                        children: "",
                        key: 341,
                        isLeaf: true,
                      },
                    ],
                    key: 337,
                    isLeaf: false,
                  },
                  {
                    title: "Ingestion functions, other specified",
                    initial: "b5108",
                    description: "",
                    children: "",
                    key: 342,
                    isLeaf: true,
                  },
                  {
                    title: "Ingestion functions, unspecified",
                    initial: "b5109",
                    description: "",
                    children: "",
                    key: 343,
                    isLeaf: true,
                  },
                ],
                key: 325,
                isLeaf: false,
              },
              {
                title: "Digestive functions",
                initial: "b515",
                description: "",
                children: [
                  {
                    title: "Transport of food through stomach and intestines",
                    initial: "b5150",
                    description:
                      "Peristalsis and related functions that mechanically move food through stomach and intestines.",
                    children: "",
                    key: 345,
                    isLeaf: true,
                  },
                  {
                    title: "Breakdown of food",
                    initial: "b5151",
                    description:
                      "Functions of mechanically reducing food to smaller particles in the gastrointestinal tract.",
                    children: "",
                    key: 346,
                    isLeaf: true,
                  },
                  {
                    title: "Absorption of nutrients",
                    initial: "b5152",
                    description:
                      "Functions of passing food and drink nutrients into the blood stream from along the intestines.",
                    children: "",
                    key: 347,
                    isLeaf: true,
                  },
                  {
                    title: "Tolerance to food",
                    initial: "b5153",
                    description:
                      "Functions of accepting suitable food and drink for digestion and rejecting what is unsuitable. \n Inclusions: impairments such as hypersensitivities, gluten intolerance",
                    children: "",
                    key: 348,
                    isLeaf: true,
                  },
                  {
                    title: "Digestive functions, other specified",
                    initial: "b5158",
                    description: "",
                    children: "",
                    key: 349,
                    isLeaf: true,
                  },
                  {
                    title: "Digestive functions, unspecified",
                    initial: "b5159",
                    description: "",
                    children: "",
                    key: 350,
                    isLeaf: true,
                  },
                ],
                key: 344,
                isLeaf: false,
              },
              {
                title: "Assimilation functions",
                initial: "b520",
                description:
                  "Functions by which nutrients are converted into components of the living body. \n Inclusions: functions of storage of nutrients in the body \n Exclusions: digestive functions (b515); defecation functions (b525); weight maintenance functions (b530); general metabolic functions (b540)",
                children: "",
                key: 351,
                isLeaf: true,
              },
              {
                title: "Defecation functions",
                initial: "b525",
                description:
                  "Functions of elimination of wastes and undigested food as faeces and related functions. \n Inclusions: functions of elimination, faecal consistency, frequency of defecation; faecal continence, flatulence; impairments such as constipation, diarrhoea, watery stool and anal sphincter incompetence or incontinence \n Exclusions: digestive functions (b515); assimilation functions (b520); sensations associated with the digestive system (b535)",
                children: [
                  {
                    title: "Elimination of faeces",
                    initial: "b5250",
                    description:
                      "Functions of the elimination of waste from the rectum, including the functions of contraction of the abdominal muscles in doing so.",
                    children: "",
                    key: 353,
                    isLeaf: true,
                  },
                  {
                    title: "Faecal consistency",
                    initial: "b5251",
                    description:
                      "Consistency of faeces such as hard, firm, soft or watery.",
                    children: "",
                    key: 354,
                    isLeaf: true,
                  },
                  {
                    title: "Frequency of defecation",
                    initial: "b5252",
                    description:
                      "Functions involved in the frequency of defecation.",
                    children: "",
                    key: 355,
                    isLeaf: true,
                  },
                  {
                    title: "Faecal continence",
                    initial: "b5253",
                    description:
                      "Functions involved in voluntary control over the elimination function.",
                    children: "",
                    key: 356,
                    isLeaf: true,
                  },
                  {
                    title: "Flatulence",
                    initial: "b5254",
                    description:
                      "Functions involved in the expulsion of excessive amounts of air or gases from the intestines.",
                    children: "",
                    key: 357,
                    isLeaf: true,
                  },
                  {
                    title: "Defecation functions, other specified",
                    initial: "b5258",
                    description: "",
                    children: "",
                    key: 358,
                    isLeaf: true,
                  },
                  {
                    title: "Defecation functions, unspecified",
                    initial: "b5259",
                    description: "",
                    children: "",
                    key: 359,
                    isLeaf: true,
                  },
                ],
                key: 352,
                isLeaf: false,
              },
              {
                title: "Weight maintenance functions",
                initial: "b530",
                description:
                  "Functions of maintaining appropriate body weight, including weight gain during the developmental period. \n Inclusions: functions of maintenance of acceptable Body Mass Index (BMI); and impairments such as underweight, cachexia, wasting, overweight, emaciation and such as in primary and secondary obesity \n Exclusions: assimilation functions (b520); general metabolic functions (b540); endocrine gland functions (b555)",
                children: "",
                key: 360,
                isLeaf: true,
              },
              {
                title: "Sensations associated with the digestive system",
                initial: "b535",
                description: "",
                children: [
                  {
                    title: "Sensation of nausea",
                    initial: "b5350",
                    description: "Sensation of needing to vomit.",
                    children: "",
                    key: 362,
                    isLeaf: true,
                  },
                  {
                    title: "Feeling bloated",
                    initial: "b5351",
                    description:
                      "Sensation of distension of the stomach or abdomen.",
                    children: "",
                    key: 363,
                    isLeaf: true,
                  },
                  {
                    title: "Sensation of abdominal cramp",
                    initial: "b5352",
                    description:
                      "Sensation of spasmodic or painful muscular contractions of the smooth muscles of the gastrointestinal tract.",
                    children: "",
                    key: 364,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with the digestive system, other specified",
                    initial: "b5358",
                    description: "",
                    children: "",
                    key: 365,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with the digestive system, unspecified",
                    initial: "b5359",
                    description: "",
                    children: "",
                    key: 366,
                    isLeaf: true,
                  },
                ],
                key: 361,
                isLeaf: false,
              },
              {
                title:
                  "Functions related to the digestive system, other specified and unspecified",
                initial: "b539",
                description: "",
                children: "",
                key: 367,
                isLeaf: true,
              },
            ],
            key: 324,
            isLeaf: false,
          },
          {
            title: "Functions related to metabolism and the endocrine system",
            initial: "b540-559",
            description: "",
            children: [
              {
                title: "General metabolic functions",
                initial: "b540",
                description:
                  "Functions of regulation of essential components of the body such as carbohydrates, proteins and fats, the conversion of one to another, and their breakdown into energy. \n Inclusions: functions of metabolism, basal metabolic rate, metabolism of carbohydrate, protein and fat, catabolism, anabolism, energy production in the body; increase or decrease in metabolic rate \n Exclusions: assimilation functions (b520); weight maintenance functions (b530); water, mineral and electrolyte balance functions (b545); thermoregulatory functions (b550); endocrine glands functions (b555)",
                children: [
                  {
                    title: "Basal metabolic rate",
                    initial: "b5400",
                    description:
                      "Functions involved in oxygen consumption of the body at specified conditions of rest and temperature. \n Inclusions: increase or decrease in basic metabolic rate; impairments such as in hyperthyroidism and hypothyroidism",
                    children: "",
                    key: 370,
                    isLeaf: true,
                  },
                  {
                    title: "Carbohydrate metabolism",
                    initial: "b5401",
                    description:
                      "Functions involved in the process by which carbohydrates in the diet are stored and broken down into glucose and subsequently into carbon dioxide and water.",
                    children: "",
                    key: 371,
                    isLeaf: true,
                  },
                  {
                    title: "Protein metabolism",
                    initial: "b5402",
                    description:
                      "Functions involved in the process by which proteins in the diet are converted to amino acids and broken down further in the body.",
                    children: "",
                    key: 372,
                    isLeaf: true,
                  },
                  {
                    title: "Fat metabolism",
                    initial: "b5403",
                    description:
                      "Functions involved in the process by which fat in the diet is stored and broken down in the body.",
                    children: "",
                    key: 373,
                    isLeaf: true,
                  },
                  {
                    title: "General metabolic functions, other specified",
                    initial: "b5408",
                    description: "",
                    children: "",
                    key: 374,
                    isLeaf: true,
                  },
                  {
                    title: "General metabolic functions, unspecified",
                    initial: "b5409",
                    description: "",
                    children: "",
                    key: 375,
                    isLeaf: true,
                  },
                ],
                key: 369,
                isLeaf: false,
              },
              {
                title: "Water, mineral and electrolyte balance functions",
                initial: "b545",
                description:
                  "Functions of the regulation of water, minerals and electrolytes in the body. \n Inclusions: functions of water balance, balance of minerals such as calcium, zinc and iron, and balance of electrolytes such as sodium and potassium; impairments such as in water retention, dehydration, hypercalcaemia, hypocalcaemia, iron deficiency, hypernatraemia, hyponatraemia, hyperkalaemia and hypokalaemia \n Exclusions: haematological system functions (b430); general metabolic functions (b540); endocrine gland functions (b555)",
                children: [
                  {
                    title: "Water balance",
                    initial: "b5450",
                    description:
                      "Functions involved in maintaining the level or amount of water in the body. \n Inclusions: impairments such as in dehydration and rehydration",
                    children: [
                      {
                        title: "Water retention",
                        initial: "b54500",
                        description:
                          "Functions involved in keeping water in the body.",
                        children: "",
                        key: 378,
                        isLeaf: true,
                      },
                      {
                        title: "Maintenance of water balance",
                        initial: "b54501",
                        description:
                          "Functions involved in maintaining the optimal amount of water in the body.",
                        children: "",
                        key: 379,
                        isLeaf: true,
                      },
                      {
                        title: "Water balance functions, other specified",
                        initial: "b54508",
                        description: "",
                        children: "",
                        key: 380,
                        isLeaf: true,
                      },
                      {
                        title: "Water balance functions, unspecified",
                        initial: "b54509",
                        description: "",
                        children: "",
                        key: 381,
                        isLeaf: true,
                      },
                    ],
                    key: 377,
                    isLeaf: false,
                  },
                  {
                    title: "Mineral balance",
                    initial: "b5451",
                    description:
                      "Functions involved in maintaining an equilibrium between intake, storage, utilization and excretion of minerals in the body.",
                    children: "",
                    key: 382,
                    isLeaf: true,
                  },
                  {
                    title: "Electrolyte balance",
                    initial: "b5452",
                    description:
                      "Functions involved in maintaining an equilibrium between intake, storage, utilization and excretion of electrolytes in the body.",
                    children: "",
                    key: 383,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Water, mineral and electrolyte balance functions, other specified",
                    initial: "b5458",
                    description: "",
                    children: "",
                    key: 384,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Water, mineral and electrolyte balance functions, unspecified",
                    initial: "b5459",
                    description: "",
                    children: "",
                    key: 385,
                    isLeaf: true,
                  },
                ],
                key: 376,
                isLeaf: false,
              },
              {
                title: "Thermoregulatory functions",
                initial: "b550",
                description:
                  "Functions of the regulation of body temperature. \n Inclusions: functions of maintenance of body temperature; impairments such as hypothermia, hyperthermia \n Exclusions: general metabolic functions (b540); endocrine gland functions (b555)",
                children: [
                  {
                    title: "Body temperature",
                    initial: "b5500",
                    description:
                      "Functions involved in regulating the core temperature of the body. \n Inclusions: impairments such as hyperthermia or hypothermia",
                    children: "",
                    key: 387,
                    isLeaf: true,
                  },
                  {
                    title: "Maintenance of body temperature",
                    initial: "b5501",
                    description:
                      "Functions involved in maintaining optimal body temperature as environmental temperature changes. \n Inclusions: tolerance to heat or cold",
                    children: "",
                    key: 388,
                    isLeaf: true,
                  },
                  {
                    title: "Thermoregulatory functions, other specified",
                    initial: "b5508",
                    description: "",
                    children: "",
                    key: 389,
                    isLeaf: true,
                  },
                  {
                    title: "Thermoregulatory functions, unspecified",
                    initial: "b5509",
                    description: "",
                    children: "",
                    key: 390,
                    isLeaf: true,
                  },
                ],
                key: 386,
                isLeaf: false,
              },
              {
                title: "Endocrine gland functions",
                initial: "b555",
                description:
                  "Functions of production and regulation of hormonal levels in the body, including cyclical changes.\n Inclusions: functions of hormonal balance, hyperpituitarism, hypopituitarism, hyperthyroidism, hypothyroidism, hyperadrenalism, hypoadrenalism, hyperparathyroidism, hypoparathyroidism, hypergonadism, hypogonadism \n Exclusions: general metabolic functions (b540); water, mineral and electrolyte balance functions (b545); thermoregulatory functions (b550); sexual functions (b640); menstruation functions (b650)",
                children: [
                  {
                    title: "Endocrine gland functions",
                    initial: "b5550",
                    description:
                      "Functions associated with the onset of puberty and manifestations of primary and secondary sexual characteristics.",
                    children: [
                      {
                        title: "Body and pubic hair development",
                        initial: "b55500",
                        description:
                          "Functions associated with development of body and pubic hair.",
                        children: "",
                        key: 393,
                        isLeaf: true,
                      },
                      {
                        title: "Breast and nipple development",
                        initial: "b55501",
                        description:
                          "Functions associated with breast and nipple development.",
                        children: "",
                        key: 394,
                        isLeaf: true,
                      },
                      {
                        title: "Penis, testes and scrotum development",
                        initial: "b55502",
                        description:
                          "Functions associated with development of penis, testes and scrotum.",
                        children: "",
                        key: 395,
                        isLeaf: true,
                      },
                      {
                        title: "Pubertal functions, other specified",
                        initial: "b55508",
                        description: "",
                        children: "",
                        key: 396,
                        isLeaf: true,
                      },
                      {
                        title: "Pubertal functions, unspecified",
                        initial: "b55509",
                        description: "",
                        children: "",
                        key: 397,
                        isLeaf: true,
                      },
                    ],
                    key: 392,
                    isLeaf: false,
                  },
                ],
                key: 391,
                isLeaf: false,
              },
              {
                title:
                  "Functions related to metabolism and the endocrine system, other specified and unspecified",
                initial: "b559",
                description: "",
                children: "",
                key: 398,
                isLeaf: true,
              },
            ],
            key: 368,
            isLeaf: false,
          },
          {
            title:
              "Functions of the digestive, metabolic and endocrine systems, other specified",
            initial: "b598",
            description: "",
            children: "",
            key: 399,
            isLeaf: true,
          },
          {
            title:
              "Functions of the digestive, metabolic and endocrine systems, unspecified",
            initial: "b599",
            description: "",
            children: "",
            key: 400,
            isLeaf: true,
          },
        ],
        key: 323,
        isLeaf: false,
      },
      {
        title: "GENITOURINARY AND REPRODUCTIVE FUNCTIONS",
        initial: "b6",
        description:
          "This chapter is about the functions of urination and the reproductive functions, including sexual and procreative functions.",
        children: [
          {
            title: "Urinary functions",
            initial: "b610-639",
            description: "",
            children: [
              {
                title: "Urinary excretory functions",
                initial: "b610",
                description:
                  "Functions of filtration and collection of the urine. \n Inclusions: functions of urinary filtration, collection of urine; impairments such as in renal insufficiency, anuria, oliguria, hydronephrosis, hypotonic urinary bladder and ureteric obstruction \n Exclusions: urination functions (b620)",
                children: [
                  {
                    title: "Filtration of urine",
                    initial: "b6100",
                    description:
                      "Functions of filtration of urine by the kidneys.",
                    children: "",
                    key: 404,
                    isLeaf: true,
                  },
                  {
                    title: "Collection of urine",
                    initial: "b6101",
                    description:
                      "Functions of collection and storage of urine by the ureters and bladder.",
                    children: "",
                    key: 405,
                    isLeaf: true,
                  },
                  {
                    title: "Urinary excretory functions, other specified",
                    initial: "b6108",
                    description: "",
                    children: "",
                    key: 406,
                    isLeaf: true,
                  },
                  {
                    title: "Urinary excretory functions, unspecified",
                    initial: "b6109",
                    description: "",
                    children: "",
                    key: 407,
                    isLeaf: true,
                  },
                ],
                key: 403,
                isLeaf: false,
              },
              {
                title: "Urination functions",
                initial: "b620",
                description:
                  "Functions of discharge of urine from the urinary bladder. \n Inclusions: functions of urination, frequency of urination, urinary continence; impairments such as in stress, urge, reflex, overflow, continuous incontinence, dribbling, automatic bladder, polyuria, urinary retention and urinary urgency \n Exclusions: urinary excretory functions (b610); sensations associated with urinary functions (b630)",
                children: [
                  {
                    title: "Urination",
                    initial: "b6200",
                    description:
                      "Functions of voiding the urinary bladder. \n Inclusions: impairments such as in urine retention",
                    children: "",
                    key: 409,
                    isLeaf: true,
                  },
                  {
                    title: "Frequency of urination",
                    initial: "b6201",
                    description:
                      "Functions involved in the number of times urination occurs.",
                    children: "",
                    key: 410,
                    isLeaf: true,
                  },
                  {
                    title: "Urinary continence",
                    initial: "b6202",
                    description:
                      "Functions of control over urination. \n Inclusions: impairments such as in stress, urge, reflex, continuous and mixed incontinence",
                    children: "",
                    key: 411,
                    isLeaf: true,
                  },
                  {
                    title: "Urination functions, other specified",
                    initial: "b6208",
                    description: "",
                    children: "",
                    key: 412,
                    isLeaf: true,
                  },
                  {
                    title: "Urination functions, unspecified",
                    initial: "b6209",
                    description: "",
                    children: "",
                    key: 413,
                    isLeaf: true,
                  },
                ],
                key: 408,
                isLeaf: false,
              },
              {
                title: "Sensations associated with urinary functions",
                initial: "b630",
                description:
                  "Sensations arising from voiding and related urinary functions.\n Inclusions: sensations of incomplete voiding of urine, feeling of fullness of bladder \n Exclusions: sensations of pain (b280); urination functions (b620)",
                children: "",
                key: 414,
                isLeaf: true,
              },
              {
                title: "Urinary functions, other specified and unspecified",
                initial: "b639",
                description: "",
                children: "",
                key: 415,
                isLeaf: true,
              },
            ],
            key: 402,
            isLeaf: false,
          },
          {
            title: "Genital and reproductive functions",
            initial: "b640-679",
            description: "",
            children: [
              {
                title: "Sexual functions",
                initial: "b640",
                description:
                  "Mental and physical functions related to the sexual act, including the arousal, preparatory, orgasmic and resolution stages. \n Inclusions: functions of the sexual arousal, preparatory, orgasmic and resolution phase; functions related to sexual interest, performance, penile erection, clitoral erection, vaginal lubrication, ejaculation, orgasm; impairments such as in impotence, frigidity, vaginismus, premature ejaculation, priaprism and delayed ejaculation \n Exclusions: procreation functions (b660); sensations associated with genital and reproductive functions (b670)",
                children: [
                  {
                    title: "Functions of sexual arousal phase",
                    initial: "b6400",
                    description: "Functions of sexual interest and excitement.",
                    children: "",
                    key: 418,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of sexual preparatory phase",
                    initial: "b6401",
                    description: "Functions of engaging in sexual intercourse.",
                    children: "",
                    key: 419,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of orgasmic phase",
                    initial: "b6402",
                    description: "Functions of reaching orgasm.",
                    children: "",
                    key: 420,
                    isLeaf: true,
                  },
                  {
                    title: "Functions of sexual resolution phase",
                    initial: "b6403",
                    description:
                      "Functions of satisfaction after orgasm and accompanying relaxation. \n Inclusions: impairments such as dissatisfaction with orgasm",
                    children: "",
                    key: 421,
                    isLeaf: true,
                  },
                  {
                    title: "Sexual functions, other specified",
                    initial: "b6408",
                    description: "",
                    children: "",
                    key: 422,
                    isLeaf: true,
                  },
                  {
                    title: "Sexual functions, unspecified",
                    initial: "b6409",
                    description: "",
                    children: "",
                    key: 423,
                    isLeaf: true,
                  },
                ],
                key: 417,
                isLeaf: false,
              },
              {
                title: "Menstruation functions",
                initial: "b650",
                description:
                  "Functions associated with the menstrual cycle, including regularity of menstruation and discharge of menstrual fluids. \n Inclusions: functions of regularity and interval of menstruation, extent of menstrual bleeding, menarche, menopause; impairments such as primary and secondary amenorrhoea, menorrhagia, polymenorrhoea, retrograde menstruation and premenstrual tension \n Exclusions: sexual functions (b640); procreation functions (b660); sensations associated with genital and reproductive functions (b670); sensation of pain (b280)",
                children: [
                  {
                    title: "Regularity of menstrual cycle",
                    initial: "b6500",
                    description:
                      "Functions involved in the regularity of the menstrual cycle. \n Inclusions: too frequent or too few occurrences of menstruation",
                    children: "",
                    key: 425,
                    isLeaf: true,
                  },
                  {
                    title: "Interval between menstruation",
                    initial: "b6501",
                    description:
                      "Functions relating to the length of time between two menstrual cycles.",
                    children: "",
                    key: 426,
                    isLeaf: true,
                  },
                  {
                    title: "Extent of menstrual bleeding",
                    initial: "b6502",
                    description:
                      "Functions involved in the quantity of menstrual flow. \n Inclusions: too little menstrual flow (hypomenorrhoea); too much menstrual flow (menorrhagia, hypermenorrhoea)",
                    children: "",
                    key: 427,
                    isLeaf: true,
                  },
                  {
                    title: "Onset of menstruation",
                    initial: "b6503",
                    description:
                      "Functions related to the onset of the first menstruation (menarche).",
                    children: "",
                    key: 428,
                    isLeaf: true,
                  },
                  {
                    title: "Cessation of menstruation",
                    initial: "b6504",
                    description:
                      "Functions related to the temporary or permanent cessation of menstruation. \n Inclusions: amenorrhea, menopause, praecoxial menopause",
                    children: "",
                    key: 429,
                    isLeaf: true,
                  },
                  {
                    title: "Menstruation functions, other specified",
                    initial: "b6508",
                    description: "",
                    children: "",
                    key: 430,
                    isLeaf: true,
                  },
                  {
                    title: "Menstruation functions, unspecified",
                    initial: "b6509",
                    description: "",
                    children: "",
                    key: 431,
                    isLeaf: true,
                  },
                ],
                key: 424,
                isLeaf: false,
              },
              {
                title: "Procreation functions",
                initial: "b660",
                description:
                  "Functions associated with fertility, pregnancy, childbirth and lactation. \n Inclusions: functions of male fertility and female fertility, pregnancy and childbirth, and lactation; impairments such as azoospermia, oligozoospermia, agalactorrhoea, galactorrhoea, alactation and such as in subfertility, sterility, spontaneous abortions, ectopicpregnancy, miscarriage, small fetus, hydramnios and premature childbirth, and delayed childbirth \n Exclusions: sexual functions (b640); menstruation functions (b650)",
                children: [
                  {
                    title: "Functions related to fertility",
                    initial: "b6600",
                    description:
                      "Functions related to the ability to produce gametes for procreation. \n Inclusions: impairments such as in subfertility and sterility \n Exclusions: Sexual functions (b640)",
                    children: "",
                    key: 433,
                    isLeaf: true,
                  },
                  {
                    title: "Functions related to pregnancy",
                    initial: "b6601",
                    description:
                      "Functions involved in becoming pregnant and being pregnant.",
                    children: "",
                    key: 434,
                    isLeaf: true,
                  },
                  {
                    title: "Functions related to childbirth",
                    initial: "b6602",
                    description: "Functions involved during childbirth.",
                    children: "",
                    key: 435,
                    isLeaf: true,
                  },
                  {
                    title: "Lactation",
                    initial: "b6603",
                    description:
                      "Functions involved in the production of milk and making it available to the child.",
                    children: "",
                    key: 436,
                    isLeaf: true,
                  },
                  {
                    title: "Procreation functions, other specified",
                    initial: "b6608",
                    description: "",
                    children: "",
                    key: 437,
                    isLeaf: true,
                  },
                  {
                    title: "Procreation functions, unspecified",
                    initial: "b6609",
                    description: "",
                    children: "",
                    key: 438,
                    isLeaf: true,
                  },
                ],
                key: 432,
                isLeaf: false,
              },
              {
                title:
                  "Sensations associated with genital and reproductive functions",
                initial: "b670",
                description:
                  "Sensations associated with sexual intercourse, menstruation, and related genital or reproductive functions \n Inclusions: sensations of dyspareunia, dysmenorrhoea, hot flushes during menopause and night sweats during menopause, sensations associated with self-stimulation of the genitals \n Exclusions: sensation of pain (b280); sensations associated with urinary functions (b630); sexual functions (b640); menstruation functions (b650); procreation functions (b660)",
                children: [
                  {
                    title: "Sensations associated with sexual intercourse",
                    initial: "b6700",
                    description:
                      "Sensations associated with sexual arousal, preparation, intercourse, orgasm and resolution.",
                    children: "",
                    key: 440,
                    isLeaf: true,
                  },
                  {
                    title: "Sensations associated with the menstrual cycle",
                    initial: "b6701",
                    description:
                      "Sensations involved with menstruation, including pre- and post-menstrual phases.",
                    children: "",
                    key: 441,
                    isLeaf: true,
                  },
                  {
                    title: "Sensations associated with menopause",
                    initial: "b6702",
                    description:
                      "Sensations associated with the cessation of menstrual cycle. \n Inclusions: hot flushes and night sweats during menopause",
                    children: "",
                    key: 442,
                    isLeaf: true,
                  },
                  {
                    title: "Sensations associated with genital functions",
                    initial: "b6703",
                    description:
                      "Sensations associated with arousal of the genitals. \n Inclusions: sensations associated with self-stimulation of the genitals \n Exclusions: sexual functions (b640); procreation functions (b660)",
                    children: "",
                    key: 443,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with genital and reproductive functions, other specified",
                    initial: "b6708",
                    description: "",
                    children: "",
                    key: 444,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations associated with genital and reproductive functions, unspecified",
                    initial: "b6709",
                    description: "",
                    children: "",
                    key: 445,
                    isLeaf: true,
                  },
                ],
                key: 439,
                isLeaf: false,
              },
              {
                title:
                  "Genital and reproductive functions, other specified and unspecified",
                initial: "b679",
                description: "",
                children: "",
                key: 446,
                isLeaf: true,
              },
            ],
            key: 416,
            isLeaf: false,
          },
          {
            title: "Genitourinary and reproductive functions, other specified",
            initial: "b698",
            description: "",
            children: "",
            key: 447,
            isLeaf: true,
          },
          {
            title: "Genitourinary and reproductive functions, unspecified",
            initial: "b699",
            description: "",
            children: "",
            key: 448,
            isLeaf: true,
          },
        ],
        key: 401,
        isLeaf: false,
      },
      {
        title: "NEUROMUSCULOSKELETAL AND MOVEMENT-RELATED FUNCTIONS",
        initial: "b7",
        description: "",
        children: [
          {
            title: "Functions of the joints and bones",
            initial: "b710-729",
            description: "",
            children: [
              {
                title: "Mobility of joint functions",
                initial: "b710",
                description: "",
                children: [
                  {
                    title: "Mobility of a single joint",
                    initial: "b7100",
                    description:
                      "Functions of the range and ease of movement of one joint.",
                    children: "",
                    key: 452,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of several joints",
                    initial: "b7101",
                    description:
                      "Functions of the range and ease of movement of more than one joint.",
                    children: "",
                    key: 453,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of joints generalized",
                    initial: "b7102",
                    description:
                      "Functions of the range and ease of movement of joints throughout the body.",
                    children: "",
                    key: 454,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of joint functions, other specified",
                    initial: "b7108",
                    description: "",
                    children: "",
                    key: 455,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of joint functions, unspecified",
                    initial: "b7109",
                    description: "",
                    children: "",
                    key: 456,
                    isLeaf: true,
                  },
                ],
                key: 451,
                isLeaf: false,
              },
              {
                title: "Stability of joint functions",
                initial: "b715",
                description: "",
                children: [
                  {
                    title: "Stability of a single joint",
                    initial: "b7150",
                    description:
                      "Functions of the maintenance of structural integrity of one joint.",
                    children: "",
                    key: 458,
                    isLeaf: true,
                  },
                  {
                    title: "Stability of several joints",
                    initial: "b7151",
                    description:
                      "Functions of the maintenance of structural integrity of more than one joint.",
                    children: "",
                    key: 459,
                    isLeaf: true,
                  },
                  {
                    title: "Stability of joints generalized",
                    initial: "b7152",
                    description:
                      "Functions of the maintenance of structural integrity of joints throughout the body.",
                    children: "",
                    key: 460,
                    isLeaf: true,
                  },
                  {
                    title: "Stability of joint functions, other specified",
                    initial: "b7158",
                    description: "",
                    children: "",
                    key: 461,
                    isLeaf: true,
                  },
                  {
                    title: "Stability of joint functions, unspecified",
                    initial: "b7159",
                    description: "",
                    children: "",
                    key: 462,
                    isLeaf: true,
                  },
                ],
                key: 457,
                isLeaf: false,
              },
              {
                title: "Mobility of bone functions",
                initial: "b720",
                description: "",
                children: [
                  {
                    title: "Mobility of scapula",
                    initial: "b7200",
                    description:
                      "Functions of the range and ease of movement of the scapula. \n Inclusions: impairments such as protraction, retraction, laterorotation and medial rotation of the scapula",
                    children: "",
                    key: 464,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of pelvis",
                    initial: "b7201",
                    description:
                      "Functions of the range and ease of movement of the pelvis. \n Inclusions: rotation of the pelvis",
                    children: "",
                    key: 465,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of carpal bones",
                    initial: "b7202",
                    description:
                      "Functions of the range and ease of movement of the carpal bones.",
                    children: "",
                    key: 466,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of tarsal bones",
                    initial: "b7203",
                    description:
                      "Functions of the range and ease of movement of the tarsal bones.",
                    children: "",
                    key: 467,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of bone functions, other specified",
                    initial: "b7208",
                    description: "",
                    children: "",
                    key: 468,
                    isLeaf: true,
                  },
                  {
                    title: "Mobility of bone functions, specified",
                    initial: "b7209",
                    description: "",
                    children: "",
                    key: 469,
                    isLeaf: true,
                  },
                ],
                key: 463,
                isLeaf: false,
              },
              {
                title:
                  "Functions of the joints and bones, other specified and unspecified",
                initial: "b729",
                description: "",
                children: "",
                key: 470,
                isLeaf: true,
              },
            ],
            key: 450,
            isLeaf: false,
          },
          {
            title: "Muscle functions",
            initial: "b730-749",
            description: "",
            children: [
              {
                title: "Muscle power functions",
                initial: "b730",
                description: "",
                children: [
                  {
                    title: "Power of isolated muscles and muscle groups",
                    initial: "b7300",
                    description:
                      "Functions related to the force generated by the contraction of specific and isolated muscles and muscle groups. \n Inclusions: impairments such as weakness of small muscles of feet or hands",
                    children: "",
                    key: 473,
                    isLeaf: true,
                  },
                  {
                    title: "Power of muscles of one limb",
                    initial: "b7301",
                    description:
                      "Functions related to the force generated by the contraction of the muscles and muscle groups of one arm or leg. \n Inclusions: impairments such as monoparesis and monoplegia",
                    children: "",
                    key: 474,
                    isLeaf: true,
                  },
                  {
                    title: "Power of muscles of one side of the body",
                    initial: "b7302",
                    description:
                      "Functions related to the force generated by the contraction of the muscles and muscle groups found on the left or right side of the body. \n Inclusions: impairments such as hemiparesis and hemiplegia Search Fields",
                    children: "",
                    key: 475,
                    isLeaf: true,
                  },
                  {
                    title: "Power of muscles in lower half of the body",
                    initial: "b7303",
                    description:
                      "Functions related to the force generated by the contraction of the muscles and muscle groups found in the lower half of the body. \n Inclusions: impairments such as paraparesis and paraplegia",
                    children: "",
                    key: 476,
                    isLeaf: true,
                  },
                  {
                    title: "Power of muscles of all limbs",
                    initial: "b7304",
                    description:
                      "Functions related to the force generated by the contraction of muscles and muscle groups of all four limbs. \n Inclusions: impairments such as tetraparesis and tetraplegia",
                    children: "",
                    key: 477,
                    isLeaf: true,
                  },
                  {
                    title: "Power of muscles of the trunk",
                    initial: "b7305",
                    description:
                      "Functions related to the force generated by the contraction of muscles and muscle groups in the trunk.",
                    children: "",
                    key: 478,
                    isLeaf: true,
                  },
                  {
                    title: "Power of all muscles of the body",
                    initial: "b7306",
                    description:
                      "Functions related to the force generated by the contraction of all muscles and muscle groups of the body. \n Inclusions: impairments such as akinetic mutism",
                    children: "",
                    key: 479,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle power functions, other specified",
                    initial: "b7308",
                    description: "",
                    children: "",
                    key: 480,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle power functions, unspecified",
                    initial: "b7309",
                    description: "",
                    children: "",
                    key: 481,
                    isLeaf: true,
                  },
                ],
                key: 472,
                isLeaf: false,
              },
              {
                title: "Muscle tone functions",
                initial: "b735",
                description: "",
                children: [
                  {
                    title: "Tone of isolated muscles and muscle groups",
                    initial: "b7350",
                    description:
                      "Functions related to the tension present in the resting isolated muscles and muscle groups and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments such as in focal dystonias, e.g. torticollis",
                    children: "",
                    key: 483,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of muscles of one limb",
                    initial: "b7351",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups in one arm or leg and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments associated with monoparesis and monoplegia",
                    children: "",
                    key: 484,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of muscles of one side of body",
                    initial: "b7352",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups of the right or left side of the body and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments associated with hemiparesis and hemiplegia",
                    children: "",
                    key: 485,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of muscles of lower half of body",
                    initial: "b7353",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups in the lower half of the body and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments associated with paraparesis and paraplegia",
                    children: "",
                    key: 486,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of muscles of all limbs",
                    initial: "b7354",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups in all four limbs and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments associated with tetraparesis and tetraplegia",
                    children: "",
                    key: 487,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of muscles of trunk",
                    initial: "b7355",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups of the trunk and the resistance offered when trying to move those muscles passively.",
                    children: "",
                    key: 488,
                    isLeaf: true,
                  },
                  {
                    title: "Tone of all muscles of the body",
                    initial: "b7356",
                    description:
                      "Functions related to the tension present in the resting muscles and muscle groups of the whole body and the resistance offered when trying to move those muscles passively. \n Inclusions: impairments such as in generalized dystonias and Parkinson's disease, or general paresis and paralysis",
                    children: "",
                    key: 489,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle tone functions, other specified",
                    initial: "b7358",
                    description: "",
                    children: "",
                    key: 490,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle tone functions, unspecified",
                    initial: "b7359",
                    description: "",
                    children: "",
                    key: 491,
                    isLeaf: true,
                  },
                ],
                key: 482,
                isLeaf: false,
              },
              {
                title: "Muscle endurance functions",
                initial: "b740",
                description: "",
                children: [
                  {
                    title: "Endurance of isolated muscles",
                    initial: "b7400",
                    description:
                      "Functions related to sustaining muscle contraction of isolated muscles for the required period of time.",
                    children: "",
                    key: 493,
                    isLeaf: true,
                  },
                  {
                    title: "Endurance of muscle groups",
                    initial: "b7401",
                    description:
                      "Functions related to sustaining muscle contraction of isolated muscle groups for the required period of time. \n Inclusions: impairments associated with monoparesis, monoplegia, hemiparesis and hemiplegia, paraparesis and paraplegia",
                    children: "",
                    key: 494,
                    isLeaf: true,
                  },
                  {
                    title: "Endurance of all muscles of the body",
                    initial: "b7402",
                    description:
                      "Functions related to sustaining muscle contraction of all muscles of the body for the required period of time. \n Inclusions: impairments associated with tetraparesis, tetraplegia, general paresis and paralysis",
                    children: "",
                    key: 495,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle endurance functions, other specified",
                    initial: "b7408",
                    description: "",
                    children: "",
                    key: 496,
                    isLeaf: true,
                  },
                  {
                    title: "Muscle endurance functions, unspecified",
                    initial: "b7409",
                    description: "",
                    children: "",
                    key: 497,
                    isLeaf: true,
                  },
                ],
                key: 492,
                isLeaf: false,
              },
              {
                title: "Muscle functions, other specified and unspecified",
                initial: "b749",
                description: "",
                children: "",
                key: 498,
                isLeaf: true,
              },
            ],
            key: 471,
            isLeaf: false,
          },
          {
            title: "Movement functions",
            initial: "b750-789",
            description: "",
            children: [
              {
                title: "Motor reflex functions",
                initial: "b750",
                description: "",
                children: [
                  {
                    title: "Stretch motor reflex",
                    initial: "b7500",
                    description:
                      "Functions of involuntary contractions of muscles automatically induced by stretching.",
                    children: "",
                    key: 501,
                    isLeaf: true,
                  },
                  {
                    title: "Reflexes generated by noxious stimuli",
                    initial: "b7501",
                    description:
                      "Functions of involuntary contractions of muscles automatically induced by painful or other noxious stimuli. \n Inclusions: withdrawal reflex",
                    children: "",
                    key: 502,
                    isLeaf: true,
                  },
                  {
                    title: "Reflexes generated by other exteroceptive stimuli",
                    initial: "b7502",
                    description:
                      "Functions of involuntary contractions of muscles automatically induced by external stimuli other than noxious stimuli. \n Inclusions: rooting, grasping, sucking and other primitive reflexes",
                    children: "",
                    key: 503,
                    isLeaf: true,
                  },
                  {
                    title: "Motor reflex functions, other specified",
                    initial: "b7508",
                    description: "",
                    children: "",
                    key: 504,
                    isLeaf: true,
                  },
                  {
                    title: "Motor reflex functions, unspecified",
                    initial: "b7509",
                    description: "",
                    children: "",
                    key: 505,
                    isLeaf: true,
                  },
                ],
                key: 500,
                isLeaf: false,
              },
              {
                title: "Involuntary movement reaction functions",
                initial: "b755",
                description:
                  "Functions of involuntary contractions of large muscles or the whole body induced by body position, balance and threatening stimuli. \n Inclusions: functions of postural reactions, righting reactions, body adjustment reactions, balance reactions, supporting reactions, defensive reactions \n Exclusions: motor reflex functions (b750)",
                children: "",
                key: 506,
                isLeaf: true,
              },
              {
                title: "Control of voluntary movement functions",
                initial: "b760",
                description: "",
                children: [
                  {
                    title: "Control of simple voluntary movements",
                    initial: "b7600",
                    description:
                      "Functions associated with control over and coordination of simple or isolated voluntary movements.",
                    children: "",
                    key: 508,
                    isLeaf: true,
                  },
                  {
                    title: "Control of complex voluntary movements",
                    initial: "b7601",
                    description:
                      "Functions associated with control over and coordination of complex voluntary movements.",
                    children: "",
                    key: 509,
                    isLeaf: true,
                  },
                  {
                    title: "Coordination of voluntary movements",
                    initial: "b7602",
                    description:
                      "Functions associated with coordination of simple and complex voluntary movements, performing movements in an orderly combination. \n Inclusions: right left coordination, coordination of visually directed movements, such as eye hand coordination and eye foot coordination; impairments such as dysdiadochokinesia",
                    children: "",
                    key: 510,
                    isLeaf: true,
                  },
                  {
                    title: "Supportive functions of arm or leg",
                    initial: "b7603",
                    description:
                      "Functions associated with control over and coordination of voluntary movements by placing weight either on the arms (elbows or hands) or on the legs (knees or feet).",
                    children: "",
                    key: 511,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Control of voluntary movement functions, other specified",
                    initial: "b7608",
                    description: "",
                    children: "",
                    key: 512,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Control of voluntary movement functions, unspecified",
                    initial: "b7609",
                    description: "",
                    children: "",
                    key: 513,
                    isLeaf: true,
                  },
                ],
                key: 507,
                isLeaf: false,
              },
              {
                title: "Spontaneous movements",
                initial: "b761",
                description: "",
                children: [
                  {
                    title: "General movements",
                    initial: "b7610",
                    description:
                      "Repertoire and quality of age-specific general spontaneous movements such as 'writhing' movements and 'fidgety' movements in early life.",
                    children: "",
                    key: 515,
                    isLeaf: true,
                  },
                  {
                    title: "Specific spontaneous movements",
                    initial: "b7611",
                    description:
                      "Repertoire and quality of other spontaneous movements normally present in the first postnatal months, such as arm and leg movements toward midline, finger movements and kicking.",
                    children: "",
                    key: 516,
                    isLeaf: true,
                  },
                  {
                    title: "Spontaneous movements, other specified",
                    initial: "b7618",
                    description: "",
                    children: "",
                    key: 517,
                    isLeaf: true,
                  },
                  {
                    title: "Spontaneous movements, unspecified",
                    initial: "b7619",
                    description: "",
                    children: "",
                    key: 518,
                    isLeaf: true,
                  },
                ],
                key: 514,
                isLeaf: false,
              },
              {
                title: "Involuntary movement functions",
                initial: "b765",
                description: "",
                children: [
                  {
                    title: "Involuntary contractions of muscles",
                    initial: "b7650",
                    description:
                      "Functions of unintentional, non- or semi-purposive involuntary contractions of a muscle or group of muscles, such as those involved in part of a psychological dysfunction. \n Inclusions: impairments such as choreatic and athethotic movements; sleep-related movement disorders",
                    children: "",
                    key: 520,
                    isLeaf: true,
                  },
                  {
                    title: "Tremor",
                    initial: "b7651",
                    description:
                      "Functions of alternating contraction and relaxation of a group of muscles around a joint, resulting in shakiness.",
                    children: "",
                    key: 521,
                    isLeaf: true,
                  },
                  {
                    title: "Tics and mannerisms",
                    initial: "b7652",
                    description:
                      "Functions of repetitive, quasi-purposive, involuntary contractions of a group of muscles. \n Inclusions: impairments such as vocal tics, coprolalia and bruxism",
                    children: "",
                    key: 522,
                    isLeaf: true,
                  },
                  {
                    title: "Stereotypies and motor perseveration",
                    initial: "b7653",
                    description:
                      "Functions of spontaneous, non-purposive movements such as repetively rocking to and fro and nodding the head or wiggling.",
                    children: "",
                    key: 523,
                    isLeaf: true,
                  },
                  {
                    title: "Involuntary movement functions, other specified",
                    initial: "b7658",
                    description: "",
                    children: "",
                    key: 524,
                    isLeaf: true,
                  },
                  {
                    title: "Involuntary movement functions, unspecified",
                    initial: "b7659",
                    description: "",
                    children: "",
                    key: 525,
                    isLeaf: true,
                  },
                ],
                key: 519,
                isLeaf: false,
              },
              {
                title: "Gait pattern functions",
                initial: "b770",
                description:
                  "Functions of movement patterns associated with walking, running or other whole body movements. \n Inclusions: walking patterns and running patterns; impairments such as spastic gait, hemiplegic gait, paraplegic gait, asymmetric gait, limping and stiff gait pattern \n Exclusions: muscle power functions (b730); muscle tone functions (b735); control of voluntary movement functions (b760); involuntary movement functions (b765)",
                children: "",
                key: 526,
                isLeaf: true,
              },
              {
                title: "Sensations related to muscles and movement functions",
                initial: "b780",
                description: "",
                children: [
                  {
                    title: "Sensation of muscle stiffness",
                    initial: "b7800",
                    description:
                      "Sensation of tightness or stiffness of muscles.",
                    children: "",
                    key: 528,
                    isLeaf: true,
                  },
                  {
                    title: "Sensation of muscle spasm",
                    initial: "b7801",
                    description:
                      "Sensation of involuntary contraction of a muscle or a group of muscles.",
                    children: "",
                    key: 529,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations related to muscles and movement functions, other specified",
                    initial: "b7808",
                    description: "",
                    children: "",
                    key: 530,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Sensations related to muscles and movement functions, unspecified",
                    initial: "b7809",
                    description: "",
                    children: "",
                    key: 531,
                    isLeaf: true,
                  },
                ],
                key: 527,
                isLeaf: false,
              },
              {
                title: "Movement functions, other specified and unspecified",
                initial: "b789",
                description: "",
                children: "",
                key: 532,
                isLeaf: true,
              },
            ],
            key: 499,
            isLeaf: false,
          },
          {
            title:
              "Neuromusculoskeletal and movement-related functions, other specified",
            initial: "b798",
            description: "",
            children: "",
            key: 533,
            isLeaf: true,
          },
          {
            title:
              "Neuromusculoskeletal and movement-related functions, unspecified",
            initial: "b799",
            description: "",
            children: "",
            key: 534,
            isLeaf: true,
          },
        ],
        key: 449,
        isLeaf: false,
      },
      {
        title: "FUNCTIONS OF THE SKIN AND RELATED STRUCTURES",
        initial: "b8",
        description: "",
        children: [
          {
            title: "Functions of the skin",
            initial: "b810-849",
            description: "",
            children: [
              {
                title: "Protective functions of the skin",
                initial: "b810",
                description:
                  "Functions of the skin for protecting the body from physical, chemical and biological threats. \n Inclusions: functions of protecting against the sun and other radiation, photosensitivity, pigmentation, quality of skin, insulating function of skin, callus formation, hardening; impairments such as broken skin, ulcers, bedsores and thinning of skin \n Exclusions: repair functions of the skin (b820); other functions of the skin (b830)",
                children: "",
                key: 537,
                isLeaf: true,
              },
              {
                title: "Repair functions of the skin",
                initial: "b820",
                description:
                  "Functions of the skin for repairing breaks and other damage to the skin. \n Inclusions: functions of scab formation, healing, scarring; bruising and keloid formation \n Exclusions: protective functions of the skin (b810); other functions of the skin (b830)",
                children: "",
                key: 538,
                isLeaf: true,
              },
              {
                title: "Other functions of the skin",
                initial: "b830",
                description:
                  "Functions of the skin other than protection and repair, such as cooling and sweat secretion. \n Inclusions: functions of sweating, glandular functions of the skin and resulting body odour \n Exclusions: protective functions of the skin (b810); repair functions of the skin (b820)",
                children: "",
                key: 539,
                isLeaf: true,
              },
              {
                title: "Sensation related to the skin",
                initial: "b840",
                description:
                  "Sensations related to the skin such as itching, burning sensation and tingling. \n Inclusions: impairments such as pins and needles sensation and crawling sensation \n Exclusions: sensation of pain (b280)",
                children: "",
                key: 540,
                isLeaf: true,
              },
              {
                title: "Functions of the skin, other specified and unspecified",
                initial: "b849",
                description: "",
                children: "",
                key: 541,
                isLeaf: true,
              },
            ],
            key: 536,
            isLeaf: false,
          },
          {
            title: "Functions of the hair and nails",
            initial: "b850-869",
            description: "",
            children: [
              {
                title: "Functions of hair",
                initial: "b850",
                description:
                  "Functions of the hair, such as protection, coloration and appearance. \n Inclusions: functions of growth of hair, pigmentation of hair, location of hair; impairments such as loss of hair or alopecia",
                children: "",
                key: 543,
                isLeaf: true,
              },
              {
                title: "Functions of nails",
                initial: "b860",
                description:
                  "Functions of the nails, such as protection, scratching and appearance. \n Inclusions: growth and pigmentation of nails, quality of nails",
                children: "",
                key: 544,
                isLeaf: true,
              },
              {
                title:
                  "Functions of the hair and nails, other specified and unspecified",
                initial: "b869",
                description: "",
                children: "",
                key: 545,
                isLeaf: true,
              },
            ],
            key: 542,
            isLeaf: false,
          },
          {
            title:
              "Functions of the skin and related structures, other specified",
            initial: "b898",
            description: "",
            children: "",
            key: 546,
            isLeaf: true,
          },
          {
            title: "Functions of the skin and related structures, unspecified",
            initial: "b899",
            description: "",
            children: "",
            key: 547,
            isLeaf: true,
          },
        ],
        key: 535,
        isLeaf: false,
      },
    ],
    key: 1,
    isLeaf: false,
  },
  {
    title: "ACTIVITIES AND PARTICIPATION",
    initial: "d",
    description: "",
    children: [
      {
        title: "LEARNING AND APPLYING KNOWLEDGE",
        initial: "d1",
        description: "",
        children: [
          {
            title: "Purposeful sensory experiences",
            initial: "d110-129",
            description: "",
            children: [
              {
                title: "Watching",
                initial: "d110",
                description:
                  "Using the sense of seeing intentionally to experience visual stimuli, such as visually tracking an object, watching a sporting event, people, or children playing.",
                children: "",
                key: 551,
                isLeaf: true,
              },
              {
                title: "Listening",
                initial: "d115",
                description:
                  "Using the sense of hearing intentionally to experience auditory stimuli, such as listening to a radio, to the human voice, to music, to a lecture or to a story told.",
                children: "",
                key: 552,
                isLeaf: true,
              },
              {
                title: "Other purposeful sensing",
                initial: "d120",
                description:
                  "Using the body's other basic senses intentionally to experience stimuli, such as touching and feeling textures, tasting sweets or smelling flowers.",
                children: [
                  {
                    title: "Mouthing",
                    initial: "d1200",
                    description: "Exploring objects using mouth or lips.",
                    children: "",
                    key: 554,
                    isLeaf: true,
                  },
                  {
                    title: "Touching",
                    initial: "d1201",
                    description:
                      "Exploring objects using hands, fingers or other limbs or body parts. \n \n Exclusions: mouthing (d1200)",
                    children: "",
                    key: 555,
                    isLeaf: true,
                  },
                  {
                    title: "Smelling",
                    initial: "d1202",
                    description:
                      "Sensing objects by bringing them to the nose or the nose to objects.",
                    children: "",
                    key: 556,
                    isLeaf: true,
                  },
                  {
                    title: "Tasting",
                    initial: "d1203",
                    description:
                      "Exploring the taste of food or liquid by biting, chewing or sucking.",
                    children: "",
                    key: 557,
                    isLeaf: true,
                  },
                  {
                    title: "Other purposeful sensing, other specified",
                    initial: "d1208",
                    description: "",
                    children: "",
                    key: 558,
                    isLeaf: true,
                  },
                  {
                    title: "Other purposeful sensing, unspecified",
                    initial: "d1209",
                    description: "",
                    children: "",
                    key: 559,
                    isLeaf: true,
                  },
                ],
                key: 553,
                isLeaf: false,
              },
              {
                title:
                  "Purposeful sensory experiences, other specified and unspecified",
                initial: "d129",
                description: "",
                children: "",
                key: 560,
                isLeaf: true,
              },
            ],
            key: 550,
            isLeaf: false,
          },
          {
            title: "Basic learning",
            initial: "d130-159",
            description: "",
            children: [
              {
                title: "Copying",
                initial: "d130",
                description:
                  "Imitating or mimicking as a basic component of learning, such as copying a facial expression, a gesture, a sound, or the letters of an alphabet.",
                children: "",
                key: 562,
                isLeaf: true,
              },
              {
                title: "Learning through actions with objects",
                initial: "d131",
                description:
                  "Learning through simple actions on a single object, two or more objects, symbolic and pretend play, such as in hitting an object, banging blocks and playing with dolls or cars. \n \n Exclusions: play (d9200); carrying, moving and handling objects d430-d449",
                children: [
                  {
                    title:
                      "Learning through simple actions with a single object",
                    initial: "d1310",
                    description:
                      "Simple actions with a single object or toy by manipulating, banging, moving, dropping, etc.",
                    children: "",
                    key: 564,
                    isLeaf: true,
                  },
                  {
                    title: "Learning through actions by relating objects",
                    initial: "d1311",
                    description:
                      "Simple actions relating two or more objects, toys or other materials without regard for the specific features of the objects, toys or materials.",
                    children: "",
                    key: 565,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Learning through actions by relating objects with regard tospecific features",
                    initial: "d1312",
                    description:
                      "Actions relating two or more objects, toys or materials with regard to specific features, e.g. lid on box, cup on saucer.",
                    children: "",
                    key: 566,
                    isLeaf: true,
                  },
                  {
                    title: "Learning by relating symbolically to objects",
                    initial: "d1313",
                    description:
                      "Relating to objects, toys or materials symbolically, such as feeding or dressing a doll or using a simulated environment.",
                    children: "",
                    key: 567,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Learning through actions with objects, other specified",
                    initial: "d1318",
                    description: "",
                    children: "",
                    key: 568,
                    isLeaf: true,
                  },
                  {
                    title: "Learning through actions with objects, unspecified",
                    initial: "d1319",
                    description: "",
                    children: "",
                    key: 569,
                    isLeaf: true,
                  },
                ],
                key: 563,
                isLeaf: false,
              },
              {
                title: "Acquiring language",
                initial: "d132",
                description: "",
                children: [
                  {
                    title: "Acquiring single words or meaningful symbols",
                    initial: "d1320",
                    description:
                      "Learning words or meaningful symbols such as graphic or manual signs or symbols.",
                    children: "",
                    key: 571,
                    isLeaf: true,
                  },
                  {
                    title: "Combining words into phrases",
                    initial: "d1321",
                    description: "Learning to combine words into phrases.",
                    children: "",
                    key: 572,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring syntax",
                    initial: "d1322",
                    description:
                      "Learning to produce appropriately constructed sentences or set of sentences.",
                    children: "",
                    key: 573,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring language, other specified",
                    initial: "d1328",
                    description: "",
                    children: "",
                    key: 574,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring language, unspecified",
                    initial: "d1329",
                    description: "",
                    children: "",
                    key: 575,
                    isLeaf: true,
                  },
                ],
                key: 570,
                isLeaf: false,
              },
              {
                title: "Acquiring an additional language",
                initial: "d133",
                description:
                  "Developing the competence to represent persons, objects, events, feelings through words, symbols, phrases and sentences, in an additional language such as a foreign language or signing. \n \n Exclusions: acquiring language (d132); communication (d310-d399)",
                children: "",
                key: 576,
                isLeaf: true,
              },
              {
                title: "Rehearsing",
                initial: "d133",
                description:
                  "Repeating a sequence of events or symbols as a basic component of learning, such as counting by tens or practising the recitation of a rhyme with gestures or chords on a musical instrument.",
                children: "",
                key: 577,
                isLeaf: true,
              },
              {
                title: "Acquiring concepts",
                initial: "d137",
                description:
                  "Developing competence to understand and use basic and complex concepts related to characteristics of things, persons or events.",
                children: [
                  {
                    title: "Acquiring basic concepts",
                    initial: "d1370",
                    description:
                      "Learning to use such concepts as size, form, quantity, length, same, or opposite.",
                    children: "",
                    key: 579,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring complex concepts",
                    initial: "d1371",
                    description:
                      "Learning to use such concepts as classification, grouping, reversibility, or seriation.",
                    children: "",
                    key: 580,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring concepts, other specified",
                    initial: "d1378",
                    description: "",
                    children: "",
                    key: 581,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring concepts, unspecified",
                    initial: "d1379",
                    description: "",
                    children: "",
                    key: 582,
                    isLeaf: true,
                  },
                ],
                key: 578,
                isLeaf: false,
              },
              {
                title: "Learning to read",
                initial: "d140",
                description:
                  "Developing the competence to read written material (including Braille and other symbols) with fluency and accuracy, such as recognizing characters and alphabet letters, sounding out written words with correct pronunciation, and understanding written words and phrases.",
                children: [
                  {
                    title: "Acquiring skills to recognize symbols",
                    initial: "d1400",
                    description:
                      "Learning basic actions of deciphering symbols such as figures, icons, characters, alphabet letters and words.",
                    children: "",
                    key: 584,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring skills to sound out written words",
                    initial: "d1401",
                    description:
                      "Learning basic actions of sounding out characters, alphabet letters, symbols and words with correct pronunciation.",
                    children: "",
                    key: 585,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Acquiring skills to understanding written words and phrases",
                    initial: "d1402",
                    description:
                      "Learning basic actions to grasp the meaning of written words and texts.",
                    children: "",
                    key: 586,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to read, other specified",
                    initial: "d1408",
                    description: "",
                    children: "",
                    key: 587,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to read, unspecified",
                    initial: "d1409",
                    description: "",
                    children: "",
                    key: 588,
                    isLeaf: true,
                  },
                ],
                key: 583,
                isLeaf: false,
              },
              {
                title: "Learning to write",
                initial: "d145",
                description: "",
                children: [
                  {
                    title: "Acquiring skills to use writing implements",
                    initial: "d1450",
                    description:
                      "Learning basic actions of writing down symbols or alphabet letters, such as holding a pencil, chalk or brush, writing a character or a symbol on a piece of paper, using a brailler, keyboard or peripheral device (mouse).",
                    children: "",
                    key: 590,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Acquiring skills to write symbols, characters and alphabet letters",
                    initial: "d1451",
                    description:
                      "Learning basic actions to transpose a sound (morpheme) into a symbol or a character (grapheme).",
                    children: "",
                    key: 591,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring skills to write words and phrases",
                    initial: "d1452",
                    description:
                      "Learning basic actions to transpose spoken words or ideas into written words or phrases.",
                    children: "",
                    key: 592,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to write, other specified",
                    initial: "d1458",
                    description: "",
                    children: "",
                    key: 593,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to write, unspecified",
                    initial: "d1459",
                    description: "",
                    children: "",
                    key: 594,
                    isLeaf: true,
                  },
                ],
                key: 589,
                isLeaf: false,
              },
              {
                title: "Learning to calculate",
                initial: "d150",
                description:
                  "Developing the competence to manipulate numbers and perform simple and complex mathematical operations, such as using mathematical signs for addition and subtraction and applying the correct mathematical operation to a problem.",
                children: [
                  {
                    title: "Acquiring basic skills of numeracy",
                    initial: "d1500",
                    description: "",
                    children: "",
                    key: 596,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Acquiring skills to recognize numerals, arithmetic signs and symbols",
                    initial: "d1501",
                    description: "Learning to recognize and use numbers.",
                    children: "",
                    key: 597,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring skills in using basic operations",
                    initial: "d1502",
                    description:
                      "Learning to recognise symbols related to and to use operations of addition, subtraction, multiplication and division.",
                    children: "",
                    key: 598,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to calculate, other specified",
                    initial: "d1508",
                    description: "",
                    children: "",
                    key: 599,
                    isLeaf: true,
                  },
                  {
                    title: "Learning to calculate, unspecified",
                    initial: "d1509",
                    description: "",
                    children: "",
                    key: 600,
                    isLeaf: true,
                  },
                ],
                key: 595,
                isLeaf: false,
              },
              {
                title: "Acquiring skills",
                initial: "d155",
                description:
                  "Developing basic and complex competencies in integrated sets of actions or tasks so as to initiate and follow through with the acquisition of a skill, such as manipulating tools or toys or playing games. \n Inclusions: acquiring basic and complex skill",
                children: [
                  {
                    title: "Acquiring basic skills",
                    initial: "d1550",
                    description:
                      "Learning elementary, purposeful actions, such as learning to use simple tools, such as pencils or eating utensils.",
                    children: "",
                    key: 602,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring complex skills",
                    initial: "d1551",
                    description:
                      "Learning integrated sets of actions so as to follow rules, and to sequence and coordinate one's movements, such as learning to play games (e.g. football or chess) and to use a building tool.",
                    children: "",
                    key: 603,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring skills, other specified",
                    initial: "d1558",
                    description: "",
                    children: "",
                    key: 604,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring skills, unspecified",
                    initial: "d1559",
                    description: "",
                    children: "",
                    key: 605,
                    isLeaf: true,
                  },
                ],
                key: 601,
                isLeaf: false,
              },
              {
                title: "Basic learning, other specified and unspecified",
                initial: "d159",
                description: "",
                children: "",
                key: 606,
                isLeaf: true,
              },
            ],
            key: 561,
            isLeaf: false,
          },
          {
            title: "Applying knowledge",
            initial: "d160-179",
            description: "",
            children: [
              {
                title: "Focusing attention",
                initial: "d160",
                description: "",
                children: [
                  {
                    title: "Focusing attention on the person",
                    initial: "d1600",
                    description:
                      "Intentionally attending to features of other persons such as their face, touch or voice.",
                    children: "",
                    key: 609,
                    isLeaf: true,
                  },
                  {
                    title: "Focusing attention on the environment",
                    initial: "d1601",
                    description:
                      "Intentionally attending to some element of the environment, such as changes in the quality, quantity or intensity of physical or social stimuli.",
                    children: "",
                    key: 610,
                    isLeaf: true,
                  },
                  {
                    title: "Focusing attention, other specifie",
                    initial: "d1608",
                    description: "",
                    children: "",
                    key: 611,
                    isLeaf: true,
                  },
                  {
                    title: "Focusing attention, unspecified",
                    initial: "d1609",
                    description: "",
                    children: "",
                    key: 612,
                    isLeaf: true,
                  },
                ],
                key: 608,
                isLeaf: false,
              },
              {
                title: "Thinking",
                initial: "d163",
                description:
                  "Formulating and manipulating ideas, concepts, and images, whether goal-oriented or not, either alone or with others, such as creating fiction, proving a theorem, playing with ideas, brainstorming, meditating, pondering, speculating, or reflecting. \n \n Exclusions: solving problems (d175); making decisions (d177)",
                children: "",
                key: 613,
                isLeaf: true,
              },
              {
                title: "Reading",
                initial: "d166",
                description:
                  "Performing activities involved in the comprehension and interpretation of written language (e.g. books, instructions or newspapers in text or Braille), for the purpose of obtaining general knowledge or specific information. \n \n Exclusions: learning to read (d140)",
                children: "",
                key: 614,
                isLeaf: true,
              },
              {
                title: "Writing",
                initial: "d170",
                description: "",
                children: [
                  {
                    title:
                      "Using general skills and strategies of the writing process",
                    initial: "d1700",
                    description:
                      "Applying words which convey appropriate meaning, employing conventional sentence structure.",
                    children: "",
                    key: 616,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Using grammatical conventions in writing compositions",
                    initial: "d1701",
                    description:
                      "Applying standard spelling, punctuation and proper case forms etc.",
                    children: "",
                    key: 617,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Using general skills and strategies to write compositions",
                    initial: "d1703",
                    description:
                      "Applying words and sentences to convey complex meaning and abstract ideas.",
                    children: "",
                    key: 618,
                    isLeaf: true,
                  },
                  {
                    title: "Writing, other specified",
                    initial: "d1780",
                    description: "",
                    children: "",
                    key: 619,
                    isLeaf: true,
                  },
                  {
                    title: "Writing, unspecified",
                    initial: "d1709",
                    description: "",
                    children: "",
                    key: 620,
                    isLeaf: true,
                  },
                ],
                key: 615,
                isLeaf: false,
              },
              {
                title: "Calculating",
                initial: "d172",
                description: "",
                children: [
                  {
                    title:
                      "Using skills and strategies to perform simple numeric calculations",
                    initial: "d1720",
                    description:
                      "Performing simple numeric operations such as counting, grouping, ordering and arithmetic calculations.",
                    children: "",
                    key: 622,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Using skills and strategies to perform complex numeric operations and calculations",
                    initial: "d1721",
                    description:
                      "Applying mathematical procedures and methods such as algebra, calculus and geometry to solve problems.",
                    children: "",
                    key: 623,
                    isLeaf: true,
                  },
                  {
                    title: "Calculating, other specified",
                    initial: "d1728",
                    description: "",
                    children: "",
                    key: 624,
                    isLeaf: true,
                  },
                  {
                    title: "Calculating, unspecified",
                    initial: "d1729",
                    description: "",
                    children: "",
                    key: 625,
                    isLeaf: true,
                  },
                ],
                key: 621,
                isLeaf: false,
              },
              {
                title: "Solving problems",
                initial: "d175",
                description: "",
                children: [
                  {
                    title: "Solving simple problems",
                    initial: "d1750",
                    description:
                      "Finding solutions to a simple problem involving a single issue or question, by identifying and analysing the issue, developing solutions, evaluating the potential effects of the solutions and executing a chosen solution.",
                    children: "",
                    key: 627,
                    isLeaf: true,
                  },
                  {
                    title: "Solving complex problems",
                    initial: "d1751",
                    description:
                      "Finding solutions to a complex problem involving multiple and interrelated issues, or several related problems, by identifying and analysing the issue, developing solutions, evaluating the potential effects of the solutions and executing a chosen solution.",
                    children: "",
                    key: 628,
                    isLeaf: true,
                  },
                  {
                    title: "Solving problems, other specified",
                    initial: "d1758",
                    description: "",
                    children: "",
                    key: 629,
                    isLeaf: true,
                  },
                  {
                    title: "Solving problems, other specified",
                    initial: "d1759",
                    description: "",
                    children: "",
                    key: 630,
                    isLeaf: true,
                  },
                ],
                key: 626,
                isLeaf: false,
              },
              {
                title: "Making decisions",
                initial: "d177",
                description:
                  "Making a choice among options, implementing the choice, and evaluating the effects of the choice, such as selecting and purchasing a specific item, or deciding to undertake and undertaking one task from among several tasks that need to be done. \n \n Exclusions: thinking (d163); solving problems (d175)",
                children: "",
                key: 631,
                isLeaf: true,
              },
              {
                title: "Applying knowledge, other specified and unspecified",
                initial: "d179",
                description: "",
                children: "",
                key: 632,
                isLeaf: true,
              },
            ],
            key: 607,
            isLeaf: false,
          },
          {
            title: "Learning and applying knowledge, other specified",
            initial: "d198",
            description: "",
            children: "",
            key: 633,
            isLeaf: true,
          },
          {
            title: "Learning and applying knowledge, unspecified",
            initial: "d199",
            description: "",
            children: "",
            key: 634,
            isLeaf: true,
          },
        ],
        key: 549,
        isLeaf: false,
      },
      {
        title: "GENERAL TASKS AND DEMANDS",
        initial: "d2",
        description: "",
        children: [
          {
            title: "Undertaking a single task",
            initial: "d210",
            description: "",
            children: [
              {
                title: "Undertaking a simple task",
                initial: "d2100",
                description:
                  "Preparing, initiating and arranging the time and space required for a simple task; executing a simple task with a single major component, such as reading a book, writing a letter, or making one's bed.",
                children: "",
                key: 637,
                isLeaf: true,
              },
              {
                title: "Undertaking a complex task",
                initial: "d2101",
                description:
                  "Preparing, initiating and arranging the time and space for a single complex task; executing a complex task with more than one component, which may be carried out in sequence or simultaneously, such as arranging the furniture in one's home or completing an assignment for school.",
                children: "",
                key: 638,
                isLeaf: true,
              },
              {
                title: "Undertaking a single task independently",
                initial: "d2102",
                description:
                  "Preparing, initiating and arranging the time and space for a simple or complex task; managing and executing a task on one's own and without the assistance of others.",
                children: "",
                key: 639,
                isLeaf: true,
              },
              {
                title: "Undertaking a single task in a group",
                initial: "d2103",
                description:
                  "Preparing, initiating and arranging the time and space for a single task, simple or complex; managing and executing a task with people who are involved in some or all steps of the task.",
                children: "",
                key: 640,
                isLeaf: true,
              },
              {
                title: "Undertaking single tasks, other specified",
                initial: "d2108",
                description: "",
                children: "",
                key: 641,
                isLeaf: true,
              },
              {
                title: "Undertaking single tasks, unspecified",
                initial: "d2109",
                description: "",
                children: "",
                key: 642,
                isLeaf: true,
              },
            ],
            key: 636,
            isLeaf: false,
          },
          {
            title: "Undertaking multiple tasks",
            initial: "d220",
            description: "",
            children: [
              {
                title: "Carrying out multiple tasks",
                initial: "d2200",
                description:
                  "Preparing, initiating and arranging the time and space needed for several tasks, and managing and executing several tasks, together or sequentially.",
                children: "",
                key: 644,
                isLeaf: true,
              },
              {
                title: "Completing multiple tasks",
                initial: "d2201",
                description:
                  "Completing several tasks, together or sequentially.",
                children: "",
                key: 645,
                isLeaf: true,
              },
              {
                title: "Undertaking multiple tasks independently",
                initial: "d2202",
                description:
                  "Preparing, initiating and arranging the time and space for multiple tasks, and managing and executing several tasks together or sequentially, on one's own and without the assistance of others.",
                children: "",
                key: 646,
                isLeaf: true,
              },
              {
                title: "Undertaking multiple tasks in a group",
                initial: "d2203",
                description:
                  "Preparing, initiating and arranging the time and space for multiple tasks, and managing and executing several tasks together or sequentially with others who are involved in some or all steps of the multiple tasks.",
                children: "",
                key: 647,
                isLeaf: true,
              },
              {
                title: "Undertaking multiple tasks, other specified",
                initial: "d2208",
                description: "",
                children: "",
                key: 648,
                isLeaf: true,
              },
              {
                title: "Undertaking multiple tasks, unspecified",
                initial: "d2209",
                description: "",
                children: "",
                key: 649,
                isLeaf: true,
              },
            ],
            key: 643,
            isLeaf: false,
          },
          {
            title: "Carrying out daily routine",
            initial: "d230",
            description: "",
            children: [
              {
                title: "Managing daily routine",
                initial: "d2301",
                description:
                  "Carrying out simple or complex and coordinated actions in order to plan and manage the requirements of day-to-day procedures or duties.",
                children: "",
                key: 651,
                isLeaf: true,
              },
              {
                title: "Completing the daily routine",
                initial: "d2302",
                description:
                  "Carrying out simple or complex and coordinated actions in order to complete the requirements of usual day-to-day procedures or duties, such as getting dressed, eating breakfast, leaving for school or work and returning home at the end of the day.",
                children: "",
                key: 652,
                isLeaf: true,
              },
              {
                title: "Managing one's own activity level",
                initial: "d2303",
                description:
                  "Carrying out actions and behaviours to arrange the requirements in energy and time day-to-day procedures or duties.",
                children: "",
                key: 653,
                isLeaf: true,
              },
              {
                title: "Adapting to changes in daily routine",
                initial: "d2304",
                description:
                  "Interrupting and shifting tasks and actions in response to new requirements or making a transition from a usual pattern of activities to a new set of activities as a means of fulfilling daily tasks.",
                children: "",
                key: 654,
                isLeaf: true,
              },
              {
                title: "Carrying out daily routine, other specified",
                initial: "d2308",
                description: "",
                children: "",
                key: 655,
                isLeaf: true,
              },
              {
                title: "Carrying out daily routine, unspecified",
                initial: "d2309",
                description: "",
                children: "",
                key: 656,
                isLeaf: true,
              },
            ],
            key: 650,
            isLeaf: false,
          },
          {
            title: "Handling stress and other psychological demands",
            initial: "d240",
            description: "",
            children: [
              {
                title: "Handling responsibilities",
                initial: "d2400",
                description:
                  "Carrying out simple or complex and coordinated actions to manage the duties of task performance and to assess the requirements of these duties.",
                children: "",
                key: 658,
                isLeaf: true,
              },
              {
                title: "Handling stress",
                initial: "d2401",
                description:
                  "Carrying out simple or complex and coordinated actions to cope with pressure, emergencies or stress associated with task performance.",
                children: "",
                key: 659,
                isLeaf: true,
              },
              {
                title: "Handling crisis",
                initial: "d2402",
                description:
                  "Carrying out simple or complex and coordinated actions to cope with decisive turning points in a situation or times of acute danger or difficulty.",
                children: "",
                key: 660,
                isLeaf: true,
              },
              {
                title:
                  "Handling stress and other psychological demands, other specified",
                initial: "d2408",
                description: "",
                children: "",
                key: 661,
                isLeaf: true,
              },
              {
                title:
                  "Handling stress and other psychological demands, unspecified",
                initial: "d2409",
                description: "",
                children: "",
                key: 662,
                isLeaf: true,
              },
            ],
            key: 657,
            isLeaf: false,
          },
          {
            title: "General tasks and demands, other specified",
            initial: "d298",
            description: "",
            children: "",
            key: 663,
            isLeaf: true,
          },
          {
            title: "General tasks and demands, unspecified",
            initial: "d299",
            description: "",
            children: "",
            key: 664,
            isLeaf: true,
          },
        ],
        key: 635,
        isLeaf: false,
      },
      {
        title: "COMMUNICATION",
        initial: "d3",
        description: "",
        children: [
          {
            title: "Communicating - receiving",
            initial: "d310-329",
            description: "",
            children: [
              {
                title: "Communicating with - receiving - spoken messages",
                initial: "d310",
                description: "",
                children: [
                  {
                    title:
                      "Communicating with - receiving - simple spoken messages",
                    initial: "d3100",
                    description:
                      "Comprehending the literal meaning conveyed by simple spoken messages.",
                    children: "",
                    key: 668,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - complex spoken messages",
                    initial: "d3101",
                    description:
                      "Comprehending the literal and implied meaning conveyed by complex spoken messages.",
                    children: "",
                    key: 669,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - spoken messages, other specified",
                    initial: "d3108",
                    description: "",
                    children: "",
                    key: 670,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - spoken messages,unspecified",
                    initial: "d3109",
                    description: "",
                    children: "",
                    key: 671,
                    isLeaf: true,
                  },
                ],
                key: 667,
                isLeaf: false,
              },
              {
                title: "Communicating with - receiving - nonverbal messages",
                initial: "d315",
                description: "",
                children: [
                  {
                    title: "Communicating with - receiving - body gestures",
                    initial: "d3150",
                    description:
                      "Comprehending the meaning conveyed by facial expressions, hand movements or signs, body postures, and other forms of body language.",
                    children: "",
                    key: 673,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - general signs and symbols",
                    initial: "d3151",
                    description:
                      "Comprehending the meaning represented by public signs and symbols, such as traffic signs, warning symbols, musical or scientific notations, and icons.",
                    children: "",
                    key: 674,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - drawings and photographs",
                    initial: "d3152",
                    description:
                      "Comprehending the meaning represented by drawings (e.g. line drawings, graphic designs, paintings, three-dimensional representations, pictograms), graphs, charts and photographs, such as understanding that an upward line on a height chart indicates that a child is growing.",
                    children: "",
                    key: 675,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - nonverbal messages, other specified",
                    initial: "d3158",
                    description: "",
                    children: "",
                    key: 676,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Communicating with - receiving - nonverbal messages, unspecified",
                    initial: "d3159",
                    description: "",
                    children: "",
                    key: 677,
                    isLeaf: true,
                  },
                ],
                key: 672,
                isLeaf: false,
              },
              {
                title:
                  "Communicating with - receiving - formal sign language messages",
                initial: "d320",
                description:
                  "Receiving and comprehending messages in formal sign language with literal and implied meaning.",
                children: "",
                key: 678,
                isLeaf: true,
              },
              {
                title: "Communicating with - receiving - written messages",
                initial: "d325",
                description: "",
                children: "",
                key: 679,
                isLeaf: true,
              },
              {
                title:
                  "Communicating - receiving, other specified and unspecified",
                initial: "d329",
                description: "",
                children: "",
                key: 680,
                isLeaf: true,
              },
            ],
            key: 666,
            isLeaf: false,
          },
          {
            title: "Communicating - producing",
            initial: "d330-349",
            description: "",
            children: [
              {
                title: "Speaking",
                initial: "d330",
                description: "",
                children: [
                  {
                    title: "Producing meaningful sounds",
                    initial: "d3300",
                    description:
                      "Using single words to label objects, persons or actions such as ball, mommy, bye-bye.",
                    children: "",
                    key: 683,
                    isLeaf: true,
                  },
                  {
                    title: "Producing simple spoken messages",
                    initial: "d3301",
                    description:
                      "Using words to produce simple spoken messages such as single or few words or expressing a need (e.g. I want ...) or feeling (e.g., I like ...).",
                    children: "",
                    key: 684,
                    isLeaf: true,
                  },
                  {
                    title: "Producing complex spoken messages",
                    initial: "d3302",
                    description:
                      "Using words to produce complex spoken messages (complete sentences) such as giving an explanation or asking for directions.",
                    children: "",
                    key: 685,
                    isLeaf: true,
                  },
                  {
                    title: "Speaking, other specified",
                    initial: "d3308",
                    description: "",
                    children: "",
                    key: 686,
                    isLeaf: true,
                  },
                  {
                    title: "Speaking, unspecified",
                    initial: "d3309",
                    description: "",
                    children: "",
                    key: 687,
                    isLeaf: true,
                  },
                ],
                key: 682,
                isLeaf: false,
              },
              {
                title: "Non-speech vocal expression",
                initial: "d331",
                description:
                  "Vocalising when aware of another person in the proximal environment, such as producing sounds when the mother is close; babbling; babbling in turn-taking activities. Vocalising in response to speech through imitating speech-sounds in a turn taking procedure. \n \n Exclusions: singing (d332)",
                children: "",
                key: 688,
                isLeaf: true,
              },
              {
                title: "Singing",
                initial: "d332",
                description:
                  "Using tones in a sequence resulting in a melody to convey messages. \n Inclusions: humming, chanting",
                children: "",
                key: 689,
                isLeaf: true,
              },
              {
                title: "Producing nonverbal messages",
                initial: "d335",
                description: "",
                children: [
                  {
                    title: "Producing body language",
                    initial: "d3350",
                    description:
                      "Conveying messages by intentional movements of the body, such as facial gestures (e.g. smiling, frowning, wincing), by arm and hand movements, and by postures (e.g. embracing to indicate affection or pointing to receive attention or an object).",
                    children: "",
                    key: 691,
                    isLeaf: true,
                  },
                  {
                    title: "Producing signs and symbols",
                    initial: "d3351",
                    description:
                      "Conveying meaning by using signs and symbols (e.g. icons, Bliss board, scientific symbols) and symbolic notation systems, such as using musical notation to convey a melody.",
                    children: "",
                    key: 692,
                    isLeaf: true,
                  },
                  {
                    title: "Producing drawings and photographs",
                    initial: "d3352",
                    description:
                      "Conveying meaning by drawing, painting, sketching, and making diagrams, pictures or photographs, such as drawing a map to give someone directions to a location.",
                    children: "",
                    key: 693,
                    isLeaf: true,
                  },
                  {
                    title: "Producing nonverbal messages, other specified",
                    initial: "d3358",
                    description: "",
                    children: "",
                    key: 694,
                    isLeaf: true,
                  },
                  {
                    title: "Producing nonverbal messages, unspecified",
                    initial: "d3359",
                    description: "",
                    children: "",
                    key: 695,
                    isLeaf: true,
                  },
                ],
                key: 690,
                isLeaf: false,
              },
              {
                title: "Producing messages in formal sign language",
                initial: "d340",
                description:
                  "Conveying, with formal sign language, literal and implied meaning.",
                children: "",
                key: 696,
                isLeaf: true,
              },
              {
                title: "Writing messages",
                initial: "d345",
                description:
                  "Producing the literal and implied meanings of messages that are conveyed through written language, such as writing a letter to a friend.",
                children: "",
                key: 697,
                isLeaf: true,
              },
              {
                title:
                  "Communication - producing, other specified and unspecified",
                initial: "d349",
                description: "",
                children: "",
                key: 698,
                isLeaf: true,
              },
            ],
            key: 681,
            isLeaf: false,
          },
          {
            title:
              "Conversation and use of communication devices and techniques",
            initial: "d350-369",
            description: "",
            children: [
              {
                title: "Conversation",
                initial: "d350",
                description: "",
                children: [
                  {
                    title: "Starting a conversation",
                    initial: "d3500",
                    description:
                      "Beginning an interchange, such as initiating turn-taking activity through eye-contact or other means, that leads to communication or dialogue, such as by introducing oneself, expressing customary greetings, or by introducing a topic or asking questions.",
                    children: "",
                    key: 701,
                    isLeaf: true,
                  },
                  {
                    title: "Sustaining a conversation",
                    initial: "d3501",
                    description:
                      "Continuing and shaping a dialogue or interchange by taking turns in vocalising, speaking or signing, by adding ideas, introducing a new topic or retrieving a topic that has been previously mentioned.",
                    children: "",
                    key: 702,
                    isLeaf: true,
                  },
                  {
                    title: "Ending a conversation",
                    initial: "d3502",
                    description:
                      "Finishing a dialogue or interchange with customary termination statements or expressions and by bringing closure to the topic under discussion.",
                    children: "",
                    key: 703,
                    isLeaf: true,
                  },
                  {
                    title: "Conversing with one person",
                    initial: "d3503",
                    description:
                      "Initiating, maintaining, shaping and terminating a dialogue or interchange with one person, such as in discussing the weather with a friend.",
                    children: "",
                    key: 704,
                    isLeaf: true,
                  },
                  {
                    title: "Conversing with many people",
                    initial: "d350",
                    description:
                      "Initiating, maintaining, shaping and terminating a dialogue or interchange with more than one individual, such as in starting and participating in a group interchange.",
                    children: "",
                    key: 705,
                    isLeaf: true,
                  },
                  {
                    title: "Conversation, other specified",
                    initial: "d3508",
                    description: "",
                    children: "",
                    key: 706,
                    isLeaf: true,
                  },
                  {
                    title: "Conversation, unspecified",
                    initial: "d3509",
                    description: "",
                    children: "",
                    key: 707,
                    isLeaf: true,
                  },
                ],
                key: 700,
                isLeaf: false,
              },
              {
                title: "Discussion",
                initial: "d355",
                description: "",
                children: [
                  {
                    title: "Discussion with one person",
                    initial: "d3550",
                    description:
                      "Initiating, maintaining, shaping or terminating an argument or debate with one person.",
                    children: "",
                    key: 709,
                    isLeaf: true,
                  },
                  {
                    title: "Discussion with many people",
                    initial: "d3551",
                    description:
                      "Initiating, maintaining, shaping or terminating an argument or debate with more than one individual.",
                    children: "",
                    key: 710,
                    isLeaf: true,
                  },
                  {
                    title: "Discussion, other specified",
                    initial: "d3558",
                    description: "",
                    children: "",
                    key: 711,
                    isLeaf: true,
                  },
                  {
                    title: "Discussion, unspecified",
                    initial: "d3559",
                    description: "",
                    children: "",
                    key: 712,
                    isLeaf: true,
                  },
                ],
                key: 708,
                isLeaf: false,
              },
              {
                title: "Using communication devices and techniques",
                initial: "d360",
                description: "",
                children: [
                  {
                    title: "Using telecommunication devices",
                    initial: "d3600",
                    description:
                      "Using telephones, computer, and other electronic devices as means of telecommunication.",
                    children: "",
                    key: 714,
                    isLeaf: true,
                  },
                  {
                    title: "Using writing machines",
                    initial: "d3601",
                    description:
                      "Using machines for writing, such as typewriters, computers and Braille writers, as a means of communication.",
                    children: "",
                    key: 715,
                    isLeaf: true,
                  },
                  {
                    title: "Using communication techniques",
                    initial: "d3602",
                    description:
                      "Performing actions and tasks involved in techniques for communicating, such as reading lips.",
                    children: "",
                    key: 716,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Using communication devices and techniques, other specified",
                    initial: "d3608",
                    description: "",
                    children: "",
                    key: 717,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Using communication devices and techniques, unspecified",
                    initial: "d3609",
                    description: "",
                    children: "",
                    key: 718,
                    isLeaf: true,
                  },
                ],
                key: 713,
                isLeaf: false,
              },
              {
                title:
                  "Conversation and use of communication devices and techniques, other specified and unspecified",
                initial: "d369",
                description: "",
                children: "",
                key: 719,
                isLeaf: true,
              },
            ],
            key: 699,
            isLeaf: false,
          },
          {
            title: "Communication, other specified",
            initial: "d398",
            description: "",
            children: "",
            key: 720,
            isLeaf: true,
          },
          {
            title: "Communication, unspecified",
            initial: "d399",
            description: "",
            children: "",
            key: 721,
            isLeaf: true,
          },
        ],
        key: 665,
        isLeaf: false,
      },
      {
        title: "MOBILITY",
        initial: "d4",
        description: "",
        children: [
          {
            title: "Changing and maintaining body position",
            initial: "d410-429",
            description: "",
            children: [
              {
                title: "Changing basic body position",
                initial: "d410",
                description: "",
                children: [
                  {
                    title: "Lying down",
                    initial: "d4100",
                    description:
                      "Getting into and out of a lying down position or changing body position, from horizontal to any other position, such as standing up or sitting down. \n Inclusions: getting into a prostrate position",
                    children: "",
                    key: 725,
                    isLeaf: true,
                  },
                  {
                    title: "Squatting",
                    initial: "d4101",
                    description:
                      "Getting into and out of the seated or crouched posture on one's haunches with knees closely drawn up or sitting on one's heels, such as may be necessary in toilets that are at floor level, or changing body position from squatting to any other position, such as standing up.",
                    children: "",
                    key: 726,
                    isLeaf: true,
                  },
                  {
                    title: "Kneeling",
                    initial: "d4102",
                    description:
                      "Getting into and out of a position where the body is supported by the knees with legs bent, such as during prayers, or changing body position from kneeling to any other position, such as standing up.",
                    children: "",
                    key: 727,
                    isLeaf: true,
                  },
                  {
                    title: "Sitting",
                    initial: "d4103",
                    description:
                      "Getting into and out of a seated position and changing body position from sitting down to any other position, such as standing up or lying down. \n Inclusions: getting into a sitting position with bent legs or cross-legged; getting into a sitting position with feet supported or unsupported",
                    children: "",
                    key: 728,
                    isLeaf: true,
                  },
                  {
                    title: "Standing",
                    initial: "d4104",
                    description:
                      "Getting into and out of a standing position or changing body position from standing to any other position, such as lying down or sitting down.",
                    children: "",
                    key: 729,
                    isLeaf: true,
                  },
                  {
                    title: "Bending",
                    initial: "d4105",
                    description:
                      "Tilting the back downwards or to the side, at the torso, such as in bowing or reaching down for an object.",
                    children: "",
                    key: 730,
                    isLeaf: true,
                  },
                  {
                    title: "Shifting the body's centre of gravity",
                    initial: "d4106",
                    description:
                      "Adjusting or moving the weight of the body from one position to another while sitting, standing or lying, such as moving from one foot to another while standing. \n \n Exclusions: transferring oneself (d420); walking (d450)",
                    children: "",
                    key: 731,
                    isLeaf: true,
                  },
                  {
                    title: "Rolling Over",
                    initial: "d4107",
                    description:
                      "Moving the body from one position to another while lying such as turning from side to side or from stomach to back.",
                    children: "",
                    key: 732,
                    isLeaf: true,
                  },
                  {
                    title: "Changing basic body position, other specified",
                    initial: "d4108",
                    description: "",
                    children: "",
                    key: 733,
                    isLeaf: true,
                  },
                  {
                    title: "Changing basic body position, unspecified",
                    initial: "d4109",
                    description: "",
                    children: "",
                    key: 734,
                    isLeaf: true,
                  },
                ],
                key: 724,
                isLeaf: false,
              },
              {
                title: "Maintaining a body position",
                initial: "d415",
                description: "",
                children: [
                  {
                    title: "Maintaining a lying position",
                    initial: "d4150",
                    description:
                      "Staying in a lying position for some time as required, such as remaining in a prone position in a bed. \n Inclusions: staying in a prone (face down or prostrate), supine (face upwards) or side-lying position",
                    children: "",
                    key: 736,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a squatting position",
                    initial: "d4151",
                    description:
                      "Staying in a squatting position such as when sitting on the floor without a seat.",
                    children: "",
                    key: 737,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a kneeling position",
                    initial: "d4152",
                    description:
                      "Staying in a kneeling position where the body is supported by the knees with legs bent for some time such as during prayers in church.",
                    children: "",
                    key: 738,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a sitting position",
                    initial: "d4153",
                    description:
                      "Staying in a seated position, on a seat or the floor, for some time such as when sitting at a desk or table. \n Inclusions: staying in a sitting position with straight legs or cross-legged, with feet supported or unsupported",
                    children: "",
                    key: 739,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a standing position",
                    initial: "d4154",
                    description:
                      "Staying in a standing position for some time as required, such as when standing in a queue. \n Inclusions: staying in a standing position on a slope, on slippery or hard surfaces",
                    children: "",
                    key: 740,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining head position",
                    initial: "d4155",
                    description:
                      "controlling the position of the head and supporting its weight for a determined period of time.",
                    children: "",
                    key: 741,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a body position, other specified",
                    initial: "d4158",
                    description: "",
                    children: "",
                    key: 742,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a body position, unspecified",
                    initial: "d4159",
                    description: "",
                    children: "",
                    key: 743,
                    isLeaf: true,
                  },
                ],
                key: 735,
                isLeaf: false,
              },
              {
                title: "Transferring oneself",
                initial: "d420",
                description: "",
                children: [
                  {
                    title: "Transferring oneself while sitting",
                    initial: "d4200",
                    description:
                      "Moving from a sitting position on one seat to another seat on the same or a different level, such as moving from a chair to a bed. \n Inclusions: moving from a chair to another seat, such as a toilet seat; moving from a wheelchair to a car seat \n Exclusions: changing basic body position (d410)",
                    children: "",
                    key: 745,
                    isLeaf: true,
                  },
                  {
                    title: "Transferring oneself while lying",
                    initial: "d4201",
                    description:
                      "Moving from one lying position to another on the same or a different level, such as moving from one bed to another. \n \n Exclusions: changing basic body position (d410)",
                    children: "",
                    key: 746,
                    isLeaf: true,
                  },
                  {
                    title: "Transferring oneself, other specified",
                    initial: "d4208",
                    description: "",
                    children: "",
                    key: 747,
                    isLeaf: true,
                  },
                  {
                    title: "Transferring oneself, unspecified",
                    initial: "d4209",
                    description: "",
                    children: "",
                    key: 748,
                    isLeaf: true,
                  },
                ],
                key: 744,
                isLeaf: false,
              },
              {
                title:
                  "Changing and maintaining body position, other specified and unspecified",
                initial: "d429",
                description: "",
                children: "",
                key: 749,
                isLeaf: true,
              },
            ],
            key: 723,
            isLeaf: false,
          },
          {
            title: "Carrying, moving and handling objects",
            initial: "d430-449",
            description: "",
            children: [
              {
                title: "Lifting and carrying objects",
                initial: "d430",
                description: "",
                children: [
                  {
                    title: "Lifting",
                    initial: "d4300",
                    description:
                      "Raising up an object in order to move it from a lower to a higher level, such as when lifting a glass from the table.",
                    children: "",
                    key: 752,
                    isLeaf: true,
                  },
                  {
                    title: "Carrying in the hands",
                    initial: "d4301",
                    description:
                      "Taking or transporting an object from one place to another using the hands, such as when carrying a drinking glass or a suitcase.",
                    children: "",
                    key: 753,
                    isLeaf: true,
                  },
                  {
                    title: "Carrying in the arms",
                    initial: "d4302",
                    description:
                      "Taking or transporting an object from one place to another using the arms and hands, such as when carrying a pet or a child or other large object.",
                    children: "",
                    key: 754,
                    isLeaf: true,
                  },
                  {
                    title: "Carrying on shoulders, hip and back",
                    initial: "d4303",
                    description:
                      "Taking or transporting an object from one place to another using the shoulders, hip or back, or some combination of these, such as when carrying a large parcel or school bag.",
                    children: "",
                    key: 755,
                    isLeaf: true,
                  },
                  {
                    title: "Carrying on the head",
                    initial: "d4304",
                    description:
                      "Taking or transporting an object from one place to another using the head, such when as carrying a container of water on the head.",
                    children: "",
                    key: 756,
                    isLeaf: true,
                  },
                  {
                    title: "Putting down objects",
                    initial: "d4305",
                    description:
                      "Using hands, arms or other parts of the body to place an object down on a surface or place, such as when lowering a container of water to the ground.",
                    children: "",
                    key: 757,
                    isLeaf: true,
                  },
                  {
                    title: "Lifting and carrying, other specified",
                    initial: "d4308",
                    description: "",
                    children: "",
                    key: 758,
                    isLeaf: true,
                  },
                  {
                    title: "Lifting and carrying, unspecified",
                    initial: "d4309",
                    description: "",
                    children: "",
                    key: 759,
                    isLeaf: true,
                  },
                ],
                key: 751,
                isLeaf: false,
              },
              {
                title: "Moving objects with lower extremities",
                initial: "d435",
                description: "",
                children: [
                  {
                    title: "Pushing with lower extremities",
                    initial: "d4350",
                    description:
                      "Using the legs and feet to exert a force on an object to move it away, such as pushing a chair away with a foot.",
                    children: "",
                    key: 761,
                    isLeaf: true,
                  },
                  {
                    title: "Kicking",
                    initial: "d4351",
                    description:
                      "Using the legs and feet to propel something away, such as kicking a ball.",
                    children: "",
                    key: 762,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Moving objects with lower extremities, other specified",
                    initial: "d4358",
                    description: "",
                    children: "",
                    key: 763,
                    isLeaf: true,
                  },
                  {
                    title: "Moving objects with lower extremities, unspecified",
                    initial: "d4359",
                    description: "",
                    children: "",
                    key: 764,
                    isLeaf: true,
                  },
                ],
                key: 760,
                isLeaf: false,
              },
              {
                title: "Fine hand use",
                initial: "d440",
                description: "",
                children: [
                  {
                    title: "Picking up",
                    initial: "d4400",
                    description:
                      "Lifting or taking up a small object with hands and fingers, such as when picking up a pencil.",
                    children: "",
                    key: 766,
                    isLeaf: true,
                  },
                  {
                    title: "Grasping",
                    initial: "d4401",
                    description:
                      "Using one or both hands to seize and hold something, such as when grasping a tool or a door knob.",
                    children: "",
                    key: 767,
                    isLeaf: true,
                  },
                  {
                    title: "Manipulating",
                    initial: "d4402",
                    description:
                      "Using fingers and hands to exert control over, direct or guide something, such as when handling coins or other small objects, such as scissors, shoe laces, pencils, chopsticks, knives and forks.",
                    children: "",
                    key: 768,
                    isLeaf: true,
                  },
                  {
                    title: "Releasing",
                    initial: "d4403",
                    description:
                      "Using fingers and hands to let go or set free something so that it falls or changes position, such as when dropping an item of clothing or a piece of food for a pet.",
                    children: "",
                    key: 769,
                    isLeaf: true,
                  },
                  {
                    title: "Fine hand use, other specified",
                    initial: "d4408",
                    description: "",
                    children: "",
                    key: 770,
                    isLeaf: true,
                  },
                  {
                    title: "Fine hand use, unspecified",
                    initial: "d4409",
                    description: "",
                    children: "",
                    key: 771,
                    isLeaf: true,
                  },
                ],
                key: 765,
                isLeaf: false,
              },
              {
                title: "Hand and arm use",
                initial: "d445",
                description: "",
                children: [
                  {
                    title: "Pulling",
                    initial: "d4450",
                    description:
                      "Using fingers, hands and arms to bring an object towards oneself, or to move it from place to place, such as when pulling on a string or pulling a door closed.",
                    children: "",
                    key: 773,
                    isLeaf: true,
                  },
                  {
                    title: "Pushing",
                    initial: "d4451",
                    description:
                      "Using fingers, hands and arms to move something from oneself, or to move it from place to place, such as when pushing a toy or an animal away.",
                    children: "",
                    key: 774,
                    isLeaf: true,
                  },
                  {
                    title: "Reaching",
                    initial: "d4452",
                    description:
                      "Using the hands and arms to extend outwards and touch and grasp something, such as when reaching across a table or desk for a book.",
                    children: "",
                    key: 775,
                    isLeaf: true,
                  },
                  {
                    title: "Turning or twisting the hands or arms",
                    initial: "d4453",
                    description:
                      "Using fingers, hands or arms to rotate, turn or bend an object as is required to open a jar or use tools such as a toothbrush or screwdriver.",
                    children: "",
                    key: 776,
                    isLeaf: true,
                  },
                  {
                    title: "Throwing",
                    initial: "d4454",
                    description:
                      "Using fingers, hands and arms to lift something and propel it with some force through the air, such as when tossing a ball.",
                    children: "",
                    key: 777,
                    isLeaf: true,
                  },
                  {
                    title: "Catching",
                    initial: "d4455",
                    description:
                      "Using fingers, hands and arms to grasp a moving object in order to bring it to a stop and hold it, such as when catching a ball.",
                    children: "",
                    key: 778,
                    isLeaf: true,
                  },
                  {
                    title: "Hand and arm use, other specified",
                    initial: "d4458",
                    description: "",
                    children: "",
                    key: 779,
                    isLeaf: true,
                  },
                  {
                    title: "Hand and arm use, unspecified",
                    initial: "d4459",
                    description: "",
                    children: "",
                    key: 780,
                    isLeaf: true,
                  },
                ],
                key: 772,
                isLeaf: false,
              },
              {
                title: "Fine foot use",
                initial: "d446",
                description:
                  "Performing the coordinated actions of picking up, manipulating and releasing objects using one's foot and toes. \n \n Exclusions: moving objects with lower extremities (d435)",
                children: "",
                key: 781,
                isLeaf: true,
              },
              {
                title:
                  "Carrying, moving and handling objects, other specified and unspecified",
                initial: "d449",
                description: "",
                children: "",
                key: 782,
                isLeaf: true,
              },
            ],
            key: 750,
            isLeaf: false,
          },
          {
            title: "Walking and moving",
            initial: "d450-469",
            description: "",
            children: [
              {
                title: "Walking",
                initial: "d450",
                description: "",
                children: [
                  {
                    title: "Walking short distances",
                    initial: "d4500",
                    description:
                      "Walking for less than a kilometre, such as walking around rooms or hallways, within a building or for short distances outside.",
                    children: "",
                    key: 785,
                    isLeaf: true,
                  },
                  {
                    title: "Walking long distances",
                    initial: "d4501",
                    description:
                      "Walking for more than a kilometre, such as across a village or town, between villages or across open areas.",
                    children: "",
                    key: 786,
                    isLeaf: true,
                  },
                  {
                    title: "Walking on different surfaces",
                    initial: "d4502",
                    description:
                      "Walking on sloping, uneven, or moving surfaces, such as on grass, gravel or ice and snow, or walking aboard a ship, train or other vehicle.",
                    children: "",
                    key: 787,
                    isLeaf: true,
                  },
                  {
                    title: "Walking around obstacles",
                    initial: "d4503",
                    description:
                      "Walking in ways required to avoid moving and immobile objects, people, animals, and vehicles, such as walking around a marketplace or shop, around or through traffic or other crowded areas.",
                    children: "",
                    key: 788,
                    isLeaf: true,
                  },
                  {
                    title: "Walking, other specified",
                    initial: "d4508",
                    description: "",
                    children: "",
                    key: 789,
                    isLeaf: true,
                  },
                  {
                    title: "Walking, unspecified",
                    initial: "d4509",
                    description: "",
                    children: "",
                    key: 790,
                    isLeaf: true,
                  },
                ],
                key: 784,
                isLeaf: false,
              },
              {
                title: "Moving around",
                initial: "d455",
                description: "",
                children: [
                  {
                    title: "Crawling",
                    initial: "d4550",
                    description:
                      "Moving the whole body in a prone position from one place to another on hands, or hands and arms, and knees.",
                    children: "",
                    key: 792,
                    isLeaf: true,
                  },
                  {
                    title: "Climbing",
                    initial: "d4551",
                    description:
                      "Moving the whole body upwards or downwards, over surfaces or objects, such as climbing steps, rocks, ladders or stairs, curbs or other objects.",
                    children: "",
                    key: 793,
                    isLeaf: true,
                  },
                  {
                    title: "Running",
                    initial: "d4552",
                    description:
                      "Moving with quick steps so that both feet may be simultaneously off the ground.",
                    children: "",
                    key: 794,
                    isLeaf: true,
                  },
                  {
                    title: "Jumping",
                    initial: "d4553",
                    description:
                      "Moving up off the ground by bending and extending the legs, such as jumping on one foot, hopping, skipping and jumping or diving into water.",
                    children: "",
                    key: 795,
                    isLeaf: true,
                  },
                  {
                    title: "Swimming",
                    initial: "d4554",
                    description:
                      "Propelling the whole body through water by means of limb and body movements without taking support from the ground underneath.",
                    children: "",
                    key: 796,
                    isLeaf: true,
                  },
                  {
                    title: "Moving around, other specified",
                    initial: "d4558",
                    description: "",
                    children: "",
                    key: 797,
                    isLeaf: true,
                  },
                  {
                    title: "Moving around, unspecified",
                    initial: "d4559",
                    description: "",
                    children: "",
                    key: 798,
                    isLeaf: true,
                  },
                ],
                key: 791,
                isLeaf: false,
              },
              {
                title: "Moving around in different locations",
                initial: "d460",
                description: "",
                children: [
                  {
                    title: "Moving around within the home",
                    initial: "d4600",
                    description:
                      "Walking and moving around in one's home, within a room, between rooms, and around the whole residence or living area. \n Inclusions: moving from floor to floor, on an attached balcony, moving in a restricted area such as a courtyard, porch or garden",
                    children: "",
                    key: 800,
                    isLeaf: true,
                  },
                  {
                    title: "Moving around within buildings other than home",
                    initial: "d4601",
                    description:
                      "Walking and moving around within buildings other than one's residence, such as other people's homes, other private buildings, community and public buildings and enclosed areas. \n Inclusions: moving throughout all parts of buildings and enclosed areas, between floors, inside, outside and around buildings, both public and private",
                    children: "",
                    key: 801,
                    isLeaf: true,
                  },
                  {
                    title: "Moving around outside the home and other buildings",
                    initial: "d4602",
                    description:
                      "Walking and moving around close to or far from one's home and other buildings, without the use of transportation, public or private, such as walking for short or long distances around a town or village. \n Inclusions: walking or moving down streets in the neighbourhood, town, village or city; moving between cities, without using transportation",
                    children: "",
                    key: 802,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Moving around in different locations, other specified",
                    initial: "d4608",
                    description: "",
                    children: "",
                    key: 803,
                    isLeaf: true,
                  },
                  {
                    title: "Moving around in different locations, unspecified",
                    initial: "d4609",
                    description: "",
                    children: "",
                    key: 804,
                    isLeaf: true,
                  },
                ],
                key: 799,
                isLeaf: false,
              },
              {
                title: "Moving around using equipment",
                initial: "d465",
                description:
                  "Moving the whole body from place to place, on any surface or space, by using specific devices designed to facilitate moving or create other ways of moving around, such as with skates, skis, or scuba equipment, or moving down the street in a self-propelled wheelchair or a walker. \n \n Exclusions: transferring oneself (d420); walking (d450); moving around (d455); using transportation (d470); driving (d475)",
                children: "",
                key: 805,
                isLeaf: true,
              },
              {
                title: "Walking and moving, other specified and unspecified",
                initial: "d469",
                description: "",
                children: "",
                key: 806,
                isLeaf: true,
              },
            ],
            key: 783,
            isLeaf: false,
          },
          {
            title: "Moving around using transportation",
            initial: "d470-489",
            description: "",
            children: [
              {
                title: "Using transportation",
                initial: "d470",
                description: "",
                children: [
                  {
                    title: "Using human-powered vehicles",
                    initial: "d4700",
                    description:
                      "Being transported as a passenger by a mode of transportation powered by one or more people, such as riding in a pram or stroller, wheelchair propelled by another, rickshaw or rowboat.",
                    children: "",
                    key: 809,
                    isLeaf: true,
                  },
                  {
                    title: "Using private motorized transportation",
                    initial: "d4701",
                    description:
                      "Being transported as a passenger by private motorized vehicle over land, sea or air, such as by car, taxi or privately owned aircraft or boat.",
                    children: "",
                    key: 810,
                    isLeaf: true,
                  },
                  {
                    title: "Using public motorized transportation",
                    initial: "d4702",
                    description:
                      "Being transported as a passenger by a motorized vehicle over land, sea or air designed for public transportation, such as being a passenger on a bus, train, subway or aircraft.",
                    children: "",
                    key: 811,
                    isLeaf: true,
                  },
                  {
                    title: "Using humans for transportation",
                    initial: "d4703",
                    description:
                      "Being transported by another person, such as being carried in the arms, in a sheet or in a backpack.",
                    children: "",
                    key: 812,
                    isLeaf: true,
                  },
                  {
                    title: "Using transportation, other specified",
                    initial: "d4708",
                    description: "",
                    children: "",
                    key: 813,
                    isLeaf: true,
                  },
                  {
                    title: "Using transportation, unspecified",
                    initial: "d4709",
                    description: "",
                    children: "",
                    key: 814,
                    isLeaf: true,
                  },
                ],
                key: 808,
                isLeaf: false,
              },
              {
                title: "Driving",
                initial: "d475",
                description: "",
                children: [
                  {
                    title: "Driving human-powered transportation",
                    initial: "d4750",
                    description:
                      "Driving a human-powered vehicle, such as a bicycle, tricycle, or rowboat.",
                    children: "",
                    key: 816,
                    isLeaf: true,
                  },
                  {
                    title: "Driving motorized vehicles",
                    initial: "d4751",
                    description:
                      "Driving a vehicle with a motor, such as an automobile, motorcycle, motorboat or aircraft.",
                    children: "",
                    key: 817,
                    isLeaf: true,
                  },
                  {
                    title: "Driving animal-powered vehicles",
                    initial: "d4752",
                    description:
                      "Driving a vehicle powered by an animal, such as a horse-drawn cart or carriage.",
                    children: "",
                    key: 818,
                    isLeaf: true,
                  },
                  {
                    title: "Driving, other specified",
                    initial: "d4758",
                    description: "",
                    children: "",
                    key: 819,
                    isLeaf: true,
                  },
                  {
                    title: "Driving, unspecified",
                    initial: "d4759",
                    description: "",
                    children: "",
                    key: 820,
                    isLeaf: true,
                  },
                ],
                key: 815,
                isLeaf: false,
              },
              {
                title: "Riding animals for transportation",
                initial: "d480",
                description: "",
                children: "",
                key: 821,
                isLeaf: true,
              },
              {
                title:
                  "Moving around using transportation, other specified and unspecified",
                initial: "d489",
                description: "",
                children: "",
                key: 822,
                isLeaf: true,
              },
            ],
            key: 807,
            isLeaf: false,
          },
          {
            title: "Mobility, other specified",
            initial: "d498",
            description: "",
            children: "",
            key: 823,
            isLeaf: true,
          },
          {
            title: "Mobility, unspecified",
            initial: "d499",
            description: "",
            children: "",
            key: 824,
            isLeaf: true,
          },
        ],
        key: 722,
        isLeaf: false,
      },
      {
        title: "SELF-CARE",
        initial: "d5",
        description: "",
        children: [
          {
            title: "Washing oneself",
            initial: "d510",
            description: "",
            children: [
              {
                title: "Washing body parts",
                initial: "d5100",
                description:
                  "Applying water, soap and other substances to body parts, such as hands, face, feet, hair or nails, in order to clean them.",
                children: "",
                key: 827,
                isLeaf: true,
              },
              {
                title: "Washing whole body",
                initial: "d5101",
                description:
                  "Applying water, soap and other substances to the whole body in order to clean oneself, such as taking a bath or shower.",
                children: "",
                key: 828,
                isLeaf: true,
              },
              {
                title: "Drying oneself",
                initial: "d5102",
                description:
                  "Using a towel or other means for drying some part or parts of one's body, or the whole body, such as after washing.",
                children: "",
                key: 829,
                isLeaf: true,
              },
              {
                title: "Washing oneself, other specified",
                initial: "d5108",
                description: "",
                children: "",
                key: 830,
                isLeaf: true,
              },
              {
                title: "Washing oneself, unspecified",
                initial: "d5109",
                description: "",
                children: "",
                key: 831,
                isLeaf: true,
              },
            ],
            key: 826,
            isLeaf: false,
          },
          {
            title: "Caring for body parts",
            initial: "d520",
            description: "",
            children: [
              {
                title: "Caring for skin",
                initial: "d5200",
                description:
                  "Looking after the texture and hydration of one's skin, such as by removing calluses or corns and using moisturizing lotions or cosmetics.",
                children: "",
                key: 833,
                isLeaf: true,
              },
              {
                title: "Caring for teeth",
                initial: "d5201",
                description:
                  "Looking after dental hygiene, such as by brushing teeth, flossing, and taking care of a dental prosthesis or orthosis.",
                children: "",
                key: 834,
                isLeaf: true,
              },
              {
                title: "Caring for hair",
                initial: "d5202",
                description:
                  "Looking after the hair on the head and face, such as by combing, styling, shaving, or trimming.",
                children: "",
                key: 835,
                isLeaf: true,
              },
              {
                title: "Caring for fingernails",
                initial: "d5203",
                description:
                  "Cleaning, trimming or polishing the nails of the fingers.",
                children: "",
                key: 836,
                isLeaf: true,
              },
              {
                title: "Caring for toenails",
                initial: "d5204",
                description:
                  "Cleaning, trimming or polishing the nails of the toes.",
                children: "",
                key: 837,
                isLeaf: true,
              },
              {
                title: "Caring for nose",
                initial: "d5205",
                description: "Cleaning the nose, looking after nasal hygiene.",
                children: "",
                key: 838,
                isLeaf: true,
              },
              {
                title: "Caring for body parts, other specified",
                initial: "d5208",
                description: "",
                children: "",
                key: 839,
                isLeaf: true,
              },
              {
                title: "Caring for body parts, unspecified",
                initial: "d5209",
                description: "",
                children: "",
                key: 840,
                isLeaf: true,
              },
            ],
            key: 832,
            isLeaf: false,
          },
          {
            title: "Toileting",
            initial: "d530",
            description: "",
            children: [
              {
                title: "Regulating urination",
                initial: "d5300",
                description:
                  "Coordinating and managing urination, such as by indicating need, getting into the proper position, choosing and getting to an appropriate place for urination, manipulating clothing before and after urination, and cleaning oneself after urination.",
                children: "",
                key: 842,
                isLeaf: true,
              },
              {
                title: "Regulating defecation",
                initial: "d5301",
                description:
                  "Coordinating and managing defecation such as by indicating need, getting into the proper position, choosing and getting to an appropriate place for defecation, manipulating clothing before and after defecation, and cleaning oneself after defecation.",
                children: "",
                key: 843,
                isLeaf: true,
              },
              {
                title: "Menstrual care",
                initial: "d5302",
                description:
                  "Coordinating, planning and caring for menstruation, such as by anticipating menstruation and using sanitary towels and napkins.",
                children: "",
                key: 844,
                isLeaf: true,
              },
              {
                title: "Toileting, other specified",
                initial: "d5308",
                description: "",
                children: "",
                key: 845,
                isLeaf: true,
              },
              {
                title: "Toileting, unspecified",
                initial: "d5309",
                description: "",
                children: "",
                key: 846,
                isLeaf: true,
              },
            ],
            key: 841,
            isLeaf: false,
          },
          {
            title: "Dressing",
            initial: "d540",
            description: "",
            children: [
              {
                title: "Putting on clothes",
                initial: "d5400",
                description:
                  "Carrying out the coordinated tasks of putting clothes on various parts of the body, such as putting clothes on over the head, over the arms and shoulders, and on the lower and upper halves of the body; putting on gloves and headgear.",
                children: "",
                key: 848,
                isLeaf: true,
              },
              {
                title: "Taking off clothes",
                initial: "d5401",
                description:
                  "Carrying out the coordinated tasks of taking clothes off various parts of the body, such as pulling clothes off and over the head, off the arms and shoulders, and off the lower and upper halves of the body; taking off gloves and headgear.",
                children: "",
                key: 849,
                isLeaf: true,
              },
              {
                title: "Putting on footwear",
                initial: "d5402",
                description:
                  "Carrying out the coordinated tasks of putting on socks, stockings and footwear.",
                children: "",
                key: 850,
                isLeaf: true,
              },
              {
                title: "Taking off footwear",
                initial: "d5403",
                description:
                  "Carrying out the coordinated tasks of taking off socks, stockings and footwear.",
                children: "",
                key: 851,
                isLeaf: true,
              },
              {
                title: "Choosing appropriate clothing",
                initial: "d5404",
                description:
                  "Following implicit or explicit dress codes and conventions of one's society or culture and dressing in keeping with climatic conditions.",
                children: "",
                key: 852,
                isLeaf: true,
              },
              {
                title: "Dressing, other specified",
                initial: "d5408",
                description: "",
                children: "",
                key: 853,
                isLeaf: true,
              },
              {
                title: "Dressing, unspecified",
                initial: "d5409",
                description: "",
                children: "",
                key: 854,
                isLeaf: true,
              },
            ],
            key: 847,
            isLeaf: false,
          },
          {
            title: "Eating",
            initial: "d550",
            description: "",
            children: "",
            key: 855,
            isLeaf: true,
          },
          {
            title: "Drinking",
            initial: "d560",
            description: "",
            children: "",
            key: 856,
            isLeaf: true,
          },
          {
            title: "Looking after one's health",
            initial: "d570",
            description: "",
            children: [
              {
                title: "Ensuring one's physical comfort",
                initial: "d5700",
                description:
                  "Caring for oneself by being aware that one needs to ensure, and ensuring, that one's body is in a comfortable position, that one is not feeling too hot, cold or wet, and that one has adequate lighting.",
                children: "",
                key: 858,
                isLeaf: true,
              },
              {
                title: "Managing diet and fitness",
                initial: "d5701",
                description:
                  "Caring for oneself by being aware of the need and by selecting and consuming nutritious foods and maintaining physical fitness.",
                children: "",
                key: 859,
                isLeaf: true,
              },
              {
                title: "Maintaining one's health",
                initial: "d5702",
                description:
                  "Caring for oneself by being aware of the need and doing what is required to look after one's health, both to respond to risks to health and to prevent ill-health, such as by seeking assistance (professional and non professional); following medical and other health advice; and managing risks to health such as injuries, communicable diseases, drug-taking and sexual transmitted diseases.",
                children: "",
                key: 860,
                isLeaf: true,
              },
              {
                title: "Looking after one's health, other specified",
                initial: "d5708",
                description: "",
                children: "",
                key: 861,
                isLeaf: true,
              },
              {
                title: "Looking after one's health, unspecified",
                initial: "d5709",
                description: "",
                children: "",
                key: 862,
                isLeaf: true,
              },
            ],
            key: 857,
            isLeaf: false,
          },
          {
            title: "Self-care, other specified",
            initial: "d598",
            description: "",
            children: "",
            key: 863,
            isLeaf: true,
          },
          {
            title: "Self-care, unspecified",
            initial: "d599",
            description: "",
            children: "",
            key: 864,
            isLeaf: true,
          },
        ],
        key: 825,
        isLeaf: false,
      },
      {
        title: "DOMESTIC LIFE",
        initial: "d6",
        description: "",
        children: [
          {
            title: "Acquisition of necessities",
            initial: "d610-629",
            description: "",
            children: [
              {
                title: "Acquiring a place to live",
                initial: "d610",
                description: "",
                children: [
                  {
                    title: "Buying a place to live",
                    initial: "d6100",
                    description:
                      "Acquiring ownership of a house, apartment or other dwelling.",
                    children: "",
                    key: 868,
                    isLeaf: true,
                  },
                  {
                    title: "Renting a place to live",
                    initial: "d6101",
                    description:
                      "Acquiring the use of a house, apartment or other dwelling belonging to another in exchange for payment.",
                    children: "",
                    key: 869,
                    isLeaf: true,
                  },
                  {
                    title: "Furnishing a place to live",
                    initial: "d6102",
                    description:
                      "Equipping and arranging a living space with furniture, fixtures and other fittings and decorating rooms, arranging one's own space or room.",
                    children: "",
                    key: 870,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring a place to live, other specified",
                    initial: "d6108",
                    description: "",
                    children: "",
                    key: 871,
                    isLeaf: true,
                  },
                  {
                    title: "Acquiring a place to live, unspecified",
                    initial: "d6109",
                    description: "",
                    children: "",
                    key: 872,
                    isLeaf: true,
                  },
                ],
                key: 867,
                isLeaf: false,
              },
              {
                title: "Acquisition of goods and services",
                initial: "d620",
                description: "",
                children: [
                  {
                    title: "Shopping",
                    initial: "d6200",
                    description:
                      "Obtaining, in exchange for money, goods and services required for daily living (including instructing and supervising an intermediate to do the shopping), such as selecting food, drink, cleaning materials, household items, play and recreational materials, or clothing in a shop or market; comparing quality and price of the items required, negotiating and paying for selected goods or services and transporting goods.",
                    children: "",
                    key: 874,
                    isLeaf: true,
                  },
                  {
                    title: "Gathering daily necessities",
                    initial: "d6201",
                    description:
                      "Obtaining, without exchange of money, goods and services required for daily living (including instructing and supervising an intermediate to gather daily necessities), such as by harvesting vegetable and fruits and getting water and fuel.",
                    children: "",
                    key: 875,
                    isLeaf: true,
                  },
                  {
                    title: "Acquisition of goods and services, other specified",
                    initial: "d6208",
                    description: "",
                    children: "",
                    key: 876,
                    isLeaf: true,
                  },
                  {
                    title: "Acquisition of goods and services, unspecified",
                    initial: "d6209",
                    description: "",
                    children: "",
                    key: 877,
                    isLeaf: true,
                  },
                ],
                key: 873,
                isLeaf: false,
              },
              {
                title:
                  "Acquisition of necessities, other specified and unspecified",
                initial: "d629",
                description: "",
                children: "",
                key: 878,
                isLeaf: true,
              },
            ],
            key: 866,
            isLeaf: false,
          },
          {
            title: "Household tasks",
            initial: "d630-649",
            description: "",
            children: [
              {
                title: "Preparing meals",
                initial: "d630",
                description: "",
                children: [
                  {
                    title: "Preparing simple meals",
                    initial: "d6300",
                    description:
                      "Planning, organizing, cooking and serving meals with small number of ingredients that require easy methods of preparation and serving, such as making a snack or small meal, and transforming food ingredients by cutting and stirring, boiling and heating food such as rice or potatoes.",
                    children: "",
                    key: 881,
                    isLeaf: true,
                  },
                  {
                    title: "Preparing complex meals",
                    initial: "d6301",
                    description:
                      "Planning, organizing, cooking and serving meals with large number of ingredients that require complex methods of preparation and serving, such as planning a meal with serveral dishes, and transforming food ingredients by combined actions of peeling, slicing, mixing, kneading, stirring, presenting and serving food in a manner appropriate to the occasion and culture. \n \n Exclusions: using household appliances (d6403)",
                    children: "",
                    key: 882,
                    isLeaf: true,
                  },
                  {
                    title: "Preparing meals, other specified",
                    initial: "d6308",
                    description: "",
                    children: "",
                    key: 883,
                    isLeaf: true,
                  },
                  {
                    title: "Preparing meals, unspecified",
                    initial: "d6309",
                    description: "",
                    children: "",
                    key: 884,
                    isLeaf: true,
                  },
                ],
                key: 880,
                isLeaf: false,
              },
              {
                title: "Doing housework",
                initial: "d640",
                description: "",
                children: [
                  {
                    title: "Washing and drying clothes and garments",
                    initial: "d6400",
                    description:
                      "Washing clothes and garments by hand and hanging them out to dry in the air.",
                    children: "",
                    key: 886,
                    isLeaf: true,
                  },
                  {
                    title: "Cleaning cooking area and utensils",
                    initial: "d6401",
                    description:
                      "Cleaning up after cooking, such as by washing dishes, pans, pots and cooking utensils, and cleaning tables and floors around cooking and eating area.",
                    children: "",
                    key: 887,
                    isLeaf: true,
                  },
                  {
                    title: "Cleaning living area",
                    initial: "d6402",
                    description:
                      "Cleaning the living areas of the household, such as by tidying and dusting, sweeping, swabbing, mopping floors, cleaning windows and walls, cleaning bathrooms and toilets, cleaning household furnishings.",
                    children: "",
                    key: 888,
                    isLeaf: true,
                  },
                  {
                    title: "Using household appliances",
                    initial: "d6403",
                    description:
                      "Using all kinds of household appliances, such as washing machines, driers, irons, vacuum cleaners, dishwashers.",
                    children: "",
                    key: 889,
                    isLeaf: true,
                  },
                  {
                    title: "Storing daily necessities",
                    initial: "d6404",
                    description:
                      "Storing food, drinks, clothes and other household goods required for daily living; preparing food for conservation by canning, salting or refrigerating, keeping food fresh and out of the reach of animals.",
                    children: "",
                    key: 890,
                    isLeaf: true,
                  },
                  {
                    title: "Disposing of garbage",
                    initial: "d6405",
                    description:
                      "Disposing of household garbage such as by collecting trash and rubbish around the house, preparing garbage for disposal, using garbage disposal appliances; burning garbage.",
                    children: "",
                    key: 891,
                    isLeaf: true,
                  },
                  {
                    title: "Doing housework, other specified",
                    initial: "d6408",
                    description: "",
                    children: "",
                    key: 892,
                    isLeaf: true,
                  },
                  {
                    title: "Doing housework, unspecified",
                    initial: "d6409",
                    description: "",
                    children: "",
                    key: 893,
                    isLeaf: true,
                  },
                ],
                key: 885,
                isLeaf: false,
              },
              {
                title: "Household tasks, other specified and unspecified",
                initial: "d649",
                description: "",
                children: "",
                key: 894,
                isLeaf: true,
              },
            ],
            key: 879,
            isLeaf: false,
          },
          {
            title: "Caring for household objects and assisting others",
            initial: "d650-669",
            description: "",
            children: [
              {
                title: "Caring for household objects",
                initial: "d650",
                description: "",
                children: [
                  {
                    title: "Making and repairing clothes",
                    initial: "d6500",
                    description:
                      "Making and repairing clothes, such as by sewing, producing or mending clothes; reattaching buttons and fasteners; ironing clothes, fixing and polishing footwear. \n \n Exclusions: using household appliances (d6403)",
                    children: "",
                    key: 897,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining dwelling and furnishings",
                    initial: "d6501",
                    description:
                      "Repairing and taking care of dwelling, its exterior, interior and contents, such as by painting, repairing fixtures and furniture, and using required tools for repair work.",
                    children: "",
                    key: 898,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining domestic appliances",
                    initial: "d6502",
                    description:
                      "Repairing and taking care of all domestic appliances for cooking, cleaning and repairing, such as by oiling and repairing tools and maintaining the washing machine.",
                    children: "",
                    key: 899,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining vehicles",
                    initial: "d6503",
                    description:
                      "Repairing and taking care of motorized and non-motorized vehicles for personal use, including bicycles, carts, automobiles and boats.",
                    children: "",
                    key: 900,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining assistive devices",
                    initial: "d6504",
                    description:
                      "Repairing and taking care of assistive devices such as prostheses, orthoses and specialized tools and aids for housekeeping and personal care; maintaining and repairing aids for personal mobility such as canes, walkers, wheelchairs and scooters; and maintaining communication and recreational aids.",
                    children: "",
                    key: 901,
                    isLeaf: true,
                  },
                  {
                    title: "Taking care of plants, indoors and outdoors",
                    initial: "d6505",
                    description:
                      "Taking care of plants inside and outside the house, such as by planting, watering and fertilizing plants; gardening and growing foods for personal use.",
                    children: "",
                    key: 902,
                    isLeaf: true,
                  },
                  {
                    title: "Taking care of animals",
                    initial: "d6506",
                    description:
                      "Taking care of domestic animals and pets, such as by feeding, cleaning, grooming and exercising pets; watching over the health of animals or pets; planning for the care of animals or pets in one's absence.",
                    children: "",
                    key: 903,
                    isLeaf: true,
                  },
                  {
                    title: "Caring for household objects, other specified",
                    initial: "d6508",
                    description: "",
                    children: "",
                    key: 904,
                    isLeaf: true,
                  },
                  {
                    title: "Caring for household objects, unspecified",
                    initial: "d6509",
                    description: "",
                    children: "",
                    key: 905,
                    isLeaf: true,
                  },
                ],
                key: 896,
                isLeaf: false,
              },
              {
                title: "Assisting others",
                initial: "d660",
                description: "",
                children: [
                  {
                    title: "Assisting others with self-care",
                    initial: "d6600",
                    description:
                      "Assisting household members and others in performing self-care, including helping others with eating, bathing and dressing; taking care of children or members of the household who are sick or have difficulties with basic self-care; helping others with their toileting.",
                    children: "",
                    key: 907,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others in movement",
                    initial: "d6601",
                    description:
                      "Assisting household members and others in movements and in moving outside the home, such as in the neighbourhood or city, to or from school, place of employment or other destination.",
                    children: "",
                    key: 908,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others in communication",
                    initial: "d6602",
                    description:
                      "Assisting household members and others with their communication, such as by helping with speaking, writing or readings.",
                    children: "",
                    key: 909,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others in interpersonal relations",
                    initial: "d6603",
                    description:
                      "Assisting household members and others with their interpersonal interactions, such as by helping them to initiate, maintain or terminate relationships.",
                    children: "",
                    key: 910,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others in nutrition",
                    initial: "d6604",
                    description:
                      "Assisting household members and others with their nutrition, such as by helping them to prepare and eat meals.",
                    children: "",
                    key: 911,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others in health maintenance",
                    initial: "d6605",
                    description:
                      "Assisting household members and others with formal and informal health care, such as by ensuring that a child gets regular medical check-ups, or that an elderly relative takes required medication.",
                    children: "",
                    key: 912,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others, other specified",
                    initial: "d6608",
                    description: "",
                    children: "",
                    key: 913,
                    isLeaf: true,
                  },
                  {
                    title: "Assisting others, unspecified",
                    initial: "d6609",
                    description: "",
                    children: "",
                    key: 914,
                    isLeaf: true,
                  },
                ],
                key: 906,
                isLeaf: false,
              },
              {
                title:
                  "Caring for household objects and assisting others, other specified and unspecified",
                initial: "d669",
                description: "",
                children: "",
                key: 915,
                isLeaf: true,
              },
            ],
            key: 895,
            isLeaf: false,
          },
          {
            title: "Domestic life, other specified",
            initial: "d698",
            description: "",
            children: "",
            key: 916,
            isLeaf: true,
          },
          {
            title: "Domestic life, unspecified",
            initial: "d699",
            description: "",
            children: "",
            key: 917,
            isLeaf: true,
          },
        ],
        key: 865,
        isLeaf: false,
      },
      {
        title: "INTERPERSONAL INTERACTIONS AND RELATIONSHIPS",
        initial: "d7",
        description: "",
        children: [
          {
            title: "General interpersonal interactions",
            initial: "d710-729",
            description: "",
            children: [
              {
                title: "Basic interpersonal interactions",
                initial: "d710",
                description: "",
                children: [
                  {
                    title: "Respect and warmth in relationships",
                    initial: "d7100",
                    description:
                      "Showing and responding to consideration and esteem, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 921,
                    isLeaf: true,
                  },
                  {
                    title: "Appreciation in relationships",
                    initial: "d7101",
                    description:
                      "Showing and responding to satisfaction and gratitude, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 922,
                    isLeaf: true,
                  },
                  {
                    title: "Tolerance in relationships",
                    initial: "d7102",
                    description:
                      "Showing and responding to understanding and acceptance of behaviour, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 923,
                    isLeaf: true,
                  },
                  {
                    title: "Criticism in relationships",
                    initial: "d7103",
                    description:
                      "Providing and responding to implicit and explicit differences of opinion or disagreement, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 924,
                    isLeaf: true,
                  },
                  {
                    title: "Social cues in relationships",
                    initial: "d7104",
                    description:
                      "Giving and reacting appropriately to signs and hints that occur in social interactions.",
                    children: "",
                    key: 925,
                    isLeaf: true,
                  },
                  {
                    title: "Physical contact in relationships",
                    initial: "d7105",
                    description:
                      "Making and responding to bodily contact with others, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 926,
                    isLeaf: true,
                  },
                  {
                    title: "Differentiation of familiar persons",
                    initial: "d7106",
                    description:
                      "Showing differential responses to individuals, such as by reaching out for the familiar person and differentiating them from strangers and reacting in an appropriate manner.",
                    children: "",
                    key: 927,
                    isLeaf: true,
                  },
                  {
                    title: "Basic interpersonal interactions, other specified",
                    initial: "d7108",
                    description: "",
                    children: "",
                    key: 928,
                    isLeaf: true,
                  },
                  {
                    title: "Basic interpersonal interactions, unspecified",
                    initial: "d7109",
                    description: "",
                    children: "",
                    key: 929,
                    isLeaf: true,
                  },
                ],
                key: 920,
                isLeaf: false,
              },
              {
                title: "Complex interpersonal interactions",
                initial: "d720",
                description: "",
                children: [
                  {
                    title: "Forming relationships",
                    initial: "d7200",
                    description:
                      "Beginning and maintaining interactions with others for a short or long period of time, in a contextually and socially appropriate manner, such as by introducing oneself, finding and establishing friendships and professional relationships, starting a relationship that may become permanent, romantic or intimate.",
                    children: "",
                    key: 931,
                    isLeaf: true,
                  },
                  {
                    title: "Terminating relationships",
                    initial: "d7201",
                    description:
                      "Bringing interactions to a close in a contextually and socially appropriate manner, such as by ending temporary relationships at the end of a visit, ending long-term relationships with friends when moving to a new town or ending relationships with work colleagues, professional colleagues and service providers, and ending romantic or intimate relationships.",
                    children: "",
                    key: 932,
                    isLeaf: true,
                  },
                  {
                    title: "Regulating behaviours within interactions",
                    initial: "d7202",
                    description:
                      "Regulating emotions and impulses, verbal aggression and physical aggression in interactions with others, in a contextually and socially appropriate manner.",
                    children: "",
                    key: 933,
                    isLeaf: true,
                  },
                  {
                    title: "Interacting according to social rules",
                    initial: "d7203",
                    description:
                      "Acting independently in social interactions and complying with social conventions governing one's role, position or other social status in interactions with others.",
                    children: "",
                    key: 934,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining social space",
                    initial: "d7204",
                    description:
                      "Being aware of and maintaining a distance between oneself and others that is contextually, socially and culturally appropriate.",
                    children: "",
                    key: 935,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Complex interpersonal interactions, other specified",
                    initial: "d7208",
                    description: "",
                    children: "",
                    key: 936,
                    isLeaf: true,
                  },
                  {
                    title: "Complex interpersonal interactions, unspecified",
                    initial: "d7209",
                    description: "",
                    children: "",
                    key: 937,
                    isLeaf: true,
                  },
                ],
                key: 930,
                isLeaf: false,
              },
              {
                title:
                  "General interpersonal interactions, other specified and unspecified",
                initial: "d729",
                description: "",
                children: "",
                key: 938,
                isLeaf: true,
              },
            ],
            key: 919,
            isLeaf: false,
          },
          {
            title: "Particular interpersonal relationships",
            initial: "d730-779",
            description: "",
            children: [
              {
                title: "Relating with strangers",
                initial: "d730",
                description:
                  "Engaging in temporary contacts and links with strangers for specific purposes, when asking for directions or other information, or making a purchase.",
                children: "",
                key: 940,
                isLeaf: true,
              },
              {
                title: "Formal relationships",
                initial: "d740",
                description: "",
                children: [
                  {
                    title: "Relating with persons in authority",
                    initial: "d7400",
                    description:
                      "Creating and maintaining formal relations with people in positions of power of a higher rank or prestige relative to one's own position, such as an employer.",
                    children: "",
                    key: 942,
                    isLeaf: true,
                  },
                  {
                    title: "Relating with subordinates",
                    initial: "d7401",
                    description:
                      "Creating and maintaining formal relations with people in positions of lower rank or prestige relative to one's own social position, such as an employee or servant.",
                    children: "",
                    key: 943,
                    isLeaf: true,
                  },
                  {
                    title: "Relating with equals",
                    initial: "d7402",
                    description:
                      "Creating and maintaining formal relations with people in the same position of authority, rank or prestige relative to one's own social position.",
                    children: "",
                    key: 944,
                    isLeaf: true,
                  },
                  {
                    title: "Formal relationships, other specified",
                    initial: "d7408",
                    description: "",
                    children: "",
                    key: 945,
                    isLeaf: true,
                  },
                  {
                    title: "Formal relationships, unspecified",
                    initial: "d7409",
                    description: "",
                    children: "",
                    key: 946,
                    isLeaf: true,
                  },
                ],
                key: 941,
                isLeaf: false,
              },
              {
                title: "Informal social relationships",
                initial: "d750",
                description: "",
                children: [
                  {
                    title: "Informal relationships with friends",
                    initial: "d7500",
                    description:
                      "Creating and maintaining friendship relationships that are characterized by mutual esteem an common interests.",
                    children: "",
                    key: 948,
                    isLeaf: true,
                  },
                  {
                    title: "Informal relationships with neighbours",
                    initial: "d7501",
                    description:
                      "Creating and maintaining informal relationships with people who live in nearby dwellings or living areas.",
                    children: "",
                    key: 949,
                    isLeaf: true,
                  },
                  {
                    title: "Informal relationships with acquaintances",
                    initial: "d7502",
                    description:
                      "Creating and maintaining informal relationships with people whom one knows but who are not close friends.",
                    children: "",
                    key: 950,
                    isLeaf: true,
                  },
                  {
                    title: "Informal relationships with co-inhabitants",
                    initial: "d7503",
                    description:
                      "Creating and maintaining informal relationships with people who are co-inhabitants of a house or other dwelling, privately or publicly run, for any purpose.",
                    children: "",
                    key: 951,
                    isLeaf: true,
                  },
                  {
                    title: "Informal relationships with peers",
                    initial: "d7504",
                    description:
                      "Creating and maintaining informal relationships with people who share the same age, interest or other common feature.",
                    children: "",
                    key: 952,
                    isLeaf: true,
                  },
                  {
                    title: "Informal social relationships, other specified",
                    initial: "d7508",
                    description: "",
                    children: "",
                    key: 953,
                    isLeaf: true,
                  },
                  {
                    title: "Informal social relationships, unspecified",
                    initial: "d7509",
                    description: "",
                    children: "",
                    key: 954,
                    isLeaf: true,
                  },
                ],
                key: 947,
                isLeaf: false,
              },
              {
                title: "Family relationships",
                initial: "d760",
                description: "",
                children: [
                  {
                    title: "Parent-child relationships",
                    initial: "d7600",
                    description:
                      "Becomming and being a parent, both natural and adoptive, such as by having a child and relating to it as a parent or creating and maintaining a parental relationships with an adoptive child, and providing physical, intellectual and emotional nurture to one's natural or adoptive child.",
                    children: "",
                    key: 956,
                    isLeaf: true,
                  },
                  {
                    title: "Child-parent relationships",
                    initial: "d7601",
                    description:
                      "Creating and maintaining relationships with one's parent, such as a young child obeying his or her parents or an adult child taking care of his or her elderly parents.",
                    children: "",
                    key: 957,
                    isLeaf: true,
                  },
                  {
                    title: "Sibling relationships",
                    initial: "d7602",
                    description:
                      "Creating and maintaining a brotherly or sisterly relationship with a person who shares one or both parents by birth, adoption or marriage.",
                    children: "",
                    key: 958,
                    isLeaf: true,
                  },
                  {
                    title: "Extended family relationships",
                    initial: "d7603",
                    description:
                      "Creating and maintaining a family relationship with members of one's extended family, such as with cousins, aunts and uncles and grandparents.",
                    children: "",
                    key: 959,
                    isLeaf: true,
                  },
                  {
                    title: "Family relationships, other specified",
                    initial: "d7608",
                    description: "",
                    children: "",
                    key: 960,
                    isLeaf: true,
                  },
                  {
                    title: "Family relationships, unspecified",
                    initial: "d7609",
                    description: "",
                    children: "",
                    key: 961,
                    isLeaf: true,
                  },
                ],
                key: 955,
                isLeaf: false,
              },
              {
                title: "Intimate relationships",
                initial: "d770",
                description: "",
                children: [
                  {
                    title: "Romantic relationships",
                    initial: "d7700",
                    description:
                      "Creating and maintaining a relationship based on emotional and physical attraction, potentially leading to long-term intimate relationships.",
                    children: "",
                    key: 963,
                    isLeaf: true,
                  },
                  {
                    title: "Spousal relationships",
                    initial: "d7701",
                    description:
                      "Creating and maintaining an intimate relationship of a legal nature with another person, such as in a legal marriage, including becoming and being a legally maried wife or husband or an unmarried spouse.",
                    children: "",
                    key: 964,
                    isLeaf: true,
                  },
                  {
                    title: "Sexual relationships",
                    initial: "d7702",
                    description:
                      "Creating and maintaining a relationship of a sexual nature, with a spouse or other partner.",
                    children: "",
                    key: 965,
                    isLeaf: true,
                  },
                  {
                    title: "Intimate relationships, other specified",
                    initial: "d7708",
                    description: "",
                    children: "",
                    key: 966,
                    isLeaf: true,
                  },
                  {
                    title: "Intimate relationships, unspecified",
                    initial: "d7709",
                    description: "",
                    children: "",
                    key: 967,
                    isLeaf: true,
                  },
                ],
                key: 962,
                isLeaf: false,
              },
              {
                title:
                  "Particular interpersonal relationships, other specified and unspecified",
                initial: "d779",
                description: "",
                children: "",
                key: 968,
                isLeaf: true,
              },
            ],
            key: 939,
            isLeaf: false,
          },
          {
            title:
              "Interpersonal interactions and relationships, other specifiedInterpersonal interactions and relationships, other specified",
            initial: "d798",
            description: "",
            children: "",
            key: 969,
            isLeaf: true,
          },
          {
            title: "Interpersonal interactions and relationships, unspecified",
            initial: "d799",
            description: "",
            children: "",
            key: 970,
            isLeaf: true,
          },
        ],
        key: 918,
        isLeaf: false,
      },
      {
        title: "MAJOR LIFE AREAS",
        initial: "d8",
        description: "",
        children: [
          {
            title: "Education",
            initial: "d810-839",
            description: "",
            children: [
              {
                title: "Informal education",
                initial: "d810",
                description:
                  "Learning at home or in some other non-institutional setting, such as learning crafts and other skills from parents or family members, or home schooling.",
                children: "",
                key: 973,
                isLeaf: true,
              },
              {
                title: "Preschool education",
                initial: "d815",
                description:
                  "Learning at an initial level of organized instruction, designed primarily to introduce a child to the school-type environment and prepare it for compulsory education, such as by acquiring skills in a day-care or similar setting as preparation for advancement to school.",
                children: "",
                key: 974,
                isLeaf: true,
              },
              {
                title: "School education",
                initial: "d820",
                description:
                  "Gaining admission to school, education, engaging in all school-related responsibilities and privileges, and learning the course material, subjects and other curriculum requirements in a primary or secondary education programme, including attending school regularly, working cooperatively with other students, taking directions from teachers, organizing, studying and completing assigned tasks and projects, and advancing to other stages of education.",
                children: "",
                key: 975,
                isLeaf: true,
              },
              {
                title: "Vocational training",
                initial: "d825",
                description:
                  "Engaging in all activities of a vocational programme and learning the curriculum material for preparation for employment in a trade, job or profession.",
                children: "",
                key: 976,
                isLeaf: true,
              },
              {
                title: "Higher education",
                initial: "d830",
                description:
                  "Engaging in the activities of advanced educational programmes in universities, colleges and professional schools and learning all aspects of the curriculum required for degrees, diplomas, certificates and other accreditations, such as completing a university bachelor's or master's course of study, medical school or other professional school.",
                children: "",
                key: 977,
                isLeaf: true,
              },
              {
                title: "Education life",
                initial: "d835",
                description:
                  "Engaging in aspects of life of education institutions, such as university and school related associations, including: clubs, sports, related civic bodies (e.g. school council), and other institutionally-organized initiatives that are not part of the academic curriculum.",
                children: "",
                key: 978,
                isLeaf: true,
              },
              {
                title: "Education, other specified",
                initial: "d838",
                description: "",
                children: "",
                key: 979,
                isLeaf: true,
              },
              {
                title: "Education unspecified",
                initial: "d839",
                description: "",
                children: "",
                key: 980,
                isLeaf: true,
              },
            ],
            key: 972,
            isLeaf: false,
          },
          {
            title: "Work and employment",
            initial: "d840-859",
            description: "",
            children: [
              {
                title: "Apprenticeship (work preparation)",
                initial: "d840",
                description:
                  "Engaging in programmes related to preparation for employment, such as performing the tasks required of an apprenticeship, internship, articling and in-service training. \n \n Exclusions: vocational training (d825)",
                children: "",
                key: 982,
                isLeaf: true,
              },
              {
                title: "Acquiring, keeping and terminating a job",
                initial: "d845",
                description: "",
                children: [
                  {
                    title: "Seeking employment",
                    initial: "d8450",
                    description:
                      "Locating and choosing a job, in a trade, profession or other form of employment, and performing the required tasks to get hired, such as showing up at the place of employment or participating in a job interview.",
                    children: "",
                    key: 984,
                    isLeaf: true,
                  },
                  {
                    title: "Maintaining a job",
                    initial: "d8451",
                    description:
                      "Performing job-related tasks to keep an occupation, trade, profession or other form of employment, and obtaining promotion and other advancements in employment.",
                    children: "",
                    key: 985,
                    isLeaf: true,
                  },
                  {
                    title: "Terminating a job",
                    initial: "d8452",
                    description:
                      "Leaving or quitting a job in the appropriate manner.",
                    children: "",
                    key: 986,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Acquiring, keeping and terminating a job, other specified",
                    initial: "d8458",
                    description: "",
                    children: "",
                    key: 987,
                    isLeaf: true,
                  },
                  {
                    title:
                      "Acquiring, keeping and terminating a job, unspecified",
                    initial: "d8459",
                    description: "",
                    children: "",
                    key: 988,
                    isLeaf: true,
                  },
                ],
                key: 983,
                isLeaf: false,
              },
              {
                title: "Remunerative employment",
                initial: "d850",
                description: "",
                children: [
                  {
                    title: "Self employment",
                    initial: "d8500",
                    description:
                      "Engaging in remunerative work sought or generated by the individual, or contracted from others without a formal employment relationship, such as migratory agricultural work, working as a free-lance writer or consultant, short-term contract work, working as an artist or crafts person, owning and running a shop or other business. \n \n Exclusions: part-time and full-time employment (d8501, d8502)",
                    children: "",
                    key: 990,
                    isLeaf: true,
                  },
                  {
                    title: "Part-time employment",
                    initial: "d8501",
                    description:
                      "Engaging in all aspects of work for payment on a part-time basis, as an employee, such as seeking employment and getting a job, doing the tasks required of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups.",
                    children: "",
                    key: 991,
                    isLeaf: true,
                  },
                  {
                    title: "Full-time employment",
                    initial: "d8502",
                    description:
                      "Engaging in all aspects of work for payment on a full-time basis, as an employee, such as seeking employment and getting a job, doing the required tasks of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups.",
                    children: "",
                    key: 992,
                    isLeaf: true,
                  },
                  {
                    title: "Remunerative employment, other specified",
                    initial: "d8508",
                    description: "",
                    children: "",
                    key: 993,
                    isLeaf: true,
                  },
                  {
                    title: "Remunerative employment, unspecified",
                    initial: "d8509",
                    description: "",
                    children: "",
                    key: 994,
                    isLeaf: true,
                  },
                ],
                key: 989,
                isLeaf: false,
              },
              {
                title: "Non-remunerative employment",
                initial: "d855",
                description:
                  "Engaging in all aspects of work in which pay is not provided, full-time or part-time, including organized work activities, doing the required tasks of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups, such as volunteer work, charity work, working for a community or religious group without remuneration, working around the home without remuneration. \n \n Exclusions: Chapter 6 Domestic Life (d6)",
                children: "",
                key: 995,
                isLeaf: true,
              },
              {
                title: "Work and employment, other specified and unspecified",
                initial: "d859",
                description: "",
                children: "",
                key: 996,
                isLeaf: true,
              },
            ],
            key: 981,
            isLeaf: false,
          },
          {
            title: "Economic life",
            initial: "d860-879",
            description: "",
            children: [
              {
                title: "Basic economic transactions",
                initial: "d860",
                description:
                  "Engaging in any form of simple economic transaction, such as using money to purchase food or bartering, exchanging goods or services; or saving money.",
                children: "",
                key: 998,
                isLeaf: true,
              },
              {
                title: "Complex economic transactions",
                initial: "d865",
                description:
                  "Engaging in any form of complex economic transaction that involves the exchange of capital or property, and the creation of profit or economic value, such as buying a business, factory, or equipment, maintaining a bank account, or trading in commodities.",
                children: "",
                key: 999,
                isLeaf: true,
              },
              {
                title: "Economic self-sufficiency",
                initial: "d870",
                description: "",
                children: [
                  {
                    title: "Personal economic resources",
                    initial: "d8700",
                    description:
                      "Having command over personal or private economic resources, in order to ensure economical security for present and future needs.",
                    children: "",
                    key: 1001,
                    isLeaf: true,
                  },
                  {
                    title: "Public economic entitlements",
                    initial: "d8701",
                    description:
                      "Having command over public economic resources, in order to ensure economical security for present and future needs.",
                    children: "",
                    key: 1002,
                    isLeaf: true,
                  },
                  {
                    title: "Economic self-sufficiency, other specified",
                    initial: "d8708",
                    description: "",
                    children: "",
                    key: 1003,
                    isLeaf: true,
                  },
                  {
                    title: "Economic self-sufficiency, unspecified",
                    initial: "d8709",
                    description: "",
                    children: "",
                    key: 1004,
                    isLeaf: true,
                  },
                ],
                key: 1000,
                isLeaf: false,
              },
              {
                title: "Economic life, other specified and unspecified",
                initial: "d879",
                description: "",
                children: "",
                key: 1005,
                isLeaf: true,
              },
            ],
            key: 997,
            isLeaf: false,
          },
          {
            title: "Major life areas, other specified",
            initial: "d898",
            description: "",
            children: "",
            key: 1006,
            isLeaf: true,
          },
          {
            title: "Major life areas, unspecified",
            initial: "d899",
            description: "",
            children: "",
            key: 1007,
            isLeaf: true,
          },
        ],
        key: 971,
        isLeaf: false,
      },
      {
        title: "COMMUNITY, SOCIAL AND CIVIC LIFE",
        initial: "d9",
        description: "",
        children: [
          {
            title: "Community life",
            initial: "d910",
            description: "",
            children: [
              {
                title: "Informal associations",
                initial: "d9100",
                description:
                  "Engaging in social or community associations organized by people with common interests, such as local social clubs or ethics groups.",
                children: "",
                key: 1010,
                isLeaf: true,
              },
              {
                title: "Formal associations",
                initial: "d9101",
                description:
                  "Engaging in professional or other exclusive social groups, such as associations of lawyers, physicians, or academics.",
                children: "",
                key: 1011,
                isLeaf: true,
              },
              {
                title: "Ceremonies",
                initial: "d9102",
                description:
                  "Engaging in non-religious rites or social ceremonies, such as marriages, funerals or initiation ceremonies.",
                children: "",
                key: 1012,
                isLeaf: true,
              },
              {
                title: "Community life, other specified",
                initial: "d9108",
                description: "",
                children: "",
                key: 1013,
                isLeaf: true,
              },
              {
                title: "Community life, unspecified",
                initial: "d9109",
                description: "",
                children: "",
                key: 1014,
                isLeaf: true,
              },
            ],
            key: 1009,
            isLeaf: false,
          },
          {
            title: "Recreation and leisure",
            initial: "d920",
            description: "",
            children: [
              {
                title: "Play",
                initial: "d9200",
                description:
                  "Engaging in games with rules or unstructured or unorganized games and spontaneous recreation, such as playing chess or cards or children's play.",
                children: "",
                key: 1016,
                isLeaf: true,
              },
              {
                title: "Sports",
                initial: "d9201",
                description:
                  "Engaging in competitive and informal or formally organized games or athletic events, performed alone or in a group, such as bowling, gymnastics or soccer.",
                children: "",
                key: 1017,
                isLeaf: true,
              },
              {
                title: "Arts and culture",
                initial: "d9202",
                description:
                  "Engaging in, or appreciating, fine arts or cultural events, such as going to the theatre, cinema, museum or art gallery, or acting in a play, reading, being read to, dancing, singing or playing a musical instrument for enjoyment.",
                children: "",
                key: 1018,
                isLeaf: true,
              },
              {
                title: "Crafts",
                initial: "d9203",
                description:
                  "Engaging in handicrafts, such as pottery or knitting.",
                children: "",
                key: 1019,
                isLeaf: true,
              },
              {
                title: "Hobbies",
                initial: "d9204",
                description:
                  "Engaging in pastimes such as stamp collecting, coins or antiques.",
                children: "",
                key: 1020,
                isLeaf: true,
              },
              {
                title: "Socializing",
                initial: "d9205",
                description:
                  "Engaging in informal or casual gatherings with others, such as visiting friends or relatives or meeting informally in public places.",
                children: "",
                key: 1021,
                isLeaf: true,
              },
              {
                title: "Recreation and leisure, other specified",
                initial: "d9208",
                description: "",
                children: "",
                key: 1022,
                isLeaf: true,
              },
              {
                title: "Recreation and leisure, unspecified",
                initial: "d9209",
                description: "",
                children: "",
                key: 1023,
                isLeaf: true,
              },
            ],
            key: 1015,
            isLeaf: false,
          },
          {
            title: "Religion and spirituality",
            initial: "d930",
            description: "",
            children: [
              {
                title: "Organized religion",
                initial: "d9300",
                description:
                  "Engaging in organized religious ceremonies, activities and events.",
                children: "",
                key: 1025,
                isLeaf: true,
              },
              {
                title: "Spirituality",
                initial: "d9301",
                description:
                  "Engaging in spiritual activities or events, outside of a organized religion.",
                children: "",
                key: 1026,
                isLeaf: true,
              },
              {
                title: "Religion and spirituality, other specified",
                initial: "d9308",
                description: "",
                children: "",
                key: 1027,
                isLeaf: true,
              },
              {
                title: "Religion and spirituality, unspecified",
                initial: "d9309",
                description: "",
                children: "",
                key: 1028,
                isLeaf: true,
              },
            ],
            key: 1024,
            isLeaf: false,
          },
          {
            title: "Human rights",
            initial: "d940",
            description:
              "Enjoying all nationally and internationally recognized rights that are accorded to people by virtue of their humanity alone, such as human rights as recognized by the United Nations Universal Declaration of Human Rights (1948), the United Nations Convention on the Rights of the Child (1989), the United Nations Standard Rules for the Equalisation of Opportunities for Persons with Disabilities (1993), and the United Nations Convention on the Rights of Persons with Disabilities (2006); the right to self-determination or autonomy; and the right to control over one's destiny. \n \n Exclusions: Political life and citizenship (d950)",
            children: "",
            key: 1029,
            isLeaf: true,
          },
          {
            title: "Political life and citizenship",
            initial: "d950",
            description:
              "Engaging in the social, political, governmental life of a citizen, having legal status as a citizen and enjoying the rights, protections, privileges and duties associated with that role, such as the right to vote and run for political office, to form political associations, enjoying the rights and freedoms associated with citizenship (e.g. the rights of freedom of speech, association, religion, protections against unreasonable search and seizure, the right to counsel, to a trial and other legal rights and protections against discrimination); having legal standing as a citizen. \n \n Exclusions: human rights (d940)",
            children: "",
            key: 1030,
            isLeaf: true,
          },
          {
            title: "Community, social and civic life, other specified",
            initial: "d998",
            description: "",
            children: "",
            key: 1031,
            isLeaf: true,
          },
          {
            title: "Community, social and civic life, unspecified",
            initial: "d998",
            description: "",
            children: "",
            key: 1032,
            isLeaf: true,
          },
        ],
        key: 1008,
        isLeaf: false,
      },
    ],
    key: 548,
    isLeaf: false,
  },
  {
    title: "ENVIRONMENTAL FACTORS",
    initial: "e",
    description: "",
    children: [
      {
        title: "PRODUCTS AND TECHNOLOGY",
        initial: "e1",
        description: "",
        children: [
          {
            title: "Products or substances for personal consumption",
            initial: "e110",
            description:
              "Any natural or human-made object or substance gathered, processed or manufactured for ingestion. \n Inclusions: food and drugs",
            children: [
              {
                title: "Food",
                initial: "e1100",
                description:
                  "Any natural or human-made object or substance gathered, processed or manufactured to be consumed, such as raw, processed and prepared food and liquids of different consistencies (including breast milk), herbs and minerals (vitamin and other supplements).",
                children: "",
                key: 1036,
                isLeaf: true,
              },
              {
                title: "Drugs",
                initial: "e1101",
                description:
                  "Any natural or human-made object or substance gathered, processed or manufactured for medicinal purposes, such as allopathic and naturopathic medication.",
                children: "",
                key: 1037,
                isLeaf: true,
              },
              {
                title:
                  "Products or substances for personal consumption, other specified",
                initial: "e1108",
                description: "",
                children: "",
                key: 1038,
                isLeaf: true,
              },
              {
                title:
                  "Products or substances for personal consumption, unspecified",
                initial: "e1109",
                description: "",
                children: "",
                key: 1039,
                isLeaf: true,
              },
            ],
            key: 1035,
            isLeaf: false,
          },
          {
            title: "Products and technology for personal use in daily living",
            initial: "e115",
            description:
              "Equipment, products and technologies used by people in daily activities, including those adapted or specially designed, located in, on or near the person using them. \n Inclusions: general and assistive products and technology for personal use \n Exclusions: products and technology for personal indoor and outdoor mobility and transportation (e120);products and technology for communication (e125)",
            children: [
              {
                title:
                  "General products and technology for personal use in daily living",
                initial: "e1150",
                description:
                  "Equipment, products and technologies used by people in daily activities, such as clothes, textiles, furniture, appliances, cleaning products and tools, not adapted or specially designed.",
                children: "",
                key: 1041,
                isLeaf: true,
              },
              {
                title:
                  "Assistive products and technology for personal use in daily living",
                initial: "e1151",
                description:
                  "Adapted or specially designed equipment, products and technologies that assist people in daily living, such as prosthetic and orthotic devices, neural prostheses (e.g. functional stimulation devices that control bowels, bladder, breathing and heart rate), and environmental control units aimed at facilitating individuals' control over their indoor setting (scanners, remote control systems, voice-controlled systems, timer switches).",
                children: "",
                key: 1042,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for personal use in daily living, other specified",
                initial: "e1158",
                description: "",
                children: "",
                key: 1043,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for personal use in daily living, unspecified",
                initial: "e1159",
                description: "",
                children: "",
                key: 1044,
                isLeaf: true,
              },
            ],
            key: 1040,
            isLeaf: false,
          },
          {
            title:
              "Products and technology for personal indoor and outdoor mobility and transportation",
            initial: "e120",
            description:
              "Equipment, products and technologies used by people in activities of moving inside and outside buildings, including those adapted or specially designed, located in, on or near the person using them.\n Inclusions: general and assistive products and technology for personal indoor and outdoor mobility and transportation",
            children: [
              {
                title:
                  "General products and technology for personal indoor and outdoor mobility and transportation",
                initial: "e1200",
                description:
                  "Equipment, products and technologies used by people in activities of moving inside and outside buildings, such as motorized and non-motorized vehicles used for the transportation of people over ground, water and air (e.g. buses, cars, vans, other motor-powered vehicles and animal-powered transporters), not adapted or specially designed.",
                children: "",
                key: 1046,
                isLeaf: true,
              },
              {
                title:
                  "Assistive products and technology for personal indoor and outdoor mobility and transportation",
                initial: "e1201",
                description:
                  "Adapted or specially designed equipment, products and technologies that assist people to move inside and outside buildings, such as walking devices (such as canes or crutches), special cars and vans, adaptations to vehicles, wheelchairs, scooters and transfer devices.",
                children: "",
                key: 1047,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for personal indoor and outdoor mobility and transportation, other specified",
                initial: "e1208",
                description: "",
                children: "",
                key: 1048,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for personal indoor and outdoor mobility and transportation, unspecified",
                initial: "e1209",
                description: "",
                children: "",
                key: 1049,
                isLeaf: true,
              },
            ],
            key: 1045,
            isLeaf: false,
          },
          {
            title: "Products and technology for communication",
            initial: "e125",
            description:
              "Equipment, products and technologies used by people in activities of sending and receiving information, including those adapted or specially designed, located in, on or near the person using them. \n Inclusions: general and assistive products and technology for communication",
            children: [
              {
                title: "General products and technology for communication",
                initial: "e1250",
                description:
                  "Equipment, products and technologies used by people in activities of sending and receiving information, such as optical and auditory devices, audio recorders and receivers, television and video equipment, telephone devices, sound transmission systems and face-to-face communication devices, not adapted or specially designed.",
                children: "",
                key: 1051,
                isLeaf: true,
              },
              {
                title: "Assistive products and technology for communication",
                initial: "e1251",
                description:
                  "Adapted or specially designed equipment, products and technologies that assist people to send and receive information, such as specialized vision devices, drawing or handwriting devices, signalling systems and special computer software and hardware, cochlear implants, hearing aids, FM auditory trainers, voice prostheses, communication boards, glasses and contact lenses.",
                children: "",
                key: 1052,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for communication, other specified",
                initial: "e1258",
                description: "",
                children: "",
                key: 1053,
                isLeaf: true,
              },
              {
                title: "Products and technology for communication, unspecified",
                initial: "e1259",
                description: "",
                children: "",
                key: 1054,
                isLeaf: true,
              },
            ],
            key: 1050,
            isLeaf: false,
          },
          {
            title: "Products and technology for education",
            initial: "e130",
            description:
              "Equipment, products, methods and technology used for acquisition of knowledge, expertise or skill, including those adapted or specially designed. \n Inclusions: general and assistive products and technology for education",
            children: [
              {
                title: "General products and technology for education",
                initial: "e1300",
                description:
                  "Equipment, products, methods and technology used for acquisition of knowledge, expertise or skill at any level, such as books, manuals, educational toys, computer hardware or software, not adapted or specially designed.",
                children: "",
                key: 1056,
                isLeaf: true,
              },
              {
                title: "Assistive products and technology for education",
                initial: "e1301",
                description:
                  "Adapted and specially designed equipment, products, processes, methods and technology used for acquisition of knowledge, expertise or skill, such as specialized computer technology.",
                children: "",
                key: 1057,
                isLeaf: true,
              },
              {
                title: "Products and technology for education, other specified",
                initial: "e1308",
                description: "",
                children: "",
                key: 1058,
                isLeaf: true,
              },
              {
                title: "Products and technology for education, unspecified",
                initial: "e1309",
                description: "",
                children: "",
                key: 1059,
                isLeaf: true,
              },
            ],
            key: 1055,
            isLeaf: false,
          },
          {
            title: "Products and technology for employment",
            initial: "e135",
            description:
              "Equipment, products and technology used for employment to facilitate work activities. \n Inclusions: general and assistive products and technology for employment",
            children: [
              {
                title: "General products and technology for employment",
                initial: "e1350",
                description:
                  "Equipment, products and technology used for employment to facilitate work activities, not adapted or specially designed.",
                children: "",
                key: 1061,
                isLeaf: true,
              },
              {
                title: "Assistive products and technology for employment",
                initial: "e1351",
                description:
                  "Adapted or specially designed equipment, products and technology used for employment to facilitate work activities, such as adjustable table, desks and filing cabinets; remote control entry and exit of office doors; computer hardware, software, accessories and environmental control units aimed at facilitating an individual's conduct of work-related tasks and aimed at control of the work environment (e.g. scanners, remote control systems, voice controlled systems, timer switches).",
                children: "",
                key: 1062,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for employment, other specified",
                initial: "e1358",
                description: "",
                children: "",
                key: 1063,
                isLeaf: true,
              },
              {
                title: "Products and technology for employment, unspecified",
                initial: "e1359",
                description: "",
                children: "",
                key: 1064,
                isLeaf: true,
              },
            ],
            key: 1060,
            isLeaf: false,
          },
          {
            title: "Products and technology for culture, recreation and sport",
            initial: "e140",
            description:
              "Equipment, products and technology used for the conduct and enhancement of cultural, recreational and sporting activities, including those adapted or specially designed. \n Inclusions: general and assistive products and technology for culture, recreation and sport",
            children: [
              {
                title:
                  "General products and technology for culture, recreation and sport",
                initial: "e1400",
                description:
                  "Equipment, products and technology used for the conduct and enhancement of cultural, recreational and sporting activities, not adapted or specially designed.",
                children: "",
                key: 1066,
                isLeaf: true,
              },
              {
                title:
                  "Assistive products and technology for culture, recreation and sport",
                initial: "e1401",
                description:
                  "Adapted or specially designed equipment, products and technology used for the conduct and enhancement of cultural, recreational and sporting activities, such as modified mobility devices for sports, adaptations for musical and other artistic performance.",
                children: "",
                key: 1067,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for culture, recreation and sport, other specified",
                initial: "e1408",
                description: "",
                children: "",
                key: 1068,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for culture, recreation and sport, unspecified",
                initial: "e1409",
                description: "",
                children: "",
                key: 1069,
                isLeaf: true,
              },
            ],
            key: 1065,
            isLeaf: false,
          },
          {
            title:
              "Products and technology for the practice of religion and spirituality",
            initial: "e145",
            description:
              "Products and technology, unique or mass-produced, that are given or take on a symbolic meaning in the context of the practice of religion or spirituality, including those adapted or specially designed. \n Inclusions: general and assistive products and technology for the practice of religion and spirituality",
            children: [
              {
                title:
                  "General products and technology for the practice of religion or spirituality",
                initial: "e1450",
                description:
                  "Products and technology, unique or mass-produced, that are given or take on a symbolic meaning in the context of the practice of religion or spirituality, such as spirit houses, maypoles, headdress, masks, crucifixes, menorahs and prayer mats, not adapted or specially designed.",
                children: "",
                key: 1071,
                isLeaf: true,
              },
              {
                title:
                  "Assistive products and technology for the practice of religion or spirituality",
                initial: "e1451",
                description:
                  "Adapted or specially designed products and technology that are given, or take on a symbolic meaning in the context of the practice of religion or spirituality, such as Braille religious books, Braille tarot cards, and special protection for wheelchair wheels when entering temples.",
                children: "",
                key: 1072,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for the practice of religion or spirituality, other specified",
                initial: "e1458",
                description: "",
                children: "",
                key: 1073,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology for the practice of religion or spirituality, unspecified",
                initial: "e1459",
                description: "",
                children: "",
                key: 1074,
                isLeaf: true,
              },
            ],
            key: 1070,
            isLeaf: false,
          },
          {
            title:
              "Design, construction and building products and technology of buildings for public use",
            initial: "e150",
            description:
              "Products and technology that constitute an individual's indoor and outdoor human-made environment that is planned, designed and constructed for public use, including those adapted or specially designed. \n Inclusions: design, construction and building products and technology of entrances and exits, facilities and routing",
            children: [
              {
                title:
                  "Design, construction and building products and technology for entering and exiting buildings for public use",
                initial: "e1500",
                description:
                  "Products and technology of entry and exit from the human-made environment that is planned, designed and constructed for public use, such as design, building and construction of entries and exits to buildings for public use (e.g. child care settings, schools, workplaces, shops and theatres), public buildings, portable and stationary ramps, power-assisted doors, lever door handles and level door thresholds.",
                children: "",
                key: 1076,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for gaining access to facilities inside buildings for public use",
                initial: "e1501",
                description:
                  "Products and technology of indoor facilities in design, building and construction for public use, such as washroom facilities, telephones, audio loops, lifts or elevators, escalators, thermostats (for temperature regulation) and dispersed accessible seating in auditoriums or stadiums.",
                children: "",
                key: 1077,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for way finding, path routing and designation of locations in buildings for public use",
                initial: "e1502",
                description:
                  "Indoor and outdoor products and technology in design, building and construction for public use to assist people to find their way inside and immediately outside buildings and locate the places they want to go to, such as signage, in Braille or writing, size of corridors, floor surfaces, accessible kiosks and other forms of directories.",
                children: "",
                key: 1078,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for physical safety of persons in buildings for public use",
                initial: "e1503",
                description:
                  "Indoor and outdoor products and technology for public use to assure safety, such as guardrails and emergency signals.",
                children: "",
                key: 1079,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology of buildings for public use, other specified",
                initial: "e1508",
                description: "",
                children: "",
                key: 1080,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology of buildings for public use, unspecified",
                initial: "e1509",
                description: "",
                children: "",
                key: 1081,
                isLeaf: true,
              },
            ],
            key: 1075,
            isLeaf: false,
          },
          {
            title:
              "Design, construction and building products and technology of buildings for private use",
            initial: "e155",
            description:
              "Product and technology that constitute an individual's indoor and outdoor human-made environment that is planned, designed and constructed for private use (e.g. home, dwelling), including those adapted or specially designed. \n Inclusions: entry and exits, facilities and routing",
            children: [
              {
                title:
                  "Design, construction and building products and technology for entering and exiting of buildings for private use",
                initial: "e1550",
                description:
                  "Products and technology of entry and exit from the human-made environment that is planned, designed and constructed for private use, such as entries and exits to private homes, portable and stationary ramps, power-assisted doors, lever door handles and level door thresholds.",
                children: "",
                key: 1083,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for gaining access to facilities in buildings for private use",
                initial: "e1551",
                description:
                  "Products and technology related to design, building and construction inside buildings for private use, such as washroom facilities, telephones, audio loops, kitchen cabinets, appliances and electronic controls in private homes.",
                children: "",
                key: 1084,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for way finding, path routing and designation of locations in buildings for private use",
                initial: "e1552",
                description:
                  "Indoor and outdoor products and technology in design, building and construction of path routing for private use, to assist people to find their way inside and immediately outside buildings and locate the places they want to go to, such as signage, in Braille or writing, size of corridors and floor surfaces.",
                children: "",
                key: 1085,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology for physical safety of persons in buildings for private use",
                initial: "e1553",
                description:
                  "Indoor and outdoor products and technology for private use (e.g. home, dwelling) to assure safety, such as guardrails, emergency signals and to assure secure storage of hazardous objects (e.g. weapons) or materials (e.g. solvents, insecticides).",
                children: "",
                key: 1086,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology of buildings for private use, other specified",
                initial: "e1558",
                description: "",
                children: "",
                key: 1087,
                isLeaf: true,
              },
              {
                title:
                  "Design, construction and building products and technology of buildings for private use, unspecified",
                initial: "e1559",
                description: "",
                children: "",
                key: 1088,
                isLeaf: true,
              },
            ],
            key: 1082,
            isLeaf: false,
          },
          {
            title: "Products and technology of land development",
            initial: "e160",
            description:
              "Products and technology of land areas, as they affect an individual's outdoor environment through the implementation of land use policies, design, planning and development of space, including those adapted or specially designed. \n Inclusions: products and technologies of land areas that have been organized by the implementation of land use policies, such as rural areas, suburban areas, urban areas, parks, conservation areas and wildlife reserves",
            children: [
              {
                title: "Products and technology of rural land development",
                initial: "e1600",
                description:
                  "Products and technology in rural land areas, as they affect an individual's outdoor environment through the implementation of rural land use policies, design, planning and development of space, such as farmlands, pathways and signposting.",
                children: "",
                key: 1090,
                isLeaf: true,
              },
              {
                title: "Products and technology of suburban land development",
                initial: "e1601",
                description:
                  "Products and technology in suburban land areas, as they affect an individual's outdoor environment through the implementation of suburban land use policies, design, planning and development of space, such as curb cuts, pathways, signposting and street lighting.",
                children: "",
                key: 1091,
                isLeaf: true,
              },
              {
                title: "Products and technology of urban land development",
                initial: "e1602",
                description:
                  "Products and technology in urban land areas as they affect an individuals s outdoor environment through the implementation of urban land use policies, design, planning and development of space, such as curb cuts, ramps, signposting and street lighting.",
                children: "",
                key: 1092,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology of parks, conservation and wildlife areas",
                initial: "e1603",
                description:
                  "Products and technology in land areas making up parks, conservation and wildlife areas, as they affect an individual's outdoor environment through the implementation of land use policies and design, planning and development of space, such as park signage and wildlife trails.",
                children: "",
                key: 1093,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology of land development, other specified",
                initial: "e1608",
                description: "",
                children: "",
                key: 1094,
                isLeaf: true,
              },
              {
                title:
                  "Products and technology of land development, unspecified",
                initial: "e1609",
                description: "",
                children: "",
                key: 1095,
                isLeaf: true,
              },
            ],
            key: 1089,
            isLeaf: false,
          },
          {
            title: "Assets",
            initial: "e165",
            description:
              "Products or objects of economic exchange such as money, goods, property and other valuables that an individual owns or of which he or she has rights of use. \n Inclusions: tangible and intangible products and goods, financial assets",
            children: [
              {
                title: "Financial assets",
                initial: "e1650",
                description:
                  "Products, such as money and other financial instruments, which serve as a medium of exchange for labour, capital goods and services.",
                children: "",
                key: 1097,
                isLeaf: true,
              },
              {
                title: "Tangible assets",
                initial: "e1651",
                description:
                  "Products or objects, such as houses and land, clothing, food and technical goods, which serve as a medium of exchange for labour, capital goods and services.",
                children: "",
                key: 1098,
                isLeaf: true,
              },
              {
                title: "Intangible assets",
                initial: "e1652",
                description:
                  "Products, such as intellectual property, knowledge and skills, which serve as a medium of exchange for labour, capital goods and services.",
                children: "",
                key: 1099,
                isLeaf: true,
              },
              {
                title: "Assets, other specified",
                initial: "e1658",
                description: "",
                children: "",
                key: 1100,
                isLeaf: true,
              },
              {
                title: "Assets, unspecified",
                initial: "e1659",
                description: "",
                children: "",
                key: 1101,
                isLeaf: true,
              },
            ],
            key: 1096,
            isLeaf: false,
          },
          {
            title: "Products and technology, other specified",
            initial: "e198",
            description: "",
            children: "",
            key: 1102,
            isLeaf: true,
          },
          {
            title: "Products and technology, unspecified",
            initial: "e199",
            description: "",
            children: "",
            key: 1103,
            isLeaf: true,
          },
        ],
        key: 1034,
        isLeaf: false,
      },
      {
        title: "NATURAL ENVIRONMENT AND HUMAN-MADE CHANGES TO ENVIRONMENT",
        initial: "e2",
        description: "",
        children: [
          {
            title: "Physical geography",
            initial: "e210",
            description:
              "Features of landforms and bodies of water. \n Inclusions: features of geography included within orography (relief, quality and expanse of land and landforms including altitude) and hydrography (bodies of water such as lakes, rivers, sea)",
            children: [
              {
                title: "Landforms",
                initial: "e2100",
                description:
                  "Features of land forms, such as mountains, hills, valleys and plains.",
                children: "",
                key: 1106,
                isLeaf: true,
              },
              {
                title: "Bodies of water",
                initial: "e2101",
                description:
                  "Features of bodies of water, such as lakes, dams, rivers and streams.",
                children: "",
                key: 1107,
                isLeaf: true,
              },
              {
                title: "Physical geography, other specified",
                initial: "e2108",
                description: "",
                children: "",
                key: 1108,
                isLeaf: true,
              },
              {
                title: "Physical geography, unspecified",
                initial: "e2109",
                description: "",
                children: "",
                key: 1109,
                isLeaf: true,
              },
            ],
            key: 1105,
            isLeaf: false,
          },
          {
            title: "Population",
            initial: "e215",
            description:
              "Groups of people living in a given environment who share the same pattern of environmental adaptation. \n Inclusions: demographic change; population density",
            children: [
              {
                title: "Demographic change",
                initial: "e2150",
                description:
                  "Changes occurring within groups of people, such as the composition and variation in the total number of individuals in an area caused by birth, death, ageing of a population and migration.",
                children: "",
                key: 1111,
                isLeaf: true,
              },
              {
                title: "Population density",
                initial: "e2151",
                description:
                  "Number of people per unit of land area, including features such as high and low density.",
                children: "",
                key: 1112,
                isLeaf: true,
              },
              {
                title: "Population, other specified",
                initial: "e2158",
                description: "",
                children: "",
                key: 1113,
                isLeaf: true,
              },
              {
                title: "Population, unspecified",
                initial: "e2159",
                description: "",
                children: "",
                key: 1114,
                isLeaf: true,
              },
            ],
            key: 1110,
            isLeaf: false,
          },
          {
            title: "Flora and fauna",
            initial: "e220",
            description:
              "Plants and animals. \n \n Exclusions: domesticated animals (e350); population (e215)",
            children: [
              {
                title: "Plants",
                initial: "e2200",
                description:
                  "Any of various photosynthetic, eukaryotic, multicellular organisms of the kingdom Plantae characteristically producing embryos, containing chloroplasts, having cellulose cell walls, and lacking the power of locomotion, such as trees, flowers, shrubs and vines.",
                children: "",
                key: 1116,
                isLeaf: true,
              },
              {
                title: "Animals",
                initial: "e2201",
                description:
                  "Multicellular organisms of the kingdom Animalia, differing from plants in certain typical characteristics such as capacity for locomotion, non-photosynthetic metabolism, pronounced response to stimuli, restricted growth, and fixed bodily structure, such as wild or farm animals, reptiles, birds, fish and mammals. \n \n Exclusions: assets (e165); domesticated animals (e350)",
                children: "",
                key: 1117,
                isLeaf: true,
              },
              {
                title: "Fauna and flora, other specified",
                initial: "e2208",
                description: "",
                children: "",
                key: 1118,
                isLeaf: true,
              },
              {
                title: "Fauna and flora, unspecified",
                initial: "e2209",
                description: "",
                children: "",
                key: 1119,
                isLeaf: true,
              },
            ],
            key: 1115,
            isLeaf: false,
          },
          {
            title: "Climate",
            initial: "e225",
            description:
              "Meteorological features and events, such as the weather. \n Inclusions: temperature, humidity, atmospheric pressure, precipitation, wind and seasonal variations",
            children: [
              {
                title: "Temperature",
                initial: "e2250",
                description:
                  "Degree of heat or cold, such as high and low temperature, normal or extreme temperature.",
                children: "",
                key: 1121,
                isLeaf: true,
              },
              {
                title: "Humidity",
                initial: "e2251",
                description:
                  "Level of moisture in the air, such as high or low humidity.",
                children: "",
                key: 1122,
                isLeaf: true,
              },
              {
                title: "Atmospheric pressure",
                initial: "e2252",
                description:
                  "Pressure of the surrounding air, such as pressure related to height above sea level or meteorological conditions.",
                children: "",
                key: 1123,
                isLeaf: true,
              },
              {
                title: "Precipitation",
                initial: "e2253",
                description:
                  "Falling of moisture, such as rain, dew, snow, sleet and hail.",
                children: "",
                key: 1124,
                isLeaf: true,
              },
              {
                title: "Wind",
                initial: "e2254",
                description:
                  "Air in more or less rapid natural motion, such as a breeze, gale or gust.",
                children: "",
                key: 1125,
                isLeaf: true,
              },
              {
                title: "Seasonal variation",
                initial: "e2255",
                description:
                  "Natural, regular and predictable changes from one season to the next, such as summer, autumn, winter and spring.",
                children: "",
                key: 1126,
                isLeaf: true,
              },
              {
                title: "Climate, other specified",
                initial: "e2258",
                description: "",
                children: "",
                key: 1127,
                isLeaf: true,
              },
              {
                title: "Climate, unspecified",
                initial: "e2259",
                description: "",
                children: "",
                key: 1128,
                isLeaf: true,
              },
            ],
            key: 1120,
            isLeaf: false,
          },
          {
            title: "Natural events",
            initial: "e230",
            description:
              "Geographic and atmospheric changes that cause disruption in an individual's physical environment, occurring regularly or irregularly, such as earthquakes and severe or violent weather conditions, e.g. tornadoes, hurricanes, typhoons, floods, forest fires and ice-storms.",
            children: "",
            key: 1129,
            isLeaf: true,
          },
          {
            title: "Human-caused events",
            initial: "e235",
            description:
              "Alterations or disturbances in the natural environment, caused by humans, that may result in the disruption of people's day-to-day lives, including events or conditions linked to conflict and wars, such as the displacement of people, destruction of social infrastructure, homes and lands, environmental disasters and land, water or air pollution (e.g. toxic spills).",
            children: "",
            key: 1130,
            isLeaf: true,
          },
          {
            title: "Light",
            initial: "e240",
            description:
              "Electromagnetic radiation by which things are made visible by either sunlight or artificial lighting (e.g. candles, oil paraffin lamps and electricity), and which may provide useful or distracting information about the world. \n Inclusions: light intensity; light quality; colour contrasts",
            children: [
              {
                title: "Light intensity",
                initial: "e2400",
                description:
                  "Level or amount of energy being emitted by either a natural (e.g. sun) or an artificial source of light.",
                children: "",
                key: 1132,
                isLeaf: true,
              },
              {
                title: "Light quality",
                initial: "e2401",
                description:
                  "The nature of the light being provided and related colour contrasts created in the visual surroundings, and which may provide useful information about the world (e.g. visual information on the presence of stairs or a door) or distractions (e.g. too many visual images).",
                children: "",
                key: 1133,
                isLeaf: true,
              },
              {
                title: "Light, other specified",
                initial: "e2408",
                description: "",
                children: "",
                key: 1134,
                isLeaf: true,
              },
              {
                title: "Light, unspecified",
                initial: "e2409",
                description: "",
                children: "",
                key: 1135,
                isLeaf: true,
              },
            ],
            key: 1131,
            isLeaf: false,
          },
          {
            title: "Time-related changes",
            initial: "e245",
            description:
              "Natural, regular or predictable temporal change. \n Inclusions: day/night and lunar cycles",
            children: [
              {
                title: "Day/night cycles",
                initial: "e2450",
                description:
                  "Natural, regular and predictable changes from day through to night and back to day, such as day, night, dawn and dusk.",
                children: "",
                key: 1137,
                isLeaf: true,
              },
              {
                title: "Lunar cycles",
                initial: "e2451",
                description:
                  "Natural, regular and predictable changes of the moon's position in relation to the earth.",
                children: "",
                key: 1138,
                isLeaf: true,
              },
              {
                title: "Time-related changes, other specified",
                initial: "e2458",
                description: "",
                children: "",
                key: 1139,
                isLeaf: true,
              },
              {
                title: "Time-related changes, unspecified",
                initial: "e2459",
                description: "",
                children: "",
                key: 1140,
                isLeaf: true,
              },
            ],
            key: 1136,
            isLeaf: false,
          },
          {
            title: "Sound",
            initial: "e250",
            description:
              "A phenomenon that is or may be heard, such as banging, ringing, thumping, whistling, yelling or buzzing, in any volume, timbre or tone, and that may provide useful or distracting information about the world. \n Inclusions: sound intensity; sound quality",
            children: [
              {
                title: "Sound intensity",
                initial: "e2500",
                description:
                  "Level or volume of auditory phenomenon determined by the amount of energy being generated, where high energy levels are perceived as loud sounds and low energy levels as soft sounds.",
                children: "",
                key: 1142,
                isLeaf: true,
              },
              {
                title: "Sound quality",
                initial: "e2501",
                description:
                  "Nature of a sound as determined by wavelength and wave pattern of the sound and perceived as the timbre and tone, such as harshness or melodiousness, and which may provide useful of the world (e.g. sound of dog barking versus a cat miaowing) or distractions (e.g. background noises).",
                children: "",
                key: 1143,
                isLeaf: true,
              },
              {
                title: "Sound, other specified",
                initial: "e2508",
                description: "",
                children: "",
                key: 1144,
                isLeaf: true,
              },
              {
                title: "Sound, unspecified",
                initial: "e2509",
                description: "",
                children: "",
                key: 1145,
                isLeaf: true,
              },
            ],
            key: 1141,
            isLeaf: false,
          },
          {
            title: "Vibration",
            initial: "e2",
            description:
              "Regular or irregular to and fro motion of an object or an individual caused by a physical disturbance, such as shaking, quivering, quick jerky movements of things, buildings or people caused by small or large equipment, aircraft, and explosion. \n \n Exclusions: natural events (e230), such as vibration or shaking of the earth caused by earthquakes",
            children: "",
            key: 1146,
            isLeaf: true,
          },
          {
            title: "Air quality",
            initial: "e260",
            description:
              "Characteristics of the atmosphere (outside buildings) or enclosed areas of air (inside buildings), and which may provide useful or distracting information about the world. \n Inclusions: indoor and outdoor air quality",
            children: [
              {
                title: "Indoor air quality",
                initial: "e2600",
                description:
                  "Nature of the air inside buildings or enclosed areas, as determined by odour, smoke, humidity, air conditioning (controlled air quality) or uncontrolled air quality, and which may provide useful information about the world (e.g. smell of leaking gas) or distractions (e.g. overpowering smell of perfume).",
                children: "",
                key: 1148,
                isLeaf: true,
              },
              {
                title: "Outdoor air quality",
                initial: "e2601",
                description:
                  "Nature of the air outside buildings or enclosed areas, as determined by odour, smoke, humidity, ozone levels, and other features of the atmosphere, and which may provide useful information about the world (e.g. smell of rain) or distractions (e.g. toxic smells).",
                children: "",
                key: 1149,
                isLeaf: true,
              },
              {
                title: "Air quality, other specified",
                initial: "e2608",
                description: "",
                children: "",
                key: 1150,
                isLeaf: true,
              },
              {
                title:
                  "Natural environment and human-made changes to environment, unspecified",
                initial: "e2609",
                description: "",
                children: "",
                key: 1151,
                isLeaf: true,
              },
            ],
            key: 1147,
            isLeaf: false,
          },
          {
            title:
              "Natural environment and human-made changes to environment, other specified",
            initial: "e2",
            description: "",
            children: "",
            key: 1152,
            isLeaf: true,
          },
          {
            title:
              "Natural environment and human-made changes to environment, unspecified",
            initial: "e2",
            description: "",
            children: "",
            key: 1153,
            isLeaf: true,
          },
        ],
        key: 1104,
        isLeaf: false,
      },
      {
        title: "SUPPORT AND RELATIONSHIPS",
        initial: "e3",
        description: "",
        children: [
          {
            title: "Immediate family",
            initial: "e310",
            description:
              "Individuals related by birth, marriage or other relationship recognized by the culture as immediate family, such as spouses, partners, parents, siblings, children, foster parents, adoptive parents and grandparents. \n \n Exclusions: extended family (e315); personal care providers and personal assistants (e340)",
            children: "",
            key: 1155,
            isLeaf: true,
          },
          {
            title: "Extended family",
            initial: "e315",
            description:
              "Individuals related through family or marriage or other relationships recognized by the culture as extended family, such as aunts, uncles, nephews and nieces. \n \n Exclusions: immediate family (e310)",
            children: "",
            key: 1156,
            isLeaf: true,
          },
          {
            title: "Friends",
            initial: "e320",
            description:
              "Individuals who are close and ongoing participants in relationships characterized by trust and mutual support.",
            children: "",
            key: 1157,
            isLeaf: true,
          },
          {
            title:
              "Acquaintances, peers, colleagues, neighbours and community members",
            initial: "e325",
            description:
              "Individuals who are familiar to each other as acquaintances, peers, colleagues, neighbours, and community members, in situations of work, school, recreation, or other aspects of life, and who share demographic features such as age, gender, religious creed or ethnicity or pursue common interests. \n \n Exclusions: associations and organizational services (e5550)",
            children: "",
            key: 1158,
            isLeaf: true,
          },
          {
            title: "People in positions of authority",
            initial: "e330",
            description:
              "Individuals who have decision-making responsibilities for others and who have socially defined influence or power based on their social, economic, cultural or religious roles in society, such as teachers, employers, supervisors, religious leaders, substitute decision-makers, guardians or trustees.",
            children: "",
            key: 1159,
            isLeaf: true,
          },
          {
            title: "People in subordinate positions",
            initial: "e335",
            description:
              "Individuals whose day-to-day life is influenced by people in positions of authority in work, school or other settings, such as students, workers, and members of a religious group. \n \n Exclusions: immediate family (e310)",
            children: "",
            key: 1160,
            isLeaf: true,
          },
          {
            title: "Personal care providers and personal assistants",
            initial: "e340",
            description:
              "Individuals who provide services to support individuals in their daily activities and maintenance of performance at work, education or other life situation, provided either through public or private funds, or else on a voluntary basis, such as providers of support for home-making and maintenance, personal assistants, transport assistant, paid help, nannies and others who function as primary caregivers. \n \n Exclusions: immediate family (e310); extended family (e315); friends (e320); general social support services (e5750); health professionals (e355)",
            children: "",
            key: 1161,
            isLeaf: true,
          },
          {
            title: "Strangers",
            initial: "e345",
            description:
              "Individuals who are unfamiliar and unrelated, or those who have not yet established a relationship or association, including persons unknown to the individual but who are sharing a life situation with them, such as substitute teachers, co-workers or care providers.",
            children: "",
            key: 1162,
            isLeaf: true,
          },
          {
            title: "Domesticated animals",
            initial: "e350",
            description:
              "Animals that provide physical, emotional, or psychological support, such as pets (dogs, cats, birds, fish, etc.) and animals for personal mobility and transportation. \n \n Exclusions: animals (e2201); assets (e165)",
            children: "",
            key: 1163,
            isLeaf: true,
          },
          {
            title: "Health professionals",
            initial: "e355",
            description:
              "All service providers working within the context of the health system, such as doctors, nurses, physiotherapists, occupational therapists, speech therapists, audiologists, orthotist-prosthetists, medical social workers. \n \n Exclusions: other professionals (e360)",
            children: "",
            key: 1164,
            isLeaf: true,
          },
          {
            title: "Other professionals",
            initial: "e360",
            description:
              "All service providers working outside of the health system, including social workers, lawyers, teachers, architects and designers. \n \n Exclusions: health professionals (e355)",
            children: "",
            key: 1165,
            isLeaf: true,
          },
          {
            title: "Support and relationships, other specified",
            initial: "e398",
            description: "",
            children: "",
            key: 1166,
            isLeaf: true,
          },
          {
            title: "Support and relationships, unspecified",
            initial: "e399",
            description: "",
            children: "",
            key: 1167,
            isLeaf: true,
          },
        ],
        key: 1154,
        isLeaf: false,
      },
      {
        title: "ATTITUDESS",
        initial: "e4",
        description: "",
        children: [
          {
            title: "Individual attitudes of immediate family members",
            initial: "e410",
            description:
              "General or specific opinions and beliefs of immediate family members about the person or about other matters (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1169,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of extended family members",
            initial: "e415",
            description:
              "General or specific opinions and beliefs of extended family members about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1170,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of friends",
            initial: "e420",
            description:
              "General or specific opinions and beliefs of friends about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1171,
            isLeaf: true,
          },
          {
            title:
              "Individual attitudes of acquaintances, peers, colleagues, neighbours and community members",
            initial: "e425",
            description:
              "General or specific opinions and beliefs of acquaintances, peers, colleagues, neighbours and community members about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1172,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of people in positions of authority",
            initial: "e430",
            description:
              "General or specific opinions and beliefs of people in positions of authority about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1173,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of people in subordinate positions",
            initial: "e435",
            description:
              "General or specific opinions and beliefs of people in subordinate positions about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1174,
            isLeaf: true,
          },
          {
            title:
              "Individual attitudes of personal care providers and personal assistants",
            initial: "e440",
            description:
              "General or specific opinions and beliefs of personal care providers and personal assistants about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1175,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of strangers",
            initial: "e445",
            description:
              "General or specific opinions and beliefs of strangers about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1176,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of health professionals",
            initial: "e450",
            description:
              "General or specific opinions and beliefs of health professionals about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1177,
            isLeaf: true,
          },
          {
            title: "Individual attitudes of other professionals",
            initial: "e455",
            description:
              "General or specific opinions and beliefs of health-related professionals about the person or about other matters, (e.g. social, political and economic issues), that influence individual behaviour and actions.",
            children: "",
            key: 1178,
            isLeaf: true,
          },
          {
            title: "Societal attitudes",
            initial: "e460",
            description:
              "General or specific opinions and beliefs generally held by people of a culture, society, sub-cultural or other social group about other individuals or about other social, political and economic issues, that influence group or individual behaviour and actions.",
            children: "",
            key: 1179,
            isLeaf: true,
          },
          {
            title: "Social norms, practices and ideologies",
            initial: "e465",
            description:
              "Customs, practices, rules and abstract systems of values and normative beliefs (e.g.ideologies, normative world views and moral philosophies) that arise within social contexts and that affect or create societal and individual practices and behaviours, such as social norms of moral and religious behaviour or etiquette; religious doctrine and resulting norms and practices; norms governing rituals or social gatherings.",
            children: "",
            key: 1180,
            isLeaf: true,
          },
          {
            title: "Attitudes, other specified",
            initial: "e498",
            description: "",
            children: "",
            key: 1181,
            isLeaf: true,
          },
          {
            title: "Attitudes, unspecified",
            initial: "e499",
            description: "",
            children: "",
            key: 1182,
            isLeaf: true,
          },
        ],
        key: 1168,
        isLeaf: false,
      },
      {
        title: "SERVICES, SYSTEMS AND POLICIES",
        initial: "e5",
        description: "",
        children: [
          {
            title:
              "Services, systems and policies for the production of consumer goods",
            initial: "e510",
            description:
              "Services, systems and policies that govern and provide for the production of objects and products consumed or used by people.",
            children: [
              {
                title: "Services for the production of consumer goods",
                initial: "e5100",
                description:
                  "Services and programmes for the collection, creation, production and manufacturing of consumer goods and products, such as for products and technology used for mobility, communication, education, transportation, employment and housework, including those who provide these services. \n \n Exclusions: education and training services (e5850); communication services (e5350); Chapter 1 Products and Technology (e1)",
                children: "",
                key: 1185,
                isLeaf: true,
              },
              {
                title: "Systems for the production of consumer goods",
                initial: "e5101",
                description:
                  "Administrative control and monitoring mechanisms, such as regional, national or international organizations that set standards (e.g. International Organization for Standardization) and consumer bodies, that govern the collection, creation, production and manufacturing of consumer goods and products.",
                children: "",
                key: 1186,
                isLeaf: true,
              },
              {
                title: "Policies for the production of consumer goods",
                initial: "e5102",
                description:
                  "Legislation, regulations and standards for the collection, creation, production and manufacturing of consumer goods and products, such as which standards to adopt.",
                children: "",
                key: 1187,
                isLeaf: true,
              },
              {
                title:
                  "Services, systems and policies for the production of consumer goods, other specified",
                initial: "e5108",
                description: "",
                children: "",
                key: 1188,
                isLeaf: true,
              },
              {
                title:
                  "Services, systems and policies for the production of consumer goods, unspecified",
                initial: "e5109",
                description: "",
                children: "",
                key: 1189,
                isLeaf: true,
              },
            ],
            key: 1184,
            isLeaf: false,
          },
          {
            title:
              "Architecture and construction services, systems and policies",
            initial: "e515",
            description:
              "Services, systems and policies for the design and construction of buildings, public and private. \n \n Exclusions: open space planning services, systems and policies (e520)",
            children: [
              {
                title: "Architecture and construction services",
                initial: "e5150",
                description:
                  "Services and programmes for design, construction and maintenance of residential, commercial, industrial and public buildings, such as house-building, the operationalization of design principles, building codes, regulations and standards, including those who provide these services.",
                children: "",
                key: 1191,
                isLeaf: true,
              },
              {
                title: "Architecture and construction systems",
                initial: "e5151",
                description:
                  "Administrative control and monitoring mechanisms that govern the planning, design, construction and maintenance of residential, commercial, industrial and public buildings, such as for implementing and monitoring building codes, construction standards, and fire and life safety standards.",
                children: "",
                key: 1192,
                isLeaf: true,
              },
              {
                title: "Architecture and construction policies",
                initial: "e5152",
                description:
                  "Legislation, regulations and standards that govern the planning, design, construction and maintenance of residential, commercial, industrial and public buildings, such as policies on building codes, construction standards, and fire and life safety standards.",
                children: "",
                key: 1193,
                isLeaf: true,
              },
              {
                title:
                  "Architecture and construction services, systems and policies, other specified",
                initial: "e5158",
                description: "",
                children: "",
                key: 1194,
                isLeaf: true,
              },
              {
                title:
                  "Architecture and construction services, systems and policies, unspecified",
                initial: "e5159",
                description: "",
                children: "",
                key: 1195,
                isLeaf: true,
              },
            ],
            key: 1190,
            isLeaf: false,
          },
          {
            title: "Open space planning services, systems and policies",
            initial: "e520",
            description:
              "Services, systems and policies for the planning, design, development and maintenance of public lands, (e.g. parks, forests, shorelines, wetlands) and private lands in the rural, suburban and urban context. \n \n Exclusions: architecture and construction services, systems and policies (e515)",
            children: [
              {
                title: "Open space planning services",
                initial: "e520",
                description:
                  "Services and programmes aimed at planning, creating and maintaining urban, suburban, rural, recreational, conservation and environmental space, meeting and commercial open spaces (plazas, open- air markets) and pedestrian and vehicular transportation routes for intended uses, including those who provide these services. \n \n Exclusions: products for design, building and construction for public (e150) and private (e155) use; products of land development (e160)",
                children: "",
                key: 1197,
                isLeaf: true,
              },
              {
                title: "Open space planning systems",
                initial: "e5201",
                description:
                  "Administrative control and monitoring mechanisms, such as for the implementation of local, regional or national planning acts, design codes, heritage or conservation policies and environmental planning policy, that govern the planning, design, development and maintenance of open space, including rural, suburban and urban land, parks, conservation areas and wildlife reserves.",
                children: "",
                key: 1198,
                isLeaf: true,
              },
              {
                title: "Open space planning policies",
                initial: "e5202",
                description:
                  "Legislation, regulations and standards that govern the planning, design, development and maintenance of open space, including rural land, suburban land, urban land, parks, conservation areas and wildlife reserves, such as local, regional or national planning acts, design codes, heritage or conservation policies, and environmental planning policies.",
                children: "",
                key: 1199,
                isLeaf: true,
              },
              {
                title:
                  "Open space planning services, systems and policies, other specified",
                initial: "e5208",
                description: "",
                children: "",
                key: 1200,
                isLeaf: true,
              },
              {
                title:
                  "Open space planning services, systems and policies, unspecified",
                initial: "e5209",
                description: "",
                children: "",
                key: 1201,
                isLeaf: true,
              },
            ],
            key: 1196,
            isLeaf: false,
          },
          {
            title: "Housing services, systems and policies",
            initial: "e525",
            description:
              "Services, systems and policies for the provision of shelters, dwellings or lodging for people.",
            children: [
              {
                title: "Housing services",
                initial: "e5250",
                description:
                  "Services and programmes aimed at locating, providing and maintaining houses or shelters for persons to live in, such as estate agencies, housing organizations, shelters for homeless people, including those who provide these services.",
                children: "",
                key: 1203,
                isLeaf: true,
              },
              {
                title: "Housing systems",
                initial: "e5251",
                description:
                  "Administrative control and monitoring mechanisms that govern housing or sheltering of people, such as systems for implementing and monitoring housing policies.",
                children: "",
                key: 1204,
                isLeaf: true,
              },
              {
                title: "Housing policies",
                initial: "e5252",
                description:
                  "Legislation, regulations and standards that govern housing or sheltering of people, such as legislation and policies for determination of eligibility for housing or shelter, policies concerning government involvement in developing and maintaining housing, and policies concerning how and where housing is developed.",
                children: "",
                key: 1205,
                isLeaf: true,
              },
              {
                title:
                  "Housing services, systems and policies, other specified",
                initial: "e5258",
                description: "",
                children: "",
                key: 1206,
                isLeaf: true,
              },
              {
                title: "Housing services, systems and policies, unspecified",
                initial: "e5259",
                description: "",
                children: "",
                key: 1207,
                isLeaf: true,
              },
            ],
            key: 1202,
            isLeaf: false,
          },
          {
            title: "Utilities services, systems and policies",
            initial: "e530",
            description:
              "Services, systems and policies for publicly provided utilities, such as water, fuel, electricity, sanitation, public transportation and essential services. \n \n Exclusions: civil protection services, systems and policies (e545)",
            children: [
              {
                title: "Utilities services",
                initial: "e5300",
                description:
                  "Services and programmes supplying the population as a whole with essential energy (e.g. fuel and electricity), sanitation, water and other essential services (e.g. emergency repair services) for residential and commercial consumers, including those who provide these services.",
                children: "",
                key: 1209,
                isLeaf: true,
              },
              {
                title: "Utilities systems",
                initial: "e5301",
                description:
                  "Administrative control and monitoring mechanisms that govern the provision of utilities services, such as health and safety boards and consumer councils.",
                children: "",
                key: 1210,
                isLeaf: true,
              },
              {
                title: "Utilities policies",
                initial: "e5302",
                description:
                  "Legislation, regulations and standards that govern the provision of utilities services, such as health and safety standards governing delivery and supply of water and fuel, sanitation practices in communities, and policies for other essential services and supply during shortages or natural disasters.",
                children: "",
                key: 1211,
                isLeaf: true,
              },
              {
                title:
                  "Utilities services, systems and policies, other specified",
                initial: "e5308",
                description: "",
                children: "",
                key: 1212,
                isLeaf: true,
              },
              {
                title: "Utilities services, systems and policies, unspecified",
                initial: "e5309",
                description: "",
                children: "",
                key: 1213,
                isLeaf: true,
              },
            ],
            key: 1208,
            isLeaf: false,
          },
          {
            title: "Communication services, systems and policies",
            initial: "e535",
            description:
              "Services, systems and policies for the transmission and exchange of information.",
            children: [
              {
                title: "Communication services",
                initial: "e5350",
                description:
                  "Services and programmes aimed at transmitting information by a variety of methods such as telephone, fax, surface and air mail, electronic mail and other computer-based systems (e.g. telephone relay, teletype, teletext, and internet services), including those who provide these services. \n \n Exclusions: media services (e5600)",
                children: "",
                key: 1215,
                isLeaf: true,
              },
              {
                title: "Communication systems",
                initial: "e5351",
                description:
                  "Administrative control and monitoring mechanisms, such as telecommunication regulation authorities and other such bodies, that govern the transmission of information by a variety of methods, including telephone, fax, surface and air mail, electronic mail and computer-based systems.",
                children: "",
                key: 1216,
                isLeaf: true,
              },
              {
                title: "Communication policies",
                initial: "e5352",
                description:
                  "Legislation, regulations and standards that govern the transmission of information by a variety of methods including telephone, fax, post office, electronic mail and computer-based systems, such as eligibility for access to communication services, requirements for a postal address, and standards for provision of telecommunications.",
                children: "",
                key: 1217,
                isLeaf: true,
              },
              {
                title:
                  "Communication services, systems and policies, other specified",
                initial: "e5358",
                description: "",
                children: "",
                key: 1218,
                isLeaf: true,
              },
              {
                title:
                  "Communication services, systems and policies, unspecified",
                initial: "e5359",
                description: "",
                children: "",
                key: 1219,
                isLeaf: true,
              },
            ],
            key: 1214,
            isLeaf: false,
          },
          {
            title: "Transportation services, systems and policies",
            initial: "e540",
            description:
              "Services, systems and policies for enabling people or goods to move or be moved from one location to another.",
            children: [
              {
                title: "Transportation services",
                initial: "e5400",
                description:
                  "Services and programmes aimed at moving persons or goods by road, paths, rail, air or water, by public or private transport, including those who provide these services. \n \n Exclusions: products for personal mobility and transportation (e115)",
                children: "",
                key: 1221,
                isLeaf: true,
              },
              {
                title: "Transportation systems",
                initial: "e5401",
                description:
                  "Administrative control and monitoring mechanisms that govern the moving of persons or goods by road, paths, rail, air or water, such as systems for determining eligibility for operating vehicles and, implementation and monitoring of health and safety standards related to use of different types of transportation. \n \n Exclusions: social security services, systems and policies (e570)",
                children: "",
                key: 1222,
                isLeaf: true,
              },
              {
                title: "Transportation policies",
                initial: "e5402",
                description:
                  "Legislation, regulations and standards that govern the moving of persons or goods by road, paths, rail, air or water, such as transportation planning acts and policies, policies for the provision and access to public transportation.",
                children: "",
                key: 1223,
                isLeaf: true,
              },
              {
                title:
                  "Transportation services, systems and policies, other specified",
                initial: "e5408",
                description: "",
                children: "",
                key: 1224,
                isLeaf: true,
              },
              {
                title:
                  "Transportation services, systems and policies, unspecified",
                initial: "e5409",
                description: "",
                children: "",
                key: 1225,
                isLeaf: true,
              },
            ],
            key: 1220,
            isLeaf: false,
          },
          {
            title: "Civil protection services, systems and policies",
            initial: "e545",
            description:
              "Services, systems and policies aimed at safeguarding people and property. \n \n Exclusions: utilities services, systems and policies (e530)",
            children: [
              {
                title: "Civil protection services",
                initial: "e5450",
                description:
                  "Services and programmes organized by the community and aimed at safeguarding people and property, such as fire, police, emergency and ambulance services, including those who provide these services.",
                children: "",
                key: 1227,
                isLeaf: true,
              },
              {
                title: "Civil protection systems",
                initial: "e5451",
                description:
                  "Administrative control and monitoring mechanisms that govern the safeguarding of people and property, such as systems by which provision of police, fire, emergency and ambulance services are organized.",
                children: "",
                key: 1228,
                isLeaf: true,
              },
              {
                title: "Civil protection policies",
                initial: "e5452",
                description:
                  "Legislation, regulations and standards that govern the safeguarding of people and property, such as policies governing provision of police, fire, emergency and ambulance services.",
                children: "",
                key: 1229,
                isLeaf: true,
              },
              {
                title:
                  "Civil protection services, systems and policies, other specified",
                initial: "e5458",
                description: "",
                children: "",
                key: 1230,
                isLeaf: true,
              },
              {
                title:
                  "Civil protection services, systems and policies, unspecified",
                initial: "e5459",
                description: "",
                children: "",
                key: 1231,
                isLeaf: true,
              },
            ],
            key: 1226,
            isLeaf: false,
          },
          {
            title: "Legal services, systems and policies",
            initial: "e550",
            description:
              "Services, systems and policies concerning the legislation and other law of a country.",
            children: [
              {
                title: "Legal services",
                initial: "e5500",
                description:
                  "Services and programmes aimed at providing the authority of the state as defined in law, such as courts, tribunals and other agencies for hearing and settling civil litigation and criminal trials, attorney representation, services of notaries, mediation, arbitration and correctional or penal facilities, including those who provide these services.",
                children: "",
                key: 1233,
                isLeaf: true,
              },
              {
                title: "Legal systems",
                initial: "e5501",
                description:
                  "Administrative control and monitoring mechanisms that govern the administration of justice, such as systems for implementing and monitoring formal rules (e.g. laws, regulations, customary law, religious law, international laws and conventions).",
                children: "",
                key: 1234,
                isLeaf: true,
              },
              {
                title: "Legal policies",
                initial: "e5502",
                description:
                  "Legislation, regulations and standards, such as laws, customary law, religious law, international laws and conventions, that govern the administration of justice.",
                children: "",
                key: 1235,
                isLeaf: true,
              },
              {
                title: "Legal services, systems and policies, other specified",
                initial: "e5508",
                description: "",
                children: "",
                key: 1236,
                isLeaf: true,
              },
              {
                title: "Legal services, systems and policies, unspecified",
                initial: "e5509",
                description: "",
                children: "",
                key: 1237,
                isLeaf: true,
              },
            ],
            key: 1232,
            isLeaf: false,
          },
          {
            title:
              "Associations and organizational services, systems and policies",
            initial: "e555",
            description:
              "Services, systems and policies relating to groups of people who have joined together in the pursuit of common, non-commercial interests, often with an associated membership structure.",
            children: [
              {
                title: "Associations and organizational services",
                initial: "e5550",
                description:
                  "Services and programmes provided by people who have joined together in the pursuit of common, non-commercial interests with people who have the same interests, where the provision of such services may be tied to membership, such as associations and organizations providing recreation and leisure, sporting, cultural, religious and mutual aid services.",
                children: "",
                key: 1239,
                isLeaf: true,
              },
              {
                title: "Associations and organizational systems",
                initial: "e5551",
                description:
                  "Administrative control and monitoring mechanisms that govern the relationships and activities of people coming together with common noncommercial interests and the establishment and conduct of associations and organizations such as mutual aid organizations, recreational and leisure organizations, cultural and religious associations and not-for profit organizations.",
                children: "",
                key: 1240,
                isLeaf: true,
              },
              {
                title: "Associations and organizational policies",
                initial: "e5552",
                description:
                  "Legislation, regulations and standards that govern the relationships and activities of people coming together with common noncommercial interests, such as policies that govern the establishment and conduct of associations and organizations, including mutual aid organizations, recreational and leisure organizations, cultural and religious associations and not-for-profit organizations.",
                children: "",
                key: 1241,
                isLeaf: true,
              },
              {
                title:
                  "Associations and organizational services, systems and policies, other specified",
                initial: "e5558",
                description: "",
                children: "",
                key: 1242,
                isLeaf: true,
              },
              {
                title:
                  "Associations and organizational services, systems and policies, unspecified",
                initial: "e5559",
                description: "",
                children: "",
                key: 1243,
                isLeaf: true,
              },
            ],
            key: 1238,
            isLeaf: false,
          },
          {
            title: "Media services, systems and policies",
            initial: "e560",
            description:
              "Services, systems and policies for the provision of mass communication through radio, television, newspapers and internet.",
            children: [
              {
                title: "Media services",
                initial: "e5600",
                description:
                  "Services and programmes aimed at providing mass communication, such as radio, television, closed captioning services, press reporting services, newspapers, Braille services and computer-based mass communication (world wide web, internet), including those who provide these services. \n \n Exclusions: communication services (e5350)",
                children: "",
                key: 1245,
                isLeaf: true,
              },
              {
                title: "Media systems",
                initial: "e5601",
                description:
                  "Administrative control and monitoring mechanisms that govern the provision of news and information to the general public, such as standards that govern the content, distribution, dissemination, access to and methods of communicating via radio, television, press reporting services, newspapers and computer-based mass communication (world wide web, internet). \n Inclusions: requirements to provide closed captions on television, Braille versions of newspapers or other publications, and teletext radio transmissions. \n Exclusions: communication systems (e5351)",
                children: "",
                key: 1246,
                isLeaf: true,
              },
              {
                title: "Media policies",
                initial: "e5602",
                description:
                  "Legislation, regulations and standards that govern the provision of news and information to the general public, such as policies that govern the content, distribution, dissemination, access to and methods of communicating via radio, television, press reporting services, newspapers and computer-based mass communication (world wide web, internet). \n \n Exclusions: communication policies (e5352)",
                children: "",
                key: 1247,
                isLeaf: true,
              },
              {
                title: "Media services, systems and policies, other specified",
                initial: "e5608",
                description: "",
                children: "",
                key: 1248,
                isLeaf: true,
              },
              {
                title: "Media services, systems and policies, unspecified",
                initial: "e5609",
                description: "",
                children: "",
                key: 1249,
                isLeaf: true,
              },
            ],
            key: 1244,
            isLeaf: false,
          },
          {
            title: "Economic services, systems and policies",
            initial: "e565",
            description:
              "Services, systems and policies related to the overall system of production, distribution, consumption and use of goods and services. \n \n Exclusions: social security services, systems and policies (e570)",
            children: [
              {
                title: "Economic services",
                initial: "e5650",
                description:
                  "Services and programmes aimed at the overall production, distribution, consumption and use of goods and services, such as the private commercial sector (e.g. businesses, corporations, private for-profit ventures), the public sector (e.g. public, commercial services such as cooperatives and corporations), financial organizations (e.g. banks and insurance services), including those who provide these services. \n \n Exclusions: utilities services (e5300); labour and employment services (e5900)",
                children: "",
                key: 1251,
                isLeaf: true,
              },
              {
                title: "Economic systems",
                initial: "e5651",
                description:
                  "Administrative control and monitoring mechanisms that govern the production, distribution, consumption and use of goods and services, such as systems for implementing and monitoring economic policies. \n \n Exclusions: utilities systems (e5301); labour and employment systems (e5901)",
                children: "",
                key: 1252,
                isLeaf: true,
              },
              {
                title: "Economic policies",
                initial: "e5652",
                description:
                  "Legislation, regulations and standards that govern the production, distribution, consumption and use of goods and services, such as economic doctrines adopted and implemented by governments. \n \n Exclusions: utilities policies (e5302); labour and employment policies (e5902)",
                children: "",
                key: 1253,
                isLeaf: true,
              },
              {
                title:
                  "Economic services, systems and policies, other specified",
                initial: "e5658",
                description: "",
                children: "",
                key: 1254,
                isLeaf: true,
              },
              {
                title: "Economic services, systems and policies, unspecified",
                initial: "e5659",
                description: "",
                children: "",
                key: 1255,
                isLeaf: true,
              },
            ],
            key: 1250,
            isLeaf: false,
          },
          {
            title: "Social security services, systems and policies",
            initial: "e570",
            description:
              "Services, systems and policies aimed at providing income support to people who, because of age, poverty, unemployment, health condition or disability, require public assistance that is funded either by general tax revenues or contributory schemes.",
            children: [
              {
                title: "Social security services",
                initial: "e5700",
                description:
                  "Services and programmes aimed at providing income support to people who, because of age, poverty, unemployment, health condition or disability, require public assistance that is funded either by general tax revenues or contributory schemes, such as services for determining eligibility, delivering or distributing assistance payments for the following types of programmes: social assistance programmes (e.g. non-contributory welfare, poverty or other needs-based compensation), social insurance programmes (e.g. contributory accident or unemployment insurance), and disability and related pension schemes (e.g. income replacement), including those who provide these services. \n \n Exclusions: health services (e5800)",
                children: "",
                key: 1257,
                isLeaf: true,
              },
              {
                title: "Social security systems",
                initial: "e5701",
                description:
                  "Administrative control and monitoring mechanisms that govern the programmes and schemes that provide income support to people who, because of age, poverty, unemployment, health condition or disability, require public assistance, such as systems for the implementation of rules and regulations governing the eligibility for social assistance, welfare, unemployment insurance payments, pensions and disability benefits.",
                children: "",
                key: 1258,
                isLeaf: true,
              },
              {
                title: "Social security policies",
                initial: "e5702",
                description:
                  "Legislation, regulations and standards that govern the programmes and schemes that provide income support to people who, because of age, poverty, unemployment, health condition or disability, require public assistance, such as legislation and regulations governing the eligibility for social assistance, welfare, unemployment insurance payments, disability and related pensions and disability benefits.",
                children: "",
                key: 1259,
                isLeaf: true,
              },
              {
                title:
                  "Social security services, systems and policies, other specified",
                initial: "e5708",
                description: "",
                children: "",
                key: 1260,
                isLeaf: true,
              },
              {
                title:
                  "Social security services, systems and policies, unspecified",
                initial: "e5709",
                description: "",
                children: "",
                key: 1261,
                isLeaf: true,
              },
            ],
            key: 1256,
            isLeaf: false,
          },
          {
            title: "General social support services, systems and policies",
            initial: "e575",
            description:
              "General social support services, systems and policies \n \n Exclusions: social security services, systems and policies (e570); personal care providers and personal assistants (e340); health services, systems and policies (e580)",
            children: [
              {
                title: "General social support services",
                initial: "e5750",
                description:
                  "Services and programmes aimed at providing social support to people who, because of age, poverty, unemployment, health condition or disability, require public assistance in the areas of shopping, housework, transport, self-care and care of others, in order to function more fully in society.",
                children: "",
                key: 1263,
                isLeaf: true,
              },
              {
                title: "General social support systems",
                initial: "e5751",
                description:
                  "Administrative control and monitoring mechanisms that govern the programmes and schemes that provide social support to people who, because of age, poverty, unemployment, health condition or disability, require such support, including systems for the implementation of rules and regulations governing eligibility for social support services and the provision of these services.",
                children: "",
                key: 1264,
                isLeaf: true,
              },
              {
                title: "General social support policies",
                initial: "e5752",
                description:
                  "Legislation, regulations and standards that govern the programme and schemes that provide social support to people who, because of age, poverty, unemployment, health condition or disability, require such support, including legislation and regulations governing eligibility for social support.",
                children: "",
                key: 1265,
                isLeaf: true,
              },
              {
                title:
                  "General social support services, systems and policies, other specified",
                initial: "e5758",
                description: "",
                children: "",
                key: 1266,
                isLeaf: true,
              },
              {
                title:
                  "General social support services, systems and policies, unspecified",
                initial: "e5759",
                description: "",
                children: "",
                key: 1267,
                isLeaf: true,
              },
            ],
            key: 1262,
            isLeaf: false,
          },
          {
            title: "Health services, systems and policies",
            initial: "e580",
            description:
              "Services, systems and policies for preventing and treating health problems, providing medical rehabilitation and promoting a healthy lifestyle. \n \n Exclusions: general social support services, systems and policies (e575)",
            children: [
              {
                title: "Health services",
                initial: "e5800",
                description:
                  "Services and programmes at a local, community, regional, state or national level, aimed at delivering interventions to individuals for their physical, psychological and social wellbeing, such as health promotion and disease prevention services, primary care services, acute care, rehabilitation and long-term care services; services that are publicly or privately funded, delivered on a short-term, long-term, periodic or onetime basis, in a variety of service settings such as community, home-based, school and work settings, general hospitals, specialty hospitals, clinics, and residential and non-residential care facilities, including those who provide these services.",
                children: "",
                key: 1269,
                isLeaf: true,
              },
              {
                title: "Health systems",
                initial: "e5801",
                description:
                  "Administrative control and monitoring mechanisms that govern the range of services provided to individuals for their physical, psychological and social well-being, in a variety of settings including community, home-based, school and work settings, general hospitals, specialty hospitals, clinics, and residential and non-residential care facilities, such as systems for implementing regulations and standards that determine eligibility for services, provision of devices, assistive technology or other adapted equipment, and legislation such as health acts that govern features of a health system such as accessibility, universality, portability, public funding and comprehensiveness.",
                children: "",
                key: 1270,
                isLeaf: true,
              },
              {
                title: "Health policies",
                initial: "e5802",
                description:
                  "Legislation, regulations and standards that govern the range of services provided to individuals for their physical, psychological and social well-being, in a variety of settings including community, home-based, school and work settings, general hospitals, specialty hospitals, clinics, and residential and non-residential care facilities, such as policies and standards that determine eligibility for services, provision of devices, assistive technology or other adapted equipment, and legislation such as health acts that govern features of a health system such as accessibility, universality, portability, public funding and comprehensiveness.",
                children: "",
                key: 1271,
                isLeaf: true,
              },
              {
                title: "Health services, systems and policies, other specified",
                initial: "e5808",
                description: "",
                children: "",
                key: 1272,
                isLeaf: true,
              },
              {
                title: "Health services, systems and policies, unspecified",
                initial: "e5809",
                description: "",
                children: "",
                key: 1273,
                isLeaf: true,
              },
            ],
            key: 1268,
            isLeaf: false,
          },
          {
            title: "Education and training services, systems and policies",
            initial: "e585",
            description:
              "Services, systems and policies for the acquisition, maintenance and improvement of knowledge, expertise and vocational or artistic skills. See UNESCO's International Standard Classification of Education [ISCED-1997].",
            children: [
              {
                title: "Education and training services",
                initial: "e5850",
                description:
                  "Services and programmes concerned with education and the acquisition, maintenance and improvement of knowledge, expertise and vocational or artistic skills, such as those provided for different levels of education (e.g. preschool, primary school, secondary school, post-secondary institutions, professional programmes, training and skills programmes, apprenticeships and continuing education), including those who provide these services.",
                children: "",
                key: 1275,
                isLeaf: true,
              },
              {
                title: "Education and training systems",
                initial: "e5851",
                description:
                  "Administrative control and monitoring mechanisms that govern the delivery of general education programmes, such as systems for the implementation of policies and standards that determine eligibility for public or private education and special needs-based programmes; local, regional or national boards of education or other authoritative bodies that govern features of the education systems, including curricula, size of classes, numbers of schools in a region, fees and subsidies, special meal programmes and after-school care services.",
                children: "",
                key: 1276,
                isLeaf: true,
              },
              {
                title: "Education and training policies",
                initial: "e5852",
                description:
                  "Legislation, regulations and standards that govern the delivery of general education programme, such as policies and standards that determine eligibility for public or private education and special needs-based programmes, and dictate the structure of local, regional or national boards of education or other authoritative bodies that govern features of the education system, including curricula, size of classes, numbers of schools in a region, fees and subsidies, special meal programmes and after-school care services.",
                children: "",
                key: 1277,
                isLeaf: true,
              },
              {
                title:
                  "Education and training services, systems and policies, other specified",
                initial: "e5858",
                description: "",
                children: "",
                key: 1278,
                isLeaf: true,
              },
              {
                title:
                  "Education and training services, systems and policies, unspecified",
                initial: "e5859",
                description: "",
                children: "",
                key: 1279,
                isLeaf: true,
              },
            ],
            key: 1274,
            isLeaf: false,
          },
          {
            title: "Labour and employment services, systems and policies",
            initial: "e590",
            description:
              "Services, systems and policies related to finding suitable work for persons who are unemployed or looking for different work, or to support individuals already employed who are seeking promotion. \n \n Exclusions: economic services, systems and policies (e565)",
            children: [
              {
                title: "Labour and employment services",
                initial: "e5900",
                description:
                  "Services and programmes provided by local, regional or national governments, or private organizations to find suitable work for persons who are unemployed or looking for different work, or to support individuals already employed, such as services of employment search and preparation, reemployment, job placement, outplacement, vocational follow-up, occupational health and safety services, and work environment services (e.g. ergonomics, human resources and personnel management services, labour relations services, professional association services), including those who provide these services.",
                children: "",
                key: 1281,
                isLeaf: true,
              },
              {
                title: "Labour and employment systems",
                initial: "e5901",
                description:
                  "Administrative control and monitoring mechanisms that govern the distribution of occupations and other forms of remunerative work in the economy, such as systems for implementing policies and standards for employment creation, employment security, designated and competitive employment, labour standards and law, and trade unions.",
                children: "",
                key: 1282,
                isLeaf: true,
              },
              {
                title: "Labour and employment policies",
                initial: "e5902",
                description:
                  "Legislation, regulations and standards that govern the distribution of occupations and other forms of remunerative work in the economy, such as standards and policies for employment creation, employment security, designated and competitive employment, labour standards and law, and trade unions.",
                children: "",
                key: 1283,
                isLeaf: true,
              },
              {
                title:
                  "Labour and employment services, systems and policies, other specified",
                initial: "e5908",
                description: "",
                children: "",
                key: 1284,
                isLeaf: true,
              },
              {
                title:
                  "Labour and employment services, systems and policies, unspecified",
                initial: "e5909",
                description: "",
                children: "",
                key: 1285,
                isLeaf: true,
              },
            ],
            key: 1280,
            isLeaf: false,
          },
          {
            title: "Political services, systems and policies",
            initial: "e595",
            description:
              "Services, systems and policies related to voting, elections and governance of countries, regions and communities, as well as international organizations.",
            children: [
              {
                title: "Political services",
                initial: "e5950",
                description:
                  "Services and structures such as local, regional and national governments, international organizations and the people who are elected or nominated to positions within these structures, such as the United Nations, European Union, governments, regional authorities, local village authorities, traditional leaders.",
                children: "",
                key: 1287,
                isLeaf: true,
              },
              {
                title: "Political systems",
                initial: "e5951",
                description:
                  "Structures and related operations that organise political and economic power in a society, such as executive and legislative branches of government, and the constitutional or other legal sources from which they derive their authority, such as political organizational doctrine, constitutions, agencies of executive and legislative branches of government, the military.",
                children: "",
                key: 1288,
                isLeaf: true,
              },
              {
                title: "Political policy",
                initial: "e5952",
                description:
                  "Laws and policies formulated and enforced through political systems that govern the operation of the political system, such as policies governing election campaigns, registration of political parties, voting, and members in international political organizations, including treaties, constitutional and other law governing legislation and regulation.",
                children: "",
                key: 1289,
                isLeaf: true,
              },
              {
                title:
                  "Political services, systems and policies, other specified",
                initial: "e5958",
                description: "",
                children: "",
                key: 1290,
                isLeaf: true,
              },
              {
                title: "Political services, systems and policies, unspecified",
                initial: "e5959",
                description: "",
                children: "",
                key: 1291,
                isLeaf: true,
              },
            ],
            key: 1286,
            isLeaf: false,
          },
          {
            title: "Services, systems and policies, other specified",
            initial: "e598",
            description: "",
            children: "",
            key: 1292,
            isLeaf: true,
          },
          {
            title: "Services, systems and policies, unspecified",
            initial: "e599",
            description: "",
            children: "",
            key: 1293,
            isLeaf: true,
          },
        ],
        key: 1183,
        isLeaf: false,
      },
    ],
    key: 1033,
    isLeaf: false,
  },
  {
    title: "BODY STRUCTURES",
    initial: "s",
    description: "",
    children: [
      {
        title: "STRUCTURES OF THE NERVOUS SYSTEM",
        initial: "s1",
        description: "",
        children: [
          {
            title: "Structure of brain",
            initial: "s110",
            description: "",
            children: [
              {
                title: "Structure of cortical lobes",
                initial: "s1100",
                description: "",
                children: [
                  {
                    title: "Frontal lobe",
                    initial: "s11000",
                    description: "",
                    children: "",
                    key: 1298,
                    isLeaf: true,
                  },
                  {
                    title: "Temporal lobe",
                    initial: "s11001",
                    description: "",
                    children: "",
                    key: 1299,
                    isLeaf: true,
                  },
                  {
                    title: "Parietal lobe",
                    initial: "s11002",
                    description: "",
                    children: "",
                    key: 1300,
                    isLeaf: true,
                  },
                  {
                    title: "Occipital lobe",
                    initial: "s11003",
                    description: "",
                    children: "",
                    key: 1301,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of cortical lobes, other specified",
                    initial: "s11008",
                    description: "",
                    children: "",
                    key: 1302,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of cortical lobes, unspecified",
                    initial: "s11009",
                    description: "",
                    children: "",
                    key: 1303,
                    isLeaf: true,
                  },
                ],
                key: 1297,
                isLeaf: false,
              },
              {
                title: "Structure of midbrain",
                initial: "s1101",
                description: "",
                children: "",
                key: 1304,
                isLeaf: true,
              },
              {
                title: "Structure of diencephalon",
                initial: "s1102",
                description: "",
                children: "",
                key: 1305,
                isLeaf: true,
              },
              {
                title: "Basal ganglia and related structures",
                initial: "s1103",
                description: "",
                children: "",
                key: 1306,
                isLeaf: true,
              },
              {
                title: "Structure of cerebellum",
                initial: "s1104",
                description: "",
                children: "",
                key: 1307,
                isLeaf: true,
              },
              {
                title: "Structure of brain stem",
                initial: "s1105",
                description: "",
                children: [
                  {
                    title: "Medulla oblongata",
                    initial: "s11050",
                    description: "",
                    children: "",
                    key: 1309,
                    isLeaf: true,
                  },
                  {
                    title: "Pons",
                    initial: "s11051",
                    description: "",
                    children: "",
                    key: 1310,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of brain stem, other specified",
                    initial: "s11058",
                    description: "",
                    children: "",
                    key: 1311,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of brain stem, unspecified",
                    initial: "s11059",
                    description: "",
                    children: "",
                    key: 1312,
                    isLeaf: true,
                  },
                ],
                key: 1308,
                isLeaf: false,
              },
              {
                title: "Structure of cranial nerves",
                initial: "s1106",
                description: "",
                children: "",
                key: 1313,
                isLeaf: true,
              },
              {
                title: "Structure of brain, other specified",
                initial: "s1108",
                description: "",
                children: "",
                key: 1314,
                isLeaf: true,
              },
              {
                title: "Structure of brain, unspecified",
                initial: "s1109",
                description: "",
                children: "",
                key: 1315,
                isLeaf: true,
              },
            ],
            key: 1296,
            isLeaf: false,
          },
          {
            title: "Spinal cord and related structures",
            initial: "s120",
            description: "",
            children: [
              {
                title: "Structure of spinal cord",
                initial: "s1200",
                description: "",
                children: [
                  {
                    title: "Cervical spinal cord",
                    initial: "s12000",
                    description: "",
                    children: "",
                    key: 1318,
                    isLeaf: true,
                  },
                  {
                    title: "Thoracic spinal cord",
                    initial: "s12001",
                    description: "",
                    children: "",
                    key: 1319,
                    isLeaf: true,
                  },
                  {
                    title: "Lumbosacral spinal cord",
                    initial: "s12002",
                    description: "",
                    children: "",
                    key: 1320,
                    isLeaf: true,
                  },
                  {
                    title: "Cauda equina",
                    initial: "s12003",
                    description: "",
                    children: "",
                    key: 1321,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of spinal cord, other specified",
                    initial: "s12008",
                    description: "",
                    children: "",
                    key: 1322,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of spinal cord, unspecified",
                    initial: "s12009",
                    description: "",
                    children: "",
                    key: 1323,
                    isLeaf: true,
                  },
                ],
                key: 1317,
                isLeaf: false,
              },
              {
                title: "Spinal nerves",
                initial: "s1201",
                description: "",
                children: "",
                key: 1324,
                isLeaf: true,
              },
              {
                title: "Spinal cord and related structures, other specified",
                initial: "s1208",
                description: "",
                children: "",
                key: 1325,
                isLeaf: true,
              },
              {
                title: "Spinal cord and related structures, unspecified",
                initial: "s1209",
                description: "",
                children: "",
                key: 1326,
                isLeaf: true,
              },
            ],
            key: 1316,
            isLeaf: false,
          },
          {
            title: "Structure of meninges",
            initial: "s130",
            description: "",
            children: "",
            key: 1327,
            isLeaf: true,
          },
          {
            title: "Structure of sympathetic nervous system",
            initial: "s140",
            description: "",
            children: "",
            key: 1328,
            isLeaf: true,
          },
          {
            title: "Structure of parasympathetic nervous system",
            initial: "s150",
            description: "",
            children: "",
            key: 1329,
            isLeaf: true,
          },
          {
            title: "Structure of the nervous system, other specified",
            initial: "s198",
            description: "",
            children: "",
            key: 1330,
            isLeaf: true,
          },
          {
            title: "Structure of the nervous system, unspecified",
            initial: "s199",
            description: "",
            children: "",
            key: 1331,
            isLeaf: true,
          },
        ],
        key: 1295,
        isLeaf: false,
      },
      {
        title: "THE EYE, EAR AND RELATED STRUCTURES",
        initial: "s2",
        description: "",
        children: [
          {
            title: "Structure of eye socket",
            initial: "s210",
            description: "",
            children: "",
            key: 1333,
            isLeaf: true,
          },
          {
            title: "Structure of eyeball",
            initial: "s220",
            description: "",
            children: [
              {
                title: "Conjunctiva, sclera, choroid",
                initial: "s2200",
                description: "",
                children: "",
                key: 1335,
                isLeaf: true,
              },
              {
                title: "Cornea",
                initial: "s2201",
                description: "",
                children: "",
                key: 1336,
                isLeaf: true,
              },
              {
                title: "Iris",
                initial: "s2202",
                description: "",
                children: "",
                key: 1337,
                isLeaf: true,
              },
              {
                title: "Retina",
                initial: "s2203",
                description: "",
                children: "",
                key: 1338,
                isLeaf: true,
              },
              {
                title: "Lens of eyeball",
                initial: "s2204",
                description: "",
                children: "",
                key: 1339,
                isLeaf: true,
              },
              {
                title: "Vitreous body",
                initial: "s2205",
                description: "",
                children: "",
                key: 1340,
                isLeaf: true,
              },
              {
                title: "Structure of eyeball, other specified",
                initial: "s2208",
                description: "",
                children: "",
                key: 1341,
                isLeaf: true,
              },
              {
                title: "Structure of eyeball, unspecified",
                initial: "s2209",
                description: "",
                children: "",
                key: 1342,
                isLeaf: true,
              },
            ],
            key: 1334,
            isLeaf: false,
          },
          {
            title: "Structures around eye",
            initial: "s230",
            description: "\n \n Exclusions: facial hair (s8401)",
            children: [
              {
                title: "Lachrymal gland and related structures",
                initial: "s2300",
                description: "",
                children: "",
                key: 1344,
                isLeaf: true,
              },
              {
                title: "Eyelid",
                initial: "s2301",
                description: "",
                children: "",
                key: 1345,
                isLeaf: true,
              },
              {
                title: "External ocular muscles",
                initial: "s2302",
                description: "",
                children: "",
                key: 1346,
                isLeaf: true,
              },
              {
                title: "Structures around eye, other specified",
                initial: "s2308",
                description: "",
                children: "",
                key: 1347,
                isLeaf: true,
              },
              {
                title: "Structures around eye, unspecified",
                initial: "s2309",
                description: "",
                children: "",
                key: 1348,
                isLeaf: true,
              },
            ],
            key: 1343,
            isLeaf: false,
          },
          {
            title: "Structure of external ear",
            initial: "s240",
            description: "\n \n Exclusions: head hair (s8401)",
            children: "",
            key: 1349,
            isLeaf: true,
          },
          {
            title: "Structure of middle ear",
            initial: "s250",
            description: "",
            children: [
              {
                title: "Tympanic membrane",
                initial: "s2500",
                description: "",
                children: "",
                key: 1351,
                isLeaf: true,
              },
              {
                title: "Eustachian canal",
                initial: "s2501",
                description: "",
                children: "",
                key: 1352,
                isLeaf: true,
              },
              {
                title: "Ossicles",
                initial: "s2502",
                description: "",
                children: "",
                key: 1353,
                isLeaf: true,
              },
              {
                title: "Structure of middle ear, other specified",
                initial: "s2508",
                description: "",
                children: "",
                key: 1354,
                isLeaf: true,
              },
              {
                title: "Structure of middle ear, unspecified",
                initial: "s2509",
                description: "",
                children: "",
                key: 1355,
                isLeaf: true,
              },
            ],
            key: 1350,
            isLeaf: false,
          },
          {
            title: "Structure of inner ear",
            initial: "s260",
            description: "",
            children: [
              {
                title: "Cochlea",
                initial: "s2600",
                description: "",
                children: "",
                key: 1357,
                isLeaf: true,
              },
              {
                title: "Vestibular labyrinth",
                initial: "s2601",
                description: "",
                children: "",
                key: 1358,
                isLeaf: true,
              },
              {
                title: "Semicircular canals",
                initial: "s2602",
                description: "",
                children: "",
                key: 1359,
                isLeaf: true,
              },
              {
                title: "Internal auditory meatus",
                initial: "s2603",
                description: "",
                children: "",
                key: 1360,
                isLeaf: true,
              },
              {
                title: "Structure of inner ear, other specified",
                initial: "s2608",
                description: "",
                children: "",
                key: 1361,
                isLeaf: true,
              },
              {
                title: "Structure of inner ear, unspecified",
                initial: "s2609",
                description: "",
                children: "",
                key: 1362,
                isLeaf: true,
              },
            ],
            key: 1356,
            isLeaf: false,
          },
          {
            title: "Eye, ear and related structures, other specified",
            initial: "s298",
            description: "",
            children: "",
            key: 1363,
            isLeaf: true,
          },
          {
            title: "Eye, ear and related structures, unspecified",
            initial: "s299",
            description: "",
            children: "",
            key: 1364,
            isLeaf: true,
          },
        ],
        key: 1332,
        isLeaf: false,
      },
      {
        title: "STRUCTURES INVOLVED IN VOICE AND SPEECH",
        initial: "s3",
        description: "",
        children: [
          {
            title: "Structure of nose",
            initial: "s310",
            description: "\n \n Exclusions: facial hair (s8401)",
            children: [
              {
                title: "External nose",
                initial: "s3100",
                description: "",
                children: "",
                key: 1367,
                isLeaf: true,
              },
              {
                title: "Nasal septum",
                initial: "s3101",
                description: "",
                children: "",
                key: 1368,
                isLeaf: true,
              },
              {
                title: "Nasal fossae",
                initial: "s3102",
                description: "",
                children: "",
                key: 1369,
                isLeaf: true,
              },
              {
                title: "Structure of nose, other specified",
                initial: "s3108",
                description: "",
                children: "",
                key: 1370,
                isLeaf: true,
              },
              {
                title: "Structure of nose, unspecified",
                initial: "s3109",
                description: "",
                children: "",
                key: 1371,
                isLeaf: true,
              },
            ],
            key: 1366,
            isLeaf: false,
          },
          {
            title: "Structure of mouth",
            initial: "s320",
            description: "",
            children: [
              {
                title: "Teeth",
                initial: "s3200",
                description: "",
                children: [
                  {
                    title: "Primary dentition",
                    initial: "s32000",
                    description: "",
                    children: "",
                    key: 1374,
                    isLeaf: true,
                  },
                  {
                    title: "Permanent dentition",
                    initial: "s32001",
                    description: "",
                    children: "",
                    key: 1375,
                    isLeaf: true,
                  },
                  {
                    title: "Teeth, other specified",
                    initial: "s32008",
                    description: "",
                    children: "",
                    key: 1376,
                    isLeaf: true,
                  },
                  {
                    title: "Teeth, unspecified",
                    initial: "s32009",
                    description: "",
                    children: "",
                    key: 1377,
                    isLeaf: true,
                  },
                ],
                key: 1373,
                isLeaf: false,
              },
              {
                title: "Gums",
                initial: "s3201",
                description: "",
                children: "",
                key: 1378,
                isLeaf: true,
              },
              {
                title: "Structure of palate",
                initial: "s3202",
                description: "",
                children: [
                  {
                    title: "Hard palate",
                    initial: "s32020",
                    description: "",
                    children: "",
                    key: 1380,
                    isLeaf: true,
                  },
                  {
                    title: "Soft palate",
                    initial: "s32021",
                    description: "",
                    children: "",
                    key: 1381,
                    isLeaf: true,
                  },
                ],
                key: 1379,
                isLeaf: false,
              },
              {
                title: "Tongue",
                initial: "s3203",
                description: "",
                children: "",
                key: 1382,
                isLeaf: true,
              },
              {
                title: "Structure of lips",
                initial: "s3204",
                description: "",
                children: [
                  {
                    title: "Upper lip",
                    initial: "s32040",
                    description: "",
                    children: "",
                    key: 1384,
                    isLeaf: true,
                  },
                  {
                    title: "Lower lip",
                    initial: "s32041",
                    description: "",
                    children: "",
                    key: 1385,
                    isLeaf: true,
                  },
                ],
                key: 1383,
                isLeaf: false,
              },
              {
                title: "Philtrum",
                initial: "s3205",
                description: "",
                children: "",
                key: 1386,
                isLeaf: true,
              },
              {
                title: "Structure of mouth, other specified",
                initial: "s3208",
                description: "",
                children: "",
                key: 1387,
                isLeaf: true,
              },
              {
                title: "Structure of mouth, unspecified",
                initial: "s3209",
                description: "",
                children: "",
                key: 1388,
                isLeaf: true,
              },
            ],
            key: 1372,
            isLeaf: false,
          },
          {
            title: "Structure of pharynx",
            initial: "s330",
            description: "",
            children: [
              {
                title: "Nasal pharynx",
                initial: "s3300",
                description: "",
                children: "",
                key: 1390,
                isLeaf: true,
              },
              {
                title: "Oral pharynx",
                initial: "s3301",
                description: "",
                children: "",
                key: 1391,
                isLeaf: true,
              },
              {
                title: "Structure of pharynx, other specified",
                initial: "s3308",
                description: "",
                children: "",
                key: 1392,
                isLeaf: true,
              },
              {
                title: "Structure of pharynx, unspecified",
                initial: "s3309",
                description: "",
                children: "",
                key: 1393,
                isLeaf: true,
              },
            ],
            key: 1389,
            isLeaf: false,
          },
          {
            title: "Structure of larynx",
            initial: "s340",
            description: "",
            children: [
              {
                title: "Vocal folds",
                initial: "s3400",
                description: "",
                children: "",
                key: 1395,
                isLeaf: true,
              },
              {
                title: "Structure of larynx, other specified",
                initial: "s3408",
                description: "",
                children: "",
                key: 1396,
                isLeaf: true,
              },
              {
                title: "Structure of larynx, unspecified",
                initial: "s3409",
                description: "",
                children: "",
                key: 1397,
                isLeaf: true,
              },
            ],
            key: 1394,
            isLeaf: false,
          },
          {
            title: "Structures involved in voice and speech, other specified",
            initial: "s398",
            description: "",
            children: "",
            key: 1398,
            isLeaf: true,
          },
          {
            title: "Structures involved in voice and speech, unspecified",
            initial: "s399",
            description: "",
            children: "",
            key: 1399,
            isLeaf: true,
          },
        ],
        key: 1365,
        isLeaf: false,
      },
      {
        title:
          "STRUCTURES OF THE CARDIOVASCULAR, IMMUNOLOGICAL AND RESPIRATORY SYSTEMS",
        initial: "s4",
        description: "",
        children: [
          {
            title: "Structure of cardiovascular system",
            initial: "s410",
            description: "",
            children: [
              {
                title: "Heart",
                initial: "s4100",
                description: "",
                children: [
                  {
                    title: "Atria",
                    initial: "s41000",
                    description: "",
                    children: "",
                    key: 1403,
                    isLeaf: true,
                  },
                  {
                    title: "Ventricles",
                    initial: "s41001",
                    description: "",
                    children: "",
                    key: 1404,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of heart, other specified",
                    initial: "s41008",
                    description: "",
                    children: "",
                    key: 1405,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of heart, unspecified",
                    initial: "s41009",
                    description: "",
                    children: "",
                    key: 1406,
                    isLeaf: true,
                  },
                ],
                key: 1402,
                isLeaf: false,
              },
              {
                title: "Arteries",
                initial: "s4101",
                description: "",
                children: "",
                key: 1407,
                isLeaf: true,
              },
              {
                title: "Veins",
                initial: "s4102",
                description: "",
                children: "",
                key: 1408,
                isLeaf: true,
              },
              {
                title: "Capillaries",
                initial: "s4103",
                description: "",
                children: "",
                key: 1409,
                isLeaf: true,
              },
              {
                title: "Structure of cardiovascular system, other specified",
                initial: "s4108",
                description: "",
                children: "",
                key: 1410,
                isLeaf: true,
              },
              {
                title: "Structure of cardiovascular system, unspecified",
                initial: "s4109",
                description: "",
                children: "",
                key: 1411,
                isLeaf: true,
              },
            ],
            key: 1401,
            isLeaf: false,
          },
          {
            title: "Structure of immune system",
            initial: "s420",
            description: "",
            children: [
              {
                title: "Lymphatic vessels",
                initial: "s4200",
                description: "",
                children: "",
                key: 1413,
                isLeaf: true,
              },
              {
                title: "Lymphatic nodes",
                initial: "s4201",
                description: "",
                children: "",
                key: 1414,
                isLeaf: true,
              },
              {
                title: "Thymus",
                initial: "s4202",
                description: "",
                children: "",
                key: 1415,
                isLeaf: true,
              },
              {
                title: "Spleen",
                initial: "s4203",
                description: "",
                children: "",
                key: 1416,
                isLeaf: true,
              },
              {
                title: "Bone marrow",
                initial: "s4204",
                description: "",
                children: "",
                key: 1417,
                isLeaf: true,
              },
              {
                title: "Structure of immune system, other specified",
                initial: "s4208",
                description: "",
                children: "",
                key: 1418,
                isLeaf: true,
              },
              {
                title: "Structure of immune system, unspecified",
                initial: "s4209",
                description: "",
                children: "",
                key: 1419,
                isLeaf: true,
              },
            ],
            key: 1412,
            isLeaf: false,
          },
          {
            title: "Structure of respiratory system",
            initial: "s430",
            description: "",
            children: [
              {
                title: "Trachea",
                initial: "s4300",
                description: "",
                children: "",
                key: 1421,
                isLeaf: true,
              },
              {
                title: "Lungs",
                initial: "s4301",
                description: "",
                children: [
                  {
                    title: "Bronchial tree",
                    initial: "s43010",
                    description: "",
                    children: "",
                    key: 1423,
                    isLeaf: true,
                  },
                  {
                    title: "Alveoli",
                    initial: "s43011",
                    description: "",
                    children: "",
                    key: 1424,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of lungs, other specified",
                    initial: "s43018",
                    description: "",
                    children: "",
                    key: 1425,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of lungs, unspecified",
                    initial: "s43019",
                    description: "",
                    children: "",
                    key: 1426,
                    isLeaf: true,
                  },
                ],
                key: 1422,
                isLeaf: false,
              },
              {
                title: "Thoracic cage",
                initial: "s4302",
                description: "",
                children: "",
                key: 1427,
                isLeaf: true,
              },
              {
                title: "Muscles of respiration",
                initial: "s4303",
                description: "",
                children: [
                  {
                    title: "Intercostal muscles",
                    initial: "s43030",
                    description: "",
                    children: "",
                    key: 1429,
                    isLeaf: true,
                  },
                  {
                    title: "Diaphragm",
                    initial: "s43031",
                    description: "",
                    children: "",
                    key: 1430,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of respiration, other specified",
                    initial: "s43038",
                    description: "",
                    children: "",
                    key: 1431,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of respiration, unspecified",
                    initial: "s43039",
                    description: "",
                    children: "",
                    key: 1432,
                    isLeaf: true,
                  },
                ],
                key: 1428,
                isLeaf: false,
              },
              {
                title: "Structure of respiratory system, other specified",
                initial: "s4308",
                description: "",
                children: "",
                key: 1433,
                isLeaf: true,
              },
              {
                title: "Structure of respiratory system, unspecified",
                initial: "s4309",
                description: "",
                children: "",
                key: 1434,
                isLeaf: true,
              },
            ],
            key: 1420,
            isLeaf: false,
          },
          {
            title:
              "Structures of the cardiovascular, immunological and respiratory systems, other specified",
            initial: "s498",
            description: "",
            children: "",
            key: 1435,
            isLeaf: true,
          },
          {
            title:
              "Structures of the cardiovascular, immunological and respiratory systems, unspecified",
            initial: "s499",
            description: "",
            children: "",
            key: 1436,
            isLeaf: true,
          },
        ],
        key: 1400,
        isLeaf: false,
      },
      {
        title:
          "STRUCTURES RELATED TO THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS",
        initial: "s5",
        description: "",
        children: [
          {
            title: "Structure of salivary glands",
            initial: "s510",
            description: "",
            children: "",
            key: 1438,
            isLeaf: true,
          },
          {
            title: "Structure of oesophagus",
            initial: "s520",
            description: "",
            children: "",
            key: 1439,
            isLeaf: true,
          },
          {
            title: "Structure of stomach",
            initial: "s530",
            description: "",
            children: "",
            key: 1440,
            isLeaf: true,
          },
          {
            title: "Structure of intestine",
            initial: "s540",
            description: "",
            children: [
              {
                title: "Small intestine",
                initial: "s5400",
                description: "",
                children: "",
                key: 1442,
                isLeaf: true,
              },
              {
                title: "Large intestine",
                initial: "s5401",
                description: "",
                children: "",
                key: 1443,
                isLeaf: true,
              },
              {
                title: "Structure of intestine, other specified",
                initial: "s5408",
                description: "",
                children: "",
                key: 1444,
                isLeaf: true,
              },
              {
                title: "Structure of intestine, unspecified",
                initial: "s5409",
                description: "",
                children: "",
                key: 1445,
                isLeaf: true,
              },
            ],
            key: 1441,
            isLeaf: false,
          },
          {
            title: "Structure of pancreas",
            initial: "s550",
            description: "",
            children: "",
            key: 1446,
            isLeaf: true,
          },
          {
            title: "Structure of liver",
            initial: "s560",
            description: "",
            children: "",
            key: 1447,
            isLeaf: true,
          },
          {
            title: "Structure of gall bladder and ducts",
            initial: "s570",
            description: "",
            children: "",
            key: 1448,
            isLeaf: true,
          },
          {
            title: "Structure of endocrine glands",
            initial: "s580",
            description: "",
            children: [
              {
                title: "Pituitary gland",
                initial: "s5800",
                description: "",
                children: "",
                key: 1450,
                isLeaf: true,
              },
              {
                title: "Thyroid gland",
                initial: "s5801",
                description: "",
                children: "",
                key: 1451,
                isLeaf: true,
              },
              {
                title: "Parathyroid gland",
                initial: "s5802",
                description: "",
                children: "",
                key: 1452,
                isLeaf: true,
              },
              {
                title: "Adrenal gland",
                initial: "s5803",
                description: "",
                children: "",
                key: 1453,
                isLeaf: true,
              },
              {
                title: "Structure of endocrine glands, other specified",
                initial: "s5808",
                description: "",
                children: "",
                key: 1454,
                isLeaf: true,
              },
              {
                title: "Structure of endocrine glands, unspecified",
                initial: "s5809",
                description: "",
                children: "",
                key: 1455,
                isLeaf: true,
              },
            ],
            key: 1449,
            isLeaf: false,
          },
          {
            title:
              "Structures related to the digestive, metabolic and endocrine systems, other specified",
            initial: "s598",
            description: "",
            children: "",
            key: 1456,
            isLeaf: true,
          },
          {
            title:
              "Structures related to the digestive, metabolic and endocrine systems, unspecified",
            initial: "s599",
            description: "",
            children: "",
            key: 1457,
            isLeaf: true,
          },
        ],
        key: 1437,
        isLeaf: false,
      },
      {
        title:
          "STRUCTURES RELATED TO THE GENITOURINARY AND REPRODUCTIVE SYSTEMS",
        initial: "s6",
        description: "",
        children: [
          {
            title: "Structure of urinary system",
            initial: "s610",
            description: "",
            children: [
              {
                title: "Kidney",
                initial: "s6100",
                description: "",
                children: "",
                key: 1460,
                isLeaf: true,
              },
              {
                title: "Ureters",
                initial: "s6101",
                description: "",
                children: "",
                key: 1461,
                isLeaf: true,
              },
              {
                title: "Urinary bladder",
                initial: "s6102",
                description: "",
                children: "",
                key: 1462,
                isLeaf: true,
              },
              {
                title: "Urethra",
                initial: "s6103",
                description: "",
                children: "",
                key: 1463,
                isLeaf: true,
              },
              {
                title: "Structure of urinary system, other specified",
                initial: "s6108",
                description: "",
                children: "",
                key: 1464,
                isLeaf: true,
              },
              {
                title: "Structure of urinary system, unspecified",
                initial: "s6109",
                description: "",
                children: "",
                key: 1465,
                isLeaf: true,
              },
            ],
            key: 1459,
            isLeaf: false,
          },
          {
            title: "Structure of pelvic floor",
            initial: "s620",
            description: "",
            children: "",
            key: 1466,
            isLeaf: true,
          },
          {
            title: "Structure of reproductive system",
            initial: "s630",
            description: "",
            children: [
              {
                title: "Ovaries",
                initial: "s6300",
                description: "",
                children: "",
                key: 1468,
                isLeaf: true,
              },
              {
                title: "Structure of uterus",
                initial: "s6301",
                description: "",
                children: [
                  {
                    title: "Body of uterus",
                    initial: "s6310",
                    description: "",
                    children: "",
                    key: 1470,
                    isLeaf: true,
                  },
                  {
                    title: "Cervix",
                    initial: "s6311",
                    description: "",
                    children: "",
                    key: 1471,
                    isLeaf: true,
                  },
                  {
                    title: "Fallopian tubes",
                    initial: "s6312",
                    description: "",
                    children: "",
                    key: 1472,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of uterus, other specified",
                    initial: "s63018",
                    description: "",
                    children: "",
                    key: 1473,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of uterus, unspecified",
                    initial: "s6319",
                    description: "",
                    children: "",
                    key: 1474,
                    isLeaf: true,
                  },
                ],
                key: 1469,
                isLeaf: false,
              },
              {
                title: "Breast and nipple",
                initial: "s6302",
                description: "",
                children: "",
                key: 1475,
                isLeaf: true,
              },
              {
                title: "Structure of vagina and external genitalia",
                initial: "s6303",
                description: "",
                children: [
                  {
                    title: "Clitoris",
                    initial: "s63030",
                    description: "",
                    children: "",
                    key: 1477,
                    isLeaf: true,
                  },
                  {
                    title: "Labia majora",
                    initial: "s63031",
                    description: "",
                    children: "",
                    key: 1478,
                    isLeaf: true,
                  },
                  {
                    title: "Labia minora",
                    initial: "s63032",
                    description: "",
                    children: "",
                    key: 1479,
                    isLeaf: true,
                  },
                  {
                    title: "Vaginal canal",
                    initial: "s63033",
                    description: "",
                    children: "",
                    key: 1480,
                    isLeaf: true,
                  },
                ],
                key: 1476,
                isLeaf: false,
              },
              {
                title: "Testes and scrotum",
                initial: "s6304",
                description: "",
                children: "",
                key: 1481,
                isLeaf: true,
              },
              {
                title: "Structure of the penis",
                initial: "s6305",
                description: "",
                children: [
                  {
                    title: "Glans penis",
                    initial: "s63050",
                    description: "",
                    children: "",
                    key: 1483,
                    isLeaf: true,
                  },
                  {
                    title: "Shaft of penis",
                    initial: "s63051",
                    description: "",
                    children: "",
                    key: 1484,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of penis, other specified",
                    initial: "s63058",
                    description: "",
                    children: "",
                    key: 1485,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of penis, unspecified",
                    initial: "s63059",
                    description: "",
                    children: "",
                    key: 1486,
                    isLeaf: true,
                  },
                ],
                key: 1482,
                isLeaf: false,
              },
              {
                title: "Prostate",
                initial: "s6306",
                description: "",
                children: "",
                key: 1487,
                isLeaf: true,
              },
              {
                title: "Structures of reproductive system, other specified",
                initial: "s6308",
                description: "",
                children: "",
                key: 1488,
                isLeaf: true,
              },
              {
                title: "Structures of reproductive system, unspecified",
                initial: "s6309",
                description: "",
                children: "",
                key: 1489,
                isLeaf: true,
              },
            ],
            key: 1467,
            isLeaf: false,
          },
          {
            title:
              "Structures related to the genitourinary and reproductive systems, other specified",
            initial: "s698",
            description: "",
            children: "",
            key: 1490,
            isLeaf: true,
          },
          {
            title:
              "Structures related to the genitourinary and reproductive systems, unspecified",
            initial: "s699",
            description: "",
            children: "",
            key: 1491,
            isLeaf: true,
          },
        ],
        key: 1458,
        isLeaf: false,
      },
      {
        title: "STRUCTURES RELATED TO MOVEMENT",
        initial: "s7",
        description: "",
        children: [
          {
            title: "Structure of head and neck region",
            initial: "s710",
            description: "",
            children: [
              {
                title: "Bones of cranium",
                initial: "s7100",
                description: "",
                children: "",
                key: 1494,
                isLeaf: true,
              },
              {
                title: "Bones of face",
                initial: "s7101",
                description: "",
                children: "",
                key: 1495,
                isLeaf: true,
              },
              {
                title: "Bones of neck region",
                initial: "s7102",
                description: "",
                children: "",
                key: 1496,
                isLeaf: true,
              },
              {
                title: "Joints of head and neck region",
                initial: "s7103",
                description: "",
                children: "",
                key: 1497,
                isLeaf: true,
              },
              {
                title: "Muscles of head and neck region",
                initial: "s7104",
                description: "",
                children: "",
                key: 1498,
                isLeaf: true,
              },
              {
                title: "Ligaments and fasciae of head and neck region",
                initial: "s7105",
                description: "",
                children: "",
                key: 1499,
                isLeaf: true,
              },
              {
                title: "Structure of head and neck region, other specified",
                initial: "s7108",
                description: "",
                children: "",
                key: 1500,
                isLeaf: true,
              },
              {
                title: "Structure of head and neck region, unspecified",
                initial: "s7109",
                description: "",
                children: "",
                key: 1501,
                isLeaf: true,
              },
            ],
            key: 1493,
            isLeaf: false,
          },
          {
            title: "Structure of shoulder region",
            initial: "s720",
            description: "",
            children: [
              {
                title: "Bones of shoulder region",
                initial: "s7200",
                description: "",
                children: "",
                key: 1503,
                isLeaf: true,
              },
              {
                title: "Joints of shoulder region",
                initial: "s7201",
                description: "",
                children: "",
                key: 1504,
                isLeaf: true,
              },
              {
                title: "Muscles of shoulder region",
                initial: "s7202",
                description: "",
                children: "",
                key: 1505,
                isLeaf: true,
              },
              {
                title: "Ligaments and fasciae of shoulder region",
                initial: "s7203",
                description: "",
                children: "",
                key: 1506,
                isLeaf: true,
              },
              {
                title: "Structure of shoulder region, other specified",
                initial: "s7208",
                description: "",
                children: "",
                key: 1507,
                isLeaf: true,
              },
              {
                title: "Structure of shoulder region, unspecified",
                initial: "s7209",
                description: "",
                children: "",
                key: 1508,
                isLeaf: true,
              },
            ],
            key: 1502,
            isLeaf: false,
          },
          {
            title: "Structure of upper extremity",
            initial: "s730",
            description: "",
            children: [
              {
                title: "Structure of upper arm",
                initial: "s7300",
                description: "",
                children: [
                  {
                    title: "Bones of upper arm",
                    initial: "s73000",
                    description: "",
                    children: "",
                    key: 1511,
                    isLeaf: true,
                  },
                  {
                    title: "Elbow joint",
                    initial: "s73001",
                    description: "",
                    children: "",
                    key: 1512,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of upper arm",
                    initial: "s73002",
                    description: "",
                    children: "",
                    key: 1513,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of upper arm",
                    initial: "s73003",
                    description: "",
                    children: "",
                    key: 1514,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of upper arm, other specified",
                    initial: "s73008",
                    description: "",
                    children: "",
                    key: 1515,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of upper arm, unspecified",
                    initial: "s73009",
                    description: "",
                    children: "",
                    key: 1516,
                    isLeaf: true,
                  },
                ],
                key: 1510,
                isLeaf: false,
              },
              {
                title: "Structure of forearm",
                initial: "s7301",
                description: "",
                children: [
                  {
                    title: "Bones of forearm",
                    initial: "s73010",
                    description: "",
                    children: "",
                    key: 1518,
                    isLeaf: true,
                  },
                  {
                    title: "Wrist joint",
                    initial: "s73011",
                    description: "",
                    children: "",
                    key: 1519,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of forearm",
                    initial: "s73012",
                    description: "",
                    children: "",
                    key: 1520,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of forearm",
                    initial: "s73013",
                    description: "",
                    children: "",
                    key: 1521,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of forearm, other specified",
                    initial: "s73018",
                    description: "",
                    children: "",
                    key: 1522,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of forearm, unspecified",
                    initial: "s73019",
                    description: "",
                    children: "",
                    key: 1523,
                    isLeaf: true,
                  },
                ],
                key: 1517,
                isLeaf: false,
              },
              {
                title: "Structure of hand",
                initial: "s7302",
                description: "",
                children: [
                  {
                    title: "Bones of hand",
                    initial: "s7302",
                    description: "",
                    children: "",
                    key: 1525,
                    isLeaf: true,
                  },
                  {
                    title: "Joints of hand and fingers",
                    initial: "s7302",
                    description: "",
                    children: "",
                    key: 1526,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of hand",
                    initial: "s73022",
                    description: "",
                    children: "",
                    key: 1527,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of hand",
                    initial: "s73023",
                    description: "",
                    children: "",
                    key: 1528,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of hand, other specified",
                    initial: "s73028",
                    description: "",
                    children: "",
                    key: 1529,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of hand, unspecified",
                    initial: "s73029",
                    description: "",
                    children: "",
                    key: 1530,
                    isLeaf: true,
                  },
                ],
                key: 1524,
                isLeaf: false,
              },
              {
                title: "Structure of upper extremity, other specified",
                initial: "s7308",
                description: "",
                children: "",
                key: 1531,
                isLeaf: true,
              },
              {
                title: "Structure of upper extremity, unspecified",
                initial: "s7309",
                description: "",
                children: "",
                key: 1532,
                isLeaf: true,
              },
            ],
            key: 1509,
            isLeaf: false,
          },
          {
            title: "Structure of pelvic region",
            initial: "s740",
            description: "",
            children: [
              {
                title: "Bones of pelvic region",
                initial: "s7400",
                description: "",
                children: "",
                key: 1534,
                isLeaf: true,
              },
              {
                title: "Joints of pelvic region",
                initial: "s7401",
                description: "",
                children: "",
                key: 1535,
                isLeaf: true,
              },
              {
                title: "Muscles of pelvic region",
                initial: "s7402",
                description: "",
                children: "",
                key: 1536,
                isLeaf: true,
              },
              {
                title: "Ligaments and fasciae of pelvic region",
                initial: "s7403",
                description: "",
                children: "",
                key: 1537,
                isLeaf: true,
              },
              {
                title: "Structure of pelvic region, other specified",
                initial: "s7408",
                description: "",
                children: "",
                key: 1538,
                isLeaf: true,
              },
              {
                title: "Structure of pelvic region, unspecified",
                initial: "s7409",
                description: "",
                children: "",
                key: 1539,
                isLeaf: true,
              },
            ],
            key: 1533,
            isLeaf: false,
          },
          {
            title: "Structure of lower extremity",
            initial: "s750",
            description: "",
            children: [
              {
                title: "Structure of thigh",
                initial: "s7500",
                description: "",
                children: [
                  {
                    title: "Bones of thigh",
                    initial: "s75000",
                    description: "",
                    children: "",
                    key: 1542,
                    isLeaf: true,
                  },
                  {
                    title: "Hip joint",
                    initial: "s75001",
                    description: "",
                    children: "",
                    key: 1543,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of thigh",
                    initial: "s75002",
                    description: "",
                    children: "",
                    key: 1544,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of thigh",
                    initial: "s75003",
                    description: "",
                    children: "",
                    key: 1545,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of thigh, other specified",
                    initial: "s75008",
                    description: "",
                    children: "",
                    key: 1546,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of thigh, unspecified",
                    initial: "s75009",
                    description: "",
                    children: "",
                    key: 1547,
                    isLeaf: true,
                  },
                ],
                key: 1541,
                isLeaf: false,
              },
              {
                title: "Structure of lower leg",
                initial: "s7501",
                description: "",
                children: [
                  {
                    title: "Bones of lower leg",
                    initial: "s75010",
                    description: "",
                    children: "",
                    key: 1549,
                    isLeaf: true,
                  },
                  {
                    title: "Knee joint",
                    initial: "s75011",
                    description: "",
                    children: "",
                    key: 1550,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of lower leg",
                    initial: "s75012",
                    description: "",
                    children: "",
                    key: 1551,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of lower leg",
                    initial: "s75013",
                    description: "",
                    children: "",
                    key: 1552,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of lower leg, other specified",
                    initial: "s75018",
                    description: "",
                    children: "",
                    key: 1553,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of lower leg, unspecified",
                    initial: "s75019",
                    description: "",
                    children: "",
                    key: 1554,
                    isLeaf: true,
                  },
                ],
                key: 1548,
                isLeaf: false,
              },
              {
                title: "Structure of ankle and foot",
                initial: "s7502",
                description: "",
                children: [
                  {
                    title: "Bones of ankle and foot",
                    initial: "s75020",
                    description: "",
                    children: "",
                    key: 1556,
                    isLeaf: true,
                  },
                  {
                    title: "Ankle joint and joints of foot and toes",
                    initial: "s75021",
                    description: "",
                    children: "",
                    key: 1557,
                    isLeaf: true,
                  },
                  {
                    title: "Muscles of ankle and foot",
                    initial: "s75022",
                    description: "",
                    children: "",
                    key: 1558,
                    isLeaf: true,
                  },
                  {
                    title: "Ligaments and fasciae of ankle and foot",
                    initial: "s75023",
                    description: "",
                    children: "",
                    key: 1559,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of ankle and foot, other specified",
                    initial: "s75028",
                    description: "",
                    children: "",
                    key: 1560,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of ankle and foot, unspecified",
                    initial: "s75029",
                    description: "",
                    children: "",
                    key: 1561,
                    isLeaf: true,
                  },
                ],
                key: 1555,
                isLeaf: false,
              },
              {
                title: "Structure of lower extremity, other specified",
                initial: "s7508",
                description: "",
                children: "",
                key: 1562,
                isLeaf: true,
              },
              {
                title: "Structure of lower extremity, unspecified",
                initial: "s7509",
                description: "",
                children: "",
                key: 1563,
                isLeaf: true,
              },
            ],
            key: 1540,
            isLeaf: false,
          },
          {
            title: "Structure of trunk",
            initial: "s760",
            description: "",
            children: [
              {
                title: "Structure of vertebral column",
                initial: "s7600",
                description: "",
                children: [
                  {
                    title: "Cervical vertebral column",
                    initial: "s76000",
                    description: "",
                    children: "",
                    key: 1566,
                    isLeaf: true,
                  },
                  {
                    title: "Thoracic vertebral column",
                    initial: "s76001",
                    description: "",
                    children: "",
                    key: 1567,
                    isLeaf: true,
                  },
                  {
                    title: "Lumbar vertebral column",
                    initial: "s76002",
                    description: "",
                    children: "",
                    key: 1568,
                    isLeaf: true,
                  },
                  {
                    title: "Sacral vertebral column",
                    initial: "s76003",
                    description: "",
                    children: "",
                    key: 1569,
                    isLeaf: true,
                  },
                  {
                    title: "Coccyx",
                    initial: "s76004",
                    description: "",
                    children: "",
                    key: 1570,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of vertebral column, other specified",
                    initial: "s76008",
                    description: "",
                    children: "",
                    key: 1571,
                    isLeaf: true,
                  },
                  {
                    title: "Structure of trunk, unspecified",
                    initial: "s76009",
                    description: "",
                    children: "",
                    key: 1572,
                    isLeaf: true,
                  },
                ],
                key: 1565,
                isLeaf: false,
              },
              {
                title: "Muscles of trunk",
                initial: "s7601",
                description: "",
                children: "",
                key: 1573,
                isLeaf: true,
              },
              {
                title: "Ligaments and fasciae of trunk",
                initial: "s7602",
                description: "",
                children: "",
                key: 1574,
                isLeaf: true,
              },
              {
                title: "Structure of trunk, other specified",
                initial: "s7608",
                description: "",
                children: "",
                key: 1575,
                isLeaf: true,
              },
              {
                title: "Structure of trunk, unspecified",
                initial: "s7609",
                description: "",
                children: "",
                key: 1576,
                isLeaf: true,
              },
            ],
            key: 1564,
            isLeaf: false,
          },
          {
            title: "Additional musculoskeletal structures related to movement",
            initial: "s770",
            description: "",
            children: [
              {
                title: "Bones",
                initial: "s7700",
                description: "",
                children: "",
                key: 1578,
                isLeaf: true,
              },
              {
                title: "Joints",
                initial: "s7701",
                description: "",
                children: "",
                key: 1579,
                isLeaf: true,
              },
              {
                title: "Muscles",
                initial: "s7702",
                description: "",
                children: "",
                key: 1580,
                isLeaf: true,
              },
              {
                title:
                  "Extra-articular ligaments, fasciae, extramuscular aponeuroses, retinacula, septa, bursae, unspecified",
                initial: "s7703",
                description: "",
                children: "",
                key: 1581,
                isLeaf: true,
              },
              {
                title:
                  "Additional musculoskeletal structures related to movement, other specified",
                initial: "s7708",
                description: "",
                children: "",
                key: 1582,
                isLeaf: true,
              },
              {
                title:
                  "Additional musculoskeletal structures related to movement, unspecified",
                initial: "s7709",
                description: "",
                children: "",
                key: 1583,
                isLeaf: true,
              },
            ],
            key: 1577,
            isLeaf: false,
          },
          {
            title: "Structures related to movement, other specified",
            initial: "s798",
            description: "",
            children: "",
            key: 1584,
            isLeaf: true,
          },
          {
            title: "Structures related to movement, unspecified",
            initial: "s799",
            description: "",
            children: "",
            key: 1585,
            isLeaf: true,
          },
        ],
        key: 1492,
        isLeaf: false,
      },
      {
        title: "SKIN AND RELATED STRUCTURES",
        initial: "s8",
        description: "",
        children: [
          {
            title: "Structure of areas of skin",
            initial: "s810",
            description: "",
            children: [
              {
                title: "Skin of head and neck region",
                initial: "s8100",
                description: "",
                children: "",
                key: 1588,
                isLeaf: true,
              },
              {
                title: "Skin of shoulder region",
                initial: "s8101",
                description: "",
                children: "",
                key: 1589,
                isLeaf: true,
              },
              {
                title: "Skin of pelvic region",
                initial: "s8102",
                description: "",
                children: "",
                key: 1590,
                isLeaf: true,
              },
              {
                title: "Skin of pelvic region",
                initial: "s8103",
                description: "",
                children: "",
                key: 1591,
                isLeaf: true,
              },
              {
                title: "Skin of lower extremity",
                initial: "s8104",
                description: "",
                children: "",
                key: 1592,
                isLeaf: true,
              },
              {
                title: "Skin of trunk and back",
                initial: "s8105",
                description: "",
                children: "",
                key: 1593,
                isLeaf: true,
              },
              {
                title: "Structure of areas of skin, other specified",
                initial: "s8108",
                description: "",
                children: "",
                key: 1594,
                isLeaf: true,
              },
              {
                title: "Structure of areas of skin, unspecified",
                initial: "s8109",
                description: "",
                children: "",
                key: 1595,
                isLeaf: true,
              },
            ],
            key: 1587,
            isLeaf: false,
          },
          {
            title: "Structure of skin glands",
            initial: "s820",
            description: "",
            children: [
              {
                title: "Sweat glands",
                initial: "s8200",
                description: "",
                children: "",
                key: 1597,
                isLeaf: true,
              },
              {
                title: "Sebaceous glands",
                initial: "s8201",
                description: "",
                children: "",
                key: 1598,
                isLeaf: true,
              },
              {
                title: "Structure of skin glands, other specified",
                initial: "s8208",
                description: "",
                children: "",
                key: 1599,
                isLeaf: true,
              },
              {
                title: "Structure of skin glands, unspecified",
                initial: "s8209",
                description: "",
                children: "",
                key: 1600,
                isLeaf: true,
              },
            ],
            key: 1596,
            isLeaf: false,
          },
          {
            title: "Structure of nails",
            initial: "s830",
            description: "",
            children: [
              {
                title: "Finger nails",
                initial: "s8300",
                description: "",
                children: "",
                key: 1602,
                isLeaf: true,
              },
              {
                title: "Toe nails",
                initial: "s8301",
                description: "",
                children: "",
                key: 1603,
                isLeaf: true,
              },
              {
                title: "Structure of nails, other specified",
                initial: "s8308",
                description: "",
                children: "",
                key: 1604,
                isLeaf: true,
              },
              {
                title: "Structure of nails, unspecified",
                initial: "s8309",
                description: "",
                children: "",
                key: 1605,
                isLeaf: true,
              },
            ],
            key: 1601,
            isLeaf: false,
          },
          {
            title: "Structure of hair",
            initial: "s840",
            description: " \n Inclusions: vellus and terminal hair",
            children: [
              {
                title: "Head hair",
                initial: "s8400",
                description:
                  " \n Inclusions: hair in ear \n Exclusions: facial hair (s8401)",
                children: "",
                key: 1607,
                isLeaf: true,
              },
              {
                title: "Facial hair",
                initial: "s8401",
                description: "",
                children: "",
                key: 1608,
                isLeaf: true,
              },
              {
                title: "Axillary hair",
                initial: "s8402",
                description: "",
                children: "",
                key: 1609,
                isLeaf: true,
              },
              {
                title: "Pubic hair",
                initial: "s8403",
                description: "",
                children: "",
                key: 1610,
                isLeaf: true,
              },
              {
                title: "Body Hair",
                initial: "s8404",
                description:
                  " \n Inclusions: torso, chest and back hair \n Exclusions: axillary hair (s8402); pubic hair (s8403)",
                children: "",
                key: 1611,
                isLeaf: true,
              },
              {
                title: "Structure of hair, other specified",
                initial: "s8408",
                description: "",
                children: "",
                key: 1612,
                isLeaf: true,
              },
              {
                title: "Structure of hair, unspecified",
                initial: "s8409",
                description: "",
                children: "",
                key: 1613,
                isLeaf: true,
              },
            ],
            key: 1606,
            isLeaf: false,
          },
          {
            title: "Skin and related structures, other specified",
            initial: "s898",
            description: "",
            children: "",
            key: 1614,
            isLeaf: true,
          },
          {
            title: "Skin and related structures, unspecified",
            initial: "s899",
            description: "",
            children: "",
            key: 1615,
            isLeaf: true,
          },
        ],
        key: 1586,
        isLeaf: false,
      },
    ],
    key: 1294,
    isLeaf: false,
  },
];
var newObjectArray = [];

const fun = (a) => {
  a.forEach((element) => {
    if (element.children != "") {
      fun(element.children);
    }
    newObjectArray.push({
      title: "(" + element.initial + ")" + " " + element.title,
      initial: element.initial,
    });
  });
};
fun(arr);
let json = JSON.stringify(newObjectArray);
var fs = require("fs");
fs.writeFile("./flatCodes.json", json, (err) => {
  if (!err) {
    console.log(err);
  }
});

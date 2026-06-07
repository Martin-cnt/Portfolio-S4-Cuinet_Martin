import workflow from '/public/img/workflow.png'
import entite from '/public/img/entite.png'
import bdd from '/public/img/BDD_phpmyadmin.png'
import route from '/public/img/route_controller.png'
import liste_commit from '/public/img/liste_commit.png'
import cdc from '/public/img/cdc_ant.png'


export const sections = {
  technique: {
    key: 'technique',
    title: 'Savoir-faire technique',
    intro: 'Cette partie présente les savoir-faire techniques acquis pendant le stage.',
    tabs: [
      { 
        slug: 'trace-1', 
        label: 'Trace 1', 
        title: "Workflow n8n de redimensionnement d'image par IA",
        image: workflow,
        legend: "Trace 1 : workflow n8n de redimensionnement d'image par IA (GPT-Image-2) — workflow entier",
        skills: [
          { label: 'intégrer une API REST', color: '#ff6b6b' },
          { label: 'transformer et exploiter des données', color: '#4dd0a0' },
          { label: 'gérer les erreurs et les réponses', color: '#64b5f6' }
        ],
        content: [
          `La trace 1 est un workflow conçu sur l'outil **n8n** (plateforme de création de workflows automatisés grâce à des nœuds), qui permet le redimensionnement d'image par IA, que j'aidéveloppé durant mon stage chez Vétoquinol. Ce workflow s'inscrit dans le sujet principal de mon stage : l'automatisation de tâches redondantes via n8n, ici appliquée au traitement automatique d'images pour les équipes marketing de l'entreprise, qui on besoin de redimensionner régulièrement des visuels aux formats et résolutions imposés par leurs supports de communication.`,
          `Nous avons choisi l'API d'OpenAI car son modèle **GPT-Image-2** accessible depuis n8n, est l'un des meilleurs modèles pour éditer une image sans altéré son contenu. La création de ce workflow a nécessité de savoir **intégrer une API REST**. Le nœud **HTTP Request** visible sur la trace 1 envoie une requête POST à l'endpoint https://api.openai.com/v1/images/edits (flèche rouge), en transmettant l'image source, les dimensions cibles et la clé d'API en header. Ce modèle se distingue d'un simple redimensionnement mécanique par sa capacité à comprendre le contenu visuel et à le réajuster intelligemment selon les contraintes données.`,
          `Le workflow est déclenché via un **Webhook** : à la réception d'une requête du site, un nœud **JavaScript** génère un objet JSON structuré pour chaque image en entrée. Un nœud **Variables** y ajoute les paramètres fixes (modèle, clé API, résolution). L'image est ensuite convertie au format attendu par OpenAI via un nœud **Convertir image**, puis fusionnée avec l'ensemble des paramètres via un nœud **Merge** avant l'appel API.`,
          `Ce workflow implique deux phases de conversion distinctes, car j'ai dû **transformer et exploiter des données** à chaque étape : l'image source est d'abord encodée en **base64** (rectangle rouge) avant l'envoi à l'API, car c'est le format attendu par OpenAI, puis la réponse retournée, également en base64, est reconvertie en fichier binaire exploitable via un nœud **Convert** (rectangle rouge). Ce traitement en deux temps était indispensable pour assurer la compatibilité entre n8n et l'API OpenAI, et le résultat final est renvoyé au site via le nœud **Respond to Webhook**.`,
          `Pour **gérer les erreurs et les réponses**, chaque étape critique du workflow est sécurisée afin de garantir la fiabilité des échanges avec l'API et d'éviter tout blocage en cas de réponse inattendue. Ce savoir-faire a été particulièrement important ici car l'API OpenAI peut retourner des erreurs variées (quota dépassé, format incorrect, timeout), qui auraient pu bloquer l'ensemble du processus. L'IA ne se contente pas de redimensionner l'image : elle réajuste le contenu pour maintenir un visuel cohérent, et peut repositionner des assets transmis en entrée à leurs emplacements appropriés dans l'image finale.`
        ]
      },

      { 
        slug: 'trace-2', 
        label: 'Trace 2', 
        title: "Entité Workflow et modélisation ORM en PHP avec Symfony - ANT",
        image: entite,
        legend: "Trace 2 : entité Workflow.php de l'application ANT — structure ORM avec ses propriétés et ses relations.",
        skills: [
          { label: 'définir et structurer des entités PHP', color: '#c084fc' },
          { label: 'utiliser le framework Symfony', color: '#fb923c' },
          { label: 'modéliser des tables et relations', color: '#FFFF00' },
          { label: 'gérer les relations entre entités', color: '#B8860B' }
        ],
        content: [
          `La trace 2 présente le code de l'entité **Workflow.php** de l'application **ANT** (Application de centralisation et sécurisation des exécutions de workflows), que j'ai développé durant mon stage. Avant ce projet, aucun outil centralisé n'existait pour gérer et déclencher les workflows n8n de l'entreprise : j'ai donc conçu l'entité **Workflow** comme l'élément central du modèle de données, sécurisant toutes les informations nécessaires à l'exécution d'un workflow et à son accès par les utilisateurs. L'application repose sur le fait d'**utiliser le framework Symfony**, dont l'architecture MVC impose une séparation entre la logique métier, la gestion des requêtes et la structure des données (routes, entités, contrôleurs...). Le fichier **Workflow.php** est une classe PHP annotée avec les attributs ORM de Doctrine, ce qui permet de mapper directement la classe à la table **workflows** en base de données sans écrire de SQL.`,
          `J'ai défini les propriétés de l'entité proprement afin de **définir et structurer des entités PHP** adaptées aux besoins métiers de Vétoquinol : **title** et **shortDescription** pour l'affichage, **generalDescription** pour le détail, **webhook_url** pour stocker l'URL du webhook n8n à déclencher lors de l'exécution, et **isVisible** pour contrôler la visibilité du workflow selon les droits des utilisateurs. Chaque propriété est annotée pour préciser son type, sa taille et ses contraintes directement dans le code. ce qui permet de créer un modèle cohérent et fonctionnel.`,
          `Cette trace illustre également la nécessité de **modéliser des tables et relations** cohérentes : j'ai définie 4 relations ORM pour couvrir l'ensemble des besoins fonctionnels. Une relation **ManyToOne** avec **TypeWorkflow** permet de catégoriser chaque workflow. Deux relations **ManyToMany** avec **Param** et **Groupe** permettent d'associer des paramètres configurables et de restreindre l'accès selon le groupe de l'utilisateur connecté. Enfin, une relation **OneToMany** avec **WorkflowExecution** conserve l'historique complet des exécutions passées.`,
          `Savoir **gérer les relations entre entités (ORM)** a été essentiel pour structurer cette base de données sans écrire de requêtes SQL manuellement. Doctrine génère automatiquement les jointures et les clés étrangères à partir des annotations PHP, ce qui simplifie le développement tout en maintenant l'intégrité des données. Le fait d'**utiliser le framework Symfony**, m'a permis de développer rapidement des fonctionnalités complexes comme le contrôle d'accès par groupe ou le suivi des exécutions.`,
        ],
      },
      {
        slug: 'trace-3', 
        label: 'Trace 3', 
        title: "Schéma de la base de données de l'application ANT — phpMyAdmin",
        image: bdd,
        legend: "Trace 3 : schéma relationnel de la base de données de l'application ANT — tables et relations générées par Doctrine via phpMyAdmin.",
        skills: [
          { label: 'modéliser des tables et relations', color: '#A9A9A9' },
          { label: 'administrer une base de données via phpMyAdmin', color: '#f472b6' },
          { label: 'générer et migrer une base de données avec Doctrine', color: '#0000FF' }
        ],
        content: [
          `La trace 3 présente le schéma relationnel complet de la base de données de l'application **ANT**, visualisé via **phpMyAdmin**. Avant ce projet, aucune base de données structurée n'existait pour centraliser les workflows de Vétoquinol : j'ai du concevoir l'ensemble des tables de 0 pour répondre aux besoins de l'application, notamment la gestion des utilisateurs, des groupes, des paramètres et des exécutions. Ce schéma montre les entités PHP définies dans Symfony, traduites en tables SQL par Doctrine.`,
          `Le schéma de la trace 3 comment j'ai conçu la base de données avant de développer l'application : 11 tables interconnectées par des clés étrangères, des types de champs choisis selon les contraintes métier (**tinyint(1)** pour les booléens, **varchar(500)** pour les URLs de webhook, **longtext** pour les descriptions et messages d'erreur, ...). Savoir **modéliser des tables et relations** m'a été indispensable pour structurer une base cohérente, notamment via les tables de jointure **groupe_workflow**, **workflow_param** et **workflow_variable** que Doctrine génère automatiquement pour les relations ManyToMany.`,
          `J'ai utilisé **phpMyAdmin** tout au long de mon stage pour **administrer une base de données via phpMyAdmin** : j'ai pu visualiser l'état réel des tables, vérifier que les relations générées par Doctrine correspondaient bien au modèle attendu, et contrôler les données lors des phases de test. L'outil a notamment permis de détecter rapidement des incohérences entre le modèle PHP et la structure SQL réelle, ce qui a facilité le débogage de plusieurs fonctionnalités.`,
          `La table **doctrine_migration_versions**, encadrée en rouge sur la trace 3, montre la capacité à **générer et migrer une base de données avec Doctrine** tout au long du développement. À chaque évolution du modèle de données, Doctrine produit automatiquement un fichier de migration SQL, que je pouvais appliquer en une commande. Cette table  permet de conserver l'historique complet des migrations exécutées, et de garantir ainsi la cohérence entre le code PHP et la structure réelle de la base.`
        ],
      },
      { 
        slug: 'trace-4', 
        label: 'Trace 4', 
        title: "Contrôleur d'exécution des workflows — WorkflowExecutionController.php",
        image: route,
        legend: "Trace 4 : WorkflowExecutionController.php de l'application ANT — routes, logique d'exécution et appel webhook vers n8n.",
        skills: [
          { label: 'créer des routes et contrôleurs Symfony', color: '#7FFF00' },
          { label: 'utiliser le framework Symfony', color: '#fb923c' },
          { label: 'intégrer une API REST', color: '#ff6b6b' },
          { label: 'gérer les erreurs et les réponses', color: '#64b5f6' }
        ],
        content: [
          `La trace 4 présente le fichier **WorkflowExecutionController.php** de l'application **ANT**, développée durant mon stage. Ce contrôleur est le point central de l'exécution des workflows : il expose deux routes : l'une pour consulter l'historique des exécutions, l'autre pour déclencher un workflow en appelant le webhook n8n associé à chaque workflow. Ces 2 routes sont directement liées aux fonctionnalités de l'utilisateur. `,
          `J'ai également pu **utiliser le framework Symfony** dans la structure de ce fichier : le contrôleur étend **AbstractController**, les dépendances sont injectées directement en paramètres des méthodes, et l'architecture MVC est respectée. La logique métier complexe est déléguée aux services **ServiceWorkflowExecution** et **ServiceWorkflow**, ce qui permet au contrôleur de ne faire que son rôle de coordination.`,
          `Le développement de mon application m'a permis de créer des routes et contrôleurs Symfony. La route **/historique** (ligne 17) utilise un point d'entrée GET qui récupère les exécutions via le service dédié, en tenant compte du rôle de l'utilisateur connecté grâce à **isGranted('ROLE_ADMIN')**. La route **/workflow/execute/{id}** (ligne 30) reçoit directement l'entité **Workflow** correspondante par injection automatique, illustrant le système de routing et de résolution d'entités de Symfony.`,
          `Ligne 41, j'envoie une requête POST vers l'URL stockée dans **webhook_url** de l'entité via le client HTTP Symfony, ce qui a nécessité de savoir **intégrer une API REST** : c'est ce mécanisme qui constitue le lien entre l'application ANT et n8n, permettant à l'utilisateur de déclencher un workflow directement depuis l'interface sans connaître les détails techniques de l'appel.`,
          `L'ensemble de cet appel est encadré par un bloc try/catch qui montre la nécessité de **gérer les erreurs et les réponses** dans un contexte d'appel à un service externe (n8n). En cas d'échec, l'erreur est interceptée, le message d'exception est stocké via **setErrorMessage**, et l'exécution est marquée en erreur. Dans tous les cas, qu'il y ait succès ou échec, l'objet **WorkflowExecution** est persisté en base via **$manager->persist()** et **$manager->flush()**, garantissant un historique complet et fiable de toutes les tentatives d'exécution.`
        ],
      },
      { 
        slug: 'bilan_des_savoir-faire_techniques', 
        label: 'Bilan et évaluation', 
        title: 'Bilan des savoir-faire techniques' 
      }
    ],
    bilan: [
      {
        title: "Développer une application web avec PHP Symfony",
        synthese: `Les savoir-faire élémentaires mobilisés autour de ce savoir-faire général sont **définir et structurer des entités PHP**, **utiliser le framework Symfony**, **modéliser des tables et relations**, **gérer les relations entre entités** et **créer des routes et contrôleurs Symfony**, mis en œuvre respectivement dans les traces 2 et 4. Ces compétences ont été apprises intégralement durant le stage, sans aucune base préalable en PHP ou Symfony : la courbe d'apprentissage a été importante, notamment pour comprendre l'architecture MVC, le système d'injection de dépendances et le fonctionnement de Doctrine ORM. Le développement complet de l'application ANT a cependant permis de consolider rapidement ces acquis en les appliquant sur un projet réel et complexe.`,
        evaluation: `Avant le stage, je n'avais aucune expérience avec Symfony et PHP. Aujourd'hui, je me considère à un niveau correct voire bon : je suis capable de concevoir et développer une application web complète avec Symfony, de modéliser un schéma de base de données via Doctrine, et de structurer un projet selon les bonnes pratiques MVC. Des aspects comme la sécurité avancée ou l'optimisation des performances restent encore à approfondir, mais l'essentiel du framework est désormais maîtrisé.`
      },
      {
        title: "Concevoir et gérer une base de données avec phpMyAdmin",
        synthese: `Les savoir-faire élémentaires associés sont **modéliser des tables et relations**, **administrer une base de données via phpMyAdmin** et **générer et migrer une base de données avec Doctrine**, visibles sur la trace 3. Si SQL était déjà connu avant le stage grâce aux cours, phpMyAdmin et la gestion de migrations via Doctrine étaient en revanche totalement nouveaux. La principale difficulté a résidé dans la cohérence entre le modèle PHP et la structure SQL réelle, notamment lors des évolutions du schéma en cours de développement.`,
        evaluation: `Mon niveau est passé de débutant à assez bon, car je ne connaissais pas phpMyAdmin, mais je savais gérer une base de données simple : je maîtrise désormais la conception d'un schéma relationnel complet, l'utilisation de phpMyAdmin pour administrer et déboguer une base de données, et le cycle de migration Doctrine. Il reste des aspects à approfondir comme l'optimisation des requêtes SQL sur de gros volumes de données.`
      },
      {
        title: "Intégrer et exploiter des API / services externes",
        synthese: `Les savoir-faire élémentaires associés sont **intégrer une API REST**, **transformer et exploiter des données**, **gérer les erreurs et les réponses** et **appeler un service externe via HTTP**, présents dans les traces 1 et 4. Une légère base existait avant le stage, mais l'intégration de l'API OpenAI dans n8n et l'appel de webhooks n8n depuis Symfony ont représenté un niveau de complexité nettement supérieur à ce qui avait été pratiqué auparavant. La gestion du format base64 et la robustesse des appels HTTP en cas d'erreur ont été les points les plus techniques à maîtriser.`,
        evaluation: `Mon niveau est passé d'avoir quelques notions et applications à un niveau plutôt correct : je suis capable d'intégrer une API REST dans un projet, de traiter les données échangées et de gérer les cas d'erreur de manière fiable. L'intégration d'APIs plus complexes nécessiterait encore de la pratique, mais les fondamentaux sont acquis.`
      },
      {
        title: "Concevoir et automatiser des workflows métiers avec n8n",
        synthese: `Les savoir-faire élémentaires associés sont **intégrer une API REST**, **transformer et exploiter des données** et **gérer les erreurs et les réponses**, illustrés par la trace 1. n8n était un outil totalement inconnu avant le stage, découvert et appris entièrement en autonomie. La prise en main a été relativement rapide grâce à l'interface visuelle de l'outil, mais la complexité est montée lors de la gestion des formats de données et de l'intégration avec l'API OpenAI.`,
        evaluation: `Avant le stage, je n'avais jamais conçu de workflow. Aujourd'hui, mon niveau est correct : je suis capable de concevoir et déployer un workflow n8n fonctionnel, intégrant des appels API, des transformations de données et une gestion des erreurs. La maîtrise des cas les plus avancés comme les workflows conditionnels complexes ou le débogage de longues chaînes de nœuds reste encore à consolider.`
      }
    ],
  },
  suivi: {
    key: 'suivi',
    title: 'Suivi de projet',
    intro: 'Cette partie présente les savoir-faire de suivi de projet développés pendant le stage.',
    tabs: [
      { 
        slug: 'trace-5', 
        label: 'Trace 5', 
        title: "Historique des commits GitLab — application ANT",
        image: liste_commit,
        legend: "Trace 5 : historique des commits GitLab de l'application ANT — progression du développement du 20 au 26 mai 2026.",
        skills: [
          { label: 'utiliser GitLab pour versionner le projet', color: '#ff6b6b' },
          { label: 'découper et organiser les tâches', color: '#4dd0a0' },
          { label: "assurer l'amélioration continue", color: '#64b5f6' }
        ],
        content: [
          `La trace 5 présente l'historique des commits GitLab du projet **ANT**, sur la période du 20 au 26 mai 2026, soit en milieu de projet, le développement et les commits ayant commencé le 12 mai 2026. Cet extrait montre la mise en pratique d'**utiliser GitLab pour versionner le projet** : chaque modification importante du code est enregistrée sous forme de commit, constituant ainsi un historique complet et traçable de l'évolution du projet.`,
          `Les 4 dates encadrées en bleu (20, 21, 22 et 26 mai) montrent une activité régulière et soutenue, avec plusieurs commits par jour. Cette cadence reflète une organisation du travail que j'ai mise en place : le projet a progressé de façon continue, permettant de maintenir une vision de l'avancement à tout moment et de revenir précisément à un état précédent si nécessaire. GitLab a ainsi joué le rôle d'outil central de suivi tout au long du développement.`,
          `Chaque fonctionnalité du projet ANT a été isolée dans un commit ciblé et distinct, comme par exemple le commit du 20 mai "**tableau CRUD Admin resize pour petit écran**" encadré en rouge. J'ai appliqué cette approche de **découper et organiser les tâches** tout au long du projet, pour faciliter le suivi de l'avancement, limiter les problèmes liés aux modifications (meilleurs suivis) et pour rendre l'historique lisible et exploitable.`,
          `En cours de développement, certains commits ne correspondent pas à l'ajout d'une fonctionnalité mais à une amélioration du code existant. Le 22 mai, le commit"**changement repo en service pour historique**" restructure la logique d'accès aux données pour respecter les bonnes pratiques de l'architecture Symfony utilisée par l'entreprise. Ce refactoring montre le fait que j'ai du**assurer l'amélioration continue** : je n'ai pas implémenté une nouvelle fonctionnalité, mais amélioré une méthode déjà existante pour la rendre cohérente et maintenable.`,
          `Dans la même logique, le 26 mai, le commit "**admin refonc**" marque une refonte complète de l'interface d'administration, que j'ai repensé pour mieux répondre aux besoins identifiés au fil du développement. Ces deux commits montrent comment j'ai fait évoluer le projet de manière itérative en intégrant les retours et les nouvelles contraintes rencontrées, plutôt que de bloquer l'application à sa conception initiale, sans jamais revenir en arrière.`
        ]
      },
      { 
        slug: 'trace-6', 
        label: 'Trace 6', 
        title: "Cahier des charges de l'application ANT",
        image: cdc,
        legend: "Trace 6 : extrait du cahier des charges de l'application ANT — définition du projet, objectifs, enjeux et périmètre.",
        skills: [
          { label: 'analyser les besoins métier', color: '#a78bfa' },
          { label: 'rédiger un cahier des charges structuré', color: '#0000CD' },
          { label: 'définir les contraintes et le périmètre', color: '#FF00FF' },
          { label: "structurer un projet en l'absence d'existant", color: '#f59e0b' }
        ],
        content: [
          `Avant toute phase de développement, aucun outil centralisé n'existait chez Vétoquinol pour gérer les workflows n8n,comme l'indique la section **2.5** : "Aucun élément existant à ce jour". La trace 6 est l'extrait du cahier des charges que j'ai rédigé en début de stage pour **structurer un projet en l'absence d'existant**, en posant les bases du projet à partir des besoins exprimés par l'entreprise.`,

          `J'ai du **analyser les besoins métier** avec mon maître de stage et Manuel (alternant en developpement d'applications spécifiques) pour créer la section **2.1 Vision** et définir les objectifs de l'entreprise : centraliser tous les workflows, contrôler les accès et assurer un suivi des exécutions. Ces besoins ont ensuite été traduits en objectifs concrets, notamment la restriction d'exécution aux utilisateurs autorisés et la simplicité des interfaces.`,

          `La trace 6 montre aussi le fait quej'ai du **rédiger un cahier des charges structuré** en me basant sur un ancien cahier des charges pour reprendre sa structure. Le document est organisé en  plusieurs sections (vision, enjeux, périmètre, objectif fonctionnel), chacune répondant à une question précise. La section **2.2 Enjeux** synthétise les gains attendus (gain de temps, facilité d'accès, contrôle et sécurité), tandis que la section **2.4 Objectif fonctionnel** définit ce que l'application doit permettre de voir, déclencher et suivre les workflows dans une application sécurisée. La section **2.4.1** détaille même la structure attendue de chaque workflow, posant les bases de la modélisation de données à venir.`,

          `Enfin, les sections **2.3 Périmètre** et **2.4 Objectif fonctionnel** illustrent ma capacité à **définir les contraintes et le périmètre** du projet : le périmètre est limité par la problématique d'accessibilité, de sécurité et de dispersion des workflows n8n, garantissant un cadre précis avant d'entrer dans la phase de développement.`
        ]
      },
      { slug: 'trace-7', label: 'Trace 7', title: 'Communication' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan' }
    ]
  },
  integration: {
    key: 'integration',
    title: 'Intégration en entreprise',
    intro: "Cette partie présente les savoir-faire liés à l'intégration dans l'entreprise",
    tabs: [
      { slug: 'trace-8', label: 'Trace 8', title: 'Découverte du cadre' },
      { slug: 'trace-9', label: 'Trace 9', title: 'Premiers livrables' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan' }
    ]
  }
}

export function getSection(sectionKey) {
  return sections[sectionKey]
}

export function getEntry(sectionKey, slug) {
  const section = getSection(sectionKey)
  if (!section) return null

  const entry = section.tabs.find((tab) => tab.slug === slug)
  if (!entry) return null

  if (section.bilan && entry.slug === slug && !entry.content && !entry.image) {
    return { ...entry, bilan: section.bilan, sectionKey }
  }

  return { ...entry, sectionKey }
}
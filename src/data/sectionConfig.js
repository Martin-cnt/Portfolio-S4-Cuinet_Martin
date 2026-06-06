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
        image: 'public/img/workflow.png',
        legend: "Trace 1 : workflow n8n de redimensionnement d'image par IA (GPT-Image-2) — workflow entier",
        skills: [
          { label: 'intégrer une API REST', color: '#ff6b6b' },
          { label: 'transformer et exploiter des données', color: '#4dd0a0' },
          { label: 'gérer les erreurs et les réponses', color: '#64b5f6' }
        ],
        content: [
          `La trace 1 est un workflow conçu sur l'outil **n8n**, qui permet le redimensionnement d'image par IA, développé durant le stage chez Vétoquinol. Ce workflow s'inscrit dans le sujet principal du stage : l'automatisation de tâches redondantes via n8n, ici appliquée au traitement automatique d'images pour les équipes marketing de l'entreprise, qui avaient besoin de redimensionner régulièrement des visuels aux formats et résolutions imposés par leurs supports de communication.`,
          `L'API d'OpenAI a été retenue car elle est la seule à exposer le modèle **GPT-Image-2** accessible depuis n8n, ce qui a nécessité de savoir **intégrer une API REST**. Le nœud **HTTP Request** visible sur la trace 1 envoie une requête POST à l'endpoint https://api.openai.com/v1/images/edits (flèche rouge), en transmettant l'image source, les dimensions cibles et la clé d'API en header. Ce modèle se distingue d'un simple redimensionnement mécanique par sa capacité à comprendre le contenu visuel et à le réajuster intelligemment selon les contraintes données.`,
          `Le workflow est déclenché via un **Webhook** : à la réception d'une requête du site, un nœud **JavaScript** génère un objet JSON structuré pour chaque image en entrée. Un nœud **Variables** y ajoute les paramètres fixes (modèle, clé API, résolution). L'image est ensuite convertie au format attendu par OpenAI via un nœud **Convertir image**, puis fusionnée avec l'ensemble des paramètres via un nœud **Merge** avant l'appel API.`,
          `Ce workflow implique deux phases de conversion distinctes, car j'ai dû **transformer et exploiter des données** à chaque étape : l'image source est d'abord encodée en **base64** (rectangle rouge) avant l'envoi à l'API, car c'est le format attendu par OpenAI, puis la réponse retournée — également en base64 — est reconvertie en fichier binaire exploitable via un nœud **Convert** (rectangle rouge). Ce traitement en deux temps était indispensable pour assurer la compatibilité entre n8n et l'API OpenAI, et le résultat final est renvoyé au site via le nœud **Respond to Webhook**.`,
          `Pour **gérer les erreurs et les réponses**, chaque étape critique du workflow est sécurisée afin de garantir la fiabilité des échanges avec l'API et d'éviter tout blocage en cas de réponse inattendue. Ce savoir-faire a été particulièrement important ici car l'API OpenAI peut retourner des erreurs variées (quota dépassé, format incorrect, timeout), qui auraient pu bloquer l'ensemble du processus sans une gestion appropriée. L'IA ne se contente pas de redimensionner mécaniquement : elle réajuste le contenu pour maintenir un visuel cohérent, et peut repositionner des assets transmis en entrée à leurs emplacements appropriés dans l'image finale.`
        ]
      },

      { 
        slug: 'trace-2', 
        label: 'Trace 2', 
        title: "Entité Workflow et modélisation ORM en PHP avec Symfony - ANT",
        image: 'public/img/entite.png',
        legend: "Trace 2 : entité Workflow.php de l'application ANT — structure ORM avec ses propriétés et ses relations.",
        skills: [
          { label: 'définir et structurer des entités PHP', color: '#c084fc' },
          { label: 'utiliser le framework Symfony', color: '#fb923c' },
          { label: 'modéliser des tables et relations', color: '#FFFF00' },
          { label: 'gérer les relations entre entités', color: '#B8860B' }
        ],
        content: [
          `La trace 2 présente le code de l'entité **Workflow.php** de l'application **ANT** (Application de centralisation et sécurisation des exécutions de workflows), développée durant le stage chez Vétoquinol. Avant ce projet, aucun outil centralisé n'existait pour gérer et déclencher les workflows n8n de l'entreprise : l'entité **Workflow** a donc été conçue comme le cœur du modèle de données, structurant toutes les informations nécessaires à l'exécution sécurisée d'un workflow et à son exposition aux utilisateurs. L'application repose sur le fait d'**utiliser le framework Symfony (MVC)**, dont l'architecture MVC impose une séparation claire entre la logique métier, la gestion des requêtes et la structure des données. Le fichier **Workflow.php** est une classe PHP annotée avec les attributs ORM de Doctrine, ce qui permet de mapper directement la classe à la table **workflows** en base de données sans écrire de SQL.`,
          `Les propriétés de l'entité ont été définies avec soin afin de **définir et structurer des entités PHP** adaptées aux besoins métiers de Vétoquinol : **title** et **shortDescription** pour l'affichage, **generalDescription** pour le détail, **webhook_url** pour stocker l'URL du webhook n8n à déclencher lors de l'exécution, et **isVisible** pour contrôler la visibilité du workflow selon les droits des utilisateurs. Chaque propriété est annotée pour préciser son type, sa taille et ses contraintes directement dans le code, ce qui garantit un modèle cohérent et maintenable.`,
          `Cette trace illustre également la nécessité de **modéliser des tables et relations** cohérentes : quatre relations ORM ont été définies pour couvrir l'ensemble des besoins fonctionnels. Une relation **ManyToOne** avec **TypeWorkflow** permet de catégoriser chaque workflow. Deux relations **ManyToMany** avec **Param** et **Groupe** permettent respectivement d'associer des paramètres configurables et de restreindre l'accès selon le groupe de l'utilisateur connecté. Enfin, une relation **OneToMany** avec **WorkflowExecution** conserve l'historique complet des exécutions passées.`,
          `Savoir **gérer les relations entre entités (ORM)** a été essentiel pour structurer cette base de données sans écrire de requêtes SQL manuellement. Doctrine génère automatiquement les jointures et les clés étrangères à partir des annotations PHP, ce qui simplifie considérablement le développement tout en maintenant l'intégrité des données. Ce choix architectural, rendu possible par la maîtrise d'**utiliser le framework Symfony (MVC)**, a permis de développer rapidement des fonctionnalités complexes comme le contrôle d'accès par groupe ou le suivi des exécutions.`,
        ],
      },
      {
        slug: 'trace-3', 
        label: 'Trace 3', 
        title: "Schéma de la base de données de l'application ANT — phpMyAdmin",
        image: 'public/img/BDD_phpmyadmin.png',
        legend: "Trace 3 : schéma relationnel de la base de données de l'application ANT — tables et relations générées par Doctrine via phpMyAdmin.",
        skills: [
          { label: 'modéliser des tables et relations', color: '#A9A9A9' },
          { label: 'administrer une base de données via phpMyAdmin', color: '#f472b6' },
          { label: 'générer et migrer une base de données avec Doctrine', color: '#0000FF' }
        ],
        content: [
          `La trace 3 présente le schéma relationnel complet de la base de données de l'application **ANT**, visualisé via **phpMyAdmin**. Avant ce projet, aucune base de données structurée n'existait pour centraliser les workflows de Vétoquinol : l'ensemble des tables a donc été conçu de 0 pour répondre aux besoins de l'application, notamment la gestion des utilisateurs, des groupes, des paramètres et des exécutions. Ce schéma est le reflet direct des entités PHP définies dans Symfony, traduites en tables SQL par Doctrine.`,
          `Le schéma de la trace 3 reflète un travail rigoureux de conception : onze tables interconnectées par des clés étrangères explicites, des types de champs choisis selon les contraintes métier (**tinyint(1)** pour les booléens, **varchar(500)** pour les URLs de webhook, **longtext** pour les descriptions et messages d'erreur). Savoir **modéliser des tables et relations** a été indispensable pour structurer une base cohérente, notamment via les tables de jointure **groupe_workflow**, **workflow_param** et **workflow_variable** que Doctrine génère automatiquement pour les relations ManyToMany.`,
          `**phpMyAdmin** a été utilisé tout au long du stage pour **administrer une base de données via phpMyAdmin** : visualiser l'état réel des tables, vérifier que les relations générées par Doctrine correspondaient bien au modèle attendu, et contrôler les données lors des phases de test. L'outil a notamment permis de détecter rapidement des incohérences entre le modèle PHP et la structure SQL réelle, ce qui a facilité le débogage de plusieurs fonctionnalités.`,
          `La table **doctrine_migration_versions**, encadrée en rouge sur la trace 3, illustre la capacité à **générer et migrer une base de données avec Doctrine** tout au long du développement. À chaque évolution du modèle de données, Doctrine produit automatiquement un fichier de migration SQL qu'une seule commande suffit à appliquer — cette table conservant l'historique complet des migrations exécutées, garantissant ainsi la cohérence permanente entre le code PHP et la structure réelle de la base.`
        ],
      },
      { 
        slug: 'trace-4', 
        label: 'Trace 4', 
        title: "Contrôleur d'exécution des workflows — WorkflowExecutionController.php",
        image: 'public/img/route_controller.png',
        legend: "Trace 4 : WorkflowExecutionController.php de l'application ANT — routes, logique d'exécution et appel webhook vers n8n.",
        skills: [
          { label: 'créer des routes et contrôleurs Symfony', color: '#7FFF00' },
          { label: 'utiliser le framework Symfony', color: '#fb923c' },
          { label: 'intégrer une API REST', color: '#ff6b6b' },
          { label: 'gérer les erreurs et les réponses', color: '#64b5f6' }
        ],
        content: [
          `La trace 4 présente le fichier **WorkflowExecutionController.php** de l'application **ANT**, développée durant le stage chez Vétoquinol. Ce contrôleur est le point central de l'exécution des workflows : il expose deux routes distinctes, l'une pour consulter l'historique des exécutions, l'autre pour déclencher un workflow en appelant le webhook n8n associé. C'est ici que la logique métier de l'application prend tout son sens, en orchestrant les interactions entre l'utilisateur, la base de données et les services externes.`,
          `La maîtrise de **utiliser le framework Symfony** est particulièrement visible dans la structure de ce fichier : le contrôleur étend **AbstractController**, les dépendances sont injectées directement en paramètres des méthodes, et l'architecture MVC est strictement respectée. La logique métier complexe est déléguée aux services **ServiceWorkflowExecution** et **ServiceWorkflow**, ce qui maintient le contrôleur lisible et concentré sur son rôle de coordination.`,
          `Savoir **créer des routes et contrôleurs Symfony** a été au cœur du développement d'ANT. La route **/historique** (ligne 17) expose un point d'entrée GET qui récupère les exécutions via le service dédié, en tenant compte du rôle de l'utilisateur connecté grâce à **isGranted('ROLE_ADMIN')**. La route **/workflow/execute/{id}** (ligne 30) reçoit directement l'entité **Workflow** correspondante par injection automatique, illustrant la puissance du système de routing et de résolution d'entités de Symfony.`,
          `Ligne 41, j'envoie une requête POST vers l'URL stockée dans **webhook_url** de l'entité via le client HTTP Symfony, ce qui a nécessité de savoir **intégrer une API REST** : c'est ce mécanisme qui constitue le pont entre l'application ANT et n8n, permettant à l'utilisateur de déclencher un workflow directement depuis l'interface sans connaître les détails techniques de l'appel.`,
          `L'ensemble de cet appel est encadré par un bloc try/catch qui illustre la nécessité de **gérer les erreurs et les réponses** dans un contexte d'intégration avec un service externe. En cas d'échec, l'erreur est interceptée, le message d'exception est stocké via **setErrorMessage**, et l'exécution est marquée en erreur. Dans tous les cas, qu'il y ait succès ou échec, l'objet **WorkflowExecution** est persisté en base via **$manager->persist()** et **$manager->flush()**, garantissant un historique complet et fiable de toutes les tentatives d'exécution.`
        ],
      },
      { 
        slug: 'bilan des savoir-faire techniques', 
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
      { slug: 'trace-5', label: 'Trace 5', title: 'Planification' },
      { slug: 'trace-6', label: 'Trace 6', title: "Suivi d'avancement" },
      { slug: 'trace-7', label: 'Trace 7', title: 'Communication' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan' }
    ]
  },
  integration: {
    key: 'integration',
    title: 'Intégration en entreprise',
    intro: "Cette partie présente les savoir-faire liés à l'intégration dans l'entreprise et le retour d'expérience.",
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
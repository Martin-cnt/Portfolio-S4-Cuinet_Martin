<template>
  <section class="home-page">
    <header class="section-hero card">
      <h1>Présentation du site</h1>
      <p>Ce site présente une description et <strong>une analyse des savoir-faire </strong> techniques, 
        du suivi de projet et de l'intégration en entreprise, acquis lors de mon stage de 
        deuxième année de BUT Informatique, effectué chez Vétoquinol du 7 avril au 11 juin
         2026.</p><br>
      <p>La navigation entre les différentes parties du site se fait via le menu de navigation à gauche (sidebar).</p>
    </header>

    <div class="section-hero card">
      <h1>Contexte</h1>
      <img src="/logo_veto.png" alt="Vétoquinol" class="company-logo">

      <p><strong>Vétoquinol</strong> est une entreprise pharmaceutique spécialisée dans la santé animale, 
        fondée en 1933 et basée à Magny Vernois, en France. Elle développe, fabrique et commercialise 
        des <strong>médicaments vétérinaires</strong> pour les animaux de compagnie, ainsi que pour les animaux de ferme.
      </p>
      <br>
      <p> J’ai effectué mon stage au sein de la <strong>Direction des Systèmes d’Information (DSI)</strong> de l’entreprise. Ce service est chargé de la gestion, du maintien et de l’évolution des infrastructures et des applications informatiques utilisées au quotidien par les différents services du groupe. Au cours de cette période, j’ai été intégré à l’équipe de "<strong>Développement d’applications spécifiques</strong>", dont mon maitre de stage Olivier LEMPERLE en est le responsable. J’ai ausssi collaboré avec Nicolas, Manuel (alternant) et Salomé (alternante), qui sont tous les 3 développeurs  d’applications spécifiques. J'ai travaillé dans les bureaux de l'équipe, et avec un ordinateur portable de l'entreprise.</p><br>
      <p>Mon sujet de stage était <strong>le développement , test, documentation de modules N8N en langage Python Avec des appels de type REST, ainsi que le développement d'une application de centralisation et de sécurisation de l'exécution des workflows</strong>. J’ai été amené à reprendre la structure de certains workflows existants, ce qui m’a demandé de m’adapter au code déjà en place, mais j’ai aussi été amené à en développer de nouveaux à partir de zéro. Concernant l’application, aucun existant n’était disponible au début du projet. J’ai donc dû concevoir l’ensemble de la solution depuis le départ, en prenant en charge aussi bien la conception que le développement des différentes fonctionnalités.</p><br>
      <p>La réalisation de mon sujet a pour objectif de créer des workflows pour <strong>automatiser certaines tâches redondantes</strong> présentes dans différents services de l’entreprise. Cela permet de gagner du temps, de limiter les erreurs et d’améliorer l’efficacité des processus internes. Et concernant l’application, elle permet de <strong>centraliser</strong> ces workflows et de faciliter leur <strong>accès</strong> et leur <strong>exécution</strong> pour l’ensemble des employés de Vetoquinol.</p>
    </div>

    <div class="section-hero card">
      <h1>Synthèse des savoir-faire</h1>
      <p>Voici une synthèse des savoir-faire que j’ai pu acquérir et développer au cours de mon stage, classés en trois catégories : technique, suivi de projet et intégration en entreprise.</p><br>
      <h3><strong>Savoir-faire techniques :</strong></h3>
      <ul>
        <li><strong><a href="/technique/trace-3">Développer une application web avec PHP Symfony</a></strong> — développement de fonctionnalités backend structurées en MVC, routes, contrôleurs, services, gestion des formulaires et échanges avec la base de données pour répondre aux besoins métiers.</li>
        <li><strong>Concevoir et gérer une base de données avec phpMyAdmin</strong> — modélisation de bases de données relationnelles, rédaction de requêtes SQL et administration pour assurer la cohérence et la fiabilité des données applicatives.</li>
        <li><strong>Intégrer et exploiter des API / services externes</strong> — connexion de services via API REST et Webhooks, transformation des données retournées et gestion des erreurs pour garantir la fiabilité des échanges entre systèmes.</li>
        <li><strong>Concevoir et automatiser des workflows métiers</strong> — conception de workflows automatisés avec n8n, enchaînement de tâches, conditions et triggers connectant différentes sources pour automatiser des processus redondants.</li>
      </ul><br>

      <h3><strong>Savoir-faire en suivi de projet :</strong></h3>
      <ul>
        <li><strong>Construire un projet à partir de zéro grâce à un cahier des charges</strong> — analyse des besoins, rédaction d'un cahier des charges structuré, définition des objectifs et contraintes, maquettes Figma pour visualiser l'interface avant le développement.</li>
        <li><strong>Organiser et suivre le projet avec GitLab</strong> — mise en place du dépôt, gestion des versions (commits, branches) et suivi de l'évolution du projet.</li>
        <li><strong>Assurer la cohérence entre conception et réalisation</strong> — traduction des besoins en maquettes fonctionnelles, utilisation des maquettes comme base de développement et comme base de vérification de la cohérence entre conception et réalisation.</li>
      </ul><br>

      <h3><strong>Savoir-faire d'intégration en entreprise :</strong></h3>
      <ul>
        <li><strong>S'intégrer dans un environnement technique et professionnel</strong> — adaptation aux pratiques et méthodes de travail de l'entreprise, communication avec l'équipe, et intégration dans un environnement professionnel structuré.</li>
        <li><strong>S'approprier un environnement technique inconnu</strong> — prise en main des outils et technologies de l'entreprise (Symfony, n8n, Microsoft 365), adaptation rapide à un contexte technique entièrement nouveau et capitalisation des échanges avec l'équipe.</li>
      </ul>
    </div>
  </section>

</template>

<script>
export default { name: 'Home' }
</script>

export default {
  "Data": [
    {
      "id": "playmotiv_cloud_fields_metabox_game_general",
      "title": "General",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_internalname",
              "label": "Nombre interno",
              "type": "simple",
              "component": "textinput"
            },
            {
              "id": "playmotiv_cloud_fields_game_story",
              "label": "Historia",
              "type": "simple",
              "component": "selector",
              "source": "\/wp-json\/playmotivcloud\/stories"
            },
            {
              "id": "playmotiv_cloud_fields_game_startdate",
              "label": "Fecha de inicio",
              "type": "simple",
              "component": "timepicker"
            },
            {
              "id": "playmotiv_cloud_fields_game_page_help",
              "label": "Página de ayuda",
              "type": "simple",
              "component": "textinput"
            },
            {
              "id": "playmotiv_cloud_fields_game_page_terms",
              "label": "Términos y condiciones",
              "type": "simple",
              "component": "textinput"
            },
            {
              "id": "playmotiv_cloud_fields_game_archived",
              "label": "Archivada",
              "type": "simple",
              "component": "checkbox"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_calendar",
      "title": "Calendario",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_calendar",
              "type": "simple",
              "component": "calendar"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_groupsusers",
      "title": "Grupos y usuarios",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_groupsusers",
              "type": "simple",
              "component": "groupsusers"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_kpis",
      "title": "KPIs",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_kpis",
              "type": "simple",
              "component": "kpis"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_rankings",
      "title": "Rankings",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_rankings",
              "type": "simple",
              "component": "rankings"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_awards",
      "title": "Premios",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_awards",
              "type": "simple",
              "component": "awards"
            }
          ]
        }
      ]
    },
    {
      "id": "playmotiv_cloud_fields_metabox_game_validator",
      "title": "Validador",
      "groups": [
        {
          "fields": [
            {
              "id": "playmotiv_cloud_fields_game_validated",
              "type": "simple",
              "component": "validator"
            },
            {
              "id": "playmotiv_cloud_fields_game_status",
              "type": "simple",
              "component": "gamestarter"
            }
          ]
        }
      ]
    }
  ],
  "Status": {
    "Code": "OK",
    "Reason": "",
    "Message": "Game fields config loaded"
  }
}
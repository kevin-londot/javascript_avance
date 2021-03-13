<template>
  <b-container id="app">
    <b-row>
      <b-col>
         <h3><i class="fas fa-angle-down text-muted mr-2" />{{ form._id ? 'Editer':'Créer' }} un client </h3>
        <hr />
      </b-col>
    </b-row>
     <b-card class="shadow p-3">
    <b-row>
      <b-col>
        <h4> Contact :</h4>
      <br>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">

        <b-form-group
            id="fieldset-clientfirstnameform"
            label="Prénom :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientfirstname">

            <b-form-input id="clientfirstname" v-model="form.firstname" />
          </b-form-group>

        <b-form-group
            id="fieldset-clientfunctionform"
            label="Fonction :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientfunction"
          >
            <b-form-input id="clientfunction" v-model="form.function" />
          </b-form-group>
      </b-col>
      <b-col lg="4">

        <b-form-group
            id="fieldset-clientlastnameform"
            label="Nom :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientlastname">

            <b-form-input id="clientlastname" v-model="form.lastname" />
          </b-form-group>

        <b-form-group
            id="fieldset-clientphoneform"
            label="Téléphone :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientphone"
          >
            <b-form-input id="clientphone" v-model="form.phone" />
          </b-form-group>
      </b-col>
          <b-col lg="4">

        <b-form-group
            id="fieldset-clientadddateform"
            label="Date d'ajout :"
            label-for="clientadddate">

              <b-form-datepicker 
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              id="clientadddate" v-model="form.adddate" />
          </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <b-form-group
            id="fieldset-clientemailform"
            label="Email :"
            label-cols-lg="2"
            content-cols-lg="10"
            label-for="clientemail"
          >
            <b-form-input id="clientemail" v-model="form.email" />
        </b-form-group>
      </b-col>

      <b-col lg="8">
        <b-form-group
            id="fieldset-clientsocietyform"
            label="Entreprise :"
            label-cols-lg="2"
            content-cols-lg="10"
            label-for="clientsociety"
          >
            <b-form-input id="clientsociety" v-model="form.society"  />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4> Coordonnées</h4>
      <br>
      </b-col>
    </b-row>

    <b-row>

          <b-col lg="8">
        <b-form-group
            id="fieldset-clientadress1form"
            label="Adresse 1:"
            label-cols-lg="2"
            content-cols-lg="10"
            label-for="clientadress1"
          >
            <b-form-input id="clientadress1" v-model="form.firstaddress" />
        </b-form-group>
      </b-col>

      <b-col lg="8">
        <b-form-group
            id="fieldset-clientadress2form"
            label="Adresse 2:"
            label-cols-lg="2"
            content-cols-lg="10"
            label-for="clientadress2"
          >
            <b-form-input id="clientadress2" v-model="form.secondaddress" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">

        <b-form-group
            id="fieldset-clientcodepostalform"
            label="Code postal :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientcodepostal">

            <b-form-input id="clientcodepostal" v-model="form.postalcode" />
          </b-form-group>

        <b-form-group
            id="fieldset-clientcountryform"
            label="Pays :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientcountry"
          >
            <b-form-select id="clientcountry" v-model="form.country" :options="country"></b-form-select>
          </b-form-group>
          
      </b-col>
      <b-col lg="4">

        <b-form-group
            id="fieldset-clientcityform"
            label="Ville :"
            label-cols-lg="4"
            content-cols-lg="8"
            label-for="clientcity">

            <b-form-input v-model="form.city" id="clientcity" />
          </b-form-group>
      </b-col>

    </b-row>   
      <hr>
      <b-row>
        <b-col>
          <b-button variant="danger" @click="onDeleteClient()">Supprimer</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" @click="onSaveClient()">Enregister</b-button>
        </b-col>
      </b-row>
    </b-card>  
    <pre v-if="debug" class="debug card border-primary bg-dark text-light p-4">
      Form: {{ form }}
      client (du store): {{ client }}
    </pre>
  </b-container>    
  

</template>



<script>

import { mapState, mapActions } from 'vuex'


const newClient = {
        id: 0,
        lastname: 'Do6e',
        firstname: 'Joe',
        function: 'ornithorynque',
        phone: '03 33 33 33 33',
        email : 'jeanmichel@yolo.fr',
        society: 'cloudsmart',
        firstaddress: '6 rue de je ne sais ou',
        secondaddress : 'yolo',
        postalcode: '57865',
        city : 'metz',
        country: 'France',
        adddate: new Date(),
}

// controleur du composant
export default {
  name: 'EditClient',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  //data dans un composant Vue doit être une fonction qui retourne un objet
  data() {
    return {
      debug: true,
      country: [
        { text: 'France', value: 'France'},
        { text: 'Belgique', value: 'Belgique' },
        { text: 'Luxembourg', value: 'Luxembourg' },
        { text: 'Suisse', value: 'Suisse' },
        { text: 'Italie', value: 'Italie' },
      ],
      form: {}
    }
  },
  computed: {
    ...mapState({
      client: state => state.client.client
    }),
  },
  methods: {
    // mapActions permet d'accéder directement aux actions du store depluis un composant
    //map this.getBill(data) avec this.$store.dispatch('bill/getBill', data)
    ...mapActions('client', ['getClient', 'saveClient', 'deleteClient']),
    


    onDeleteClient(){

      // on appelle la méthode du store (grâce à mapActions)
      //on pourrait également appeler this.$store.dispatch('bill/deleteBill', this.form.id)
      this.deleteClient(this.form._id)
      
      //une fois la donnée enregistrée dans le store 
      //je redirige l'utilisateur vers la liste avec le router
      this.$router.push({ name: 'clients' })
    },

    onSaveClient(){
      
      // on appelle la méthode du store (grâce à mapActions)
      //on pourrait également appeler this.$store.dispatch('bill/saveBill', this.form)
      this.saveClient( this.form ).then(()=> {
        //une fois la donnée enregistrée dans le store 
        //je redirige l'utilisateur vers la liste avec le router
        this.$router.push({ name: 'clients' })  
      })

    }
  },
  created() {
    //se déclenche à l'instantiation du composant
    //en fait dès qu'on arrive sur la route editbill
    if(!this.id || this.id == 0 || this.id == -1) {
      this.form = { ...newClient }
    } else {
      this.getClient(this.id).then(()=>{
        this.form = this.client
      })
    }
  }
}
</script>

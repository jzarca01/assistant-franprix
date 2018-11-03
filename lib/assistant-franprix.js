const FranprixApi = require("franprix-api")
const franprix = new FranprixApi()

class AssistantFranprix {
  constructor({
    login,
    password
  }) {
    this.login = login
    this.password = password
  }

  init(plugins) {
    this.plugins = plugins
    if (!this.login || !this.password) {
      return Promise.reject('[assistant-franprix] Erreur : vous devez configurer ce plugin !')
    }
    return Promise.resolve(this)
  }

  async getSolde() {
    try {
      await franprix.signIn(this.login, this.password)
      const profile = await franprix.getMyInfos()
      const cagnotte = profile.points_fidelity.balance
      console.log('cagnotte', cagnotte)
      if (this.plugins.notifier) {
        const [euro, centimes] = cagnotte.toString().split('.')
        this.plugins.notifier.action(`Votre cagnotte s'élève à ${parseInt(euro) > 0 ? `${euro} euros et` : ''} ${centimes} centimes`)
      }
      return cagnotte
    } catch (err) {
      console.log(err)
    }
  }

  async getPromos() {
    try {
      await franprix.signIn(this.login, this.password)
      const offers = await franprix.getAvailableCoupons()

      if (offers.length) {
        const offersId = offers.map(offer => offer.id);
        await franprix.addCouponsToCard(offersId)
        if (this.plugins.notifier)
          this.plugins.notifier.action(`${offers.length} offres ont été ajoutées à votre carte Franprix`)
      } else {
        if (this.plugins.notifier)
          this.plugins.notifier.action(`Il n'y a aucune offre disponible`)
      }
      return offers
    } catch (err) {
      console.log(err)
    }
  }

  async action(commande) {
    switch (commande) {
      case 'solde':
        return await this.getSolde()
      case 'promos':
        return await this.getPromos()
      default:
        break;
    }
  }
}

exports.init = (configuration, plugins) => {
  return new AssistantFranprix(configuration).init(plugins)
    .then(resource => {
      console.log('[assistant-franprix] Plugin chargé et prêt.')
      return resource
    })
}
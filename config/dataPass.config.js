module.exports = {
  auto_lead_quadTag: `http://o1.stage.qnsr.com/cgi/r?;n=420;c=1000642;s=3907;x=7936;f=201510051136240;u=j;z=TIMESTAMP`,
  //   quadTag:
  //     'http://o1.stage.qnsr.com/cgi/r?;n=128;c=216346;s=727;x=7936;f=202205201057590;u=j;z=TIMESTAMP',
  medicare_quadTag: `http://o1.stage.qnsr.com/cgi/r?;n=128;c=216395;s=739;x=7936;f=202205201444570;u=j;z=TIMESTAMP;`,
  dataPass: {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    auto_lead_ping_url: `http://datapass.quinstage.com/leads/auto/ping`,
    auto_lead_post_url: `http://datapass.quinstage.com/leads/auto/post`,
    medicare_lead_ping_url: `http://datapass.quinstage.com/leads/medicare/ping`,
    medicare_lead_post_url: `http://datapass.quinstage.com/leads/medicare/post`,
  },
}

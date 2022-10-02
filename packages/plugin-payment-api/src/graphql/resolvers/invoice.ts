import { IContext } from '../../connectionResolver';
import { sendContactsMessage } from '../../messageBroker';

export default {
  __resolveReference({ _id }, { models }: IContext) {
    return models.QpayInvoices.findOne({ _id });
  },

  async type(invoice: any, {}, { models }: IContext) {
    const checkQpay = await models.QpayInvoices.findOne({ _id: invoice._id });

    return checkQpay ? 'qpay' : 'socialPay';
  },

  async invoiceNo(invoice: any, {}, { models }: IContext) {
    const checkQpay = await models.QpayInvoices.findOne({ _id: invoice._id });
    const checkSpay = await models.SocialPayInvoices.findOne({
      _id: invoice._id
    });

    return checkQpay ? checkQpay.qpayInvoiceId : checkSpay?.invoiceNo;
  },

  async paymentId(invoice: any, {}, { models }: IContext) {
    const checkQpay = await models.QpayInvoices.findOne({ _id: invoice._id });
    const checkSpay = await models.SocialPayInvoices.findOne({
      _id: invoice._id
    });

    return checkQpay ? checkQpay.paymentId : checkSpay?.paymentId;
  },

  async comment(invoice: any, {}, { models }: IContext) {
    const checkSpay = await models.SocialPayInvoices.findOne({
      _id: invoice._id
    });

    return checkSpay
      ? checkSpay.phone
        ? `${checkSpay.phone} mobile invoice`
        : 'socialPay invoice'
      : 'qpay invoice';
  },

  async customer(invoice: any, {}, { subdomain }: IContext) {
    const customer = await sendContactsMessage({
      subdomain,
      action: 'customers.findOne',
      data: { _id: invoice.customerId },
      isRPC: true
    });

    return customer;
  },

  async company(invoice: any, {}, { subdomain }: IContext) {
    const company = await sendContactsMessage({
      subdomain,
      action: 'companies.findOne',
      data: { _id: invoice.companyId },
      isRPC: true
    });

    return company;
  }
};

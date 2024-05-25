import { useParams } from 'react-router-dom';

import Details from '../components/orders/Details';
import { getOrderById } from '../data/orders';

function OrderDetail() {
  console.log("OrderDetail");
  const params = useParams();
  const orderId = params.id;
  console.log("OrderDetail", "params.id", params.id);
  console.log("OrderDetail", "orderId", orderId);
  const order = getOrderById(orderId);

  return <Details order={order} />;
}

export default OrderDetail;
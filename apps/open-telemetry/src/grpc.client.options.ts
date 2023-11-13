import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

let configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["order", "customer", "address", "product"],
    protoPath: [
      "src/order/order.proto",
      "src/customer/customer.proto",
      "src/address/address.proto",
      "src/product/product.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};

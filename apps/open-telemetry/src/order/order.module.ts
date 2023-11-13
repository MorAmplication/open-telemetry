import { Module } from "@nestjs/common";
import { OrderModuleBase } from "./base/order.module.base";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderGrpcController } from "./order.grpc.controller";
import { OrderResolver } from "./order.resolver";

@Module({
  imports: [OrderModuleBase],
  controllers: [OrderController, OrderGrpcController],
  providers: [OrderService, OrderResolver],
  exports: [OrderService],
})
export class OrderModule {}

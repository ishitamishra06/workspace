+--------------------------------------------------+
|                   Product                        |
+--------------------------------------------------+
| product_id (PK)                                  |
| name                                             |
| manufacturer_id (FK)                             |
+--------------------------------------------------+
           ^
           |
           | 1
           |
+--------------------------------------------------+
|               PetFood                            |
+--------------------------------------------------+
| product_id (PK, FK)                             |
| weight                                          |
| flavor                                          |
| target_health_condition                         |
+--------------------------------------------------+
           ^
           |
           | 1
           |
+--------------------------------------------------+
|               PetToy                             |
+--------------------------------------------------+
| product_id (PK, FK)                             |
| material                                        |
| durability                                      |
+--------------------------------------------------+
           ^
           |
           | 1
           |
+--------------------------------------------------+
|               PetApparel                        |
+--------------------------------------------------+
| product_id (PK, FK)                             |
| color                                           |
| size                                            |
| care_instructions                               |
+--------------------------------------------------+
           ^
           |
           | 1
           |
+--------------------------------------------------+
|                Animal                           |
+--------------------------------------------------+
| animal_id (PK)                                  |
| name                                            |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|            ProductAnimal                        |
+--------------------------------------------------+
| product_id (PK, FK)                             |
| animal_id (PK, FK)                              |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|             Manufacturer                        |
+--------------------------------------------------+
| manufacturer_id (PK)                            |
| name                                            |
+--------------------------------------------------+
           ^
           |
           | 1
           |
+--------------------------------------------------+
|                Customer                         |
+--------------------------------------------------+
| customer_id (PK)                                |
| name                                            |
| email                                           |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|                Transaction                      |
+--------------------------------------------------+
| transaction_id (PK)                             |
| customer_id (FK)                                |
| date                                            |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|          TransactionProduct                     |
+--------------------------------------------------+
| transaction_id (PK, FK)                         |
| product_id (PK, FK)                             |
| quantity                                       |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|                WalmartLocation                  |
+--------------------------------------------------+
| location_id (PK)                                |
| name                                            |
| zip_code                                        |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|                Shipment                         |
+--------------------------------------------------+
| shipment_id (PK)                                |
| origin_location_id (FK)                         |
| destination_location_id (FK)                    |
+--------------------------------------------------+
           ^
           |
           | N
           |
+--------------------------------------------------+
|            ShipmentProduct                      |
+--------------------------------------------------+
| shipment_id (PK, FK)                            |
| product_id (PK, FK)                             |
| quantity                                       |
+--------------------------------------------------+

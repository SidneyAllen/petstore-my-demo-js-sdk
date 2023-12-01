
# Pet

A single Pet object

## Structure

`Pet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | a unique identifier for a Pet |
| `name` | `string` | Required | the name lovingly given to the pet |
| `petType` | [`PetPetTypeEnum \| undefined`](../../doc/models/pet-pet-type-enum.md) | Optional | the type of pets allowed |

## Example (as JSON)

```json
{
  "id": 123,
  "name": "Cody",
  "petType": "dog"
}
```


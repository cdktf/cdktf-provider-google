# `blockchainNodeEngineBlockchainNodes` Submodule <a name="`blockchainNodeEngineBlockchainNodes` Submodule" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainNodeEngineBlockchainNodes <a name="BlockchainNodeEngineBlockchainNodes" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes(scope: Construct, id: string, config: BlockchainNodeEngineBlockchainNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig">BlockchainNodeEngineBlockchainNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig">BlockchainNodeEngineBlockchainNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails">putEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetBlockchainType">resetBlockchainType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetEthereumDetails">resetEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEthereumDetails` <a name="putEthereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails"></a>

```typescript
public putEthereumDetails(value: BlockchainNodeEngineBlockchainNodesEthereumDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockchainNodeEngineBlockchainNodesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

---

##### `resetBlockchainType` <a name="resetBlockchainType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetBlockchainType"></a>

```typescript
public resetBlockchainType(): void
```

##### `resetEthereumDetails` <a name="resetEthereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetEthereumDetails"></a>

```typescript
public resetEthereumDetails(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockchainNodeEngineBlockchainNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockchainNodeEngineBlockchainNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainNodeEngineBlockchainNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetails">ethereumDetails</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput">blockchainNodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput">blockchainTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput">ethereumDetailsInput</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeId">blockchainNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainType">blockchainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: BlockchainNodeEngineBlockchainNodesConnectionInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ethereumDetails`<sup>Required</sup> <a name="ethereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetails"></a>

```typescript
public readonly ethereumDetails: BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeouts"></a>

```typescript
public readonly timeouts: BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `blockchainNodeIdInput`<sup>Optional</sup> <a name="blockchainNodeIdInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput"></a>

```typescript
public readonly blockchainNodeIdInput: string;
```

- *Type:* string

---

##### `blockchainTypeInput`<sup>Optional</sup> <a name="blockchainTypeInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput"></a>

```typescript
public readonly blockchainTypeInput: string;
```

- *Type:* string

---

##### `ethereumDetailsInput`<sup>Optional</sup> <a name="ethereumDetailsInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput"></a>

```typescript
public readonly ethereumDetailsInput: BlockchainNodeEngineBlockchainNodesEthereumDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockchainNodeEngineBlockchainNodesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

---

##### `blockchainNodeId`<sup>Required</sup> <a name="blockchainNodeId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeId"></a>

```typescript
public readonly blockchainNodeId: string;
```

- *Type:* string

---

##### `blockchainType`<sup>Required</sup> <a name="blockchainType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainType"></a>

```typescript
public readonly blockchainType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainNodeEngineBlockchainNodesConfig <a name="BlockchainNodeEngineBlockchainNodesConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesConfig: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId">blockchainNodeId</a></code> | <code>string</code> | ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.location">location</a></code> | <code>string</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainType">blockchainType</a></code> | <code>string</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails">ethereumDetails</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-provided key-value pairs. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockchainNodeId`<sup>Required</sup> <a name="blockchainNodeId" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId"></a>

```typescript
public readonly blockchainNodeId: string;
```

- *Type:* string

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_node_id BlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#location BlockchainNodeEngineBlockchainNodes#location}

---

##### `blockchainType`<sup>Optional</sup> <a name="blockchainType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainType"></a>

```typescript
public readonly blockchainType: string;
```

- *Type:* string

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_type BlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `ethereumDetails`<sup>Optional</sup> <a name="ethereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails"></a>

```typescript
public readonly ethereumDetails: BlockchainNodeEngineBlockchainNodesEthereumDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#ethereum_details BlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#labels BlockchainNodeEngineBlockchainNodes#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BlockchainNodeEngineBlockchainNodesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#timeouts BlockchainNodeEngineBlockchainNodes#timeouts}

---

### BlockchainNodeEngineBlockchainNodesConnectionInfo <a name="BlockchainNodeEngineBlockchainNodesConnectionInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesConnectionInfo: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo = { ... }
```


### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo = { ... }
```


### BlockchainNodeEngineBlockchainNodesEthereumDetails <a name="BlockchainNodeEngineBlockchainNodesEthereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesEthereumDetails: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin">apiEnableAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables JSON-RPC access to functions in the admin namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug">apiEnableDebug</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables JSON-RPC access to functions in the debug namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient">consensusClient</a></code> | <code>string</code> | The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient">executionClient</a></code> | <code>string</code> | The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails">fetchhDetails</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | geth_details block. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.network">network</a></code> | <code>string</code> | The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType">nodeType</a></code> | <code>string</code> | The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig">validatorConfig</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | validator_config block. |

---

##### `apiEnableAdmin`<sup>Optional</sup> <a name="apiEnableAdmin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin"></a>

```typescript
public readonly apiEnableAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_admin BlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

##### `apiEnableDebug`<sup>Optional</sup> <a name="apiEnableDebug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug"></a>

```typescript
public readonly apiEnableDebug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_debug BlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

##### `consensusClient`<sup>Optional</sup> <a name="consensusClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient"></a>

```typescript
public readonly consensusClient: string;
```

- *Type:* string

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#consensus_client BlockchainNodeEngineBlockchainNodes#consensus_client}

---

##### `executionClient`<sup>Optional</sup> <a name="executionClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient"></a>

```typescript
public readonly executionClient: string;
```

- *Type:* string

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#execution_client BlockchainNodeEngineBlockchainNodes#execution_client}

---

##### `fetchhDetails`<sup>Optional</sup> <a name="fetchhDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails"></a>

```typescript
public readonly fetchhDetails: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#geth_details BlockchainNodeEngineBlockchainNodes#geth_details}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#network BlockchainNodeEngineBlockchainNodes#network}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#node_type BlockchainNodeEngineBlockchainNodes#node_type}

---

##### `validatorConfig`<sup>Optional</sup> <a name="validatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig"></a>

```typescript
public readonly validatorConfig: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#validator_config BlockchainNodeEngineBlockchainNodes#validator_config}

---

### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints = { ... }
```


### BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode">garbageCollectionMode</a></code> | <code>string</code> | Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"]. |

---

##### `garbageCollectionMode`<sup>Optional</sup> <a name="garbageCollectionMode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode"></a>

```typescript
public readonly garbageCollectionMode: string;
```

- *Type:* string

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#garbage_collection_mode BlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

### BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls">mevRelayUrls</a></code> | <code>string[]</code> | URLs for MEV-relay services to use for block building. |

---

##### `mevRelayUrls`<sup>Optional</sup> <a name="mevRelayUrls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls"></a>

```typescript
public readonly mevRelayUrls: string[];
```

- *Type:* string[]

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#mev_relay_urls BlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

### BlockchainNodeEngineBlockchainNodesTimeouts <a name="BlockchainNodeEngineBlockchainNodesTimeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

const blockchainNodeEngineBlockchainNodesTimeouts: blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get"></a>

```typescript
public get(index: number): BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint">jsonRpcApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint">websocketsApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonRpcApiEndpoint`<sup>Required</sup> <a name="jsonRpcApiEndpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint"></a>

```typescript
public readonly jsonRpcApiEndpoint: string;
```

- *Type:* string

---

##### `websocketsApiEndpoint`<sup>Required</sup> <a name="websocketsApiEndpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint"></a>

```typescript
public readonly websocketsApiEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a>

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoList <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get"></a>

```typescript
public get(index: number): BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo">endpointInfo</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo">BlockchainNodeEngineBlockchainNodesConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInfo`<sup>Required</sup> <a name="endpointInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo"></a>

```typescript
public readonly endpointInfo: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo">BlockchainNodeEngineBlockchainNodesConnectionInfo</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get"></a>

```typescript
public get(index: number): BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint">beaconApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint">beaconPrometheusMetricsApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint">executionClientPrometheusMetricsApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beaconApiEndpoint`<sup>Required</sup> <a name="beaconApiEndpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint"></a>

```typescript
public readonly beaconApiEndpoint: string;
```

- *Type:* string

---

##### `beaconPrometheusMetricsApiEndpoint`<sup>Required</sup> <a name="beaconPrometheusMetricsApiEndpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint"></a>

```typescript
public readonly beaconPrometheusMetricsApiEndpoint: string;
```

- *Type:* string

---

##### `executionClientPrometheusMetricsApiEndpoint`<sup>Required</sup> <a name="executionClientPrometheusMetricsApiEndpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint"></a>

```typescript
public readonly executionClientPrometheusMetricsApiEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode">resetGarbageCollectionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGarbageCollectionMode` <a name="resetGarbageCollectionMode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode"></a>

```typescript
public resetGarbageCollectionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput">garbageCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode">garbageCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `garbageCollectionModeInput`<sup>Optional</sup> <a name="garbageCollectionModeInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput"></a>

```typescript
public readonly garbageCollectionModeInput: string;
```

- *Type:* string

---

##### `garbageCollectionMode`<sup>Required</sup> <a name="garbageCollectionMode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode"></a>

```typescript
public readonly garbageCollectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails">putFetchhDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig">putValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin">resetApiEnableAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug">resetApiEnableDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient">resetConsensusClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient">resetExecutionClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails">resetFetchhDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig">resetValidatorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFetchhDetails` <a name="putFetchhDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails"></a>

```typescript
public putFetchhDetails(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `putValidatorConfig` <a name="putValidatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig"></a>

```typescript
public putValidatorConfig(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `resetApiEnableAdmin` <a name="resetApiEnableAdmin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin"></a>

```typescript
public resetApiEnableAdmin(): void
```

##### `resetApiEnableDebug` <a name="resetApiEnableDebug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug"></a>

```typescript
public resetApiEnableDebug(): void
```

##### `resetConsensusClient` <a name="resetConsensusClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient"></a>

```typescript
public resetConsensusClient(): void
```

##### `resetExecutionClient` <a name="resetExecutionClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient"></a>

```typescript
public resetExecutionClient(): void
```

##### `resetFetchhDetails` <a name="resetFetchhDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails"></a>

```typescript
public resetFetchhDetails(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetValidatorConfig` <a name="resetValidatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig"></a>

```typescript
public resetValidatorConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints">additionalEndpoints</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails">fetchhDetails</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig">validatorConfig</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput">apiEnableAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput">apiEnableDebugInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput">consensusClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput">executionClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput">fetchhDetailsInput</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput">validatorConfigInput</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin">apiEnableAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug">apiEnableDebug</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient">consensusClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient">executionClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalEndpoints`<sup>Required</sup> <a name="additionalEndpoints" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints"></a>

```typescript
public readonly additionalEndpoints: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a>

---

##### `fetchhDetails`<sup>Required</sup> <a name="fetchhDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails"></a>

```typescript
public readonly fetchhDetails: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a>

---

##### `validatorConfig`<sup>Required</sup> <a name="validatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig"></a>

```typescript
public readonly validatorConfig: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a>

---

##### `apiEnableAdminInput`<sup>Optional</sup> <a name="apiEnableAdminInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput"></a>

```typescript
public readonly apiEnableAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiEnableDebugInput`<sup>Optional</sup> <a name="apiEnableDebugInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput"></a>

```typescript
public readonly apiEnableDebugInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consensusClientInput`<sup>Optional</sup> <a name="consensusClientInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput"></a>

```typescript
public readonly consensusClientInput: string;
```

- *Type:* string

---

##### `executionClientInput`<sup>Optional</sup> <a name="executionClientInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput"></a>

```typescript
public readonly executionClientInput: string;
```

- *Type:* string

---

##### `fetchhDetailsInput`<sup>Optional</sup> <a name="fetchhDetailsInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput"></a>

```typescript
public readonly fetchhDetailsInput: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `validatorConfigInput`<sup>Optional</sup> <a name="validatorConfigInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput"></a>

```typescript
public readonly validatorConfigInput: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `apiEnableAdmin`<sup>Required</sup> <a name="apiEnableAdmin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin"></a>

```typescript
public readonly apiEnableAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiEnableDebug`<sup>Required</sup> <a name="apiEnableDebug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug"></a>

```typescript
public readonly apiEnableDebug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consensusClient`<sup>Required</sup> <a name="consensusClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient"></a>

```typescript
public readonly consensusClient: string;
```

- *Type:* string

---

##### `executionClient`<sup>Required</sup> <a name="executionClient" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient"></a>

```typescript
public readonly executionClient: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesEthereumDetails;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls">resetMevRelayUrls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMevRelayUrls` <a name="resetMevRelayUrls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls"></a>

```typescript
public resetMevRelayUrls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput">mevRelayUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls">mevRelayUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mevRelayUrlsInput`<sup>Optional</sup> <a name="mevRelayUrlsInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput"></a>

```typescript
public readonly mevRelayUrlsInput: string[];
```

- *Type:* string[]

---

##### `mevRelayUrls`<sup>Required</sup> <a name="mevRelayUrls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls"></a>

```typescript
public readonly mevRelayUrls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---


### BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference <a name="BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer"></a>

```typescript
import { blockchainNodeEngineBlockchainNodes } from '@cdktf/provider-google'

new blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockchainNodeEngineBlockchainNodesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

---




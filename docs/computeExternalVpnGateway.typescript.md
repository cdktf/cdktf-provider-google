# `computeExternalVpnGateway` Submodule <a name="`computeExternalVpnGateway` Submodule" id="@cdktf/provider-google.computeExternalVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeExternalVpnGateway <a name="ComputeExternalVpnGateway" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway google_compute_external_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

new computeExternalVpnGateway.ComputeExternalVpnGateway(scope: Construct, id: string, config: ComputeExternalVpnGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface">putInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType">resetRedundancyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInterface` <a name="putInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface"></a>

```typescript
public putInterface(value: IResolvable | ComputeExternalVpnGatewayInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeExternalVpnGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRedundancyType` <a name="resetRedundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType"></a>

```typescript
public resetRedundancyType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeExternalVpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeExternalVpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeExternalVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeExternalVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeExternalVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface">interface</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput">interfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput">redundancyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType">redundancyType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface"></a>

```typescript
public readonly interface: ComputeExternalVpnGatewayInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeExternalVpnGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: IResolvable | ComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `redundancyTypeInput`<sup>Optional</sup> <a name="redundancyTypeInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput"></a>

```typescript
public readonly redundancyTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeExternalVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `redundancyType`<sup>Required</sup> <a name="redundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType"></a>

```typescript
public readonly redundancyType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeExternalVpnGatewayConfig <a name="ComputeExternalVpnGatewayConfig" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

const computeExternalVpnGatewayConfig: computeExternalVpnGateway.ComputeExternalVpnGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface">interface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]</code> | interface block. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for the external VPN gateway resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType">redundancyType</a></code> | <code>string</code> | Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#name ComputeExternalVpnGateway#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#description ComputeExternalVpnGateway#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface"></a>

```typescript
public readonly interface: IResolvable | ComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]

interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#interface ComputeExternalVpnGateway#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for the external VPN gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#labels ComputeExternalVpnGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}.

---

##### `redundancyType`<sup>Optional</sup> <a name="redundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType"></a>

```typescript
public readonly redundancyType: string;
```

- *Type:* string

Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#redundancy_type ComputeExternalVpnGateway#redundancy_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeExternalVpnGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#timeouts ComputeExternalVpnGateway#timeouts}

---

### ComputeExternalVpnGatewayInterface <a name="ComputeExternalVpnGatewayInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

const computeExternalVpnGatewayInterface: computeExternalVpnGateway.ComputeExternalVpnGatewayInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id">id</a></code> | <code>number</code> | The numeric ID for this interface. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address of the interface in the external VPN gateway. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The numeric ID for this interface.

Allowed values are based on the redundancy type
of this external VPN gateway
* '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
* '0, 1 - TWO_IPS_REDUNDANCY'
* '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address of the interface in the external VPN gateway.

Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#ip_address ComputeExternalVpnGateway#ip_address}

---

### ComputeExternalVpnGatewayTimeouts <a name="ComputeExternalVpnGatewayTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

const computeExternalVpnGatewayTimeouts: computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#update ComputeExternalVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/compute_external_vpn_gateway#update ComputeExternalVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeExternalVpnGatewayInterfaceList <a name="ComputeExternalVpnGatewayInterfaceList" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

new computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get"></a>

```typescript
public get(index: number): ComputeExternalVpnGatewayInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>[]

---


### ComputeExternalVpnGatewayInterfaceOutputReference <a name="ComputeExternalVpnGatewayInterfaceOutputReference" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

new computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeExternalVpnGatewayInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface">ComputeExternalVpnGatewayInterface</a>

---


### ComputeExternalVpnGatewayTimeoutsOutputReference <a name="ComputeExternalVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeExternalVpnGateway } from '@cdktf/provider-google'

new computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeExternalVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

---




# `vpcAccessConnector` Submodule <a name="`vpcAccessConnector` Submodule" id="@cdktf/provider-google.vpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcAccessConnector <a name="VpcAccessConnector" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

new vpcAccessConnector.VpcAccessConnector(scope: Construct, id: string, config: VpcAccessConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig">VpcAccessConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig">VpcAccessConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput">resetMinThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet"></a>

```typescript
public putSubnet(value: VpcAccessConnectorSubnet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcAccessConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange"></a>

```typescript
public resetIpCidrRange(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances"></a>

```typescript
public resetMaxInstances(): void
```

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput"></a>

```typescript
public resetMaxThroughput(): void
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances"></a>

```typescript
public resetMinInstances(): void
```

##### `resetMinThroughput` <a name="resetMinThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput"></a>

```typescript
public resetMinThroughput(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcAccessConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

vpcAccessConnector.VpcAccessConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

vpcAccessConnector.VpcAccessConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

vpcAccessConnector.VpcAccessConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

vpcAccessConnector.VpcAccessConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcAccessConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcAccessConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects">connectedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput">maxThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput">minInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput">minThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput">minThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectedProjects`<sup>Required</sup> <a name="connectedProjects" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects"></a>

```typescript
public readonly connectedProjects: string[];
```

- *Type:* string[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet"></a>

```typescript
public readonly subnet: VpcAccessConnectorSubnetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts"></a>

```typescript
public readonly timeouts: VpcAccessConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput"></a>

```typescript
public readonly maxThroughputInput: number;
```

- *Type:* number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput"></a>

```typescript
public readonly minInstancesInput: number;
```

- *Type:* number

---

##### `minThroughputInput`<sup>Optional</sup> <a name="minThroughputInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput"></a>

```typescript
public readonly minThroughputInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput"></a>

```typescript
public readonly subnetInput: VpcAccessConnectorSubnet;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcAccessConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `minThroughput`<sup>Required</sup> <a name="minThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput"></a>

```typescript
public readonly minThroughput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcAccessConnectorConfig <a name="VpcAccessConnectorConfig" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

const vpcAccessConnectorConfig: vpcAccessConnector.VpcAccessConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name">name</a></code> | <code>string</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType">machineType</a></code> | <code>string</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances">maxInstances</a></code> | <code>number</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances">minInstances</a></code> | <code>number</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput">minThroughput</a></code> | <code>number</code> | Minimum throughput of the connector in Mbps. Default and min is 200. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network">network</a></code> | <code>string</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region">region</a></code> | <code>string</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

Maximum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

Minimum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `minThroughput`<sup>Optional</sup> <a name="minThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput"></a>

```typescript
public readonly minThroughput: number;
```

- *Type:* number

Minimum throughput of the connector in Mbps. Default and min is 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#network VpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#region VpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet"></a>

```typescript
public readonly subnet: VpcAccessConnectorSubnet;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcAccessConnectorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

### VpcAccessConnectorSubnet <a name="VpcAccessConnectorSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

const vpcAccessConnectorSubnet: vpcAccessConnector.VpcAccessConnectorSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name">name</a></code> | <code>string</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId">projectId</a></code> | <code>string</code> | Project in which the subnet exists. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#project_id VpcAccessConnector#project_id}

---

### VpcAccessConnectorTimeouts <a name="VpcAccessConnectorTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

const vpcAccessConnectorTimeouts: vpcAccessConnector.VpcAccessConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcAccessConnectorSubnetOutputReference <a name="VpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

new vpcAccessConnector.VpcAccessConnectorSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcAccessConnectorSubnet;
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---


### VpcAccessConnectorTimeoutsOutputReference <a name="VpcAccessConnectorTimeoutsOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcAccessConnector } from '@cdktf/provider-google'

new vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcAccessConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---



